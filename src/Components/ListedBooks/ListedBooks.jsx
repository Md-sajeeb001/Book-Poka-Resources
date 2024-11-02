import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getReadList } from "../utilits/utilitis";
import { useEffect, useState } from "react";
import ListBook from "../ListBook/ListBook";

const ListedBooks = () => {
  const [book, setBook] = useState([]);

  const AllBooks = useLoaderData();

  useEffect(() => {
    const storedListStr = getReadList();

    const data = AllBooks.filter((book) => storedListStr.includes(book.bookId));
    setBook(data);
  }, []);

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-center py-8 text-white rounded-lg bg-slate-400">
        Read Book
      </h2>

      <div className="my-12">
        <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
            {book.map((booked) => (
              <ListBook booked={booked} key={booked.bookId}></ListBook>
            ))}
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
