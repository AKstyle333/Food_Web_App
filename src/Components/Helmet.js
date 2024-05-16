import React from "react";

const Helmet = (props) => {
    document.title = "AK`s Food Web | " + props.title;
    return <div>{props.children}</div>;
};

export default Helmet;
