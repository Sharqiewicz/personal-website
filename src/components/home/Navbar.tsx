import React from 'react'
import Github from '../../../public/icons/github.svg';
import Instagram from '../../../public/icons/instagram.svg';
import Linkedin from '../../../public/icons/linkedin.svg';
import Youtube from '../../../public/icons/youtube.svg';

import styles from '../../../styles/Home.module.scss'

export default function Navbar() {
    return (
        <div className="navbar__container">
            <div className="navbar__menu">
                <div className="navbar__group">
                    <div className={styles.dash + " " + styles["dash--red"]}></div>
                    <div className={styles.dash + " " + styles["dash--yellow"]}></div>
                    <div className={styles.dash + " " + styles["dash--green"]}></div>
                </div>
            </div>
            <div className="navbar__socials">
                <a className="social__link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sharqiewicz/"><Instagram /></a>
                <a className="social__link" target="_blank" rel="noopener noreferrer" href="https://github.com/Sharqiewicz"><Github /></a>
                <a className="social__link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kacperszarkiewicz/"><Linkedin /></a>
                <a className="social__link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCLJiABSd-uulY0TNv1wLJaA"><Youtube /></a>
            </div>
        </div>
    )
}
