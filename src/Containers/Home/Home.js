import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as Actions from '../../Store/Actions/index';
import { MainDecorator } from '../../HOC/MainDecorator';
class Home extends Component {
  state = {
    name: "home"
  }
  componentDidMount() {
    this.props.getPostsData();
  }
  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}
const mapStateToProps = state => ({
  posts: state.posts.postItems
})
const mapDispatchToProps = dispatch => ({
  getPostsData: () => dispatch(Actions.getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainDecorator(Home, {name:"Home"}));
