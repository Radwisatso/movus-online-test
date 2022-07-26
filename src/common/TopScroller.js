import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll to top whenever page is changing
export default function TopScroller() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        })
    }, [pathname])

    return null
}