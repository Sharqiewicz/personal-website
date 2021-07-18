import React from 'react'

import Navbar from './home/Navbar';
import styles from '../../styles/Home.module.scss';

export default function Home() {
    return (
        <div className={styles.container}>
            <Navbar />
        </div>
    )
}
