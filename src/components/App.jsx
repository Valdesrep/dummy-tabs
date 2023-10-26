import s from './App.module.css';
import data from '../table.json';
import { Suspense, lazy } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
export const App = () => {
  const DummyTable = lazy(() => import('../components/DummyTable/DummyTable'));
  const DummyChart = lazy(() => import('../components/DummyChart/DummyChart'));
  const DummyList = lazy(() => import('../components/DummyList/DummyList'));

  return (
    <>
      <Suspense fallback={<div> Loading...</div>}>
        <div className={s.menuWrap}>
          <ul className={s.menuList}>
            {data.map(table => (
              <li className={s.menuItem} key={table.id}>
                <NavLink
                  to={table.path}
                  className={s.menuLink}
                  href="./DummyMenu.jsx"
                >
                  {table.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<DummyTable />} />
          <Route path="/dummyTable.js" element={<DummyTable />} />
          <Route path="/dummyChart.js" element={<DummyChart />} />
          <Route path="/dummyList.js" element={<DummyList />} />
          <Route path="*" element={<Navigate to="/dummyTable.js" />} />
        </Routes>
      </Suspense>
    </>
  );
};
