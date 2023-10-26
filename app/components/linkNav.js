'use client'
import Link from "next/link"
import PropTypes from "prop-types"

function NextLink(props) {
    var curURL = process.env.NEXT_PUBLIC_SITE_URL 
    var hrefVal = curURL + props.to
    return (
        
        <Link className=" w-full h-full m-auto"  href={hrefVal} onClick={props.resetOnNav == true ? () => {typeof window != "undefined" && window.scrollTo({'behavior':'smooth','top':"0"})}: "" } >
           {props.displayText}
        </Link>
    
    )
}

NextLink.propTypes = {
    to: PropTypes.string,
    displayText: PropTypes.string,
    resetOnNav: PropTypes.bool,
}

export default NextLink