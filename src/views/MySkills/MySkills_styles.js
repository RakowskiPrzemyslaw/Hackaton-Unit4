import styled from 'styled-components';
import { colors, typography } from '../../utils/styles';
import { Button } from 'antd';


export const Header = styled.h1`
  margin: 45px 0 20px;
  font-size: 24px;
  color: ${colors.grey8};
  font-weight: 600;
`;

export const StyledButton = styled(Button)`
  width: calc(33.3% - 30px);
  height: 113px;
  float: left;
  padding: 10px;
  margin: 10px;
  background: white;
  border-radius: 4px;
  font-size: 20px;

  @media (max-width: 790px) {
    width: 90%;
  }
`;

export const WantToLearn = styled.div`
  height: 50px;
  width: 20%;
  margin: 10px;
  float: left;
  border: solid 1px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WantToLearnButton = styled(Button)`
  height: 50px;
  width: 20%;
  margin: 10px;
  float: left;
  border: dashed 1px black;
  background: transparent;
  border-radius: 4px;
  font-size: 16px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
