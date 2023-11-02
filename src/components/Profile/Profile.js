import { StatsList } from "./StatsList"

export const Profile = ({ user: { avatar, username, tag, location, stats } }) => {
  return <div>
    <div>
    <img
      src={avatar}
        alt={username}
        width="120"
        height="120"
    />
    <p>{username}</p>
    <p>@{tag}</p>
    <p>{location}</p>
      </div>
      <StatsList stats={stats}/>
      

  </div>
}