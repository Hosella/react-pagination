import { useState } from 'react';
import { Pagination } from '../Pagination';
import './App.scss';

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalItems, setTotalItems] = useState(42);
  const [perPage, setPerPage] = useState(5);
  
  const onPageChange = (page) => {
    setCurrentPage(page);
  }

  const handleInput = (value) => {
    if (value >= 20 && value <= 100) {
      setTotalItems(value);
    } else if (value === '') {
      setTotalItems(0);
    }
  }

  return (
    <div className="App">
      <div className='App__inputs'>
      <span>How much items?</span>
      <input type='number' min={20} max={100} value={totalItems} onChange={(e) => {handleInput(e.target.value); setCurrentPage(1)}} />

      <span>How much items per page?</span>
      <select value={perPage} onChange={(e) => {setPerPage(+e.target.value); setCurrentPage(1)}}>
        <option value={3}>3</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
      </div>

      <Pagination
        total={totalItems}
        perPage={perPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default App;
