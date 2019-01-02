import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Input: liked: boolean
// Output: onClick

const Like = (props) => {
    let classes = "heart";
    if (props.liked) classes = "kiss-wink-heart";

    return (
      <FontAwesomeIcon
        icon={classes}
        style={{ cursor: "pointer" }}
        onClick={props.onClick}
      />
    );
}

export default Like;
