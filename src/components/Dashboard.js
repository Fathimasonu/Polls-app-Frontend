import { useContext } from 'react'
import {UserContext} from '../App'
function Dashboard() {
    const { userState } = useContext(UserContext)
    return (
        <div>
            <h2>Dashboard Component</h2>
            <p>Welcome, { userState.user.username }!</p>
            <h2>Polls--{userState.myPolls.length}</h2>
        </div>
    )
}

export default Dashboard 