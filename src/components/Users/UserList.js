import classes from './UserList.module.css';
import Card from '../UI/Card';

const UserList = (props) => {




    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map(user => <li key={user.id}>
                    <img src={user.avatar} alt={user.id}></img>
                    <div>{user.first_name}  {user.last_name}
                        <p><a href={`mailto:${user.email}`}>{user.email}</a></p>
                    </div>
                </li>)}
            </ul>

        </Card>
    )
}

export default UserList;