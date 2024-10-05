import "./scss/codeEmbed.scss"
import { memo } from "react";
import PropTypes from "prop-types";

function CodeEmbed(props) {
      // Create a string representing the element

    return (
        <pre style={props.extraStyling}>
            <code className={props.language} style={props.secondaryStyling}>
                
            </code>
        </pre>
    )
}


CodeEmbed.PropTypes = {
    content: PropTypes.string,
    language: PropTypes.string,
    extraStyling: PropTypes.any,
    secondaryStyling: PropTypes.string,
}


export default memo(CodeEmbed)