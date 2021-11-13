import React,{useContext} from 'react'
import styles from './Navbar.module.css'
import logo from '../../../src/assets/logo.svg'
// import search from '../../src/assets/search.svg'
import {MenuContext} from '../../App'

// import camera from '../../src/assets/camera.svg'
import person from '../../../src/assets/person.png'
import heart from '../../../src/assets/heart.png'
import bag from '../../../src/assets/bag.png'
import camera from '../../../src/assets/camera.svg'
import menu from '../../../src/assets/menu.png'
import { style } from '@mui/system'
import Sidebar from '../Sidebar/Sidebar'

export default function Navbar() {
    const {openMenu, setOpenMenu} = useContext(MenuContext)
    // console.log(`this is outside${openMenu}`)
    const openMenuHandling=()=>{
        setOpenMenu(!openMenu)
        // console.log(`this is inside${openMenu}`)

    }
    return (
        <>
        {openMenu? <Sidebar/>:''}
        <div className={styles.NavContainer}>
            <nav className={styles.Nav}>
                 <div className={styles.menu} onClick={()=>openMenuHandling()}>
                    <img src={menu} alt="menu"/>
                </div> 
               
           
                <div className={styles.Logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.icons}>
                    <ul className={styles.ul}>
                        <li>
                            <a className={styles.text} href="/">
                                Juat NU
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
                    <div action="/" className={styles.form}>
                        {/* <img src={search} alt="" className={styles.inputIcon1}/> */}
                        <input type="text" className={styles.input} placeholder="Vad letar du efter?"/>
                        <button href="/" className={styles.btn}></button>
                        {/* <button type="submit" className={styles.btn}>
                        <img src={camera} alt=""/>
                        </button> */}

                    </div>
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
                        <li className={style.menuRes}>
                            <a className={style.link} href="/">
                                <img className={style.icons} src={menu} alt="person" />
                            </a>
                        </li>
                        {/* <li>
                            <a className={style.link} href="/">
                                <img className={style.icons} src={menu} alt="person" />
                            </a>
                        </li> */}
                        
                    </ul>
                </div>
            </nav>
        </div>
        </>
    )
}
