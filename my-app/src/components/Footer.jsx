import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled(motion.a)`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #4ecdc4;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-size: 0.9rem;
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const FooterLink = styled(motion.a)`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: #4ecdc4;
  }
`;

const socialVariants = {
  hover: {
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <SocialLink
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            as={motion.a}
            variants={socialVariants}
            whileHover="hover"
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            as={motion.a}
            variants={socialVariants}
            whileHover="hover"
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            as={motion.a}
            variants={socialVariants}
            whileHover="hover"
          >
            <FaTwitter />
          </SocialLink>
          <SocialLink
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            as={motion.a}
            variants={socialVariants}
            whileHover="hover"
          >
            <FaDribbble />
          </SocialLink>
        </SocialLinks>
        <FooterNav>
          <FooterLink
            href="#privacy"
            as={motion.a}
            whileHover={{ color: '#4ecdc4' }}
          >
            Privacy Policy
          </FooterLink>
          <FooterLink
            href="#terms"
            as={motion.a}
            whileHover={{ color: '#4ecdc4' }}
          >
            Terms of Service
          </FooterLink>
          <FooterLink
            href="#sitemap"
            as={motion.a}
            whileHover={{ color: '#4ecdc4' }}
          >
            Sitemap
          </FooterLink>
        </FooterNav>
        <Copyright>
          © {currentYear} Your Name. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 