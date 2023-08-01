import styles from "./style.module.scss";

const MobileMenu = () => {
    return <div className={styles.menuContainer}>
        {/* <h1>LUXMI</h1> */}
        <ul>
            <li><a href="/#">Find Schools</a></li>
            <li><a href="/about">About us</a></li>
        </ul>
    </div>
}

export default MobileMenu;