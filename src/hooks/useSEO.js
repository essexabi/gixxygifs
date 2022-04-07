import { useEffect, useRef } from "react";

export default function useSEO({title, description}) {

    const prevTitle = useRef(document.title);
    const prevDescription = useRef(document.querySelector("meta[name=description]"));
    useEffect(() => {
        if(title){
            const titlePrev = prevTitle.current;      
            document.title = `${title} | GixxyGifs`;
            return () => document.title = titlePrev;
        
        }
        }, [title]);

    useEffect(()=>{
        const metaDescription = document.querySelector('meta[name="description"]');

        const descriptionPrev = prevDescription.current;

        if(description){
            metaDescription.setAttribute('content', description);
        }

        return() => metaDescription.setAttribute('content', descriptionPrev);

    }, [description])
}