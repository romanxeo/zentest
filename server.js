const express = require ('express')
const path = require ('path')

const PORT = express.env.PORT || 8088

const app = express()
app.use(express.static(__dirname))
app.use(express.static(path.resovle(__dirname, 'build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT)