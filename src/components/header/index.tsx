import React from 'react';
import { Navigation, Button } from '../';
import work_at_home from '../../assets/images/work_at_home.svg';
import { Layout } from '../../styles';
import * as Style from './styles';

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
          <div><Style.HeaderImg src={work_at_home} alt="sideimg"/></div>
        </Style.Wrapper>
      </Layout.Container>
    </>
  );
}

export default Header;
