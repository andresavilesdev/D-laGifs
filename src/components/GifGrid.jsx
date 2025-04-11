import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { Loading } from ".";
export const GifGrid = ({ category, innerRef }) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <div ref={innerRef}>
      <h3 className="category">{category}</h3>
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
    </div>
  );
};
