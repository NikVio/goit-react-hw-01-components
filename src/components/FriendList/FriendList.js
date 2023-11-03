import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <div>
      {friends.map(({ avatar, isOnline, id, name }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            isOnline={isOnline}
            name={name}
          />
        );
      })}
    </div>
  );
};
