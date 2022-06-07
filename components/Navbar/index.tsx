import React from 'react';
import Link from 'next/link';
import { ILink } from '../../types/ILink';
import styles from './styles.module.scss';

interface INavbar {
  links: ILink[]
}

const Navbar = ({
  links,
}: INavbar) => {
  return (
    <ul className={styles.navbar}>
      {links.map((link) => (
        <li key={link.id} className={styles.item}>
          <Link href={link.href}>
            <a className={styles.link}>
              {link.title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
};

export default Navbar;