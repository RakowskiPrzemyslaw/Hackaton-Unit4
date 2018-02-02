import styled from 'styled-components';
import { Input, Button } from 'antd';


export const Background = styled.div`
  position: relative;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: #096dd9;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  &::before {
    background: url('/img/5570.jpg');
    background-size: cover;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.2;
  }
`;
export const Container = styled.div`
  width: 350px;
  margin: auto;
  background-color: white;
  padding: 50px;
  border-radius: 4px;
`;

export const StyledInput = styled(Input)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const StyledButton = styled(Button)`
  margin: auto;
  margin-top: 10px;
  display: block;
  width: 66%;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  margin-bottom: 40px;
`;
