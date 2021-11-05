import Head from 'next/head'
import React from 'react';
import Projects from '../components/Projects/projects'
import { Layout } from '../layout/Layout';
import { motion } from 'framer-motion'
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from '../components/Technologies/TechnologiesStyles';

const Technologies = () =>  (
  <>
  <Head>
    <title>Skills - MIR</title>
  </Head>
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I've always prepared as Full stack web solution. Whether it's designing, website or marketing...Here you'll find Total IT Solution. 
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Web Design & Development</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Static, WordPress, React/Next, Shopify, Landing Page Website!
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Graphics Designing & Multimedia</ListTitle>
          <ListParagraph>
            Experience with <br />
            Photoshop, Illustrater, InDesign, Figma, Canva, Premiere!
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Digital Marketing & SEO</ListTitle>
          <ListParagraph>
            Experience with <br />
            Yoast, On Page/Off Page, Pixels, Google Analytics, SEO, Social Media!
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
  <Projects />
  </>
);

export default Technologies;
