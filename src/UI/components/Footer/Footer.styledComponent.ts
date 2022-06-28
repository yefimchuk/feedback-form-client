import styled from "styled-components";

export const FooterBox = styled.div`
  background-image: url(${(props: { background: string }) => {
    return props.background;
  }});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 10vh;
  min-height: 200px;
`;

export const Decoration = styled.img`
  object-fit: cover;
  object-position: center;
  width: 200px;
  height: 200px;
  margin-left: 80px;
  @media ${(props) => props.theme.mobileL} {
    display: none;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  @media ${(props) => props.theme.mobileL} {
    justify-content: center;
    align-items: center;
    padding: 45px;
  }
`;

export const Logo = styled.img`
  width: 20px;
  height: 20px;
`;

export const Link = styled.a`
  margin: 0px 20px;
`;
