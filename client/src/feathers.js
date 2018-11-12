import io from 'socket.io-client'
import feathers from '@feathersjs/client'
import auth from '@feathersjs/authentication-client'

const socket = io('https://feathers-js-meet-js-13-11-2018.now.sh/')
const app = feathers()

app.configure(feathers.socketio(socket))

// https://docs.feathersjs.com/api/authentication/client.html#options
app.configure(auth({ storage: window.localStorage }))

export default app