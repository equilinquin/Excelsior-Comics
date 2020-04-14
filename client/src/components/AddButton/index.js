import React from "react";
import { Link } from "react-router-dom";

function AddButton(props) {
    return (
        <Link
            className="btn-floating halfway-fab waves-effect waves-light red"
            to=""
        >
            <i className="material-icons"
                comicid={props.comicid}
                onClick={props.handleClick}
            >
                add
            </i>
        </Link>
    )
}

export default AddButton;
