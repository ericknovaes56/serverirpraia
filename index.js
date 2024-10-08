import express from 'express'
import cidades from './App/utils/cidades.js'
import cors from 'cors'
import clima from './App/utils/clima.js'

const app = express()
const port = 3000


app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

function capitalizarPrimeiraLetraDeCadaPalavra(str) {
    return str
        .split(' ')
        .map(palavra => {
            if (['de', 'do'].includes(palavra.toLowerCase() )) {
                return palavra.toLowerCase(); // Não capitaliza "de"
            }
            return palavra.charAt(0).toUpperCase() + palavra.slice(1);
        })
        .join(' ');
}

app.get('/cidade/:cidade', async (req, res) => {

    const cidade = req.params.cidade

    if (cidade) {
       const response = await clima(cidade)
       res.send(response)
    }
})


app.get('/estados/:estados', async (req, res) => {

    const estado = capitalizarPrimeiraLetraDeCadaPalavra(req.params.estados)

    console.log(estado)
  
    if (estado) {
       const response = await cidades(estado)
       res.send(response)
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})