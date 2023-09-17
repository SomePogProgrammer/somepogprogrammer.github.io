import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./prism.css"

import PropTypes from "prop-types"

function CodeEmbed(props) {

    return (
      
      <SyntaxHighlighter language={props.language} customStyle={props.exStyling}  >
        {props.codeToEmbed}
      </SyntaxHighlighter>
    )

}
CodeEmbed.defaultProps = {
    codeToEmbed: "",
    language: "",
    exStyling: "",
}
CodeEmbed.propTypes = {
    codeToEmbed: PropTypes.any,
    language: PropTypes.string,
    exStyling: PropTypes.string,
}

export default CodeEmbed