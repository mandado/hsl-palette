import styled from 'styled-components';

export default styled.input`
  padding: 6px 12px;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  border: 2px solid #cfd4da;
  
  &:focus {
    border-color: hsl(183, 71%, 46%);
  }
`;


export const WordInput = styled.input`
  padding: 6px 0;
  font-size: 16px;
  background: none;
  outline: none;
  border: none;
  font-weight: 500;
  width: 100%;
  margin-bottom: 5px;
`;
