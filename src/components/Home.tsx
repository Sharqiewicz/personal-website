import React from 'react';
import Image from 'next/image';

import Navbar from './home/Navbar';
import styles from '../../styles/Home.module.scss';

import myPhoto from '../../public/profilowe.png';

export default function Home() {
    return (
        <div className={styles.home__container}>
            <Navbar />
            <div className={styles.myphoto}>
                <Image layout="responsive" src={myPhoto} alt="Photo of Kacper Szarkiewicz" />
            </div>
            <div className={styles.greetings__container}>
                <h1>Cześć,</h1>
                <h1>jestem Kacper!</h1>
                <h2><span className={styles['text--pink']}>miło</span> Cię <span className={styles['text--aqua']}>widzieć</span>;</h2>
                <h4>Uwielbiam <span className={styles['text--yellow']}>programowanie</span>,</h4>
                <h4>chętnie <span className={styles['text--yellow']}>Cię nauczę</span>!</h4>
                <h3>Zacznij naukę <span className={styles['text--yellow']}>ze mną</span>!</h3>
            </div>
        </div>
    )
}
