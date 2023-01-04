import { memo } from "react";

function HourglassIcon({ color }) {
  return (
    <svg
      version="1.1"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      fill={color}
    >
      <path
        fill-rule="evenodd"
        d="M2.75 1a.75.75 0 000 1.5h.75v1.25a4.75 4.75 0 001.9 3.8l.333.25c.134.1.134.3 0 .4l-.333.25a4.75 4.75 0 00-1.9 3.8v1.25h-.75a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5h-.75v-1.25a4.75 4.75 0 00-1.9-3.8l-.333-.25a.25.25 0 010-.4l.333-.25a4.75 4.75 0 001.9-3.8V2.5h.75a.75.75 0 000-1.5H2.75zM11 2.5H5v1.25a3.25 3.25 0 001.3 2.6l.333.25c.934.7.934 2.1 0 2.8l-.333.25a3.25 3.25 0 00-1.3 2.6v1.25h6v-1.25a3.25 3.25 0 00-1.3-2.6l-.333-.25a1.75 1.75 0 010-2.8l.333-.25a3.25 3.25 0 001.3-2.6V2.5z"
      />
    </svg>
  );
}

export default memo(HourglassIcon);
