import * as React from "react";
const BeanEater = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    preserveAspectRatio="xMidYMid"
    style={{
      shapeRendering: "auto",
      display: "block",
      background: "#fff",
    }}
    viewBox="0 0 100 100"
    {...props}
  >
    <g fill="#e15b64">
      <circle cx={60} cy={50} r={4}>
        <animate
          attributeName="cx"
          begin="-0.67s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="95;35"
        />
        <animate
          attributeName="fill-opacity"
          begin="-0.67s"
          dur="1s"
          keyTimes="0;0.2;1"
          repeatCount="indefinite"
          values="0;1;1"
        />
      </circle>
      <circle cx={60} cy={50} r={4}>
        <animate
          attributeName="cx"
          begin="-0.33s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="95;35"
        />
        <animate
          attributeName="fill-opacity"
          begin="-0.33s"
          dur="1s"
          keyTimes="0;0.2;1"
          repeatCount="indefinite"
          values="0;1;1"
        />
      </circle>
      <circle cx={60} cy={50} r={4}>
        <animate
          attributeName="cx"
          begin="0s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="95;35"
        />
        <animate
          attributeName="fill-opacity"
          begin="0s"
          dur="1s"
          keyTimes="0;0.2;1"
          repeatCount="indefinite"
          values="0;1;1"
        />
      </circle>
    </g>
    <g fill="#f8b26a">
      <path d="M35 50V20a30 30 0 0 0 0 60Z" />
      <path d="M35 50H5a30 30 0 0 0 60 0Z">
        <animateTransform
          attributeName="transform"
          dur="1s"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          type="rotate"
          values="0 50 50;45 50 50;0 50 50"
        />
      </path>
      <path d="M35 50H5a30 30 0 0 1 60 0Z">
        <animateTransform
          attributeName="transform"
          dur="1s"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          type="rotate"
          values="0 50 50;-45 50 50;0 50 50"
        />
      </path>
    </g>
  </svg>
);
export default BeanEater;
