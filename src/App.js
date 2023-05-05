import './App.css';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  const books = [
    { id: 1, title: 'The Hunger Game', author: 'Jane' },
    { id: 2, title: 'The Dunes', author: 'Juma' },
    { id: 3, title: 'Capital in the Twenty-first Century', author: 'Keni' },
  ];
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList books={books} />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
