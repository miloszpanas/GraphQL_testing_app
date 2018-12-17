import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { content: "" };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    }).then(() => this.setState({ content: "" }));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="">Add a lyric</label>
        <input 
          type="text"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}  
        />
      </form>
    );
  }
}

const mutation = gql `mutation AddLyricToSong($content: String, $songId: ID) {
  addLyricToSong(content: $content, songId: $songId) {
    id,
    lyrics {
      content
    }
  }
}
`;

export default graphql(mutation)(LyricCreate);