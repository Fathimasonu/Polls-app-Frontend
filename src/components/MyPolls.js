import { useContext } from 'react'
import { UserContext } from '../App' 
import PollsList from './PollsList'
    
function MyPolls(props){
    const { userState } = useContext(UserContext)
    return (
        <div>
            <h2>MyPoll Component--{userState.myPolls.length}</h2>
            <PollsList polls={userState.myPolls}/> 
        </div> 
    )
}

export default MyPolls