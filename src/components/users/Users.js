import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
    const githubContext = useContext(GithubContext);

    // destructor so we don't need to do githubContext.loading
    // or githubContext.users
    const { loading, users } = githubContext;

    if(loading){
        return <Spinner/>
    } else {
    
    return (
    <div style={userStyle}>
        {users.map(user => (
            <UserItem key={user.id} user={user}/>
        ))}
    </div>
    );
    }


}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}


export default Users;