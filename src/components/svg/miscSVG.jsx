import * as React from "react"
export const Sharesvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{...props.style}}
    width={props.width || "100%"}
    height={props.height || 16} 
    viewBox="0 0 448 512"
    {...props}
  >
    <path
      className={props.className || "navbar-button-icon"}
      fill="#fff"
      d="M352 224c53 0 96-43 96-96s-43-96-96-96-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9 0 53 43 96 96 96s96-43 96-96-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9.7-7.8.7-11.9s-.2-8-.7-11.9l94.1-47c17.2 16.7 40.7 26.9 66.6 26.9z"
    />
  </svg>
)

export const Helpsvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{...props.style}}
    width={props.width || "100%"}
    height={props.height || 16} 
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      className={props.className || "navbar-button-icon"}
      fill="#fff"
      d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm-40-176h24v-64h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
    />
  </svg>
)

export const Kofi = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{...props.style}}
    width={props.width || "100%"}
    height={props.height || 16}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
        className={props.className || "navbar-button-icon"}
        fill="#fff" 
        d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z" />
  </svg>
)
