// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {eachItem, myclickStar} = props
  const {id, title, dateformat, isStared} = eachItem
  console.log(isStared)

  const handleStar = () => myclickStar(id)

  const imageStared = isStared
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  return (
    <li className="list_container_each">
      <div className="upper">
        <p className="appointment_heading">{title}</p>
        <button
          onClick={handleStar}
          type="button"
          data-testid="star"
          className="starbtn"
        >
          <img className="stared_Icon" src={imageStared} alt="star" />
        </button>
      </div>
      <p className="appointment_date">Date: {dateformat}</p>
    </li>
  )
}

export default AppointmentItem
