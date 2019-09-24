import React, {Component} from 'react';

class UserItem extends Component {

    render() {

        // const {login, avatar_url, html_url} = this.props.user;
        // if we used that, we won't need to write 'this.props.user' everytime below

        return <div className="card text-center">
            <img 
            src={this.props.user.avatar_url} 
            alt="" 
            className="round-img" 
            style={{width: '60px' }}
            />
            <h3>{this.props.user.login}</h3>
            <div>
                <a href={this.props.user.html_url} className="btn btn-dark btn-sm my-1">More</a>
            </div>
        </div>;
    }
}

export default UserItem;