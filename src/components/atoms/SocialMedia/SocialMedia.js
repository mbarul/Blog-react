import React from 'react';
import { StyledSocialMedia } from './SocialMedia.styles';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
const SocialMedia = () => {
  return (
    <StyledSocialMedia>
      <a href="https:///www.instagram.com">
        <FaInstagram style={{ width: '24px', height: 'auto' }} />
      </a>
      <a href="https://www.facebook.com">
        <FaFacebook style={{ width: '24px', height: 'auto' }} />
      </a>
    </StyledSocialMedia>
  );
};

export default SocialMedia;
