interface IBookProps {
  author: string;
  country: string;
  imageLink: string;
  title: string;
  year: number;
}

export const Book = ({author, country, imageLink, title, year}: IBookProps) => {
  return (
    <figure className="Book">
      <img src={imageLink} alt={`${title} book cover`} />
      <figcaption>
        <p>📘: {title}</p>
        <p>✍🏻: {author}</p>
        <p>📍: {country}</p>
        <p>📅: {year}</p>
      </figcaption>
    </figure>
  )
};