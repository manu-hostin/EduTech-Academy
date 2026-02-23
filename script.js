const form = document.getElementById("formulario");
const modo = document.getElementById("modo");
const cepInput = document.getElementById("cep");

form.addEventListener("submit", function(event){
    event.preventDefault(); // impede envio automático e não recarrega a pagina

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    const cep = cepInput.value;
    let rua = document.getElementById("rua").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    
    let curso = document.getElementById("cursos").value;

    if (nome === "") {
        alert("Por favor, preencha o nome completo.");
        return;
    }

    if (email === "") {
        alert("Informe um e-mail válido.");
        return;
    }

    if (telefone === "") {
        alert("Informe o número de telefone.");
        return;
    }

    if (cpf === "") {
        alert("Informe o CPF corretamente.");
        return;
    }

    if (curso === "") {
        alert("Selecione um curso.");
        return;
    }

    if (cep === "") {
        alert("Informe o CEP corretamente.");
        return;
    }

    if (rua === "") {
        alert("Informe a rua.");
        return;
    }
    
    if (bairro === "") {
        alert("Informe o bairro.");
        return;
    }

    if (cidade === "") {
        alert("Informe a cidade.");
        return;
    }

    if (estado === "") {
        alert("Informe o estado.");
        return;
    }
    
    alert("Matrícula enviada com sucesso! 🎉");
    
});

modo.addEventListener("click", function(event){
    event.preventDefault();

    document.body.classList.toggle("dark")
})

cepInput.addEventListener("blur", async () => {

    const cep = cepInput.value.replace("-", "");
    
    if (cep.length != 8){
        alert("CEP inválido.")
        return;
    }

    try {

        const response = await fetch (`https://opencep.com/v1/${cep}`);
        const data = await response.json();

        if (data.erro) {
            alert("CEP não encontrado.");
            return;
        }

        rua.value = data.logradouro;
        bairro.value = data.bairro;
        cidade.value = data.localidade;
        estado.value = data.uf;

    } catch (erro) {
        alert("Erro ao buscar CEP.");
    }


})