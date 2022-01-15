import Link from 'next/link';
import { NavUl, NavLi } from '../styles/nav';

function Nav({ list }) {
  return (
    <nav>
      <NavUl>
        {list.map(({ name, path }) => (
          <NavLi key={name}>
            <Link href={path}>
              <a>{name}</a>
            </Link>
          </NavLi>
        ))}
      </NavUl>
    </nav>
  );
}

export default Nav;
