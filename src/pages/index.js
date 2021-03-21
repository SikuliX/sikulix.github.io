import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const about = [
  {
    title: "SikuliX's Visual Approach",
    imageUrl: 'img/automate-with-sikulix.png',
    description: (
      <>
        SikuliX automates anything you see on your Windows, Mac or Linux screen. 
        It uses image recognition powered by <a href="https://opencv.org" target="_blank">OpenCV</a>.
      </>
    ),
  },
  {
    title: 'Automate Workflows Visually',
    imageUrl: 'img/sikulix-script.png',
    description: (
      <>
        Mimic user behaviour on any user interface on your screen.
        Including automating keyboard and mouse actions.
      </>
    ),
  },
  {
    title: 'Use it for Visual Testing',
    imageUrl: 'img/sikulix-supported-languages.png',
    description: (
      <>
        Augment your GUI testing with SikuliX's visual approach if internals are not
        available.<br />Look at it like a human.
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
            <div className={clsx('col col--3',)}>
                <Link
                  to={'https://github.com/waleedsadek-panx'}>
                  <img className={styles.heroImage} src="img/33.gif" title="Design, Logo and Setup by Waleed Sadek/Panx_Project"/>
                </Link>
            </div>
            <div className={clsx('col col--6',)}>
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
{(
              <div className={styles.buttons}>
                <Link
                  className={clsx(
                    'button button--outline button--secondary shadow--tl',
                  )}
                  to={useBaseUrl('docs/')}>
                  Get Started
                </Link>
              </div>
)}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
{(
              <div className={styles.buttons}>
                <Link
                  className={clsx(
                    'button button--outline button--warning shadow--tl',
                  )}
                  to={useBaseUrl('index.html')}>
                   Donate
                </Link>
              </div>
)}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
{(
              <div className={styles.buttons}>
                <Link
                  className={clsx(
                    'button button--outline button--secondary shadow--tl',
                    styles.getStarted,
                  )}
                  href='https://raiman.github.io/SikuliX1/downloads.html'>
                  Download
                </Link>
              </div>
)}
            </div>
            <div className="col col--3">
                <Link
                  to={'http://sikulix.com'}>
                  <img className={styles.heroImage} src="img/sikulix-com.png" title="The current webpage sikulix.com by RaiMan"/>
                </Link>
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
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={clsx('col',)}>
              <h5><br />Work in Progress ...........................</h5>
            </div>
            <div className={clsx('col',)}>
              <h5><br />Enjoy Working with SikuliX</h5>
            </div>
            <div className={clsx('col',)}>
              <h5><br />........................... More to Come</h5>
            </div>
          </div>
        </div>
      </header>
    </Layout>
//      <main>
//        {features && features.length > 0 && (
//          <section className={styles.features}>
//            <div className="container">
//              <div className="row">
//                {features.map((props, idx) => (
//                  <Feature key={idx} {...props} />
//                ))}
//              </div>
//            </div>
//          </section>
//        )}
//      </main>
  );
}

export default Home;
