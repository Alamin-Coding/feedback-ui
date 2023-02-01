import PropTypes from "prop-types";
import './header.css'

const Header = ({ text, bgColor, textColor, textAlign }) => {
  const headerStyle = {
    background: bgColor,
    color: textColor,
    textAlign: textAlign
  };
  return (
    <div className="header" style={headerStyle}>
      <h2>{text}</h2>
    </div>
  );
};

Header.defaultProps = {
  text: "Dummy Text",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
  textAlign: "center"
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  textAlign: PropTypes.string,
};

export default Header;
