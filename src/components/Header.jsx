import logo from "../assets/logo.png"
import sun from "../assets/sun.png"

const Header = ({ dark, handleDarkTheme }) => {
  return (
    <header className="header">
      <div className="header__brand">
        <img src={logo} alt="" className="header__logo" />
        <h1>Character Counter</h1>
      </div>
      <button
        type="button"
        className="header__theme-toggle"
        onClick={() => handleDarkTheme(!dark)}
        aria-label="Cambiar tema"
      >
        <img src={sun} alt="" className="header__theme-icon" />
      </button>
    </header>
  )
}

export { Header }
