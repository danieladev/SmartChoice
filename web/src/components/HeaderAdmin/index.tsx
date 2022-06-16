import React from 'react';
import { Container } from './styles';
import Logo from '../../assets/logo.svg';

interface IHeaderProps {
  openModal: () => void;
}

const HeaderAdmin: React.FC<IHeaderProps> = ({ openModal }) => (
  <Container>
    <header>
      <img src={Logo} alt="SmartChoice" />
      <nav>
        <div>
          <button
            type="button"
            onClick={() => {
              openModal();
            }}
          >
            <div className="icon">+</div>
          </button>
        </div>
      </nav>
    </header>
  </Container>
);

export default HeaderAdmin;
