import './App.css'
import { useState, ChangeEvent } from 'react';
import { Form } from './components/Form'
import Books from './books';
import { Book } from './components/Book';

function App() {
  const [formState, setFormState] = useState({
    title: '',
    author: '',
    country: '',
    year: ''
  });

  const onFormFieldChange = (event: ChangeEvent<HTMLInputElement>, field: string) => {
    setFormState({
      ...formState,
      [field]: event.target.value
    });
  };

  const renderBooks = () => {
    if(Books.length > 0) {
      return Books.map((book) => (<Book {...book} />))
    } else {
      return <p>No books found.</p>
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
