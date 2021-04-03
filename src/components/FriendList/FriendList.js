import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map((friend) => (
      <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id} />
    ))}
  </ul>
);

export default FriendList;

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
