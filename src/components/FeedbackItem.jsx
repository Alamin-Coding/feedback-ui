import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";

import "./feedbackItem.css";
import Card from "./share/Card";

const FeedbackItem = ({ item, handleDelete }) => {

  return (
    <Card>
      <div className="num-display">{item.ratting}</div>
      <div className="text-display">
        <p>{item.text}</p>
      </div>
      <button className="close_btn" onClick={() => handleDelete(item.id)}>
        <AiOutlineClose />
      </button>
    </Card>
  );
};

FeedbackItem.protoTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
