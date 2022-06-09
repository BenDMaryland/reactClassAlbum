import React, { Component } from 'react'
import Card from './Card'

export default class App extends Component {

  state = {
    albums: [],
    search: ""
  }

  fetchAlbums(e) {

    fetch(`https://itunes.apple.com/search?term=${this.state.search}&media=music&entity=album&attribute=artistTerm&limit=200`)
      .then(r => r.json())
      .then(albumsList =>
        this.setState({ albums: albumsList.results }))
  }

  changeSearch(e) {
    this.setState({ search: e.target.value });
    if (e.key === "Enter") { this.fetchAlbums() }
  }

  render() {
    return (
      <div>
        <p>Album searcher. Rough draft no CSS, basic functonality</p>
        <input onKeyPress={(e) => this.changeSearch(e)} className='search-bar'></input>
        <button onClick={() => this.fetchAlbums()} className='search-bar'>search</button>

        {this.state.albums.map((album) => (
          <Card album={album}></Card>
        ))}

      </div>
    )
  }
}
