import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import Results from './Results'
import { Link } from 'react-router-dom'

class PackageInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      packageName: '',
      unitQuantity: 1,
      dueDate: new Date(),
      textArea: '',
      results: false,
    }
    this.handleQuantity = this.handleQuantity.bind(this)
    this.handlePackageName = this.handlePackageName.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleDescChange = this.handleDescChange.bind(this)
  }
  handlePackageName(event) {
    this.setState({ packageName: event.target.value })
  }
  handleQuantity(event) {
    this.setState({ unitQuantity: event.target.value })
  }
  handleDateChange(event) {
    this.setState({ dueDate: event })
  }
  handleDescChange(event) {
    this.setState({ textArea: event.target.value })
  }
  render() {
    const {results} = this.state
    if (results === true) {
      return (
        <Results 
          packName={this.state.packageName} 
          unitQuant={this.state.unitQuantity}
          dueBy={this.state.dueDate.toLocaleString()}
          desc={this.state.textArea}
        />
      )
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          <li>
            <label>
              Package Name:
                <input
                type='text'
                id='packageName'
                placeholder='package name'
                autoComplete='off'
                value={this.state.packageName}
                onChange={this.handlePackageName} />
            </label>
          </li>
          <li>
            <label>
              Upload Package Files:
                <input
                type='file'
                id='file'
                multiple />
            </label>
          </li>
          <li>
            <label>
              Requested Unit Quantity:
                <input
                type='text'
                id='unitQuant'
                placeholder='unit quantity'
                value={this.state.unitQuantity}
                onChange={this.handleQuantity} />
            </label>
          </li>
          <li>
            <label>
              Delivery Due Date:
                <DatePicker
                selected={this.state.dueDate}
                onChange={this.handleDateChange}
              />
            </label>
          </li>
          <li>
            <label>
              Description & Notes:
                <br />
              <textarea
                id='desc'
                placeholder='describe package'
                onChange={this.handleDescChange} />
            </label>
          </li>
        </ul>
        <button className='btn light-btn btn-space'
          onClick={() => this.setState({ results: true })}>
          Create Package
        </button>
      </form>
    )
  }
}

export default class Create extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='package-container' >
          <h1 className='center-text header-lg'>Create a New Package</h1>
          <div>
            <PackageInput />
          </div>
        </div>
      </React.Fragment>
    )
  }
}