import React from 'react';
import { RWebShare } from 'react-web-share';
import { Container } from './styles';
import { MdShare } from 'react-icons/md';
import Logo from '../../assets/logo.svg';

interface IHeaderProps {
  openModal: () => void;
}

const Header: React.FC<IHeaderProps> = () => (
  <Container>
    <header>
      <img src={Logo} alt="SmartChoice" />
      <nav>
        <div>
          <RWebShare
            data={{
              text: 'Aproveite o cardápio completo do restaurante SmartChoice',
              url: 'http://localhost:3000/',
              title: 'Cardápio SmartChoice',
            }}
          >
            <button type="button">
              <div className="icon">
                <MdShare />
              </div>
            </button>
          </RWebShare>
        </div>
      </nav>
    </header>
  </Container>
);

export default Header;
