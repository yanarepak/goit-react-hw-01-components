import PropTypes from 'prop-types';
import css from '../Friends/FriendItem.module.css'
export const FriendItem = ({ avatar, name, isOnline }) => {

// isOnline ? 'online' : 'offline';
  
  return (
    <li className={css.item}>
      <span style={{backgroundColor:`${isOnline ? 'green' : 'red'}`}}  className={css.status}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="60px" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
