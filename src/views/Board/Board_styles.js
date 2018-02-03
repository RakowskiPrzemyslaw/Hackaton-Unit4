import styled from 'styled-components';
import { colors, typography, boxShadow } from '../../utils/styles';

export const Categories = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: ${boxShadow};
  transition: all 0.3s;
  margin-bottom: 30px;
`;

export const CategoryTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 20px;
  background-color: ${colors.color6};
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  border-radius: 4px 4px 0 0;
`;

export const Item = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background-color: ${colors.color1};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Icon = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 20px;
  background: url('${props => props.src}') no-repeat center/contain;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.grey8};
  margin-bottom: 5px;
`;

export const Description = styled.div`
  margin-top: auto;
  font-size: 12px;
  color: ${colors.grey6};
  font-weight: 400;
  line-height: 1.4;
`;

export const AddItem = styled.div`
  padding: 20px;
  color: ${colors.grey7};
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    color: ${colors.grey8};
  }
`;
