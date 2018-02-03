import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import { colors, typography } from '../../utils/styles';


export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const Body = styled(Scrollbars)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
`;
export const Logo = styled.img`
  margin-top: 10px;
  height: 40px;
`;

export const ProfilePic = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-left: auto;
`;

export const ProfileName = styled.h1`
  color: white;
  font-size: 16px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
