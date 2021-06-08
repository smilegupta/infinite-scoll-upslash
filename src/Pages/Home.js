import { useEffect, useState } from "react";
import ImageWrapper from "../Components/ImageWrapper";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Components/Loader";
import useListGridToogle from "../CustomHooks/useListGridToogle";
import { getImages } from "../crud/unsplash.crud";

const Home = () => {
  // State Variables
  const [images, setImage] = useState([]);
  const [viewStyle, setViewStyle] = useState(false);
  const styles = useListGridToogle(viewStyle ? "list" : "grid");
  const count = 10;

  useEffect(() => {
    fetchImages();
  }, []);

  // API to fetch images
  const fetchImages = async () => {
    const res = await getImages(count);
    setImage([...images, ...res.data]);
  };

  return (
    <div className="container mt-3">
      <div className="row p-2">
        <div className="col-9 my-auto">
          <h4> Explore Snapshots </h4>
        </div>
        <div className="col-3">
          <div className="d-flex justify-content-end mb-3">
            <button
              className="btn btn-dark mb-2"
              onClick={() => setViewStyle((prevValue) => !prevValue)}
              style={{ borderRadius: "10px" }}
            >
              <strong>
                {" "}
                <i className={styles.icon} />{" "}
              </strong>
            </button>
          </div>
        </div>
      </div>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <div className={`row d-flex ${styles.row} p-2`}>
          {images &&
            images.map((image, idx) => (
              <div className={`${styles.col} mb-3`} key={idx}>
                <ImageWrapper
                  url={image.urls.regular}
                  createdAt={image.created_at}
                  name={image.user.name}
                />
              </div>
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
