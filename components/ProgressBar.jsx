import { useEffect, useState } from "react"

export default function ProgressBar() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const progress = (scrollTop / (scrollHeight - windowHeight)) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);


    return (
        <div className="relative top-0 left-0 w-full h-1">
            <div
                className="absolute bg-teal-500 h-full transition-all duration-75 ease-linear"
                style={{ width: `${scrollProgress}%` }}
            ></div>
        </div>
    )
}
