/* eslint-disable react-hooks/exhaustive-deps */
import { getGifs } from "../helpers/getGifs";
import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([])

  const getImages = async () => {
    const imgs = await getGifs(category);
    setImages(imgs);
  }

    useEffect(() => {
        getImages();
    }, []);

  

  return (
    <>
      <h3>{category}</h3>
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
