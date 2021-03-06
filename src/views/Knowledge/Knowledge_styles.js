import styled from 'styled-components';
import { colors, typography, boxShadow } from '../../utils/styles';

export const Boards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  display: flex;
  width: calc(33.333333% - 30px);
  height: 100px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: ${boxShadow};
  transition: all 0.3s;
  margin: 15px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 15px 1px rgba(188, 188, 188, 0.3);
  }

  @media (max-width: 1700px) {
    width: 350px;
  }

  @media (max-width: 1400px) {
    width: 420px;
  }

  @media (max-width: 1160px) {
    width: 310px;
  }

  @media (max-width: 940px) {
    width: 100%;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-right: 1px solid ${colors.color2};

  @media (max-width: 1700px) {
    width: 70px;
  }

  svg,
  path {
    fill: ${colors.color6};
    width: 24px !important;
    height: 24px !important;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: calc(100% - 100px);

  @media (max-width: 1700px) {
    width: calc(100% - 70px);
  }
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${colors.grey8};

  @media (max-width: 1160px) {
    font-size: 15px;
  }
`;

export const Heart = styled.div`
  margin-left: auto;

  svg,
  path {
    fill: ${colors.grey5};
    width: 20px !important;
    height: 20px !important;
  }
`;

export const Bottom = styled.div`
  display: flex;
  margin-top: auto;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.div`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background: url('${props => props.src}') no-repeat center/cover;
`;

export const Name = styled.div`
  font-size: 14px;
  color: ${colors.grey5};
  font-weight: 400;
`;

export const Filter = styled.div`
  margin-bottom: 30px;
`;

export const FilterText = styled.div`
  font-size: 14px;
  color: ${colors.color5};
  font-weight: 500;
  margin-bottom: 5px;
`;
