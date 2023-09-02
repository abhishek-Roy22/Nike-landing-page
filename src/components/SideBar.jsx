import React from 'react';
import { navLinks } from '../constants';

const SideBar = ({ open, setOpen }) => {
  return (
    <div className="w-full mt-24">
      <ul className="flex-1 flex flex-col justify-between items-center gap-10">
        {navLinks.map((item) => (
          <li key={item.label} onClick={() => setOpen(!open)}>
            <a
              href={item.href}
              className="font-montserrat leading-normal max-sm:text-sm text-lg text-slate-gray"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
