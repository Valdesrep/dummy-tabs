import data from '../table.json';
import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DummyMenu from './DummyMenu/DummyMenu';
const App = () => {
  const DummyTable = lazy(() => import('../components/DummyTable/DummyTable'));
  const DummyChart = lazy(() => import('../components/DummyChart/DummyChart'));
  const DummyList = lazy(() => import('../components/DummyList/DummyList'));

  // const Dummy = [DummyList,DummyChart, DummyTable];


  return (
    <Suspense fallback={<div> Loading...</div>}>
      <DummyMenu />
      <Routes>
        <Route path="/" element={<DummyTable />} />
        <Route path={`/${data[0].id.toString()}`} element={<DummyTable />} />
        <Route path={`/${data[1].id.toString()}`} element={<DummyChart />} />
        <Route path={`/${data[2].id.toString()}`} element={<DummyList />} />
        <Route path="*" element={<Navigate to={data[0].path} />} />
      </Routes>
    </Suspense>
  );
};
export default App;
