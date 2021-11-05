import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Head from 'next/head'
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { NavDropDown } from '../components/NavDropDown'

const Home = () => {
  return (
    <>
        <Head>
          <title>Home - MIR</title>
        </Head>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Acomplishments />
    </>
  );
};

export default Home;
