const {app} = require('./app')
const {db} = require('./utils/database.util')

const startServer = async () => {
    try {
        await db.authenticate();
        await db.sync();

        // Server to listen
        const PORT = 2800;

        app.listen(PORT, () => {
            console.log('App running')
        })
    } catch (error) {
        console.log(error)
    }
}

startServer();