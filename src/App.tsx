import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HeaderBar } from './components/components';
import { ROUTER } from './common';
import { HomePage } from './components/home-page/home-page';

function App() {
  return (
    <Routes>
      <Route path={ROUTER.ROOT} element={<HeaderBar />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
