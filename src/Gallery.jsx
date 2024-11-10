import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { useGlobalContext } from './context';

const url =
  'https://api.unsplash.com/search/photos?client_id=9L8xBilZH72egnGVf_-iiXGRWBI1qVf8UFj139y7BuQ';

function Gallery() {
  const { searchValue } = useGlobalContext();

  const response = useQuery({
    queryKey: ['office-photos', searchValue],
    queryFn: async () => {
      const { data } = await Axios.get(`${url}&query=${searchValue}`);
      return data;
    },
  });

  if (response.isLoading) {
    return (
      <section className="image-ToastContainer">
        <h4>Loading......</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className="image-ToastContainer">
        <h4>Something went wrong!!......</h4>
      </section>
    );
  }

  if (response.data.results < 1) {
    return (
      <section className="image-ToastContainer">
        <h4>No result found!!......</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {response.data.results.map((image) => {
        const url = image?.urls?.regular;
        return <img src={url} key={image.id} className="img"></img>;
      })}
    </section>
  );
}
export default Gallery;
