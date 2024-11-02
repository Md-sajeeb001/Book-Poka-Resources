
import { Link } from "react-router-dom";

const Book = ({ book }) => {

  const {bookId, rating, category, author, image, bookName, tags } = book;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card shadow-xl border-white ">
        <figure className="bg-slate-700 py-6">
          <img src={image} className="h-[200px] rounded-md" alt={bookName} />
        </figure>

        <div className="px-6 py-8 space-y-2 flex flex-col">
          <div className="card-actions gap-5 py-4">
            {tags.map((tag, idx) => (
              <div className="badge badge-outline" key={idx}>{tag}</div>
            ))}
          </div>
          <h2 className="card-title text-2xl font-bold ">{bookName}</h2>
          <p className="font-medium text-lg ">By: {author}</p>
          <div className=" border-b border-dashed"></div>
          <div className="flex justify-between items-center">
            <p>{category}</p>
            <div className="space-x-4">
              <span>{rating}</span>
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
