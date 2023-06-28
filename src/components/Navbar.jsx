import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo, logotext } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    // Container navbar dengan class yang mengatur padding, lebar, tinggi, dan latar belakang
    <nav className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-gray-200 sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo dan teks (jika ada) */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          {/* Gambar logo */}
          <img
            src={logo}
            alt="logo"
            className="w-auto h-auto sm:w-[235px] sm:h-[70px] w-[45px] h-[45px] object-contain"
          />
          
        </Link>
        {/* Daftar tautan navigasi */}
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? 'text-blue-500' : 'text-gray-800'} hover:text-gray-600 text-[21px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        {/* Menu toggle untuk tampilan seluler */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            // Konten menu terbuka
            <div className={`p-6 bg-gray-200 opacity-[0.98] absolute top-0 left-0 w-screen h-[100vh] z-10 menu ${toggle ? 'menu-open' : 'menu-close'}`}>
              <div className="flex justify-end">
                {/* Tombol tutup menu */}
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul className="list-none flex flex-col -gap-[1rem] items-start justify-end mt-[10rem] -ml-[35px]">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${active === nav.title ? 'text-blue-500' : 'text-gray-800'} text-[88px] font-bold font-arenq uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            // Tombol toggle menu
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
