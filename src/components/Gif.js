import React from "react";

function Gif(props) {
    const randomId = props.id + Math.floor(Math.random() * (99 - 1)) + 1;
    return (
        
                <img
                    loading="lazy"
                    className="GifItemImage"
                    src={props.url}
                    alt={props.title}
                    key={randomId}
                />
           
    );
}

export default React.memo(Gif, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id;
});
