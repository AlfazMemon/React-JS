export default function BookCard() {
  return (
    <div data-testid="book-card">
      <img src={""} alt={""} />
      <b>
        <div data-testid="book-card-title">
          {}
          <span>{}</span>
        </div>
      </b>
      <div data-testid="book-card-author">{}</div>
      <div data-testid="book-card-price">{}</div>
    </div>
  );
}
