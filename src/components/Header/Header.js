import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiOutlineLogin } from 'react-icons/ai';
import { WiAlien } from "react-icons/wi";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link prefetch as="/" passHref href="/" >
        <a style={{ marginLeft:'2rem', fontSize: '2.5rem', display: 'flex', alignItems: 'center', color:"white" }}>
          <WiAlien size="3rem" /> <span>ᗰ I ᖇ</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link prefetch href="/skills" as="/skills" passHref>
          <NavLink>Skills</NavLink>
        </Link>
      </li>        
      <li>
        <Link prefetch href="/about" as="/about" passHref>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link prefetch href="/opose" as="/opose" passHref>
          <NavLink>Wish</NavLink>
        </Link>
      </li>       
    </Div2>
      <Div3>
        <SocialIcons href="https://www.facebook.com/mirafee.146">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/mi.rafi">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/mominul-islam-b55b65201/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <Link prefetch href="/login">
          <AiOutlineLogin size="4rem" />
        </Link>
      </Div3>
    </Container>
);

export default Header;
