import PropTypes from 'prop-types'

import "./feedbackItem.css";
import Card from "./share/Card";

const FeedbackItem = ({ item }) => {
  return (
    <Card>
      <div className="num-display">{item.ratting}</div>
      <div className="text-display">
        <p>{item.text}</p>
      </div>
    </Card>
  );
};

FeedbackItem.protoTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem;
