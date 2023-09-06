import PropTypes from "prop-types";
import "./prism.css"

function Embed(props) {
    return (
        <pre className="-lan2guage-react-tsx">
            <code className="-lan2guage-react-tsx">
            
            </code>
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