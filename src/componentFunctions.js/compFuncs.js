import { useState, useEffect, useMemo } from "react";

export function fixComponentProps(propsTable) {
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
      }
    });
  }, []);

  return props;
}
