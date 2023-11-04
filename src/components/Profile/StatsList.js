import {
  ProfileItem,
  ProfileList,
  ProfileNumbers,
  ItemsRight,
  ItemsLeft,
} from './Profile.styled';

export const StatsList = ({ stats: { followers, views, likes } }) => {
  return (
    <ProfileList>
      <ItemsLeft>
        <span>Followers</span>
        <ProfileNumbers>{followers}</ProfileNumbers>
      </ItemsLeft>
      <ProfileItem>
        <span>Views</span>
        <ProfileNumbers>{views}</ProfileNumbers>
      </ProfileItem>
      <ItemsRight>
        <span>Likes</span>
        <ProfileNumbers>{likes}</ProfileNumbers>
      </ItemsRight>
    </ProfileList>
  );
};
