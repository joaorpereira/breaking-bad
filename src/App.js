
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Search from './components/Search'
import CardGrid from './components/CardGrid'
import Footer from './components/Footer'
import axios from 'axios'
import './App.css'

export default class App extends Component {
  state = {
    characters: [],
    author: "",
  }

  componentDidMount(){
    this.getAll()
  }

  getAll = () => {

    const query = this.state.author
    const request = axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    
    request
      .then(response => {
        this.setState({characters: response.data})
      })
      .catch(error => {
        console.log(error)
      })
  }

  authorText = (event) => {
    const text = event.target.value 
    this.setState({author: text})
  }

  render() {

    return (
      <React.Fragment>
        <NavBar/>
        <Search
          authorText = {this.authorText}         
        />
        <CardGrid
         characters = {this.state.characters}        
         authorText = {this.state.author}
        />         
        <Footer/>
      </React.Fragment>
    )
  }
}












   // const quote = text.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("+")