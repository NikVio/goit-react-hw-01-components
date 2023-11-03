export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ul>
      <li>
        <span>{isOnline}</span>
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
      </li>
    </ul>
  );
};
