import React from 'react';
import Link from 'next/link';
import { ILink } from '../../types/ILink';

interface INavbar {
  links: ILink[]
}

const Navbar = ({
  links,
}: INavbar) => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <Link href={link.href}>
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  )
};

export default Navbar;