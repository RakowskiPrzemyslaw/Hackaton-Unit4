import styled from 'styled-components';
import { colors, typography, boxShadow } from '../../utils/styles';

export const Filter = styled.div`
  margin-bottom: 30px;
`;

export const FilterText = styled.div`
  font-size: 14px;
  color: ${colors.color5};
  font-weight: 500;
  margin-bottom: 5px;
`;

export const EventsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const Event = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #fff;
  width: calc(50% - 30px);
  padding: 20px;
  margin: 15px;
  box-shadow: ${boxShadow};
`;

export const Title = styled.div`
  position: relative;
  left: -5px;
  color: ${colors.grey9};
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 10px;
  line-height: 1.3;
  display: flex;
`;

export const Description = styled.div`
  font-size: 14px;
  line-height: 1.4;
  color: ${colors.grey6};
  margin-bottom: 20px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Row = styled.div`
  display: flex;
  margin: 5px 0;

  i {
    color: ${colors.grey8};
  }
`;

export const Text = styled.div`
  margin-left: 8px;
  color: ${colors.grey8};
  font-size: 14px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 20px;
  border-radius: 2px;
  background-color: ${props => props.color};
  font-size: 12px;
  color: #fff;
  font-weight: 500;
  margin-left: 10px;
`;
