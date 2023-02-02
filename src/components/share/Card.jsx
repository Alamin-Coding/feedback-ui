import PropTypes from "prop-types";

const Card = ({ children, reverse }) => {
  return (
    // Conditional Class
    <div className={`card ${reverse && "reverse"}`}>{children}</div>

    // Condition Styles
    // <div className="card"
    //   style={{
    //     background: reverse ? "red" : "#fff",
    //     color: reverse ? "#fff" : "red",
    //   }}
    // >
    //   {children}
    // </div>
  );
};

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool.isRequired,
};

export default Card;
