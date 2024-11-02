import { useLoaderData, useParams } from "react-router";
import { setReadList } from "../utilits/utilitis";

const BookDetails = () => {
  const bookId = useParams();
  const id = parseInt(bookId.bookDetailsId);

  const data = useLoaderData();
  const bId = data.find((dookId) => dookId.bookId === id);

  const {
    bookId: noId,
    rating,
    category,
    author,
    image,
    bookName,
    tags,
    yearOfPublishing,
    totalPages,
    review,
    publisher,
  } = bId;

  const handelReadList = (id) => {
    setReadList(id);
  };

  return (
    <div className="hero bg-base-200 my-12">
      <div className="hero-content flex-col lg:flex-row grid grid-cols-2">
        <div className="">
          <img
            src={image}
            className="h-[711px] w-[500px] p-[74px] bg-slate-600 rounded-lg shadow-2xl"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{bookName}</h1>
          <p className="text-xl font-semibold">By: {author}</p>
          <div className="divider"></div>
          <p className="text-xl font-semibold">{category}</p>
          <div className="divider"></div>
          <p className="">
            <span className="font-bold text-lg">Review:</span> {review}
          </p>

          <div className="space-x-4">
            <span className="font-bold text-lg">Tags</span>
            {tags.map((tag, idx) => (
              <div className="badge badge-outline" key={idx}>
                {tag}
              </div>
            ))}
          </div>

          <div className="divider"></div>
          <div className="justify-center">
            <p>
              Number of Pages:{" "}
              <span className="text-lg font-semibold ml-8">{totalPages}</span>
            </p>
            <p>
              Publisher:{" "}
              <span className="text-lg font-semibold ml-8">{publisher}</span>
            </p>
            <p>
              Year of Publishing:{" "}
              <span className="text-lg font-semibold ml-8">
                {yearOfPublishing}
              </span>
            </p>
            <p>
              Rating:{" "}
              <span className="text-lg font-semibold ml-8">{rating}</span>
            </p>
          </div>

          <button
            onClick={() => handelReadList(noId)}
            className="btn btn-outline text-white "
          >
            Read
          </button>
          <button className="btn bg-sky-300 text-white ml-6">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
