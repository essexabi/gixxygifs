import React from "react";

import "Styles/GifList.scss";

import useGlobalMode from "hooks/useGlobalMode";
import useGlobalGif from "hooks/useGlobalGif";
import Gif from "components/Gif"

function GifList(props) {
    const gifs = useGlobalGif();
    const adultMode = useGlobalMode();
    return (
        <>
          

                {gifs.map(({ id, title, url, height, width }) => (
                    
                        <div
                            className="GifItem"
                            style={{ "--ratio": height / width }}
                            key={id}
                        >

                            <Gif id={id} title={title} url={url}/>
                            
                        </div>
                    
                ))}

                
        

        </>
    );
}

export default GifList;
