import styled from 'styled-components';

export default styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: "sidebar main";
  grid-template-columns: 230px 1fr;
`;

export const Content = styled.div`
  width: 100%;
  grid-area: main;
  padding: 25px;
`;
