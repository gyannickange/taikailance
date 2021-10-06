import { createGlobalStyle } from 'styled-components/macro';
import { fontWeigth, colors } from '../utils/variables';

const { regular } = fontWeigth;
const { normal } = colors;

const GlobalStyle= createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth
}

body {
  margin: 0;
  font-family: 'Inter', Verdana, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  letter-spacing: 0.3px;
  font-weight: ${regular};
  color: ${normal}
}

button {
  font-family: 'Inter', Verdana, Arial, Helvetica, sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	color: ${normal};
  margin-top: 0;
	line-height: 1.5
}

a {
	-webkit-transition: .3s all;
	transition: .3s all;
}

p,
span {
  font-size: 1rem;
  line-height: 1.6
}

p {
  margin: 0
}
`;

export default GlobalStyle;
