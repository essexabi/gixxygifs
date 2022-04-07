import { useState, useEffect, useRef } from "react";

export default function useNearScreen({distance="90%", externalReference,
once = true} = {}) {
    const [isNearScreen, setLoad] = useState(false);
    const reference = useRef();

    useEffect(() => {
        let observer;
        const element = externalReference ? externalReference.current : reference.current;

        const onChange = (entries, observer) => {
            console.log(once);

            const el = entries[0];
            if (el.isIntersecting) {

                setLoad(true);
                once && observer.disconnect();
            } else {

                !once && setLoad(false)
            }
        };

        Promise.resolve(
            //En caso de que el navegador no sea compatible con IntersectionObserver
            //importar  polyfill 'intersection-observer'

            typeof IntersectionObserver !== "undefined"
                ? IntersectionObserver
                : import("intersection-observer")
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance
            });
            if(element) observer.observe(element);
        });
        return () => observer && observer.disconnect();
    });
    return {isNearScreen, reference};
}