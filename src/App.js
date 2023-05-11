import './App.css';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
