/* eslint-disable no-unused-vars */
// Write your code here
import './index.css'

const DestinationItem = props => {
  const {listDetails, destinationsList, key} = props
  const {name, imgUrl, id} = listDetails
  return (
    <li className="card-cont">
      <img src={imgUrl} className="img" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}
export default DestinationItem
