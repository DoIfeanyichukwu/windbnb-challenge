import React, { Component } from 'react'

import EditSearch from './components/EditSearch/EditSearch'
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
import data from './util/data.json'


export default class App extends Component {

  render() {
    return (
      <div className="app">
        <div className='edit_search_container'>
          <EditSearch />
          <div className="shade"></div>
        </div>
        <Header />
        <Main number={12} data={data}/>
        <Footer />
      </div>
    )
  }
}
