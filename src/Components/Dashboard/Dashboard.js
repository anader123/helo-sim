import React, { Component } from 'react';
import Post from '../Post/Post';
import axios from 'axios'; 
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom'; 

class Dashboard extends Component {
    constructor() {
        super(); 

        this.state = {
            searchInput: '',
            boxChecked: false, 
            posts: []
        }
    };

    componentDidMount() {
        this.getPosts(); 
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleCheck = () => {
        this.setState({
            boxChecked: !this.state.boxChecked
        })
        this.componentDidMount(); 
    }

    getPosts = () => {
        const id = this.props.id; 
        const { boxChecked, searchInput } = this.state; 
        axios.get(`/api/posts/${id}/?user=${boxChecked}&title=${searchInput}`)
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
            .catch(err => console.log(err))
    }

    resetPosts = () => {
        this.setState({
            searchInput: '',
            boxChecked: false, 
        })
        this.getPosts(); 
    }

    render() {
        const {posts} = this.state;
        const mappedPosts = posts.map((post, index) => {
            const {id} = post; 
            const {match} = this.props; 
            return(
                <Link to={`/post/${id}`}><Post match={match} key={index} post={post} /></Link>
            )
        })
        return (
            <div>
                <input type='text'
                        placeholder='search by title'
                        value={this.state.username}
                        onChange={this.handleChange}
                        name='searchInput'/>
                <button onClick={this.getPosts}>Search</button>
                <button onClick={this.resetPosts}>Reset</button>
                <input type='checkbox' 
                        name='check1'
                        value={this.state.boxChecked} 
                        onClick={this.handleCheck}
                         />
                <span>My Posts</span>
                {mappedPosts}
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {id: state.id}
}

export default connect(mapStateToProps)(Dashboard); 
