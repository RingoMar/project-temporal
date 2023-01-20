---
sidebar_position: 2
---

# Whisper Implementation

A simple implementation of whisper that when syced up with the m3u8 downloader it keeps down the waste.  
> My devcontainer for the whisper [project](https://github.com/RingoMar/whisper-devcontainer)

Create the main file `main.py`:
> This is a sample from my fbomb script

```python title="main.py"
import datetime
import json
import logging
import logging.handlers
import time
import os
import re
import time

import requests
import whisper

model = whisper.load_model("base")
filesDone = []

os.system("rm file.log")

logger = logging.getLogger('logit')
handler = logging.handlers.RotatingFileHandler("file.log")
handler.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s %(levelname)8s: %(message)s')
handler.setFormatter(formatter)
logging.Formatter.converter = time.gmtime
logger.addHandler(handler)
logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s %(levelname)8s: %(message)s')

while True:
    for x in os.listdir("./audio"):
        logger.info(f"[+] Checking File: {x}")
        try:
            timestamp = os.path.getmtime("./audio/" + x)
            datestamp = datetime.datetime.fromtimestamp(timestamp)
            logger.debug(f'Modified Date/Time: {datestamp}')
        except:
            pass
        if x in filesDone:
            logger.warning(f"Skipping File {x}, I read this already.")
            continue

        filesDone.append(x)

        try:
            audio = whisper.load_audio("./audio/" + x)
        except Exception as e:
            logger.error(e)
            continue
        audio = whisper.pad_or_trim(audio)
        mel = whisper.log_mel_spectrogram(audio).to(model.device)
        _, probs = model.detect_language(mel)

        logger.info(f"Detected language: {max(probs, key=probs.get)}")

        options = whisper.DecodingOptions(fp16=False)
        result = whisper.decode(model, mel, options)

        logger.debug(f"-> Decoded Audio: {result.text}")

        for match in re.finditer(r"fuck(s|ing|er)?", result.text):
            logger.warning("Found: " + match.group())
            access = requests.post(
                'http://127.0.0.1:8085/increment', timeout=10)
            logger.debug(access.text)

        if len(filesDone) > 3:
            logger.info("Cleaning up files")
            for item in filesDone:
                try:
                    os.system("sudo rm ./audio/" + item)
                except:
                    pass
            filesDone = []

    logger.debug("-> Sleeping in anticipation for new files")
    time.sleep(1)

```

## Configure Golang server with twitch bot

> Custom IRC reader in go for twitch bot that is very flexable 

```go title="main.go"
package main

import (
	"bufio"
	"crypto/tls"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net"
	"net/http"
	"net/textproto"
	"os"
	"os/signal"
	"regexp"
	"strings"
	"syscall"
	"time"
)

var lastUsed time.Time = time.Now().Add(200 * time.Second)

type myData struct {
	Fbombs int `json:"fbombs"`
}

type ircMessage struct {
	Raw     string
	Tags    map[string]string
	Source  ircMessageSource
	Command string
	Params  []string
}

type ircMessageSource struct {
	Nickname string
	Username string
	Host     string
}

func parseIRCMessage(line string) (*ircMessage, error) {
	message := ircMessage{
		Raw:    line,
		Tags:   make(map[string]string),
		Params: []string{},
	}

	split := strings.Split(line, " ")
	index := 0

	if strings.HasPrefix(split[index], "@") {
		message.Tags = parseIRCTags(split[index])
		index++
	}

	if index >= len(split) {
		return &message, fmt.Errorf("parseIRCMessage: partial message")
	}

	if strings.HasPrefix(split[index], ":") {
		message.Source = *parseIRCMessageSource(split[index])
		index++
	}

	if index >= len(split) {
		return &message, fmt.Errorf("parseIRCMessage: no command")
	}

	message.Command = split[index]
	index++

	if index >= len(split) {
		return &message, nil
	}

	var params []string
	for i, v := range split[index:] {
		if strings.HasPrefix(v, ":") {
			v = strings.Join(split[index+i:], " ")
			v = strings.TrimPrefix(v, ":")
			params = append(params, v)
			break
		}

		params = append(params, v)
	}

	message.Params = params

	return &message, nil
}

func parseIRCTags(rawTags string) map[string]string {
	tags := make(map[string]string)

	rawTags = strings.TrimPrefix(rawTags, "@")

	for _, tag := range strings.Split(rawTags, ";") {
		pair := strings.SplitN(tag, "=", 2)
		key := pair[0]

		var value string
		if len(pair) == 2 {
			value = parseIRCTagValue(pair[1])
		}

		tags[key] = value
	}

	return tags
}

var tagEscapeCharacters = []struct {
	from string
	to   string
}{
	{`\s`, ` `},
	{`\n`, ``},
	{`\r`, ``},
	{`\:`, `;`},
	{`\\`, `\`},
}

func parseIRCTagValue(rawValue string) string {
	for _, escape := range tagEscapeCharacters {
		rawValue = strings.ReplaceAll(rawValue, escape.from, escape.to)
	}

	rawValue = strings.TrimSuffix(rawValue, "\\")
	rawValue = strings.TrimSpace(rawValue)

	return rawValue
}

func parseIRCMessageSource(rawSource string) *ircMessageSource {
	var source ircMessageSource

	rawSource = strings.TrimPrefix(rawSource, ":")

	regex := regexp.MustCompile(`!|@`)
	split := regex.Split(rawSource, -1)

	if len(split) == 0 {
		return &source
	}

	switch len(split) {
	case 1:
		source.Host = split[0]
	case 2:
		source.Nickname = split[0]
		source.Host = split[1]
	default:
		source.Nickname = split[0]
		source.Username = split[1]
		source.Host = split[2]
	}

	return &source
}

func postServer() {
	http.HandleFunc("/increment", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
			return
		}

		// Read the JSON file
		file, _ := ioutil.ReadFile("counter.json")
		var data myData
		json.Unmarshal(file, &data)

		// Increment the number
		data.Fbombs++

		// Write the updated data to the JSON file
		updatedData, _ := json.MarshalIndent(data, "", "    ")
		ioutil.WriteFile("counter.json", updatedData, 0644)

		log.Println("[+] Incremented successfully")
		w.Write([]byte("fbombs incremented successfully"))
	})

	http.HandleFunc("/reset", func(w http.ResponseWriter, r *http.Request) {
		// Read the JSON file
		file, _ := ioutil.ReadFile("counter.json")
		var data myData
		json.Unmarshal(file, &data)

		// Increment the number
		data.Fbombs = 0

		// Write the updated data to the JSON file
		updatedData, _ := json.MarshalIndent(data, "", "    ")
		ioutil.WriteFile("counter.json", updatedData, 0644)

		log.Println("[+] Counter reset to zero")
		w.Write([]byte("Reset counter to zero"))
	})

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "counter.json")
	})

	http.ListenAndServe(":8085", nil)
}

func main() {
	fmt.Println(`
.--.
|__| .-------.
|=.| |.-----.|
|--| || TTV ||
|  | |'-----'|
|__|~')_____('
>>F-Bomb Bot<<
`)

	go postServer()

	SetupCloseHandler()
	const username string = "ringomar" // Set your bot's user name 
	const channel string = "ringomar" // Set your channel you want to join

	chat := connect(username, "oauth:123") // Your Oauth Key here
	chat.join(channel)

	for message := range chat.messages {
		if strings.HasPrefix(message, "PING") {
			chat.send("PONG :tmi.twitch.tv")
			continue
		}

		ircTranslate, _ := parseIRCMessage(message)
		if ircTranslate.Command == "PRIVMSG" && len(ircTranslate.Params) > 1 {
			cooldownTime := int(time.Since(lastUsed).Seconds())
			if cooldownTime >= 120 && ircTranslate.Params[1] == "?fbomb" {
				file, _ := ioutil.ReadFile("counter.json")
				var data myData
				json.Unmarshal(file, &data)
				returnMes := fmt.Sprintf("The F word has been heard on this stream: %d times!", data.Fbombs)
				lastUsed = time.Now()
				chat.say(channel, returnMes)
			}
		}
	}
}
func SetupCloseHandler() {
	c := make(chan os.Signal)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)
	go func() {
		<-c
		fmt.Println("\n\n\r- Ctrl+C pressed in Terminal")
		os.Exit(0)
	}()
}

type irc struct {
	conn     net.Conn
	messages chan string
}

func connect(username, oauth string) *irc {
	fmt.Printf("[%s][RIN-Connect] Dialing TCP server.\n", string(time.Now().Format(time.Stamp)))

	conn, err := tls.Dial("tcp", "irc.chat.twitch.tv:443", nil)
	if err != nil {
		log.Fatal("cannot connect to twitch irc server", err)
	}
	i := &irc{
		conn:     conn,
		messages: make(chan string, 10),
	}
	i.send("PASS " + oauth)
	i.send("NICK " + username)
	i.send("CAP REQ twitch.tv/membership")
	i.send("CAP REQ twitch.tv/commands")
	i.send("CAP REQ twitch.tv/tags")
	go i.read()

	fmt.Printf("[%s][RIN-Connect] connected to Twitch irc server\n", string(time.Now().Format(time.Stamp)))
	return i
}

func (i *irc) join(channel string) {
	i.send("JOIN #" + strings.ToLower(channel))
	fmt.Printf("[%s][RIN-Connect] Joined channel: %s\n", string(time.Now().Format(time.Stamp)), channel)

}

func (i *irc) send(msg string) {
	_, err := i.conn.Write([]byte(msg + "\r\n"))
	if err != nil {
		log.Fatal("Disconnected from twitch irc server", err)
	}
}

func (i *irc) say(channel, msg string) {
	fmt.Printf("[%s][RIN-SAY] sending #%s: %s\n", string(time.Now().Format(time.Stamp)), channel, msg)
	i.send(fmt.Sprintf("PRIVMSG #%s :%s", channel, msg))
}

func (i *irc) read() {
	reader := bufio.NewReader(i.conn)
	tp := textproto.NewReader(reader)
	for {
		message, err := tp.ReadLine()
		if err != nil {
			log.Fatal("Disconnected from twitch irc server", err)
		}
		i.messages <- message
	}
}

```
Sometimes it wont auto connect still yet to figure that out, but running it again it works.