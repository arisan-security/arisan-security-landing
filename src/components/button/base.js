import React from "react"
import PropTypes from "prop-types"
const BaseButton = (props) => {
    return (
        <span>
            {props.children}
        </span>
    )
}

export default BaseButton;