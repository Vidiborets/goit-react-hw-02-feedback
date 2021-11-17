import PropTypes from 'prop-types';
import s from '../Container/Container.module.css';

const Container = ({ title, children }) => (
  <div className={s.container}>
    <h1 className={s.title}>{title}</h1>
    {children}</div>
);

Container.defaultProps = {
  title:'',
  children: [],
};

Container.protoTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

export default Container;
