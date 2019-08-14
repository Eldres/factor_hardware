import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
// import Results from './Results'
import { Link } from 'react-router-dom'

class PackageInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      packageInv: [
        {
          packageName: '',
          unitQuantity: '',
          dueDate: new Date(),
          textArea: '',
          files: []
        }
      ]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState(prevState => ({
      packageInv: prevState.packageInv.map(
        (item) => item.key === key ? { ...item } : item)
    }))
    alert(`Package Info: \n
      name: ${packageInv.packageName}\n
      units: ${packageInv.unitQuantity}\n
      due date: ${packageInv.dueDate}\n
      description: ${packageInv.textArea}
    `)
  }
  handleChange(event) {
    this.setState(prevState => ({
      ...prevState,
      packageInv: {
        ...prevState.packageInv,
        packageName,
        unitQuantity,
        dueDate,
        textArea
      }
    }))
  }
  render() {
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
                value={this.state.packageInv.packageName}
                onChange={(event) => this.handleChange(event, packageName)} />
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
                id='unitQuantity'
                placeholder='unit quantity'
                value={this.state.packageInv.unitQuantity}
                onChange={(event) => this.handleChange(event, unitQuantity)} />
            </label>
          </li>
          <li>
            <label>
              Delivery Due Date:
              <DatePicker
                selected={this.state.packageInv.dueDate}
                onChange={(event) => this.handleChange(event, dueDate)}
              />
            </label>
          </li>
          <li>
            <label>
              Description & Notes:
                <br />
              <textarea
                id='desc'
                value={this.state.packageInv.textArea}
                placeholder='describe package'
                onChange={(event) => this.handleChange(event, textArea)} />
            </label>
          </li>
        </ul>
        <button
          className='btn dark-btn'
          type='submit'
        >
          Submit
          </button>
      </form>
    )
  }
}

export default class Create extends React.Component {
  render() {
    // const { packageItem } = this.state
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