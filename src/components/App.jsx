import data from '../table.json';
import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DummyMenu from './DummyMenu/DummyMenu';
const App = () => {
  const DummyTable = lazy(() => import('../components/DummyTable/DummyTable'));
  const DummyChart = lazy(() => import('../components/DummyChart/DummyChart'));
  const DummyList = lazy(() => import('../components/DummyList/DummyList'));

  return (
    <Suspense fallback={<div> Loading...</div>}>
      <DummyMenu  />
      <Routes>
        <Route path="/" element={<DummyTable />} />
        <Route path="/tabs/dummyTable.js" element={<DummyTable />} />
        <Route path="/tabs/dummyChart.js" element={<DummyChart />} />
        <Route path="/tabs/dummyList.js" element={<DummyList />} />
        <Route path="*" element={<Navigate to={data[0].path} />} />
      </Routes>
    </Suspense>
  );
};
export default App;
