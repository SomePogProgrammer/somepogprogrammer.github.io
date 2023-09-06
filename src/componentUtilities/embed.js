import PropTypes from "prop-types";
import "./prism.css"

function Embed(props) {
    return (
        <pre>
            <code className={props.language}></code>
        </pre>
    )
}

Embed.defaultProps = {
    language: "React TSX"
}

Embed.PropTypes = {
    language: PropTypes.string
}
export default Embed