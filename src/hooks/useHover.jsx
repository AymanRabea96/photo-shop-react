import { useState, useEffect, useRef } from "react"
const useHover = () => {
    const ref = useRef(null)
    const [hovered, setHovered] = useState(false)
    function enter() {
        setHovered(true)
    }
    function leave() {
        setHovered(false)
    }
    useEffect(() => {
        ref.current.addEventListener('mouseenter', enter)
        ref.current.addEventListener('mouseleave', leave)
    }, [])

    return [hovered, ref]
}

export default useHover