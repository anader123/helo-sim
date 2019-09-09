import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import axios from 'axios';

class Form extends Component {
    constructor() {
        super();

        this.state = {
            title: '', 
            img: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fac%2FNo_image_available.svg%2F600px-No_image_available.svg.png&f=1',
            content: '', 
        }
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    createPost = (id) => {
        const {img, title, content} = this.state; 
        axios.post(`/api/post/${id}`, {
            title, 
            img,
            content
        })
            .then(console.log('post was sent'))
        setTimeout(() => {
            this.props.history.push('/dashboard')
        }, 150)
    };

    render() {
        const {img, title, content} = this.state;
        const { id } = this.props; 
        console.log(this.props)
        return (
            <div>
                <img src={img} alt="" />
                <input placeholder='title'
                        value={title}
                        onChange={this.handleChange}
                        name='title'/>
                <input placeholder='image url'
                        // value={img}
                        onChange={this.handleChange}
                        name='img'/>
                <input placeholder='content'
                        value={content}
                        onChange={this.handleChange}
                        name='content'/>
                <button onClick={() => this.createPost(id)}>Post</button>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {id: state.id}
}

export default connect(mapStateToProps)(Form); 