import './App.css'
import { useState, ChangeEvent } from 'react';
import { Form } from './components/Form'

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

  return (
    <>
      <h2>Find Books</h2>
      <Form {...formState} onChange={onFormFieldChange} />
    </>
  )
}

export default App
