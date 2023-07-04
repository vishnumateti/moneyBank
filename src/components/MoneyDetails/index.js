// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <ul className="medium-container-section">
      <li className="container-1">
        <img
          className="image"
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
        />
        <div>
          <p className="heading">Your Balance</p>
          <p data-testid="balanceAmount" className="balance">
            Rs {balanceAmount}
          </p>
        </div>
      </li>
      <li className="container-2">
        <img
          className="image"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
        />
        <div>
          <p className="heading">Your Income</p>
          <p data-testid="incomeAmount" className="balance">
            Rs {incomeAmount}
          </p>
        </div>
      </li>
      <li className="container-3">
        <img
          className="image"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
        />
        <div>
          <p className="heading">Your Expenses</p>
          <p data-testid="expensesAmount" className="balance">
            Rs {expensesAmount}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
