import React, { Component } from 'react'

import EditSearch from './components/EditSearch/EditSearch'
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
import data from './util/data.json'

console.log(data)


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: 0,
      toggleSearch: false,
      location: ''
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleGuestAdd = this.handleGuestAdd.bind(this);
    this.handleSearchBtn = this.handleSearchBtn.bind(this);
    this.handleGuestSubtract = this.handleGuestSubtract.bind(this);
    this.handleLocationInputChange = this.handleLocationInputChange.bind(this);
    this.handleLocationButtonClick = this.handleLocationButtonClick.bind(this);
  }

  handleSearchBtn(event) {
    event.preventDefault();
    this.setState({toggleSearch: true});
  }

  handleClose(event) {
    event.preventDefault();
    this.setState({toggleSearch: false});
  }

  handleGuestAdd(event) {
    event.preventDefault();
    let target = event.target;

    target.previousElementSibling.value++;
    
    this.setState((state, props) => ({
      guests: state.guests + 1
    }))
  }

  handleGuestSubtract(event) {
    event.preventDefault();
    let target = event.target;
    if (target.nextElementSibling.value == 0) return;
    target.nextElementSibling.value--;
    this.setState((state, props) => {
      if (state.guests == 0) return;
      return {guests: state.guests - 1};
    })
  }

  handleLocationInputChange(event) {
    console.log('handling input...');
    console.log(event.target.value);
  }

  handleLocationButtonClick(event) {
    event.preventDefault();
    location_input.value = event.target.innerText;
    this.setState({
      location: event.target.innerText
    })
  }

  render() {
    return (
      <div className="app" >
        {
        this.state.toggleSearch ? 
        <EditSearch 
          handleClose={this.handleClose} 
          handleGuestAdd={this.handleGuestAdd}
          handleGuestSubtract={this.handleGuestSubtract}
          guestNo={this.state.guests}
          handleInputChange={this.handleLocationInputChange}
          handleLocationButtonClick={this.handleLocationButtonClick}
        /> : null
        }
        <Header 
          handleSearchBtn={this.handleSearchBtn}
        />
        <Main number={12} data={data}/>
        <Footer />
      </div>
    )
  }
}

