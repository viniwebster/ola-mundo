import styles from './Button.module.css';

import React from 'react'

export default function Button({ children, size }) {
  return (
    <button className={`${styles.botao} ${styles[size]}`}>{children}</button>
  )
}
