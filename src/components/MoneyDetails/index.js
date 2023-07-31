// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-section">
      <div className="container-1">
        <img
          className="image"
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
        />
        <div className="balance-container">
          <p className="heading1">Your Balance</p>
          <p data-testid="balanceAmount" className="balance">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="container-2">
        <img
          className="image"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
        />
        <div className="balance-container">
          <p className="heading1">Your Income</p>
          <p data-testid="incomeAmount" className="balance">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="container-3">
        <img
          className="image"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
        />
        <div className="balance-container">
          <p className="heading1">Your Expenses</p>
          <p data-testid="expensesAmount" className="balance">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
