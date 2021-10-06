import React from 'react';
import * as Style from './styles';
import { Layout } from '../../styles';

function Footer() {
  return (
    <Style.Wrapper>
      <Layout.Container>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Layout.Container>
    </Style.Wrapper>
  );
}

export default Footer;
