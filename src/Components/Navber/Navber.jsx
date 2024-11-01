import { NavLink } from "react-router-dom";

const Navber = () => {

  return (
    <div className="navbar bg-base-100 py-8 border-b">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-8"
          >
            <NavLink className="btn" to="/">Home</NavLink>
            <NavLink className="btn" to="/list-books">Listed Books</NavLink>
            <NavLink className="btn" to="/read-page">Pages to Read</NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-12">
          <NavLink className="btn" to="/">Home</NavLink>
          <NavLink className="btn" to="/list-books">Listed Books</NavLink>
          <NavLink className="btn" to="/read-page">Pages to Read</NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <button className="btn bg-green-500 text-white">sing in</button>
        <button className="btn bg-sky-400 text-black hover:text-white">
          sing up
        </button>
      </div>
    </div>
  );
};

export default Navber;
