import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Unlocking the power of AI with OpenAI',
    Svg: require('@site/static/img/euAWlB01.svg').default,
    description: (
      <>
        Alot of talk recently of OpenAi's ChatGPT, but Project Temporal focuses on leveraging the lesser-known capabilities of OpenAI. Unlocking the potential of these cutting-edge technologies to drive innovation in the world of Twitch Bots.
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
