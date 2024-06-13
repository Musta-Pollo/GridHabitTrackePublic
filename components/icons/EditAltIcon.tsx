import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface EditAltIconProps {
  className?: string;
}

function EditAltIcon({ className }: EditAltIconProps) {
  return (
    <Svg
      className={className}
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <Path
        fill="#6563FF"
        d="M5 18h4.24a1 1 0 00.71-.29l6.92-6.93L19.71 8a1 1 0 000-1.42l-4.24-4.29a1 1 0 00-1.42 0l-2.82 2.83-6.94 6.93a1 1 0 00-.29.71V17a1 1 0 001 1zm9.76-13.59l2.83 2.83-1.42 1.42-2.83-2.83zM6 13.17l5.93-5.93 2.83 2.83L8.83 16H6zM21 20H3a1 1 0 000 2h18a1 1 0 000-2z"
      />
    </Svg>
  );
}

export default EditAltIcon;
