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
        console.log(resp)
        this.setState({
            posts: resp.data.slice(0, 10)
        })
    }

    render() {

        const {posts} = this.state
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <span className="card-title">
                                {post.title}
                            </span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">
                No posts yet
            </div>
        ) 

        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

export default Home