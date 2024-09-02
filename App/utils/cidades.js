const cidades = async (estado)=>{



    var datanew = []

    try {

        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/distritos')
        const data = await response.json()

        if (response.ok){
            console.log("requisição feito !")
        }else{
            throw new Error("problema na req")
        }
    
    

    
        for (let index = 0; index < data.length; index++) {
    
        
            
            if (data[index].municipio.microrregiao.mesorregiao.UF.nome == estado){
                
    
                datanew.push(data[index])
            
        
            }

    
            
        }

        return datanew
        
    } catch (error) {
        console.log(error)
    }


}

export default cidades