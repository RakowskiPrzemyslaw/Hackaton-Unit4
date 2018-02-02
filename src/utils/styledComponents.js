import styled from 'styled-components';

export const Container = styled.div`
  ${props => props.sidebar
    ? `
      width: 1540px;
      margin: 0 auto;

      @media (max-width: 1650px) {
        width: 1140px;
      }

      @media (max-width: 1250px) {
        width: 900px;
      }

      @media (max-width: 1010px) {
        width: 680px;
      }

      @media (max-width: 790px) {
        width: 520px;
      }

      @media (max-width: 630px) {
        width: 96%;
      }
    `
  : `
      width: 1740px;
      margin: 0 auto;

      @media (max-width: 1800px) {
        width: 1140px;
      }

      @media (max-width: 1400px) {
        width: 900px;
      }

      @media (max-width: 1160px) {
        width: 680px;
      }

      @media (max-width: 940px) {
        width: 520px;
      }

      @media (max-width: 780px) {
        width: 96%;
      }
    `
  }
`;
