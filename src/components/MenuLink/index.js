import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

import React from 'react'

export default function MenuLink({ children, to }) {
    return (
        <NavLink className={({isActive, isPending}) => isPending ? "" : isActive ? styles.linkDestacado : ""} to={to}>
            {children}
        </NavLink>
    )
}
