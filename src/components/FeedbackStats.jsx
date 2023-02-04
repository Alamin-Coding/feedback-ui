import "./feedbackStats.css";
import {PropTypes} from 'prop-types'

const FeedbackStats = ({ feedback, color, padding }) => {
  const feedbackStatsStyles = {
    color: color,
    padding: padding,
  };
  
  let average = feedback.reduce((acc, curr) => {
    return acc + curr.ratting
  }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/, "")


  return (
    <div className="feedback_stats" style={feedbackStatsStyles}>
      <p style={feedbackStatsStyles}>{feedback.length} Reviews</p>
      <p>Average: {!isNaN(average) ? average : 0}</p>
    </div>
  );
};

FeedbackStats.defaultProps = {
  color: "#ffeeff",
  padding: "10px 20px",
};

FeedbackStats.propsType = {
  feedback: PropTypes.array.isRequeued,
  color: PropTypes.string,
  padding: PropTypes.string
}

export default FeedbackStats;
