import express from 'express'; const app = express()

const port = 9000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Server is up and running! 🌞');
})

app.listen(port, () => {
    console.log(`Server is listening on ${port} ℹ️`)
})
