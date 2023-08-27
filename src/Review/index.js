
import './index.css';

function Review({rating, reviewerImageURL, name, reviewText}){
  return (
  <div className="review">
    <h5>{rating}</h5>
    <div className="reviewerInfo">
      <img src={reviewerImageURL} alt="reviewer image"/>
      <h5>{name}</h5>
    </div>
    <p>"{reviewText}"</p>
  </div>
  )
}

export default Review;