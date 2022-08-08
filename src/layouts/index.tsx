import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">index</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <Link to="/HoMe">大小写不敏感</Link>
        </li>
        <li>
          <Link to="/home">home</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
