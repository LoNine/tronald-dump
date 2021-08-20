import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import styles from './SearchForm.module.scss';

const SearchForm = ({ search }) => {
  const [input, setInput] = useState('');

  const onTypeInput = (event) => {
    setInput(event.target.value);
  }

  const onClickHandler = () => {
    search(input);
    setInput('');
  }

  return (
    <div>
      <TextField
        onChange={onTypeInput}
        id="Outlined-basic"
        label="Donald Trump say"
        variant="outlined"
        value={input}
      />
      <Button
        variant="contained"
        size='large'
        onClick={onClickHandler}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchForm;
