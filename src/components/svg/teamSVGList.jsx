import * as React from "react"

export const heartsteel = ({color, ...props}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    style={{...props.style}}
    width={props.width || "100%"}
    height={props.height || 16} 
    viewBox="0 0 42.85 42.01" 
    {...props}
    >
    <g data-name="Layer 2">
      <g data-name="Layer 1">
        <path
          className={props.className || "dashboard-button-icon"}
          fill="none"
          stroke="none"
          d="M21.2 4.11C29-1.82 35.14-1.31 40.52 5.49c3.9 4.91 2.69 18.28-2 22.25-2.8 2.38-5.56 4.79-8.35 7.17s-5.32 4.54-8.33 7.1c-3.76-3.07-9.53-4.27-8.54-11.21.13-.94-1.13-2.27-2-3.12C9.23 25.74 7 24 4.83 22.16c-6.62-5.55-6.42-12 .52-17.23C13.81-1.4 15.48-1.5 21.2 4.11Zm-1.43 28.78 2 1C25.13 31 28.32 27.74 32 25.23c4.24-2.9 5.9-6.63 5-11.45-.41-2-1.22-4.95-2.69-5.62-1.83-.83-4.84-.36-6.76.65-3.1 1.63-5.73 4.15-8.92 6.57l-.41-6.1H7.94c-1.57 4.46.09 7.11 3.41 9.65 4.44 3.4 10.33 6.18 8.42 13.96Z" 
          />
      </g>
    </g>
  </svg>
);

export const kda = ({color, ...props}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    style={{...props.style}}
    width={props.width || "100%"}
    height={props.height || 16} 
    viewBox="0 0 52.07 38.74" 
    {...props}
    >
    <g data-name="Layer 2">
      <g data-name="Layer 1">
        <path
          className={props.className || "dashboard-button-icon"}
          style={{ fill: color}} 
          d="M0 19.15v19.59h12L50.75 0H36.9L9.41 27.49v-17S-.43 18.71 0 19.15ZM28.78 29.74l7.41-7.42 15.88 15.89H36.54s-7.23-9-7.76-8.47Z" />
      </g>
    </g>
  </svg>
);

export const penta = ({color, ...props}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    style={{...props.style}}
    width={props.width || "100%"}
    height={props.height || 16}
    viewBox="0 0 34.02 38.39" 
    {...props}
    >
    <g data-name="Layer 2">
      <path
        className={props.className || "dashboard-button-icon"}
        style={{ fill: color}} 
        d="M34 18.31C34 10.88 24.21 8 27.4 0c-6.72 1.88-7.68 4.05-4.73 9.68 1.87 3.59.76 5.64-3.29 5.91h-4.75c-4-.27-5.16-2.32-3.28-5.91 3-5.63 2-7.8-4.74-9.68C9.8 8 .06 10.88 0 18.31c4.79.91 7.76 2.59 5.76 8.41-.57 1.67 1.69 4.92 3.45 6.64 2.13 2.1 5.1 3.35 7.79 5 2.69-1.67 5.66-2.92 7.79-5 1.75-1.72 4-5 3.44-6.64-1.98-5.82 1-7.5 5.77-8.41Zm-19.84 7h-2l-2.22-2.26v-2.94l4.24 3.53Zm9.7-2.23-2.24 2.23h-2v-1.67l4.24-3.53Z"
        data-name="Layer 1"
      />
    </g>
  </svg>
);

export const truedmg = ({color, ...props}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    style={{...props.style}}
    width={props.width || "100%"}
    height={props.height || 16} 
    viewBox="0 0 39.1 39.1" 
    {...props}
    >
        <path
          className={props.className || "dashboard-button-icon"}
          style={{ fill: color}} 
          d="M19.73 10.47 22.22 13 35.08.1H24.93l-5.29 5.29L14.26 0H4c.33-.33 8.8 8.56 13.07 13.09ZM19.37 28.63l-2.49-2.49L4 39h10.17l5.29-5.29 5.38 5.38h10.24c-.33.33-8.8-8.56-13.07-13.09ZM10.47 19.37 13 16.88.1 4v10.17l5.29 5.29L0 24.84v10.24c-.32-.33 8.57-8.8 13.1-13.08ZM28.63 19.73l-2.49 2.49L39 35.08V24.93l-5.29-5.29 5.38-5.38V4c.33.33-8.56 8.8-13.09 13.07Z"
        />
        <circle
          className={props.className || "dashboard-button-icon"}
          style={{ fill: color}} 
          cx={19.64} cy={19.66} r={4.5} 
          />
  </svg>
);

export const eightbit = ({color, ...props}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{...props.style}}
    width={props.width || "100%"}
    height={props.height || 16} 
    viewBox="0 0 36.97 43.19" 
    {...props}
    >
    <g data-name="Layer 2">
      <g data-name="Layer 1">
        <path
          style={{ fill: color}} 
          className={props.className || "dashboard-button-icon"} 
          d="m20 31.94 15.09-8.82v-1.94L27 16.94h-1.31a7.41 7.41 0 0 1 .16 1.5 7 7 0 0 1-13.94 0 6.76 6.76 0 0 1 .17-1.5h-1.49l-9.53 4.32-.09 2 16.41 8.65Z" />
        <path
          style={{ fill: color}} 
          className={props.className || "dashboard-button-icon"} 
          d="M15.35 13.48v5.31a3.47 3.47 0 0 0 3.58 3.36 3.47 3.47 0 0 0 3.57-3.36v-5.42a7.18 7.18 0 1 0-7.15.11ZM35.34 25.72 21 34.06s-3 1-4.06 0S1.5 26 1.5 26l-1.5.56v7.23l16.59 8.65s2.73 1.68 4.41 0 16-10.32 16-10.32v-4.77Z" />
      </g>
    </g>
  </svg>
);


export const country = ({color, ...props}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    style={{...props.style}}
    width={props.width || "100%"}
    height={props.height || 16}
    viewBox="0 0 41.01 42.73" 
    {...props}
    >
    <g data-name="Layer 2">
      <g data-name="Layer 1">
        <path
          style={{ fill: color}} 
          className={props.className || "dashboard-button-icon"} 
          d="M31.14 25.85c-4.76-11.11-4.76-11.11-10.13-8l-3.21-6.67c-6 2.73-6.07 8.37-7.45 13.23C5.59 23 4.06 16.54 6.87 8.59l1.74 1.9L22.6 0l4.17 12.63 1.41-.19 1-4.75c4 .51 6.3 2.79 6.6 6.58.31 4.32 1.11 9.11-4.64 11.58ZM21.56 42.73c-7-.31-13.31-1.1-18.1-5.9A13.1 13.1 0 0 1 0 31a4.74 4.74 0 0 1 2.15-4.12c1.13-.46 3.43.48 4.45 1.54 2.26 2.37 3.77 5.48 6.08 7.8 4.57 4.61 8.14 4.91 13.16 1a43.16 43.16 0 0 0 7.53-7.86c1.93-2.55 4.41-3.84 6.64-1.92 1.16 1 1.27 4.75.32 6.38-4.24 7.29-11.74 8.36-18.77 8.91Z" />
        <path
          className={props.className || "dashboard-button-icon"}
          style={{ fill: color}} 
          d="m16.62 15.86 4.39 9 4-6.25 3 7.73c-5.13 3.62-11.75 4.48-13.2 1.05-1.35-3.22 0-7.57.16-11.43Z" />
        <path
          className={props.className || "dashboard-button-icon"}
          style={{ fill: color}} 
          d="M11.64 29.91c5.6 3.71 11.23 2.55 17.34-.09-6.65 9.26-10.84 9.26-17.34.09Z" />
      </g>
    </g>
  </svg>
);

export const disco = ({color, ...props}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    style={{...props.style}}
    width={props.width || "100%"}
    height={props.height || 16} 
    viewBox="0 0 42.47 42.47" 
    {...props}
    >
    <g data-name="Layer 2">
      <g data-name="Layer 1">
        <path
          className={props.className || "dashboard-button-icon"}
          style={{ fill: color}} 
          d="M33.76 9.29h5A21.4 21.4 0 0 0 30.22 2a27.8 27.8 0 0 1 3.54 7.29ZM9.48 33.24H3.72a21.41 21.41 0 0 0 9.56 7.68 28.31 28.31 0 0 1-3.8-7.68ZM33.76 33.24a28.29 28.29 0 0 1-3.48 7.19 21.34 21.34 0 0 0 8.47-7.19Z" />
        <path
          className={props.className || "dashboard-button-icon"}
          style={{ fill: color}} 
          d="M40.56 12.47h-6.1a11.55 11.55 0 0 1-.05 4l-2.82.12a12.42 12.42 0 0 0-.11-4.12h-2.95V9.29h2A35.41 35.41 0 0 0 25.29.4a20.91 20.91 0 0 0-4.05-.4 22.26 22.26 0 0 0-3.19.26 35.21 35.21 0 0 0-5.38 9h2v3.18h-3a11.91 11.91 0 0 0-.11 4.12l-2.83-.12a11.75 11.75 0 0 1 0-4H1.91a21.05 21.05 0 0 0 0 17.59h6.87a11.75 11.75 0 0 1 0-4l2.83-.12a11.91 11.91 0 0 0 .11 4.12h3v3.18h-2a35.34 35.34 0 0 0 5.33 9 21.57 21.57 0 0 0 3.24.27 21.35 21.35 0 0 0 4.1-.4 35.34 35.34 0 0 0 5.23-8.83h-2v-3.19h2.95a12.42 12.42 0 0 0 .11-4.12l2.82.12a11.55 11.55 0 0 1 .05 4h6.07a21.05 21.05 0 0 0 0-17.59Zm-4.8 8.29v1.89h-.93a12.26 12.26 0 0 0-6.18 1.6c-7.21 4.18-6.41 12.4-6.41 12.4h-1.06c.47-13.18-12.65-14-12.65-14v-2.3s13.12-.82 12.65-14h1.06s-.84 8.67 7 12.73a12 12 0 0 0 5.54 1.27h1Z" />
        <path
          className={props.className || "dashboard-button-icon"}
          style={{ fill: color}}  
          d="M13.33 1.54a21.26 21.26 0 0 0-9.65 7.75h5.8a28.35 28.35 0 0 1 3.85-7.75Z" />
      </g>
    </g>
  </svg>
);

export const edm = ({color, ...props}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    style={{...props.style}}
    width={props.width || "100%"}
    height={props.height || 16} 
    viewBox="0 0 44.47 41.76" 
    {...props}
    >
    <g data-name="Layer 2">
      <g data-name="Layer 1">
        <path
          className={props.className || "dashboard-button-icon"}
          style={{ fill: color}} 
          d="M16.57 0h10.47v4.24l-4.59 11.41-.82.12-5.06-11.18V0zM29.77 3.88l2.94 4.35-6.83 7.42 3.89-11.77zM30 15.65h11.65l-2.71-8.71L30 15.65zM25.65 17.65h11.44l5.14 5.23H26.41l-.76-5.23zM14.12 3.88l-2.94 4.35L18 15.65 14.12 3.88zM13.88 15.65H2.23l2.71-8.71 8.94 8.71zM18.23 17.65H6.79l-5.14 5.23h15.82l.76-5.23zM16.57 41.77h10.47v-4.24l-4.59-11.41-.82-.12-5.06 11.18v4.59zM30 26.12h14.47l-3.36 10-11.11-10zM14.12 35.77h-6L18 26.12l-3.88 9.65zM14.47 26.12H0l3.36 10 11.11-10zM29 35.77h6l-9.88-9.65L29 35.77z" />
      </g>
    </g>
  </svg>
);

export const emo = ({color, ...props}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    style={{...props.style}}
    width={props.width || "100%"}
    height={props.height || 16}
    viewBox="0 0 37.98 43.13" 
    {...props}
    >
    <g data-name="Layer 2">
      <g data-name="Layer 1">
        <path
          className={props.className || "dashboard-button-icon"}
          style={{ fill: color}}  
          d="M5.21 38a17.64 17.64 0 0 1-4.5-17.61C3 11.82 9.36 7.87 18.08 6.57V0l7.25 6.69 8-3.09-2.74 6.4c4.35 4.12 8 8.74 7.31 16.67l-11.84-7.1-11.95 13.5-1.69-.6L10 24l-1.46-.18ZM30.09 43.13c-12.5-6.27-12.5-6.27-18.59-.2l-1.3-.46c.68-1.59 1-3.48 2.1-4.71 3.14-3.54 7.26-3.88 11.36-2.12 3.02 1.3 6.01 3.04 6.43 7.49Z" />
        <path
          className={props.className || "dashboard-button-icon"} 
          style={{ fill: color}} 
          d="m24.51 26.32 10.58 2.49c-1.07 3.52-3.76 3.76-6.59 3.24s-4.56-2.24-3.99-5.73Z" />
      </g>
    </g>
  </svg>
);

export const punk = ({color, ...props}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    style={{...props.style}}
    width={props.width || "100%"}
    height={props.height || 16}
    viewBox="0 0 30.44 42.12" 
    {...props}
    >
    <defs>
      <style>{".cls-1{fill:#020202}"}</style>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          className={props.className || "dashboard-button-icon"}
          style={{ fill: color}} 
          d="M23.78 3v16.77s-1.06 3.35-3.35 3.35h-2.3S16 23.83 16 25.21a2 2 0 0 0 1 1.85h4.9s5.29.12 6-7.06V1.89s.35-2-2.24-1.89-1.88 3-1.88 3ZM3 2.48v13.88s.58-2.12 3.88-2.12V1.77A1.53 1.53 0 0 0 5.07.24C3.31.36 3 2.48 3 2.48ZM9.78 8.59v5.77h4.12V7.89s-.24-2.59-2.24-1.65-1.88 2.35-1.88 2.35Z"
        />
        <path
          className={props.className || "dashboard-button-icon"}
          style={{ fill: color}} 
          d="M16.84 14.12h4.23V8s-.82-2.11-2.23-2-2.24 2.12-2.24 2.12ZM2.72 20.83s-.12 6.94 10.12 6.7c0 0 1.06-.11.82-6.23l5.65-.24A1.6 1.6 0 0 0 20.84 19 2.56 2.56 0 0 0 19 16.59H5.66a5 5 0 0 0-2.94 4.24ZM21 37.89H9A2.22 2.22 0 0 0 7 40a2.26 2.26 0 0 0 2 2h12a2.21 2.21 0 0 0 2.31-2A2.25 2.25 0 0 0 21 37.89ZM12.43 29.11h6.12v5.84h-6.12zM8.54 29.11H2.82a2.9 2.9 0 0 0 0 5.8h5.72ZM27.75 29.16v-.05h-5.32V35h5.32a2.89 2.89 0 0 0 0-5.77Z"
        />
      </g>
    </g>
  </svg>
);

export const hyper = ({color, ...props}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    style={{...props.style}}
    width={props.width || "100%"}
    height={props.height || 16} 
    viewBox="0 0 44.91 45.97" 
    {...props}
    >
    <g data-name="Layer 2">
      <path
        style={{ fill: color}} 
        className={props.className || "dashboard-button-icon"}
        d="m43.68 30.35-3.89-.17 5.12-19.42L25.15 0v10.41L11.38 4.94l2.47 19.94.34.28c-.2-.07-.41-.12-.61-.17a2.32 2.32 0 0 0-4.47 0 9.47 9.47 0 0 0-3 1.27A2.33 2.33 0 0 0 3 29.55a9.49 9.49 0 0 0-1 2.78A2.33 2.33 0 0 0 2.2 37a9.49 9.49 0 0 0 1.12 2.39 2.34 2.34 0 0 0 3.31 3.3l.09-.12a9.3 9.3 0 0 0 2.3.89 1.49 1.49 0 0 0 0 .21 2.34 2.34 0 0 0 4.68 0 1.81 1.81 0 0 0 0-.23 9.6 9.6 0 0 0 2.27-.9l.13.15a2.34 2.34 0 1 0 3.31-3.31h-.06A9.33 9.33 0 0 0 20.38 37a2.33 2.33 0 0 0 .23-4.65 9.56 9.56 0 0 0-1.2-3l-.26-12 10.41 4.24-.56-4.65 5.82 2.3-.17 8.47L29 26.12l.35 4.41-4.76 3L28.68 36l-.53 5.82 4.41-.7L35.91 45l2.3-5.29 5.79-.18-4-4.24Zm-32.39 7.94a4.09 4.09 0 1 1 4.09-4.08 4.08 4.08 0 0 1-4.09 4.08Z"
      />
    </g>
  </svg>
);

export const illbeats = ({color, ...props}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    style={{...props.style}}
    width={props.width || "100%"}
    height={props.height || 16} 
    viewBox="0 0 42.18 41.85" 
    {...props}
    >
    <g data-name="Layer 2">
      <path
        className={props.className || "dashboard-button-icon"}
        style={{ fill: color}} 
        d="M30.74 36.56 15.29 21c0 5.23-.38 9.28.25 13.17.17 1 3.53 2.28 5.33 2.15C25 36 25.26 38.13 25 41.13c-7.4 2.19-15.52-.76-20.71-7.45C-1.08 26.81-1.46 18 3.48 10l3.83 2.43C4.56 22.68 5.05 26.26 10.19 31V4.26L25.8 20.05V6.19l-7.63-.83L16.89.27C26-.93 33 1.83 38 8.69s5.46 14.4 1.4 22.54l-4.51-2.42c2.16-6.35 2.55-12.24-2.85-18.71v26.11Z"
        data-name="Layer 1"
      />
    </g>
  </svg>
)

export const jazz = ({color, ...props}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    style={{...props.style}}
    width={props.width || "100%"}
    height={props.height || 16} 
    viewBox="0 0 42.3 43.43" 
    {...props}
    >
    <g data-name="Layer 2">
      <g data-name="Layer 1">
        <path
          className={props.className || "dashboard-button-icon"}
          style={{ fill: color}} 
          d="M42.22 17.67c-.35-6.71-4.41-7.33-4.41-7.33s-1.94-.62-5 4.24c-2.8 4.39-3.78 14.21-4 16a1.07 1.07 0 0 1-.21.57c-.43.58-1.49 1.88-2.72 2s-2.06-1.4-2.3-2a1.06 1.06 0 0 1-.08-.43v-7h-4.23s-1.77-.25-1.56-1.72a2.05 2.05 0 0 1 1.77-1.68h4V17h-2.67s-1.63-.31-1.44-1.81A1.92 1.92 0 0 1 21 13.52h2.52v-.22a37.33 37.33 0 0 0-.62-8C22-.6 17.87 0 17.87 0S11.78.37 9.4 10.25s-3.62 8.3-3.62 8.3H1c-2.12.09-.27 2.38-.27 2.38 3.54 4.69 8 .55 8.58 0l.12-.14a31.56 31.56 0 0 0 3.92-8c.08-.27.17-.51.25-.74a1.14 1.14 0 0 1 2.22.39c.44 4.06-3 22.37 3 28.32 5.55 5.56 9.81.75 10.35.08a.78.78 0 0 0 .1-.15A37 37 0 0 1 32.34 36a6.51 6.51 0 0 1 1.08-1.12 1.15 1.15 0 0 1 1.57.24 3.47 3.47 0 0 0 2.73 1c2.66.08 3.83-4.54 4-5.07v-.1a81.69 81.69 0 0 0 .5-13.28Zm-4.59 14.82c-1.7 0-3.09-4.23-3.09-9.44s1.39-9.44 3.09-9.44 3.09 4.22 3.09 9.44-1.38 9.44-3.09 9.44Z" />
        <path
          className={props.className || "dashboard-button-icon"}
          style={{ fill: color}} 
          d="M25.57 17s1.83-.31 1.83-1.67-2-1.81-2-1.81h-1.88V17ZM24.44 23.78s2-.31 2-1.68-2.14-1.81-2.14-1.81h-.77v3.49Z" />
      </g>
    </g>
  </svg>
);

export const maestro = ({color, ...props}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    style={{...props.style}}
    width={props.width || "100%"}
    height={props.height || 16} 
    viewBox="0 0 37.67 40.38" 
    {...props}
    >
    <g data-name="Layer 2">
      <g data-name="Layer 1">
        <path
          className={props.className || "dashboard-button-icon"}
          style={{ fill: color}}  
          d="M22.92 18.69 37.67 29 37 30.42 29.51 28C28.19 38.18 25.87 40.45 17 40.38 8.25 40.31.84 34.17.05 26.36c-.49-4.82 2.87-7.89 7.41-6.28a18.84 18.84 0 0 1 7 4.45c3.54 3.67 2.43 6.54-2.65 8 4.92 4.07 10.08 2.46 11-3.66.49-3.06.11-6.25.11-10.18Z" />
        <path
          className={props.className || "dashboard-button-icon"}
          style={{ fill: color}}  
          d="m3.3 10.28 7.29 2.19c2-10.64 7.7-15 15.53-11 3.27 1.68 5.75 5.66 7.58 9.13 1.35 2.57.29 5.76-3.13 6.78a6.21 6.21 0 0 1-7.93-3.5c-1.55-3.16.31-5 2.92-6.38.42-.22.81-.51 1.07-2-2.08.2-4.76-.36-6.13.73-5.15 4.08-2.85 10-2.68 16L2.61 11.59Z" />
      </g>
    </g>
  </svg>
);

export const mix = ({color, ...props}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    style={{...props.style}}
    width={props.width || "100%"}
    height={props.height || 16}
    viewBox="0 0 41.83 36.36" 
    {...props}
    >
    <defs>
      <style>{".cls-1{fill:#fff}"}</style>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          className={props.className || "dashboard-button-icon"}
          style={{ fill: color}} 
          d="M9.42 0c1.67 2.5 4 4.8 4.86 7.55 1.25 4 4.07 3.14 6.73 3.18s5.5.66 6.64-3.36c.75-2.64 3-4.87 4.57-7.29l1.44.26a14.87 14.87 0 0 1 1.07 3.79q.15 12 0 23.94a15 15 0 0 1-.93 5.38c-1.08 2.66-2.68 4-5.7 1.71-6.21-4.71-8.18-4.65-14.52.09-3.08 2.31-4.76.7-5.55-2a30 30 0 0 1-.95-7.87c-.12-6.65-.09-13.31 0-20a33.68 33.68 0 0 1 .8-4.89ZM17 14.71c.45 3.74.64 7.06 1.34 10.27a4.26 4.26 0 0 0 2.84 2.45c.6.14 2.17-1.39 2.35-2.35.65-3.33.89-6.74 1.32-10.37Zm-6.4 7.64L14.46 29l1.54-.67-.68-8.06Zm15.2 5.93 1.73.68 3.52-6.64-4.52-2.09ZM3.91 20.75 5.07 31.3c-6.36-3.3-6.73-6.44-1.16-10.55ZM36.78 31.35c.38-3.68.73-7 1.11-10.55 5.58 3.94 5.26 7-1.11 10.55Z" />
      </g>
    </g>
  </svg>
);