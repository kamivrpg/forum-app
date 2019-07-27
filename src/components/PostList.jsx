import React from 'react'
import Post from './Post.jsx'

class PostList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: props.posts,
      newText: ''
    }
  }

  addPost = () => {
    let newPost = {
      text: this.state.newText,
      comments: []
    }
    this.setState({
      posts: [...this.state.posts, newPost],
    })
  }

  updateNewPostText = (e) => {
    console.log(e.target.value)
    this.setState({
      newText: e.target.value
    })
  }

  render() {

    let posts = this.state.posts.map(p => 
      <Post text={p.text} comments={p.comments}/>
    )
    return <div>
      <h1>PostList</h1>
      <textarea onChange={this.updateNewPostText} value={this.state.newText}></textarea>
      <div><button onClick={this.addPost}>Agregar Post</button></div>
      {
        posts
      }
    </div>
  }
}

export default PostList