import bannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen rounded-2xl my-12">
      <div className="hero-content flex-col lg:gap-8 lg:flex-row-reverse  px-20">
        <img src={bannerImg} className="max-w-md rounded-lg shadow-2xl " />
        <div className="lg:space-y-20">
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn hover:text-white bg-green-500 text-black">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
