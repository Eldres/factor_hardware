import React from 'react'

export default class Results extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='packageView'>
          <div className='package-name'>
            <h1>
              {this.props.packName}
            </h1>
          </div>
          <div className='package-dueDate'>
            <h3>Due Date</h3>
            {this.props.dueBy}
          </div>
          <div className='package-files'>
            <h3>Package Files</h3>
            {/* {files} */}
          </div>
          <div className='package-quantity'>
            <h3>Requested Quantities</h3>
            {this.props.unitQuant}
          </div>
          <div className='package-desc'>
            <h3>Description and Notes</h3>
            {this.props.desc}
          </div>
        </div>
        <button
          onClick={this.props.onReset}
          className='btn dark-btn btn-space'>
          New Package
        </button>
      </React.Fragment>
    )
  }
}