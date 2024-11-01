import { useParams } from "react-router-dom";

const ListedBooks = () => {
  const books = useParams;
  console.log(books)
  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-center py-8 text-white rounded-lg bg-slate-400">
        Read Book
      </h2>

      
    </div>
  );
};

export default ListedBooks;
