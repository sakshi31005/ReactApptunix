import { useEffect, useRef } from "react";
function SearchBox() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    }, []);

    return <input ref= {inputRef} />;
}
export default SearchBox;