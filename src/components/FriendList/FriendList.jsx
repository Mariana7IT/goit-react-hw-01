import s from './FriendList.module.css'

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={s.friendListItem} key={id}>
      <div className={s.friend}>
        <img className={s.friendImage} src={avatar} alt="Avatar" />
        <p className={s.nameFriend}>{name}</p>
         <p className={isOnline ? s.friendOnline : s.friendOffline}>
          {isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    </li>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map((friend) => (
        <FriendListItem 
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          id={friend.id}
        />
      ))}
    </ul>
  );
};

export default FriendList;