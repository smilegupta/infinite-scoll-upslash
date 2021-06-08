import { useEffect, useState } from "react";
import { list } from "../Utils/helpers";
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
    <div className="container mt-5">
      <div className="d-flex justify-content-end mb-3">
        <button
          className="btn btn-dark mb-2"
          onClick={() => setViewStyle((prevValue) => !prevValue)}
        >
          <i className={styles.icon} />
        </button>
      </div>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <div className={`row d-flex ${styles.row}`}>
          {images &&
            images.map((image, idx) => (
              <div className={`${styles.col} mb-3`} key={idx}>
                <ImageWrapper url={image.urls.regular} createdAt={image.created_at} name={image.user.name}/>
              </div>
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
