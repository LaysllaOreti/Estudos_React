import '../styles/Header.css';

export default function Header(props) {
  return (
    <div className="Header">
        <div className="headerLogo">
            <img src="globo.png" alt="Logo Globo" />
        </div>
      <div className="headerMenu">
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Sobre Nós</a></li>
          <li><a href='#'>Meu Perfil</a></li>
          <li><a href='#'>Contato</a></li>
        </ul>
      </div>
    </div>
  );
}
