import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.album)
        return (
            <div>
                <p>{this.props.album.collectionName}</p>
                <img src={this.props.album.artworkUrl100} alt="Girl in a jacket" width="100" height="100"></img>
                <p>{this.props.album.artistName}</p>
                <p>{this.props.album.collectionPrice}</p>

            </div>
        )
    }
}
let objexm = {
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