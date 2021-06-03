import styled from "styled-components";

export const NewQuestionContainer = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.input`
  width: 50%;
  height: 35px;

  font-size: 17px;

  &:focus {
    outline: none;
    border: 0px;
    box-shadow: 0px 0px 3px #015e5e;
  }
`;

export const UploadButton = styled.button`
  cursor: pointer;
  margin: 10px;
  background: white;
  color: #029696;

  font-size: 1em;
  margin: 1em;
  padding: 0.4em 1em;
  border: 1px solid #029696;
  border-radius: 3px;

  &:hover {
    background: #029696;
    color: white;
    border: 1px solid #029696;
  }
`;