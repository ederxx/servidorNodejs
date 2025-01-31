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
function buscarSelecaoPorId(id){
  return selecoes.filter(selecao => selecao.id == id)
}
// criar a rota padrão ou Raiz.

function buscarIndexSelecao(id){
  return selecoes.findIndex(selecao => selecao.id == id)
}
app.get('/', (req, res) => {  // toda vez ao fazer uma requiscao http precisa de request e do response
  res.send('NodeJS PF')
})
app.get("/selecoes",(req, res)=> {
  res.status(200).send(selecoes)//enviaar uma resposta)
})
app.get("/selecoes/:id", (req,res)=> {
  res.json(buscarSelecaoPorId(req.params.id))   // buscar um objeto json usando a funcao x e usando os paramentros de req por id
})
app.get("/selecoes/:id", (req,res)=> {
  res.json(buscarIndexSelecao(req.params.id))   // buscar um objeto json usando a funcao x e usando os paramentros de req por id
})
app.delete("/selecoes/:id", (req,res)=> {
  let index = buscarIndexSelecao(req.params.id)
 selecoes.splice(index,1) // cortar elemento pelo paramentro e qnt de cortas
 res.send(`selecao com id: ${req.params.id} exlcluida com sucesso`)
  
})
app.post("/selecoes",(req, res)=> {
selecoes.push(req.body)     //pegar o corpo da  requisicao
res.status(202).send("selecao cadastrada com sucesso")
})

export default app