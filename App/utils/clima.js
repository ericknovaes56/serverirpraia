
const API_KEY = 'ca31bb09e45d4450a4940350240209 '; 

async function clima(cidade) {

  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cidade}&lang=pt`;

  try {

    const resposta = await fetch(url);
    const dados = await resposta.json();

    if (dados.location) { 

      return {
        cidade: dados.location.name,
        temperatura: dados.current.temp_c,
        descricao: dados.current.condition.text,
        vento: dados.current.wind_kph,
      };

    } else {

      console.error(`Cidade não encontrada: ${cidade}`);

    }
  } catch (erro) {

        console.error(`Erro ao buscar o clima para ${cidade}:`, erro);

  }
}

export default clima
