import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux'; 
import './Nav.css';
import axios from 'axios'; 

class Nav extends Component {

  logout = () => {
    axios.post('/auth/logout') 
      .catch(err => console.log(err))
  }

    render() {
        return (
            <div className="Navbar">
            { this.props.location.pathname === '/'
            ?
            (null
            )
            :
            (<div className='nav-conatiner'>
              <div className='nav-button-container'>
                <Link to='/dashboard'><button>Home</button></Link>
                <Link to='/new'><button>New Post</button></Link>              
                <Link to='/'><button onClick={this.logout}>Logout</button></Link>
              </div>
              <div className='nav-profile-info'>
                <h3>Name: {this.props.username}</h3>
                <h3>Id: {this.props.id}</h3>
                <img src={this.props.profile_pic} alt='profile pic'/>
              </div>
            </div>)
            }
          </div>
        )
    }
};

function mapStateToProps(state) {
  return {
    username: state.username, 
    profile_pic: state.profile_pic,
    id: state.id  
  }
};

export default connect(mapStateToProps)(Nav); 