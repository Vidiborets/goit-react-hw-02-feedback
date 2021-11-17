import Notification from "../Notification/Notification"
import s from "../Counter/Counter.module.css"
import PropTypes from 'prop-types';

function Counter({ good, bad, neutral, total, percent }) {
  return (
    <>
      {total > 0 ? (
        <div className={s.boxStat}>
          <h1 className={s.title}>Statistics</h1>
          <ul className={s.list}>
              <li className={s.item}>
                    <span className={s.textInfo}>Good:</span>
                    <span className={s.textRes}>{good}</span>
              </li>
              <li className={s.item}>
                    <span className={s.textInfo}>Neutral:</span>
                    <span className={s.textRes}>{neutral}</span>
              </li>
              <li className={s.item}>
                    <span className={s.textInfo}>Bad:</span>
                    <span className={s.textRes}>{bad}</span>
              </li>
              <li className={s.item}>
                    <span className={s.textInfo}>Total:</span>
                    <span className={s.textRes}>{total}</span>
              </li>
              <li className={s.item}>
                    <span className={s.textInfo}>Percent:</span>
                    <span className={s.textRes}>{percent}%</span>
              </li>
          </ul>
        </div>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
}

Counter.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
}

export default Counter