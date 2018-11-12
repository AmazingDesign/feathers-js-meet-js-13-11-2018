import io from 'socket.io-client'
import feathers from '@feathersjs/client'
import auth from '@feathersjs/authentication-client'

const socket = io('localhost:3030')
const app = feathers()

app.configure(feathers.socketio(socket))

// https://docs.feathersjs.com/api/authentication/client.html#options
app.configure(auth({ storage: window.localStorage }))

export default app