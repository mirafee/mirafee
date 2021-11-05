import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:01766-529832">01766-529832</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:mirafi201@gmail.com">
            mirafi201@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Mominul Islam Rafi - Total IT Solutions</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://www.facebook.com/mirafee.146">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/mi.rafi">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/mominul-islam-b55b65201/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
