import Section from './Section/Section'
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import FriendListItem from './FriendListItem/FriendListItem';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import statictics from '../data/statictics.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';


export const App = () => {
  return (
    <Section>
      <Profile username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} ></Profile>
      <Statistics title={'Upload docs'} stats={statictics}></Statistics>
      <FriendList>
        <FriendListItem props = {friends}></FriendListItem>
      </FriendList>
      <TransactionHistory props={transactions}></TransactionHistory>
    </Section>
  );
};