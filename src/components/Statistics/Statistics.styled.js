import styled from 'styled-components';

export const StaticSection = styled.section`
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 250px;
  text-align: center;
  background-color: #f7f5ec;
  padding-top: 10px;
`;

export const StaticList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding-bottom: 10px;
  margin-top: 10px;
`;

export const StaticItem = styled.li`
  display: flex;
  flex-direction: column;
  min-width: 40px;
  gap: 8px;
`;

export const StaticPercentage = styled.span`
  font-weight: 700;
`;
