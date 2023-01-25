import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';
import getRandomColor from 'utils/getRandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
     {title && <h2 className={css.title}>{title}</h2> }
      <ul className={css.list}>
        {stats.map(({id, label, percentage}) => {
          return(
            <li style={{backgroundColor: getRandomColor()}} className={css.item} key={id}>
            <span>{label}</span>
            <span className={css.percentage}>{percentage}</span>
          </li>
          )
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};