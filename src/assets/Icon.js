import React from 'react'

export const ArrowLeft = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.16675 22H34.8334"
        stroke="#d889a7"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.16675 22L20.1667 33"
        stroke="#d889a7"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.16675 22L20.1667 11"
        stroke="#d889a7"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const ArrowRight = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.16675 22H34.8334"
        stroke="#d889a7"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.8333 33L34.8333 22"
        stroke="#d889a7"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.8333 11L34.8333 22"
        stroke="#d889a7"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const Glass = () => {
  return (
    <svg
      width="191"
      height="191"
      viewBox="0 0 191 191"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <rect
          x="5"
          y="5"
          width="142"
          height="142"
          rx="71"
          stroke="white"
          stroke-width="10"
        />
        <rect
          width="73.5885"
          height="14.1442"
          rx="7.07208"
          transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 182.274 172.269)"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="190.275"
          height="190.27"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="8" dy="8" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.203922 0 0 0 0 0.207843 0 0 0 0 0.309804 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
