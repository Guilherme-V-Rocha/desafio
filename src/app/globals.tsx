'use client'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}
html {
  height: 100%;
}

body {
  max-width: 100vw;
  min-height: 100%;
  overflow-x: hidden;
  display: flex;
  position: relative;
  flex-direction: column;
  @media only screen and (max-width: 485px) {
    max-width: 100%;
  }
}



`
