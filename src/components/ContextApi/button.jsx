import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Button() {
    const Theme = useContext(ThemeContext)
    return <button className={`btn-${Theme}`}
        onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark")
        }}
    >changeTHeme</button>
}
export default Button;