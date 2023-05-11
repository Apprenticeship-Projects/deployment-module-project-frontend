import { io }from 'socket.io-client';

const socket = io(process.env.REACT_APP_API_ORIGIN as string);

socket.on('connect', () => {
    console.log('connect')
})

export default socket;