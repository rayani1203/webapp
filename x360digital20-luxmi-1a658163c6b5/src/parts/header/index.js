import { useState } from "react";
import { List, X } from "react-bootstrap-icons";
import styles from "./style.module.scss";
import MobileMenu from "../mobileMenu";
const Header = () => {
    const [active, setActive] = useState(false);
    return <>
        <header>
        <div className={styles.logoContainer}>
            <h1><a href="/">LUXMI</a></h1>
        </div>
        <div className={styles.menuContainer}>
            <ul>
                <li><a href="/#findSchool">FIND SCHOOLS</a></li>
                <li><a href="/about">ABOUT US</a></li>
            </ul>
            {active ? <X className={styles.burgerMenu} size={32} onClick={() => {
                setActive(false);
            }}/> : <List className={styles.burgerMenu} size={32} onClick={() => {
                setActive(true);
            }}/>}
        </div>
        {active && <MobileMenu />}
    </header>
    </>
}

export default Header;