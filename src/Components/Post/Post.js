import React, { Component } from 'react';
import axios from 'axios'; 

export default class Post extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            img: '', 
            content: '',
            username: '',
            profile_pic: ''
        }
    };

    componentDidMount() {
        const { title, profile_pic, img, content, username } = this.props.post
        this.setState({
            title,
            img, 
            content,
            username,
            profile_pic
        })

    }

    // FIXME: Something keeps breaking here 
    // getSinglePost = () => {
    //     const {id} = this.props.match.params; 

    //     axios.get(`/api/post/${id}`)
    //         .then(res => {
    //             const {title, img, content, username, profile_pic} = res.data; 
    //             this.setState({
    //                 title,
    //                 img, 
    //                 content,
    //                 username,
    //                 profile_pic
    //             })
    //         })
    // };

    render() {
        const { title, profile_pic, img, content } = this.state
        return (
            <div>
                <h3>{title}</h3>
                {/* <h3>{username}</h3> */}
                <img src={img} alt='post img'/>
            </div>
        )
    }
}
