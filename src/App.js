import React, { Component } from 'react'
import Card from './Card'
import "./App.css"
export default class App extends Component {

  state = {
    albums: [],
    search: "",
    albumsToShow: 5,
    showLoading: false,
    loaded: false
  }

  fetchAlbums(e) {
    this.setState(prevState => ({
      showLoading: true
    }));

    fetch(`https://itunes.apple.com/search?term=${this.state.search}&media=music&entity=album&attribute=artistTerm&limit=200`)
      .then(r => r.json())
      .then(albumsList =>
        this.setState({
          loaded: true,
          showLoading: false,
          albums: albumsList.results
        }))
  }

  changeSearch(e) {
    this.setState({ search: e.target.value });
    if (e.key === "Enter") { this.fetchAlbums() }
  }




  render() {
    return (
      <div>

        <header>
          <p>Album searcher. Rough draft basic  CSS, basic functonality</p>
          <input onKeyPress={(e) => this.changeSearch(e)} className='search-bar'></input>
          <button onClick={() => this.fetchAlbums()} className='search-bar'>search</button>
          {this.state.showLoading ? <img id='loading-img' src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="loading-gif" /> : <></>}
          {this.state.loaded ? <p>{this.state.albums.length} results</p> : <></>}
        </header>
        <section>
          {this.state.albums.map((album, index) => {
            if (this.state.albumsToShow > index) return (
              <Card key={album.collectionId} album={album}></Card>)
          })}
        </section>
        {this.state.loaded ? <button id="show-more" onClick={()=>this.setState(prevState=>({albumsToShow:prevState.albumsToShow+5}))  }                 >show more</button> : <></>}
      </div>
    )
  }
}
