import PropTypes from 'prop-types';
import css from '../Profile/Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const userStats = [
    { label: 'followers', quantity: stats.followers },
    { label: 'views', quantity: stats.views },
    { label: 'likes', quantity: stats.likes },
  ];
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        {userStats.map(el => (
          <li key={el.label} className={css.item}>
            <span className={css.label}>{el.label}</span>
            <span className={css.quantity}>{el.quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
