import { FriendsItem, FriendsStatus } from './Friends.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ul>
      <FriendsItem>
        <FriendsStatus $online={isOnline}>{isOnline}</FriendsStatus>
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
      </FriendsItem>
    </ul>
  );
};
