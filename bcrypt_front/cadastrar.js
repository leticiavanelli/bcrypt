let res_cadastrar = document.getElementById('res_cadastrar')
let cadastrar = document.getElementById('cadastrar')


cadastrar.addEventListener('click', ()=>{
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const valores = {
        nome: nome,
        email: email,
        senha: senha
    }
    console.log(valores)

    fetch('http://localhost:3000/cadastrar',{
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dados =>{
        console.log(dados) 
        res_cadastrar.innerHTML = 'Código: ' + dados.id + '&emsp;' + 
                                'Nome: ' + dados.nome + '&emsp;' +
                                'Email: ' + dados.email +'&emsp'
    })
    .catch((err)=>{
        console.error("erro ao gravar no banco de dados!",err)
    })
})
