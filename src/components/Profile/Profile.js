import { StatsList } from './StatsList';
import {
  ProfileWrapper,
  ProfileImg,
  ProfileName,
  Text,
} from './Profile.styled';
export const Profile = ({
  user: { avatar, username, tag, location, stats },
}) => {
  return (
    <ProfileWrapper>
      <div>
        <ProfileImg src={avatar} alt={username} width="120" height="120" />

        <ProfileName>{username}</ProfileName>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </div>
      <StatsList stats={stats} />
    </ProfileWrapper>
  );
};
