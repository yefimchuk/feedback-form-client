import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
 
  flex-direction: column;
  margin: 0px auto;
  width: 80%;
  @media ${props => props.theme.mobileL} {
    width: 100%;
  }
`;

export const Input = styled.input`
  background-color: white;
  font-family: 'Apercu Arabic Pro',serif;
  font-size: 18px;
  border: 1px solid #DCDCDC;
  height: 90px;
  border-radius: 10px;
  margin: 8px 0px;
  text-indent: 46px;
  color: black;
  outline: none;
  ::placeholder {
    color: black;
  }
`;

export const TextArea = styled.textarea`
  background-color: white;
  margin: 8px 0px;
  font-family: 'Apercu Arabic Pro',serif;
  font-size: 18px;

  border: 1px solid #DCDCDC;
  border-radius: 10px;
  color: black;
  outline: none;
  padding: 31px 46px;
  height: 200px;
  resize: none;
  ::placeholder {
    color: black;
  }
`;

export const Button = styled.button`
  background-color: #FAD34F;
  color: white;
  border-radius: 100px;
  font-weight: bold;
  border: none;
  outline: none;
  width: 218px;
  height: 73px;
  font-size: 18px;
  margin: 23px 0px;
`;

export const Title = styled.h1`
  margin-top: 130px;
  font-weight: 400;
  padding-bottom: 10px;
  font-size: 40px;
  line-height: 130%;
`;

export const Error = styled.p`
  font-size: 18px;
  color: #c21d1d;
  padding: 0px 46px;
`;