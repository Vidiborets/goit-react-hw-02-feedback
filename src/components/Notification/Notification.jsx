import React from "react";
import s from '../Notification/Notification.module.css'
import PropTypes from 'prop-types'

const Notification = ({ message }) => {
    return <p className={s.title}>{message}</p>
};

Notification.propTypes = {
    message: PropTypes.string.isRequired
};

export default Notification;