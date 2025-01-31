import express from 'express'   // importar o express pro prjecto


const app = express()    // criar instancia do express e armazenar na const app

app.use(express.json()) // indicar ao express ler o body com json
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
app.post("/selecoes",(req, res)=> {
selecoes.push(req.body)     //pegar o corpo da  requisicao
res.status(202).send("")



})

export default app