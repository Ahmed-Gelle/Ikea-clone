import React from 'react'
import styles from './Sidebar.module.scss'

export default function Sidebar() {
    return (
        <div>
            <section className={styles.app}>
  <aside className={styles.sidebar}>
         <header>
        Menu
      </header>
    <nav className={styles.sidebarNav}>
 
      <ul>
        <li>
          <a href="/"> <span>Shop</span></a>
          <ul className={styles.navf}>
            <li>
              <a href="/">Derps</a>
            </li>
            <li>
              <a href="/">Times</a>
            </li>
            <li>
              <a href="/">Hates</a>
            </li>
            <li>
              <a href="/">Beat</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/"> <span class="">Controls</span></a>
          <ul className={styles.navf}>
            <li>
              <a href="/">Watch</a>
            </li>
            <li>
              <a href="/">Creeper</a>
            </li>
            <li>
              <a href="/">Hate</a>
            </li>
            <li>
              <a href="/">Grinder</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/"> <span class="">Folio</span></a>
          <ul className={styles.navf}>
            <li>
              <a href="/">Burn</a>
            </li>
            <li>
              <a href="/">Bulbs</a>
            </li>
            <li>
              <a href="/">Where You</a>
            </li>
            <li>
              <a href="/">On Lock</a>
            </li>
             <li>
              <a href="/">Ghostface</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/"> <span class="">Graphicals</span></a>
          <ul className={styles.navf}>
            <li>
              <a href="/">Timers</a>
            </li>
            <li>
              <a href="/">You Lose</a>
            </li>
            <li>
              <a href="/">Stormy</a>
            </li>
            <li>
              <a href="/">Lookie Look</a>
            </li>
            <li>
              <a href="/">Dork Mfer</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/"> <span class="">Papers</span></a>
          <ul className={styles.navf}>
            <li>
              <a href="/">File Cab</a>
            </li>
            <li>
              <a href="/">Infos</a>
            </li>
            <li>
              <a href="/">Planes</a>
            </li>
            <li>
              <a href="/">Shop</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/"> <span class="">Ass Finder</span></a>
          <ul className={styles.navf}>
            <li>
              <a href="/">Burn</a>
            </li>
            <li>
              <a href="/">Bulbs</a>
            </li>
            <li>
              <a href="/">Where You</a>
            </li>
            <li>
              <a href="/">On Lock</a>
            </li>
             <li>
              <a href="/">Ghostface</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/"> <span class="">Cocaine</span></a>
        </li>
      </ul>
    </nav>
  </aside>
</section>
        </div>
    )
}
