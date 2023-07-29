// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteBox} = props
  const {title, amount, type, id} = transactionDetails

  const deleteButton = () => {
    onDeleteBox(id)
  }

  return (
    <li className="list-container">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{type}</p>
      <button
        onClick={deleteButton}
        data-testid="delete"
        className="del-button"
        type="button"
      >
        <img
          alt="delete"
          className="delete-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}

export default TransactionItem
