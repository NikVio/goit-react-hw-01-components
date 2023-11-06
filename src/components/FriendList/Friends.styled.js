import styled from 'styled-components';

const onStatus = ({ $online }) => {
  return $online ? 'green' : 'red';
};

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 150px;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-bottom: 10px;
  background-color: #eaf7e5;
`;

export const FriendsStatus = styled.span`
  border-radius: 50%;
  background-color: ${onStatus};
  width: 14px;
  height: 14px;
`;
