import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";
const healthians = (props) => (
  <Svg
    width={42}
    height={18}
    viewBox="0 0 42 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect y={0.40918} width={42} height={17.1818} fill="url(#pattern0_1_166)" />
    <Defs>
      <Pattern
        id="pattern0_1_166"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_1_166"
          transform="matrix(0.00555556 0 0 0.0135802 0 -0.0228395)"
        />
      </Pattern>
      <Image
        id="image0_1_166"
        width={180}
        height={77}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default healthians;
