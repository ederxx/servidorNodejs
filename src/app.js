import express from 'express'   // importar o express pro prjecto


const app = express()    // criar instancia do express e armazenar na const app
// mock
const selecoes = [
  {id: 1, selecao:"Brasil", grupo:"G"},
  {id: 2, selecao:"Alemanha", grupo:"G"},
  {id: 3, selecao:"Italia", grupo:"G"},
  {id: 4, selecao:"Argentina", grupo:"G"},
]


// criar a rota padrão ou Raiz.
app.get('/', (req, res) => {  // toda vez ao fazer uma requiscao http precisa de request e do response
  res.send('NodeJS PF')
})

app.get("/selecoes",(req, res)=> {
  res.status(200).send(selecoes)//enviaar uma resposta)
})


export default app