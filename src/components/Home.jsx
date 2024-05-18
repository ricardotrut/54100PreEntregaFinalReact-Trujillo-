import React, { Component } from 'react'
import Productos from './Productos'
import productos from '../productos'

export class Home extends Component {
  render() {
    return (
      <div>
        <Productos items={productos}/>
      </div>
    )
  }
}

export default Home