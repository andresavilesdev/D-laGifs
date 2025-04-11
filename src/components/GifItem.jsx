import React from 'react'
import TiltedCard from "./bits/TitleCard";
export const GifItem = ({ title, url }) => {
  return (
    <TiltedCard className="card"
                imageSrc={url}
                captionText={title}
                containerHeight="100%"
                containerWidth="250px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={false}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    {title}
                  </p>
                }
/>

    // <div className="card">
    //     <img src={url} alt={title}/>
    //     <p>{title}</p>
    // </div>
  )
}
