import app from "./src/app.js"

const PORT = 3000 // definir porta de comunicacao logica para o express



app.listen(PORT, () => {
    console.log(`servidor rodando no endereço http://localhost:${PORT}`)
  
  })