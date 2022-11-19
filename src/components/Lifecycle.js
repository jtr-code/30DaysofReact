
import React, { Component } from 'react'

class Lifecycle extends Component {
    constructor(props) {
        super(props)
        console.log("inside constructor")
    }
    componentWillMount = () => {
        console.log(" component will mount worked")
    }
  render() {
      console.log("Inside render")
      
      return (
        <div>
            <strong>LifeCycle component</strong>
      </div>
      )
    }
    componentDidMount = () => {
        console.log("component did mount worked")
    }
}

export default Lifecycle