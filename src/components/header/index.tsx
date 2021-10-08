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
            <Style.HeaderTitle>Join the world’s largest startup community</Style.HeaderTitle>
            <Style.HeaderSubtitle>Experience the startup ecosystem — invest in startups, research the fastest-growing companies, and find a job you love.</Style.HeaderSubtitle>
            <Button
              value="Find a job"
              type="button"
            />
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
