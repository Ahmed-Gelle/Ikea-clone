import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../src/assets/logo.svg'
// import search from '../../src/assets/search.svg'
// import camera from '../../src/assets/camera.svg'
import person from '../../src/assets/person.png'
import heart from '../../src/assets/heart.png'
import bag from '../../src/assets/bag.png'
import menu from '../../src/assets/menu.png'
import { style } from '@mui/system'

export default function Navbar() {
    return (
        <div className={styles.NavContainer}>
            <nav className={styles.Nav}>
                <div className={styles.menu}>
                    <img src={menu} alt="menu"/>
                </div>
           
                <div className={styles.Logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.icons}>
                    <ul className={styles.ul}>
                        <li>
                            <a className={styles.text} href="/">
                                Nytt på IKEA
                            </a>
                        </li>
                        <li>
                            <a className={styles.text} href="/">
                                Produkter
                            </a>
                        </li>
                        <li>
                            <a className={styles.text} href="/">
                                Rum
                            </a>
                        </li>
                        
                    </ul>
                </div>
                <div className={styles.Search}>
                    <form action="/" className={styles.form}>
                        {/* <img src={search} alt="" className={styles.inputIcon1}/> */}
                        <input type="text" className={styles.input} placeholder="Vad letar du efter?"/>
                        {/* <button type="submit" className={styles.btn}>
                        <img src={camera} alt=""/>
                        </button> */}

                    </form>
                </div>
                <div className={styles.icons}>
                    <ul className={styles.ul}>
                        <li>
                            <a className={style.link} href="/">
                                <img className={style.icons} src={person} alt="person" />
                            </a>
                        </li>
                        <li>
                            <a className={style.link} href="/">
                                <img className={style.icons} src={heart} alt="person" />
                            </a>
                        </li>
                        <li>
                            <a className={style.link} href="/">
                                <img className={style.icons} src={bag} alt="person" />
                            </a>
                        </li>
                        <li>
                            <a className={style.link} href="/">
                                <img className={style.icons} src={menu} alt="person" />
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}
