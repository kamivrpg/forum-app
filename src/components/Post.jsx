import React from 'react'

class Post extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {
      comments: props.comments,
      newText: ''
    }
  }

  addComment = () => {
    console.log('addComment')
    let newComment = this.state.newText
      
    this.setState({
      comments: [...this.state.comments, newComment],
    })
  }

  updateNewCommentText = (e) => {
    console.log(e.target.value)
    this.setState({
      newText: e.target.value
    })
  }

  render () {
    let comments = this.state.comments.map(c => <div style={{border: '1px solid blue'}}>{c}</div>)
    return <div style={{border: '1px solid red'}}>
      <div>
        {this.props.text}

      </div>
      <div>
        <textarea onChange={this.updateNewCommentText} value={this.state.newText}></textarea>
        <div><button onClick={this.addComment}>Comentar</button></div>
      </div>
      <div>
        {
          comments
        }
      </div>
    </div>
  } 
}

export default Post