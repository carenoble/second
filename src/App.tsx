import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import MentalHealthCare from './pages/MentalHealthCare';
import ElderlyCare from './pages/ElderlyCare';
import SpecialistCare from './pages/SpecialistCare';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/mental-health-care" element={<MentalHealthCare />} />
        <Route path="services/elderly-care" element={<ElderlyCare />} />
        <Route path="services/specialist-care" element={<SpecialistCare />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogPost />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;