const express = require('express')   // importar o express pro prjecto
const app = express()    // criar instancia do express e armazenar na const app
const port = 3000 // definir porta de comunicacao logica para o express


// criar a rota padrão ou Raiz.
app.get('/', (req, res) => {  // toda vez ao fazer uma requiscao http precisa de request e do response
  res.send('NodeJS PF')
})

app.listen(port, () => {
  console.log(`servidor rodando no endereço http://localhost:${port}`)

})