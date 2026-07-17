//using mutable so it will render after updating
import { useEffect, useRef } from "react"
function MyRef() {
    const rendercount = useRef(0)

    useEffect(() => {
    rendercount.current +=1;
    
    },[MyRef])
    return (
        <div>
            <p> this function component has rendered</p>
        </div>
    )
}
export default MyRef;