import styled from "@emotion/styled";

export const AppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  @media (max-width: 720px) {
    grid-template-rows: 1fr auto;
    grid-template-columns: 1fr auto;

    & > .navbar {
      grid-column: 1 / 3;
    }
  }
  
  & > :first-child {
    grid-column: 1 / -1;
  }
`;
