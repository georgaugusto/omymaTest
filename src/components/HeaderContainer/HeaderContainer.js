import logo from '../../assets/logo.png';
import './HeaderContainer.css';

function HeaderContainer() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h3>Visualizador de Clínicas</h3>
    </header>
  );
}

export default HeaderContainer;
