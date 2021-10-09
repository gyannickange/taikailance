import React, { useState } from 'react';
import * as Style from './styles';
import { Layout, Helpers } from '../../styles';
import { Icon, TextField, Button } from '../';
import icons from '../../utils/icons';
import { Link } from 'react-router-dom';

function Footer() {
  const [currentYear] = useState<number>(new Date().getFullYear());
  const { facebook, twitter, linkedin, instagram, envelope_fill } = icons;

  return (
    <Style.Wrapper>
      <Layout.Container>
        <Style.FooterTop>
          <Helpers.FlexWrap className="footer-top-row">
            <div>
              <p style={{marginBottom: '1rem'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              <Helpers.SociauxList>
                <li><Link to="#"><Icon icon={facebook} /></Link></li>
                <li><Link to="#"><Icon icon={twitter} /></Link></li>
                <li><Link to="#"><Icon icon={linkedin} /></Link></li>
                <li><Link to="#"><Icon icon={instagram} /></Link></li>
              </Helpers.SociauxList>
            </div>
            <div>
              <h4>Company</h4>
              <Helpers.UnstyledList>
                <li><Link to="#">Blog</Link></li>
                <li><Link to="#">About</Link></li>
                <li><Link to="#">Press Kit</Link></li>
                <li><Link to="#">Blog RSS Feed</Link></li>
              </Helpers.UnstyledList>
            </div>
            <div>
              <h4>Help</h4>
              <Helpers.UnstyledList>
                <li><Link to="#">FAQs</Link></li>
                <li><Link to="#">Support</Link></li>
                <li><Link to="#">Terms & Conditions</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
              </Helpers.UnstyledList>
            </div>
            <div>
              <h4>Newsletter</h4>
              <p style={{marginBottom: '1.5rem'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
              <Helpers.Newsletter>
                <TextField type="email" placeholder="user@something.com" />
                <Button icon={envelope_fill} variant="text" />
              </Helpers.Newsletter>
            </div>
          </Helpers.FlexWrap>
        </Style.FooterTop>
        <Style.FooterBottom>
          <p>
            Copyright &copy; {currentYear} All rights reserved. <strong>TAITAILANCE</strong>, Inc.
          </p>
        </Style.FooterBottom>
      </Layout.Container>
    </Style.Wrapper>
  );
}

export default Footer;
