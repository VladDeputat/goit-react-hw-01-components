import PropTypes from "prop-types";
import noimg from "../../img/noimg.jpg";
import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li className={styles.item} key={id}>
    <span className={isOnline === true ? styles.isOnlineSign : styles.isOfflineSign}></span>
    <img className={styles.avatar} src={avatar} alt="{name}" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

export default FriendListItem;

FriendListItem.defaultProps = {
  avatar: noimg,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
