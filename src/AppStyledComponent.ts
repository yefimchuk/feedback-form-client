import styled from "styled-components";

export const AppWrapper: any = styled.div`
  max-width: 1600px;
  width: 100%;

  height: 100%;
  background-repeat: no-repeat;
  background-position: top;
  margin: 0px auto;
  background-size: cover;
  background-image: url(${(props: any) => props.background});
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
