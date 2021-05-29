import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterText>&copy; copyright 2021</FooterText>
      </FooterContainer>
    </>
  );
}

const FooterContainer = styled.div`
  border-top: 2px solid #0000003b;
  margin-bottom: 5px;
  margin-top: 10px;
  text-align: center;
`;

const FooterText = styled.span`
  font-size: 0.8rem;
`;
