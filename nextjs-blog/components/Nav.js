import Link from 'next/link';
import { NavUl, NavLI } from '../styles/nav';

function Nav({ list }) {
  return (
    <nav>
      <NavUl>
        {list.map(({ name, path }) => (
          <NavLI>
            <Link href={path}>
              <a>{name}</a>
            </Link>
          </NavLI>
        ))}
      </NavUl>
    </nav>
  );
}

export default Nav;
