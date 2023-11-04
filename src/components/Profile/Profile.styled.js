import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  max-width: 250px;
  background-color: #f7f5ec;
  text-align: center;
  display: flex;
  flex-direction: column;
  border-radius: 14px;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  border: 1px solid black;
  margin: 20px auto 0;
`;

export const Text = styled.p`
  margin-top: 10px;
`;

export const ProfileList = styled.ul`
  display: flex;
  background-color: #eaf7e5;
  margin-top: 10px;
`;

export const ProfileItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid silver;
  border-bottom: none;

  min-width: 82px;
  padding: 10px 0 10px;
`;

export const ProfileNumbers = styled.span`
  font-weight: 700;
`;

export const ProfileName = styled.p`
  font-weight: 700;
  margin-top: 10px;
`;

export const ItemsRight = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0 10px;
  border-top: 1px solid silver;
  min-width: 82px;
`;

export const ItemsLeft = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0 10px;
  border-top: 1px solid silver;
  min-width: 82px;
`;
