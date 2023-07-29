import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onDeleteBox = id => {
    const {transactionList} = this.state

    const filteredList = transactionList.filter(eachList => id !== eachList.id)

    this.setState({transactionList: filteredList})
  }

  addTransaction = event => {
    event.preventDefault()

    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )
    const {displayText} = typeOption

    const newTransactionList = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransactionList],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  userType = event => {
    this.setState({titleInput: event.target.value})
  }

  userAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onSelectType = event => {
    this.setState({optionId: event.target.value})
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expensesAmount = 0

    transactionList.forEach(each => {
      if (each.type === 'Expenses') {
        expensesAmount += each.amount
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0

    transactionList.forEach(each => {
      if (each.type === 'Income') {
        incomeAmount += each.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionList.forEach(each => {
      if (each.type === 'Expenses') {
        expensesAmount += each.amount
      } else {
        incomeAmount += each.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  render() {
    const {titleInput, amountInput, optionId, transactionList} = this.state

    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="top-section">
            <h1 className="heading"> Hi, Richard</h1>
            <p className="heading">
              Welcome back to your
              <span className="span-ele">Money Manager</span>
            </p>
          </div>

          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />

          <div className="bottom-container">
            <form className="form-container" onSubmit={this.addTransaction}>
              <h1>Add Transaction</h1>
              <label className="input-heading" htmlFor="title">
                TITLE
              </label>
              <input
                onChange={this.userType}
                id="title"
                type="text"
                placeholder="TITLE"
                value={titleInput}
                className="title-input"
              />
              <br />
              <label className="input-heading" htmlFor="amount">
                AMOUNT
              </label>
              <input
                className="title-input"
                onChange={this.userAmount}
                id="amount"
                type="text"
                placeholder="AMOUNT"
                value={amountInput}
              />
              <br />
              <label className="input-heading" htmlFor="type">
                TYPE
              </label>
              <select
                className="title-input"
                value={optionId}
                id="type"
                onChange={this.onSelectType}
              >
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button className="button" type="submit">
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="history">History</h1>
              <ul>
                <li className="list-container">
                  <p className="title">Title</p>
                  <p className="title">Amount</p>
                  <p className="title type">Type</p>
                </li>
                {transactionList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    onDeleteBox={this.onDeleteBox}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
