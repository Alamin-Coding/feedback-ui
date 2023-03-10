
import PropTypes from 'prop-types'

import FeedbackItem from "./FeedbackItem"


const FeedbackList = ({feedback, handleDelete}) => {
 if (!feedback || feedback.length === 0) {
  return (
   <p>No Feedback data</p>
  )
 }

  return (
    <>
     {
      feedback.map( (item) => (
       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))
     }
    </>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
     PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      ratting: PropTypes.number.isRequired
     })
  ),
}

export default FeedbackList
