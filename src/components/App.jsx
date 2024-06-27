import Profile from './profile/profile.jsx';
import TransactionHistory from './transactionHistory/transactionHistory.jsx';
import FriendList from './friendList/friendList.jsx';
import userData from './userData.json';
import friends from './friends.json';
import transactions from './transactions.json';

const App = () => {
    return (
        <>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </>
    );
};

export default App;