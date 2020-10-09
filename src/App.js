import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAnime } from './store/actions/animes';
import './App.css';
import {Store} from './store';  

class App extends Component {
  state = {
    newAnime: ''
  }

  componentDidMount() {
    console.log(Store.getState().animes)
  }

  handlerChangeInput = (event) => {
    this.setState({ newAnime: event.target.value });
  }

  handlerSubmit = (event) => {
    event.preventDefault();
    this.props.addAnime(this.state.newAnime);
  }

  render() {
    return (
      <div className="App">
        <main className="App-header">
          <h1>My Anime List</h1>

          <form onSubmit={this.handlerSubmit}>
            <input
              type="text"
              value={this.state.newAnime}
              onChange={(event) => this.handlerChangeInput(event)}
              required
            />

            <button type="submit">+</button>
          </form>

          <ul>
            {this.props.myList !== undefined && this.props.myList.map((anime, index) => (
              <li key={index}>{anime}</li>
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

const mapStateToPropos = store => ({
  myList: store.animes.myList
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addAnime }, dispatch);

export default connect(mapStateToPropos, mapDispatchToProps)(App);
