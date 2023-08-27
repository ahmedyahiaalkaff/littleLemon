import Review from '../Review';

const reviews = [
  {
    rating: 3,
    reviewerImageURL: './images/reviewer1.png',
    name: "Ann Bolosky",
    reviewText: 'Amazing food',
  },
  {
    rating: 5,
    reviewerImageURL: './images/reviewer2.png',
    name: "John Smith",
    reviewText: 'Greek Salad is heaven',
  },
  {
    rating: 4,
    reviewerImageURL: './images/reviewer3.png',
    name: "Scot Rogers",
    reviewText: 'Great Service',
  },
  {
    rating: 4,
    reviewerImageURL: './images/reviewer4.png',
    name: "David Stark",
    reviewText: 'I will be coming back',
  },
]

function Testomonials(){
  return (
  <div className="testomonials">
    <h2>Testomonials</h2>
    {reviews.map(r=><Review rating={r.rating} reviewerImageURL={r.reviewerImageURL} name={r.name} reviewText={r.reviewText} key={r.name}/>)}
    {/* <Review />
    <Review />
    <Review />
    <Review /> */}
  </div>
  )
}

export default Testomonials;