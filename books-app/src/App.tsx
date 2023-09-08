import './App.css'
import { useState, useEffect, ChangeEvent } from 'react';
import { Form } from './components/Form'
import Books from './books';
import { Book, IBookProps } from './components/Book';

function* IdGenerator() {
  let id = 1;
  while (true) {
    yield id++
  }
};

function App() {
  const [formState, setFormState] = useState({
    title: '',
    author: '',
    country: '',
    year: ''
  });

  const [books,] = useState<IBookProps[]>(Books);
  const [filteredBooks, setFilteredBooks] = useState<IBookProps[]>([]);
  const ids = IdGenerator();

  const areFiltersEmpty = () => Object.values(formState).every(value => value.trim().length === 0);
  const hasFilters = () => Object.values(formState).some(value => value.trim().length > 0)

  useEffect(() => {
    const { title, author, country, year } = formState;
    if (areFiltersEmpty()) {
      setFilteredBooks([]);
    } else {
      const filtered = books
        .filter(book => book.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()))
        .filter(book => book.author.toLocaleLowerCase().includes(author.toLocaleLowerCase()))
        .filter(book => book.country.toLocaleLowerCase().includes(country.toLocaleLowerCase()))
        .filter(book => book.year.toString().includes(year))
      setFilteredBooks(filtered);
    }
  }, [formState])

  const onFormFieldChange = (event: ChangeEvent<HTMLInputElement>, field: string) => {
    setFormState({
      ...formState,
      [field]: event.target.value
    });
  };

  const renderBooks = () => {
    const booksToRender = hasFilters() ? filteredBooks : books;
    if (booksToRender.length > 0) {
      return booksToRender.map((book) => {
        const id = ids.next();
        return <Book key={`book-${id.value}`} {...book} />;
      });
    } else {
      return <p style={{flexBasis: '100%'}}>No books found. Try adjusting your filter criteria.</p>
    }
  }

  return (
    <>
      <h2>Find Books</h2>
      <Form {...formState} onChange={onFormFieldChange} />
      <div className="books-container">
        {renderBooks()}
      </div>
    </>
  )
}

export default App
