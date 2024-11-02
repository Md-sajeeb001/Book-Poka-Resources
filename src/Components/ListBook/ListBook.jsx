import { MdOutlineContactPage } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";

const ListBook = ({ booked }) => {
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
  } = booked;

  return (

      <div className="flex items-center gap-8 mb-5 border rounded-2xl p-8">
        <div className="bg-fuchsia-200 p-6 rounded-xl">
          <img className="w-[230px] h-[230px] rounded-xl" src={image} alt="" />
        </div>

        {/* content */}

        <div>
          <h2 className="text-xl font-bold">{bookName} </h2>
          <p>By: {author}</p>

          <div className="space-y-4">
            <span className="font-bold text-lg">Tags</span>
            {tags.map((tag, idx) => (
              <div className="badge badge-outline" key={idx}>
                {tag}
              </div>
            ))}
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-2">
                <LuUsers2 />
                {publisher}
              </span>
              <span className="flex items-center gap-2">
                <MdOutlineContactPage />
                {totalPages}
              </span>
            </div>
            <div>
              <button className="btn rounded-full px-4 bg-green-300 text-green-600 py-3">
                Category: {category}
              </button>
              <button className="btn rounded-full px-4 bg-red-200 text-black py-3">
                Rating: {rating}
              </button>
              <button className="btn rounded-full px-4 py-3 bg-green-500 text-white">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

  );
};

export default ListBook;
