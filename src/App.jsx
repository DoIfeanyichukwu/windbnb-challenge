import React, { Component } from 'react'

import EditSearch from './components/EditSearch/EditSearch'
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
import data from './util/data.json'
import { StayCardTitle } from './components/StayCard/StayCardTitle'


let dataMap = Array.from(data);


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: 0,
      adults: 0,
      children: 0,
      toggleSearch: false,
      location: '',
      data: dataMap
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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

    if (target.previousElementSibling.name == 'adults')
    {
      this.setState((state, props) => ({
        adults: state.adults + 1
      }))

      target.previousElementSibling.value = this.state.adults;
    }

    if (target.previousElementSibling.name == 'children')
    {
      this.setState((state, props) => ({
        children: state.children + 1
      }))
      target.previousElementSibling.value = this.state.children;
    }
    
    this.setState((state, props) => ({
      guests: state.guests + 1
    }))
  }

  handleSearch(event) {
    event.preventDefault();
   

    let newMap = dataMap.filter(
      stay => {
        if (`${stay.city}, ${stay.country}`.includes(this.state.location) && stay.maxGuests >= this.state.guests) {
          return stay;
        } 
      }
    )

    console.log(newMap);

    this.setState({
      toggleSearch: false,
      data: newMap
    })
  }

  handleGuestSubtract(event) {
    event.preventDefault();
    let target = event.target;

    if (target.nextElementSibling.name == 'adults')
    {
      if (this.state.adults == 0) return;
      this.setState((state, props) => ({
        adults: state.adults - 1
      }))

      target.nextElementSibling.value = this.state.adults;
    }

    if (target.nextElementSibling.name == 'children')
    {
      if (this.state.children == 0) return;
      this.setState((state, props) => ({
        children: state.children - 1
      }))
      target.nextElementSibling.value = this.state.children;
    }
    
    this.setState((state, props) => ({
      guests: state.guests - 1
    }))
  }

  handleLocationInputChange(event) {
    event.preventDefault()
    this.setState({
      location: event.target.value
    })
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
          handleSearch={this.handleSearch}
          handleGuestAdd={this.handleGuestAdd}
          handleGuestSubtract={this.handleGuestSubtract}
          guestNo={this.state.guests}
          handleInputChange={this.handleLocationInputChange}
          handleLocationButtonClick={this.handleLocationButtonClick}
          adults={this.state.adults}
          children={this.state.children}
        /> : null
        }
        <Header 
          handleSearchBtn={this.handleSearchBtn}
          location={this.state.location}
          guests={this.state.guests}
        />
        <Main number={data.length} data={this.state.data}/>
        <Footer />
      </div>
    )
  }
}

