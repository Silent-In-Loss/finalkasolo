import React from 'react';
import s from './Header.module.scss';

const Header = () => {
  return (
    <>
      <div className={s.videoContainer}>
        <video 
          className={s.video} 
          src="/2024 Rolls-Royce Phantom EWB Diamond Edition - New Brutal Luxury Sedan by MANSORY.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
        />
      </div>
      <header className={s.header}>
        <div className="container">
          <div className={s.wrap}>
            <div className={s.menu}>
              <a href="">Provenance</a>
              <a href="">Models</a>
              <a href="">Bespoke</a>
              <a href="">Boutique</a>
            </div>

            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-rolls-royce-icon-download-in-svg-png-gif-file-formats--company-logo-brand-automotive-pack-logos-icons-2874405.png"
              alt="Rolls-Royce logo"
              className={s.logo}
            />

            <input type="text" placeholder="FIND A DEALER" />
          </div>
        </div>
      </header>

      <nav className={s.nav}>
        <div className={s.middle}>
          <h3>ROLLS-ROYCE PRESENTS</h3>
          <h1>VOICE OF THE MAKER</h1>
          <h2>AN INSPIRING GREATNESS SERIES</h2>
          <button>Watch now</button>
        </div>
      </nav>
    </>
  );
};

export default Header;
