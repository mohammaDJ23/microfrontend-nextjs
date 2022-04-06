import Head from 'next/head';
import AboutContent from '../modules/about';

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <AboutContent />
    </>
  );
};

export default About;
