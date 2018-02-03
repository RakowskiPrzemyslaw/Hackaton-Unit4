import styled from 'styled-components';
import { colors, typography } from '../../utils/styles';

export const Header = styled.h1`
  margin: 45px 0 20px;
  font-size: 24px;
  color: ${colors.grey8};
  font-weight: 600;
`;

export const Container = styled.div`
  width: calc(33.3% - 30px);
  margin: 10px;
  background: white;
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 20px;
`;

export const Image = styled.img`
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Name = styled.h1`
  color: black;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  color: gray;
  font-size: 16px;
  margin-bottom: 10px;
`;
export const Profile = styled.h3`
  color: gray;
  font-size: 16px;
  text-transform: uppercase;
  padding-top: 5px;
  border-top: 1px solid;
  margin-top: auto;
`;

export const Skill = styled.div`
  border: gray solid 1px;
  color: gray;
  border-radius: 50px;
  font-size: 10px;
  float: left;
  padding: 10px;
  margin: 5px;
`;


export const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const Wraper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
