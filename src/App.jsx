import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Story from './pages/Story';
import Disease from './pages/Disease';
import Treatments from './pages/Treatments';
import Research from './pages/Research';
import GutSkin from './pages/GutSkin';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="story" element={<Story />} />
        <Route path="disease" element={<Disease />} />
        <Route path="treatments" element={<Treatments />} />
        <Route path="research" element={<Research />} />
        <Route path="gut-skin" element={<GutSkin />} />
      </Route>
    </Routes>
  );
}
