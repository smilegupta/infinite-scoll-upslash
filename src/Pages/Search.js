import { useState } from "react";
import { searchImages } from "../crud/unsplash.crud";
import ImageWrapper from "../Components/ImageWrapper";

const Search = () => {
  // State Variables
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResponse, setSearchResponse] = useState();

  // API to Search Data
  const searchingImages = async (e) => {
    e.preventDefault();
    const res = await searchImages(searchTerm);
    setSearchResponse(res.data.results);
    setSearchTerm("");
  };
  return (
    <div className="container mt-3">
      <div className="row mb-3">
        <div className="col-12 text-center mb-2">
          <h4 className="text-dark"> Search Images</h4>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto">
          <form className="d-flex" onSubmit={(e) => searchingImages(e)}>
            <input
              className="form-control me-sm-2"
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="btn btn-secondary my-2 my-sm-0 text-dark"
              type="submit"
              style={{ borderRadius: "10px" }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        {searchResponse && searchResponse.length > 0 ? (
          <>
            {" "}
            {searchResponse &&
              searchResponse.map((image, idx) => (
                <div className={`col-lg-3 col-md-3 col-sm-4 mb-3`} key={idx}>
                  <ImageWrapper
                    thumb={image.urls.small}
                    url={image.urls.regular}
                    createdAt={image.created_at}
                    name={image.user.name}
                    styles="image-grid"
                  />
                </div>
              ))}{" "}
          </>
        ) : (
          <h6 className="text-center mt-5 text-dark">
            {" "}
            No result found, try using someither keywords.{" "}
          </h6>
        )}
      </div>
    </div>
  );
};

export default Search;
