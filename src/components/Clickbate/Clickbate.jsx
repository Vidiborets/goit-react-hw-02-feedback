import s from '../Clickbate/Clickbate.module.css'
import PropTypes from 'prop-types';

const Clickbate = ({ options, clickFedBack }) => {
    return (
        <ul className={s.list}>
            {Object.keys(options).map(value => {
                return (<li
                    key={value}
                    className={s.listItem}
                    onClick={() => clickFedBack(value)}
                >
                    <button
                        type="button"
                        className={s.button}>
                        <p className={s.textButton}>{value}</p>
                    </button>
                </li>)
            })}
        </ul>
    )
}

Clickbate.propTypes = {
    options: PropTypes.object.isRequired,
    clickFedBack: PropTypes.func.isRequired,
}


export default Clickbate;