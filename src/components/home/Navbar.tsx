import React, { useState } from 'react'
import styles from '../../../styles/Home.module.scss'

import Github from '../../../public/icons/github.svg';
import Instagram from '../../../public/icons/instagram.svg';
import Linkedin from '../../../public/icons/linkedin.svg';
import Youtube from '../../../public/icons/youtube.svg';

import Logo from '../../../public/socials-logo.svg';


export default function Navbar() {

    const [isOpen, setIsOpen] = useState<boolean>(true);

    const openMenuStyles = `${styles["navbar__container"]} ${styles["navbar--open"]}`;
    const closedMenuStyles = `${styles["navbar__container"]} ${styles["navbar--closed"]}`;


    function toggleNavbar(event: React.MouseEvent<HTMLDivElement>) {
        setIsOpen(state => !state);
    }

    return (
        <div className={isOpen ? openMenuStyles : closedMenuStyles}>
            <div className={styles["navbar__menu"]}>
                <div className={styles["navbar__group"]}>
                    <div onClick={toggleNavbar} className={styles.dash + " " + styles["dash--red"]}></div>
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
            <Logo className={styles['navbar__logo']} onClick={toggleNavbar} />
        </div>
    )
}
