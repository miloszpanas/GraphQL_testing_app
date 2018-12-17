import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSong from './../queries/fetchSong';
import { Link } from 'react-router';

import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;
    
    // always check if the query is still pending, and show some loader, or not
    if (!song) { return <div></div> }

    return (
      <div>
      <Link to="/">Go back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics}/>
        <LyricCreate songId={this.props.params.id}/>
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);
