import styled from 'styled-components';

export const SkillTitle = styled.h1`
  font-size: 20px;
  margin-top: 20px;
`;

export const SkillContainer = styled.div`
  width: calc(33.3% - 30px);
  float: left;
  padding: 10px;
  margin: 10px;
  background: white;
  border-radius: 4px;

  @media (max-width: 790px) {
    width: 90%;
  }
`
