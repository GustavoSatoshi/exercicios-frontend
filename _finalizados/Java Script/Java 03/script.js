function adicionarTarefa() {
    //recebe valor do imput do usuario
     let inputtarefa = document.getElementById("inputTarefa")
    let tarefa = inputtarefa.value

    //se o valor do imput foz vazio então mostre uma mensagem
     if (tarefa ==""){
        //mostre mensagem de erro
        let mensagemErro = "digite uma tarefa para adiciona-la a sua lista!"
        mensagem.textContent = mensagemErro
     } else{
        //mensagem de tarefa adicionada com sucesso
    let mensagemSucesso = "Tarefa adicionada com sucesso!";
      mensagem.textContent = mensagemSucesso

    let listatarefas = document.getElementById("listaTarefas")
    let novatarefa = document.createElement("li")

    novatarefa.textContent = tarefa

    listaTarefas.appendChild(novatarefa)
     }

    inputTarefa.value = ""
}
