
import React, { Component } from 'react'
import "./card.css"
export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collectionName: this.props.album.collectionName,
            artworkUrl100: this.props.album.artworkUrl100,
            artistName: this.props.album.artistName,
            collectionPrice: this.props.album.collectionPrice
        }
    }

    render() {
        return (
            <div className='card'>
                <p>{this.state.collectionName}</p>
                <img src={this.state.artworkUrl100} alt="Girl in a jacket" ></img>
                <p>{this.state.artistName}</p>
                <p>{this.state.collectionPrice}</p>

            </div>
        )
    }
}
let objExm = {
    "wrapperType": "collection",
    "collectionType": "Album",
    "artistId": 485571263,
    "collectionId": 485571261,
    "amgArtistId": 989705,
    "artistName": "The Wonder Years",
    "collectionName": "The Upsides (Deluxe Version)",
    "collectionCensoredName": "The Upsides (Deluxe Version)",
    "artistViewUrl": "https://music.apple.com/us/artist/the-wonder-years/485571263?uo=4",
    "collectionViewUrl": "https://music.apple.com/us/album/the-upsides-deluxe-version/485571261?uo=4",
    "artworkUrl60": "https://is2-ssl.mzstatic.com/image/thumb/Music/05/c9/30/mzi.pecklolt.jpg/60x60bb.jpg",
    "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music/05/c9/30/mzi.pecklolt.jpg/100x100bb.jpg",
    "collectionPrice": 11.99,
    "collectionExplicitness": "notExplicit",
    "trackCount": 16,
    "copyright": "℗ 2010 Hopeless Records, Inc.",
    "country": "USA",
    "currency": "USD",
    "releaseDate": "2010-09-21T07:00:00Z",
    "primaryGenreName": "Alternative"
}