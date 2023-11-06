import user from './data/user.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import data from './data/data.json';

import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import { Statistics } from './Statistics/Statistics';
import { GlobalStyle } from './GlobalStyled';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />;
      <TransactionHistory transactions={transactions} />
      <GlobalStyle />
    </div>
  );
};
