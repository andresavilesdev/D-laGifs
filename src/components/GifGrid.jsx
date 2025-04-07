import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { Loading } from ".";
export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
      <h3>{category}</h3>
      {
        <Loading isLoading={ isLoading } />
      }
      <div className="card-grid">
        {
          images.map( ( image ) => (
             <GifItem key={image.id} { ...image }/>
          ))
        }
      </div>
    </>
  );
};
