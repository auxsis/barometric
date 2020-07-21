import React from 'react';

export default () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
      <clipPath id="a">
        <path
          fill="none"
          d="M10.55 34.21l-3.83-3.42-2-6 1-7 4-5 5-3h6l5 1 3 3 2.56 4.36-4.56 4.64h-5l-5 5v3l-6.17 3.42z"
        />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <g>
        <circle cx="19.22" cy="24.29" r="5.95" fill="#f4a71d" />
        <path
          fill="none"
          stroke="#f4a71d"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M19.22 15.97v-3.18M19.22 35.79v-3.17M25.11 18.4l2.24-2.24M11.09 32.42l2.24-2.24M13.33 18.4l-2.24-2.24M27.35 32.42l-2.24-2.24M10.89 24.29H7.72M30.72 24.29h-3.17"
        />
        <animateTransform
          attributeName="transform"
          dur="45s"
          from="0 19.22 24.293"
          repeatCount="indefinite"
          to="360 19.22 24.293"
          type="rotate"
        />
      </g>
    </g>
    <path
      fill="#efefef"
      stroke="#efefef"
      strokeMiterlimit="10"
      strokeWidth="3"
      d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
    />
  </svg>
);
