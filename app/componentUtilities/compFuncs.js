import { useState, useEffect } from "react";

const compFuncs = {

  FixComponentProps: (propsTable) => {
    const [props, setProps] = useState(propsTable);
    useEffect(() => {
      setProps((previousState) => {
        if (props.rootClassName) {
          return {
            ...previousState,
            rootClassName: props.rootClassName

              .replace(/([A-Z]+)/g, "-$1")
              .replace(/^,/, "")
              .toLowerCase(),
          };
        } else if (props["rootClassName"] == null) {
          return {
            ...previousState,
          };
        } else {
          return {
            ...previousState
          }
        }
      });
    }, []);

    return props;
  }

}


module.exports = {
  fixComponentProps: compFuncs.FixComponentProps
}
