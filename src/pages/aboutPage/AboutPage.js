import React from "react";
import Menu from "../../components/Menu";
import { useDispatch } from "react-redux";

function AboutPage() {

    const dispatch = useDispatch()

    const handleMenu = () => {
        dispatch({
            type: "HANDLE_MENU"
        })
    }

    return (
        <div>
            <button onClick={handleMenu}>Menu</button>
            <Menu />
        </div>
    )

}

export default AboutPage 