import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <div className="container-fluid">
          <div className="d-flex">
            <div className="row w-100">
              <div className="col-md-7 col-xs-12 d-flex my-auto">
                <Link href="/">
                  <span className="navbar-brand cursor-pointer">
                    Image Gallery
                  </span>
                </Link>
              </div>
              <div className="col-md-4 col-xs-12 offset-md-1 d-flex justify-content-end pe-0">
                <Link href="/">
                  <span className="ms-3 d-flex my-auto cursor-pointer text-white">
                    Home
                  </span>
                </Link>
                <Link href="/search">
                  <span className="ms-3 d-flex my-auto cursor-pointer text-white">
                    Search
                  </span>
                </Link>
                <Link href="/upload">
                  <span className="ms-3 d-flex my-auto cursor-pointer text-white">
                    Upload
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
