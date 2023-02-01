
// import FeedbackItem from "./FeedbackItem"

import FeedbackItem from "./FeedbackItem"


const FeedbackList = ({feedback}) => {
 if (!feedback || feedback.length === 0) {
  return (
   <p>No Feedback data</p>
  )
 }

  return (
    <>
     {
      feedback.map( (item) => (
       <FeedbackItem key={item.id} item={item} />
      ))
     }
    </>
  )
}

export default FeedbackList
