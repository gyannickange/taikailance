import React from 'react';
import { Navigation, Button } from '../';
import { Layout } from '../../styles';
import * as Style from './styles';
import HeaderSideImg from '../../utils/header-img';

function Header() {
  return (
    <>
      <Navigation />
      <Layout.Container>
        <Style.Wrapper>
          <div>
            <Style.HeaderTitle>Lorem Ipsum is simply dummy text of the printing</Style.HeaderTitle>
            <Style.HeaderSubtitle>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Style.HeaderSubtitle>
            <Button value="Find a job" />
          </div>
          <Style.HeaderImg>
            <HeaderSideImg />
          </Style.HeaderImg>
        </Style.Wrapper>
      </Layout.Container>
    </>
  );
}

export default Header;
