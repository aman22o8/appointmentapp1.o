// Write your code here

import {v4 as uniqueId} from 'uuid'

import {Component} from 'react'

import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem/index'

import './index.css'

// const myInitialArray = [
//   {
//     id: uniqueId(),
//     title: 'Dentist',
//     dateformat: '20 july 2021, monday',
//     isStared: true,
//   },
//   {
//     id: uniqueId(),
//     title: 'Dentist',
//     dateformat: '20 july 2021, monday',
//     isStared: true,
//   },
//   {
//     id: uniqueId(),
//     title: 'Dentist',
//     dateformat: '20 july 2021, monday',
//     isStared: true,
//   },
// ]

class Appointments extends Component {
  state = {initialTitle: '', initialDate: '', myArray: [], staredbtn: false}

  myclickStar = id => {
    // const {myArray} = this.state

    this.setState(prevState => ({
      myArray: prevState.myArray.map(each => {
        if (each.id === id) {
          return {...each, isStared: !each.isStared}
        }
        return each
      }),
    }))
  }

  handleSubmit = event => {
    event.preventDefault()
    const {initialTitle, initialDate} = this.state

    // const myDateArray = initialDate.split('-')
    const formattedDate =
      // initialDate
      //   ?
      format(new Date(initialDate), 'dd MMMM yyyy, EEEE')
    //   : ''

    const newItem = {
      id: uniqueId(),
      title: initialTitle,
      dateformat: formattedDate,
      isStared: true,
    }

    this.setState(prevState => ({
      myArray: [...prevState.myArray, newItem],
      initialTitle: '',
      initialDate: '',
    }))
  }

  filterStared = () => {
    const {myArray} = this.state
    const filtermyStars = myArray.filter(each => each.isStared === false)
    this.setState({myArray: filtermyStars, staredbtn: true})
  }

  handleTitle = event => this.setState({initialTitle: event.target.value})

  handleDate = event => this.setState({initialDate: event.target.value})

  render() {
    const {initialDate, initialTitle, myArray, staredbtn} = this.state
    const enterStar = staredbtn ? 'changeback' : ''
    // console.log(myArray)
    return (
      <div className="main_container">
        <div className="card_container">
          <div className="header">
            <div className="left_container">
              <h1 className="main_heading">Add Appointment</h1>
              <form onSubmit={this.handleSubmit} className="form_container">
                <label htmlFor="mytitle" className="label1">
                  TITLE
                </label>
                <input
                  value={initialTitle}
                  onChange={this.handleTitle}
                  id="mytitle"
                  type="text"
                  className="input1"
                  placeholder="Title"
                />
                <label htmlFor="mydate" className="label1">
                  DATE
                </label>
                <input
                  value={initialDate}
                  onChange={this.handleDate}
                  id="mydate"
                  type="date"
                  className="input1"
                  placeholder="dd/mm/yyyy"
                />
                <button type="submit" className="addBtn">
                  Add
                </button>
              </form>
            </div>
            <img
              className="images1"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
              alt="appointments"
            />
          </div>
          <hr className="horizontal_line" />
          <div className="appointment_container">
            <h1 className="appointment1">Appointments</h1>
            <button
              onClick={this.filterStared}
              type="button"
              className={`stared_button ${enterStar}`}
            >
              Starred
            </button>
          </div>
          <ul className="list_container">
            {myArray.map(each => (
              <AppointmentItem
                key={each.id}
                eachItem={each}
                myclickStar={this.myclickStar}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
