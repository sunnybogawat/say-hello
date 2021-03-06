import React from 'react';

class Awesome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
    this.onUnLike = this.onUnLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  onUnLike () {
    let newLikesCount = this.state.likesCount - 1;
    if(newLikesCount > -1 ) {
      this.setState({likesCount: newLikesCount});
    }
  }

  render() {
    return (
      <div>
        Total Likes : <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like</button></div>
        <div><button onClick={this.onUnLike}>UnLike</button></div>
      </div>
    );
  }

}

export default Awesome;
