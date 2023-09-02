import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { close } from '../assets/icons';
import { navLinks } from '../constants';
import { useState } from 'react';
import SideBar from './SideBar';

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="headerLogo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="hidden max-lg:block z-10"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <img src={close} alt="close" width={25} height={25} />
          ) : (
            <img src={hamburger} alt="hamburger" width={25} height={25} />
          )}
        </div>
        {open && (
          <div className="absolute top-0 right-0 w-1/4 h-screen bg-white shadow-3xl">
            <SideBar open={open} setOpen={setOpen} />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
