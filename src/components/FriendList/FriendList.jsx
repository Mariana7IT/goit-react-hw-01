const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id}>
      <div>
        <img src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p>{isOnline ? 'Online' : 'Offline'}</p>
      </div>
    </li>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
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