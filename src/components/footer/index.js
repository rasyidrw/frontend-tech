import React from "react";

import { FooterWrapper, FooterContainer, FooterText, Link } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterText>
          Copyright{" "}
          <Link href="https://github.com/rasyidrw/frontend-tech" target=".blank">
            <cite>Rasyid Respati Wiriaatmaja</cite>
          </Link>
          . The API data is from{" "}
          <Link href="https://www.alphavantage.co/" target=".blank">
            www.alphavantage.co
          </Link>
          .
        </FooterText>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;