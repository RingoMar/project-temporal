---
sidebar_position: 1
---

# Get M3U8 Links

We can use the Twitch api itself and get m3u8 links without having todo much work or going to the API itself

:::info Purple Screen of death!

When using a direct M3U8 link to watch a Twitch stream, you will still see a colorful "commercial break in progress" screen. This is becuse we are not logged in with a Twitch Turbo account or subscribed to the stream. There are ways todo this such using the links found on twitch itself or adding configurations to the link. This problem doesnt bother us but somoene can always imporve on it in the future.

:::

![purp screen](img/ShareX_1674247593.png)



## Create the a post funtion

```py title="getm3u8.py"
import json
import requests
import urllib.parse

quote = urllib.parse.quote
CHANNEL_NAME = "kappa" # The channel you want here
CLIENT_ID = "1234567890" #Your Client Id here

data = {'operationName': 'PlaybackAccessToken_Template', 'query': 'query PlaybackAccessToken_Template($login: String!, $isLive: Boolean!, $vodID: ID!, $isVod: Boolean!, $playerType: String!) {  streamPlaybackAccessToken(channelName: $login, params: {platform: "web", playerBackend: "mediaplayer", playerType: $playerType}) @include(if: $isLive) {    value    signature    __typename  }  videoPlaybackAccessToken(id: $vodID, params: {platform: "web", playerBackend: "mediaplayer", playerType: $playerType}) @include(if: $isVod) {    value    signature    __typename  }}', 'variables': {'isLive': True, 'login': CHANNEL_NAME.lower(), 'isVod': False, 'vodID': '', 'playerType': 'site'}}

access = requests.post('https://gql.twitch.tv/gql', headers={"client-id": CLIENT_ID}, data=json.dumps(data),  timeout=10).json()

signature = access['data']['streamPlaybackAccessToken']['signature']
token = access['data']['streamPlaybackAccessToken']['value']

url = ('https://usher.ttvnw.net/api/channel/hls/'+CHANNEL_NAME+'.m3u8' + '?sig='+signature + '&token='+quote(token))

print(url)

```
## Download and segment the audio

Using ffmepg we can complate this action. [Learn More](https://img.ly/blog/ultimate-guide-to-ffmpeg/)

```console
ffmpeg -i https://example.com/index.m3u8 -vn -c:a aac -b:a 128k -segment_time 10 -f segment audio/output_%03d.aac
 ```

This can be added stright into our python file just like this replacing `https://example.com/index.m3u8` with the url we got like this:

```python title="getm3u8.py"
import os 
os.system(f"ffmpeg -i \"{url}\" -vn -c:a aac -b:a 128k -segment_time 10 -f segment audio/output_%03d.aac")
```

### How the ffmpeg command works in this case

+ The "-i" flag specifies the input file, and the options following it are used to configure the output.

+ The "-vn" flag disables video recording, meaning only audio will be extracted from the input. 
  + The "-c:a aac" flag specifies that the audio codec used should be AAC. 
  + The "-b:a 128k" flag sets the audio bitrate to 128 kbps.

+ The "-segment_time 10" flag tells FFmpeg to segment the output into 10-second chunks. 
  + The -f segment flag tells ffmpeg to use the segment muxer to split the input into time-limited files.

+ Finally, the output file is specified as "audio/output_%03d.aac", which tells FFmpeg to save the output as a series of AAC files in the "audio" directory, each one numbered in sequence (e.g. "output_001.aac", "output_002.aac", etc.).