import user from './data/user.json';

//import data from './data/data.json'

import { Profile } from './Profile/Profile';


// import { StatisticList } from './Statistics/StatisticList';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      {/* <h2>Upload stats</h2>
      <StatisticList static={data} /> */}
    </div>
  )
  

}
