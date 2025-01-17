import React from 'react'
import s from './Header.module.scss'

const Header = () => {
  return (
    <>
    <header className={s.header}>
      <div className={s.container}>
        <img src="/logo.png" alt="" className={s.logo} />

        <div className={s.menu}>
          <a href="">About</a>
          <a href="">Work</a>
          <a href="">Services</a>
          <a href="">Jobs</a>
        </div>

        <button className={s.btn}>Contact Us</button>
      </div>
    </header>
    </>
  )
}

export default Header