import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage= (props) => {
    const chatProps= useMultiChatLogic('f231a5fa-aecc-4872-b581-d1b149870a24', 
    props.user.username, 
    props.user.secret)
    
    return <div style={{heigt: '100vh'}}> 
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style= {{height: '100%'}} />
            </div>
}

export default ChatsPage