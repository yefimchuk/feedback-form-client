// @ts-ignore
import styled from "styled-components";

export const FeedbackFormPageBox = styled.div`
  width: 50%;
  @media (max-width: 1040px) and (min-width: 576px) {
    width: 100%;
  }
  @media ${(props) => props.theme.mobileL} {
    width: 95%;
    margin: 0px auto;
  }
`;
