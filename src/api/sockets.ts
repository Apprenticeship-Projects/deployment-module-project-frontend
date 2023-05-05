import { io }from 'socket.io-client';

const socket = io('http://localhost:8000');

socket.on('connect', () => {
    console.log('connect')
})

export default socket;