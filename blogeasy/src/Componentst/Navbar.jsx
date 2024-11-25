import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            BlogEasy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/new_post">
                  New Post
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-disabled="true" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
              <input
                className="form-control me-2"
                aria-label="Search"
                id="search"
                type="text"
                placeholder="Search Blogs"
                value={props.search}
                onChange={(e) => props.setSearch(e.target.value)}
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
