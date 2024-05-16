import React from "react";

function CommonSection(props) {
    return (
        <>
            <div className="commonSection">
                <div className="container">
                    <h2 className="text-white">{props.title}</h2>
                </div>
            </div>
        </>
    );
}

export default CommonSection;
