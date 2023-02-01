
import "./feedbackItem.css";

const FeedbackItem = ({ item }) => {
  return (
    <div className="card">
      <div className="num-display">{item.ratting}</div>
      <div className="text-display">
        <p>{item.text}</p>
      </div>
    </div>
  );
};

export default FeedbackItem;
