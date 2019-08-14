import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { DeliveryDate } from '../utils/Calendar'
import Results from './Results'
import { Link } from 'react-router-dom'

const packageObj = [
  {
    packageName: '',
    unitQuantity: '',
    dueDate: new Date(),
    textArea: '',
    files: [] //this needs to be populated
  }
]
class PackageInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      packageInv: packageObj,
      newPackage: {
        packageName: '',
        unitQuantity: '',
        dueDate: new Date(),
        textArea: '',
        files: []
      }
    }
    this.handlePackageName = this.handlePackageName.bind(this)
    this.handleQuantity = this.handleQuantity.bind(this)
    this.handleDescChange = this.handleDescChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    const { packageInv, newPackage } = this.state
    this.setState({
      packageInv: [...packageInv, newPackage],
    }, () => {
      for (let val in newPackage) {
        newPackage[val] = ''
      }
      this.setState({ newPackage })
    })
    // const { packageName, unitQuantity, dueDate, textArea } = this.state
    alert(`Package Info: \n
      name: ${newPackage.packageName.value}\n
      units: ${newPackage.unitQuantity.value}\n
      due date: ${newPackage.dueDate}\n
      description: ${newPackage.textArea.value}
    `)
  }
  handlePackageName(event, packageName) {
    const { newPackage } = this.state
    newPackage[packageName] = event.target.value
    this.setState({ newPackage })
  }
  handleQuantity(event) {
    this.setState({ unitQuantity: event.target.value })
  }
  handleDescChange(event) {
    this.setState({ textArea: event.target.value })
  }
  render() {
    const {packageInv, newPackage} = this.state
    const { packageName, unitQuantity, dueDate, textArea } = newPackage
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
                value={packageName.value}
                onChange={(event) => this.handlePackageName(event, packageName)} />
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
                value={unitQuantity.value}
                onChange={(event) => this.handleQuantity(event, unitQuantity)} />
            </label>
          </li>
          <li>
            <label>
              Delivery Due Date:
              <DatePicker 
              selected={this.state.dueDate} 
              onChange={(event) => this.setState({dueDate: event})} 
              />
            </label>
          </li>
          <li>
            <label>
              Description & Notes:
                <br />
              <textarea
                id='desc'
                value={textArea.value}
                placeholder='describe package'
                onChange={(event) => this.handleDescChange(event, textArea)} />
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

function PackagePreview({ bundlePackage, onReset, label }) {
  return (
    <div className='column'>
      {bundlePackage}
    </div>
  )
}

PackagePreview.propTypes = {
  bundlePackage: PropTypes.object.isRequired,
  onReset: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
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