import React, {Component} from 'react'
import axios from 'axios'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/posts')
    
    this.setState({
      posts: resp.data.slice(0, 10)
    })
  }

  render() {
    const postList = this.state.posts.length ? (
      this.state.posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">There is no post left</div>
    )

    return (
      <div>
        {postList}
      </div>
    )
  }
    
}

export default Home