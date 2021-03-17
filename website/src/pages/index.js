import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const about = [
  {
    title: 'What is it?',
    imageUrl: 'img/sikulix-ide.png',
    description: (
      <>
        SikuliX automates anything you see on your Windows, Mac or Linux screen. 
        It uses image recognition powered by OpenCV.
      </>
    ),
  },
  {
    title: 'Automate Visual Workflows',
    imageUrl: 'img/sikulix-script.png',
    description: (
      <>
        Mimic user behaviour on any user interface on your screen.
        Including automating keyboard and mouse actions.
      </>
    ),
  },
  {
    title: 'Fastest Visual Testing',
    imageUrl: 'img/fast-visual-automation.png',
    description: (
      <>
        SikuliX IDE lets you setup, maintain and automate visual workflows. 
        Easily capture and organize the needed images. 
      </>
    ),
  },
];

function About({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const features = [
  {
    title: 'Use Cases',
    imageUrl: 'img/automate-with-sikulix.png',
    description: (
      <>
        Automating repetitive daily tasks on applications, websites, games, 
        administration of IT systems and networks.
      </>
    ),
  },
  {
    title: 'Supported Languages',
    imageUrl: 'img/sikulix-supported-languages.png',
    description: (
      <>
        You can script in SikuliX using any of: JavaScript, Python, Ruby, Java, 
        Scala, Clojure or RobotFramework.
      </>
    ),
  },
  {
    title: 'Maintained by Community',
    imageUrl: 'img/sikulix-community.png',
    description: (
      <>
        SikuliX is a 100% open-source and exists only due to its community ❤.
        If you like it, consider contributing back! 
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                <Link
                  className={clsx(
                    'button button--outline button--secondary button--lg item shadow--tl',
                    styles.getStarted,
                  )}
                  to={useBaseUrl('docs/')}>
                  Get Started
                </Link>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className={styles.buttons}>
                <Link
                  className={clsx(
                    'button button--outline button--secondary button--lg item shadow--tl',
                    styles.getStarted,
                  )}
                  href='https://raiman.github.io/SikuliX1/downloads.html'>
                  Download
                </Link>
              </div>
            </div>
            <div className="col">
              <img className={styles.heroImage} src="/img/33.gif"/>
            </div>
          </div>
        </div>
      </header>
      <main>
        {about && about.length > 0 && (
          <section className={styles.about}>
            <div className="container">
              <div className="row">
                {about.map((props, idx) => (
                  <About key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
