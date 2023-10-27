import { NavLink } from 'react-router-dom';
import s from './DummyMenu.module.css'
import data from '../../table.json';


function DummyMenu() {
  return (
    <div className={s.menuWrap}>
      <ul className={s.menuList}>
        {data.map(table => (
          <li className={s.menuItem} key={table.id}>
            <NavLink to={table.id} className={s.menuLink}>
              {table.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default DummyMenu