//todo decor.styledComponent.ts ==> it's correct?
import styled from "styled-components";

export const DecorationContainer = styled.div`
  width: 50%;

  @media (max-width: 1040px) and (min-width: 576px) {
    display: none;
  }
  @media ${(props) => props.theme.mobileL} {
    display: none;
  }
`;

export const DecorationImage = styled.img`
  width: 75%;
  height: 100%;
  object-position: right;
  margin-left: 25%;
  object-fit: cover;
`;
