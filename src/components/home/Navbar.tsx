import React from 'react'
import Github from '../../../public/icons/github.svg';
import Instagram from '../../../public/icons/instagram.svg';
import Linkedin from '../../../public/icons/linkedin.svg';
import Youtube from '../../../public/icons/youtube.svg';

import styles from '../../../styles/Home.module.scss'

export default function Navbar() {
    return (
        <div className={styles["navbar__container"]}>
            <div className={styles["navbar__menu"]}>
                <div className={styles["navbar__group"]}>
                    <div className={styles.dash + " " + styles["dash--red"]}></div>
                    <div className={styles.dash + " " + styles["dash--yellow"]}></div>
                    <div className={styles.dash + " " + styles["dash--green"]}></div>
                </div>
            </div>
            <div className={styles["navbar__socials"]}>
                <a className={styles['socials__link']} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sharqiewicz/"><Instagram /></a>
                <a className={styles['socials__link']} target="_blank" rel="noopener noreferrer" href="https://github.com/Sharqiewicz"><Github /></a>
                <a className={styles['socials__link']} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kacperszarkiewicz/"><Linkedin /></a>
                <a className={styles['socials__link']} target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCLJiABSd-uulY0TNv1wLJaA"><Youtube /></a>
            </div>
        </div>
    )
}
