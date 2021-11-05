import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10 , text: 'Skills'},
  { number: 50 , text: 'Projects', },
  { number:  100 , text: 'Students', },
  { number: 1000 , text: 'Followers', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Short Intro</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
