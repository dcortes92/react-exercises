import { ChangeEvent } from 'react';

interface IFormProps {
  title: string;
  author: string;
  country: string;
  year: string;
  onChange: Function;
};

export const Form = ({ title, author, country, year, onChange }: IFormProps) => {
  return (
    <div className="Form">
      <div>
        <label htmlFor="title">
          <span>Title</span>
          <input
            type="text"
            aria-label="title-input"
            name="title"
            id="title"
            value={title}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event, 'title')} />
        </label>
      </div>

      <div>
        <label htmlFor="author">
          <span>Author</span>
          <input
            type="text"
            aria-label="author-input"
            name="author"
            id="author"
            value={author}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event, 'author')} />
        </label>
      </div>

      <div>
        <label htmlFor="country">
          <span>Country</span>
          <input
            type="text"
            aria-label="country-input"
            name="country"
            id="country"
            value={country}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event, 'country')} />
        </label>
      </div>

      <div>
        <label htmlFor="year">
          <span>Year</span>
          <input
            type="text"
            aria-label="year-input"
            name="year"
            id="year"
            value={year}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event, 'year')} />
        </label>
      </div>
    </div>
  );
}