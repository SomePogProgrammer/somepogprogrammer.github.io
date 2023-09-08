import "./css/codeEmbed.css"
import { memo } from "react";
import PropTypes from "prop-types";

function CodeEmbed(props) {
      // Create a string representing the element
  
    console.log(props.content)


    return (
        <pre style={props.extraStyling}>
            <code className={props.language} style={props.secondaryStyling}>
                
            </code>
        </pre>
    )
}

CodeEmbed.defaultProps = {
    content: ``,
    language: "javascript",
    extraStyling: ``,
    secondaryStyling: ``,
}

CodeEmbed.PropTypes = {
    content: PropTypes.string,
    language: PropTypes.string,
    extraStyling: PropTypes.string,
    secondaryStyling: PropTypes.string,
}


export default memo(CodeEmbed)