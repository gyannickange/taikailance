import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.svg';
import * as Layout from '../../styles/layout';
import * as Style from './styles';
import { Button } from '../';

function Navigation() {
  return (
    <Style.Navigation>
      <Layout.Container>
        <Style.Row>
          <Link to="/">
            <img src={logo} alt="logo"/>
          </Link>
          <Button value="Post a job"/>
        </Style.Row>
      </Layout.Container>
    </Style.Navigation>
  );
}

export default Navigation;
