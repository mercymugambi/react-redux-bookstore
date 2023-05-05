import './App.css';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', description: 'Description 1' },
    { id: 2, title: 'Book 2', author: 'Author 2', description: 'Description 2' },
    { id: 3, title: 'Book 3', author: 'Author 3', description: 'Description 3' },
  ];
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <BookList books={books} /> } />
        <Route path="/categories" element={ <Categories />} />
      </Routes>
    </div>
  );
}

export default App;
