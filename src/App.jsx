import React, { Component } from 'react'

import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
import data from './util/data.json'


export default class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <Main number={12} data={data}/>
        <Footer />
      </div>
    )
  }
}
