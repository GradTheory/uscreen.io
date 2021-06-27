const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const __dirname1 = path.resolve()


app.use(express.static(path.join(__dirname1, '/demo/build')))

app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname1, 'demo', 'build', 'index.html'))
)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})