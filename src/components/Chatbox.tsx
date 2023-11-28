import { useState, useEffect, useRef, FormEvent, ChangeEvent } from 'react';
import styled from 'styled-components';
import UserMessage from './UserMessage';
import { Socket, io } from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

const Container = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 82px);
`
const ChatWindow = styled.div`
    flex: 1;
    overflow: auto;

    color: #40513B;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='0.7' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(37.25) translate(-973.15 -729.87)'%3E%3Cuse fill='%23fcfcfc' href='%23s' y='2'/%3E%3Cuse fill='%23fcfcfc' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s'/%3E%3Cuse fill='%23f7f7f7' href='%23s' x='2'/%3E%3Cuse fill='%23f7f7f7' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(37.25) translate(-973.15 -729.87)'%3E%3Cg fill='%23f5f5f5'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(37.25) translate(-973.15 -729.87)'%3E%3Cg fill='%23f5f5f5'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(37.25) translate(-973.15 -729.87)'%3E%3Cg fill='%23f2f2f2'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(37.25) translate(-973.15 -729.87)'%3E%3Cg fill='%23ffffff'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23efefef'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(37.25) translate(-973.15 -729.87)'%3E%3Cg fill='%23FFFFFF'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(37.25) translate(-973.15 -729.87)'%3E%3Cg fill='%23FFFFFF'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(37.25) translate(-973.15 -729.87)'%3E%3Cg fill='%23FFFFFF'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
`
const MessageBox = styled.form`
    flex-basis: 60px;
    border-top: 2px solid #9DC08B;
    background-color: #EDF1D6;
    display: flex;
`
const StyledInput = styled.input`
    font-size: 20px;
    padding: 12px;
    margin: 12px;
    letter-spacing: 0.08rem;
    outline: 0;
    border-radius: 6px;
    border: 2px solid #9DC08B;

    flex: 1;

    transition: all .1s ease-in-out;
    &:focus {
        border-color: #609966;
    }
`
const StyledSubmit = styled.button`
    font-size: 18px;
    padding: 0 20px;
    margin: 12px 12px 12px 0;
    border: 2px solid #9DC08B;
    background-color: white;
    color: w;
    
    transition: all .1s ease-in-out;

    &:hover {
    background-color: white;
    border: 2px solid #9DC08B;
    }

    &:focus {
    border: 2px solid #9DC08B;
    outline: none;
    }

    &:active{
        background-color: #EDF1D6;
        scale: 0.95;
    }
`
const BottomScrollDiv = styled.div`
    height: 0;
    width: 0;
`

interface ChatBoxProps {
    activeUser: string,
}

interface INewMessage {
    message: string,
    fromName: string,
}

function Chatbox({ activeUser } : ChatBoxProps){
    const [currentSocket, setCurrentSocket] = useState<Socket | null>(null);
    const [roomId, setRoomId] = useState("");
    const [roomData, setRoomData] = useState({});

    const [newData, setNewData] = useState<Object[]>([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [textbox, setTextbox] = useState("");

    const currentUser = localStorage.getItem('id');

    useEffect(() => {
        if (currentSocket === null) {
            const socket = io(
                `https://messenger-api-production.up.railway.app/?token=${localStorage.getItem('token')}`
            );
            setCurrentSocket(socket);
        }

        async function fetchChat(){
            try {
                const response = await fetch(
                    `https://messenger-api-production.up.railway.app/api/chat/${activeUser}`,
                    {
                        method: "POST",
                        headers: {
                            "Authorization": `bearer ${localStorage.getItem('token')}`,
                        }
                    });

                if (!response.ok) {
                    throw new Error(`Failed to fetch chat.`)
                }
                let data = await response.json();

                setRoomId(data.room._id);
                
                currentSocket!.emit('join room', data.room._id);

                setRoomData(data.room.messages);


            } catch (error) {
                console.log(error);
            }

            // update target first/last name
            try {
                const response = await fetch(
                    `https://messenger-api-production.up.railway.app/api/user/${activeUser}`,
                    {
                        method: "GET",
                        headers: {
                            "Authorization": `bearer ${localStorage.getItem('token')}`,
                        }
                    });

                if (!response.ok) {
                    throw new Error(`Failed to fetch target user.`)
                }
                let data = await response.json();
                setFirstName(data.user[0].first_name);
                setLastName(data.user[0].last_name);

            } catch (error) {
                console.log(error);
            }
            
        }

        if(activeUser !== 'none'){
            fetchChat();
            setNewData([]);
        }

        if(currentSocket){
            const newMessageHandler = (data: INewMessage) => {
                const name = data.fromName.split(' ');

                console.log({
                    message: data.message,
                    first_name: name[0],
                    last_name: name[1],
                })

                setNewData((newData) => [...newData, {
                    message: data.message,
                    first_name: name[0],
                    last_name: name[1]
                }]);
            }
            currentSocket.on('display message', newMessageHandler);
        }

        return () => {
            if(currentSocket){
                currentSocket.off('display message');
            }
        }

    }, [activeUser]);
    
    const ScrollToBottom = () => {
        const chatRef = useRef<HTMLDivElement | null>(null);
        useEffect(() => chatRef.current?.scrollIntoView({ block: "end" }));
        return <BottomScrollDiv ref={chatRef} />;
    }

    const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(currentSocket){
            // console.log(`roomId: ${roomId}`);
            currentSocket.emit('private message', textbox, roomId);
            setNewData((newData) => [...newData, {
                message: textbox,
                first_name: "You",
                last_name: "" 
            }]);
        }
        setTextbox("");
    }

    return(
        <Container>
            <ChatWindow>
                {
                    // Load chat from database
                    Object.values(roomData).map((msg: any) => {
                        if(msg.fromUser === currentUser){
                            return (
                                <UserMessage
                                key={msg._id}
                                firstName='You'
                                lastName=''
                                message={msg.message}
                                />
                            )
                        }
                        return(
                            <UserMessage
                                key={msg._id}
                                firstName={firstName}
                                lastName={lastName}
                                message={msg.message}
                            />
                        )
                    })
                }

                {
                    // Load new chat messages
                    newData.map((msg: any) => {
                        return(
                            <UserMessage
                                key={uuidv4()}
                                firstName={msg.first_name}
                                lastName={msg.last_name}
                                message={msg.message}
                            />
                        )
                    })
                }

                <ScrollToBottom />
            </ChatWindow>
            {
                activeUser === 'none' ? <></> : 
                <MessageBox onSubmit={handleSendMessage}>
                    <StyledInput
                        type='text'
                        id='messagebox'
                        placeholder='Type your message here..'
                        maxLength={300}
                        autoComplete='off'
                        spellCheck="false"
                        value={textbox}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setTextbox(e.target.value)}
                    ></StyledInput>

                    <StyledSubmit>Send</StyledSubmit>

                    {/* Add a "Back" Button here to go back to welcome page */}
                </MessageBox>
            }

        </Container>
    )
}

export default Chatbox;