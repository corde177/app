const start = () => {
  let opcao = "sair";
  while(true) {
    switch(opcao) {
      case "cadastrar":
        console.log("Vamos Cadastrar")
        break
      case "listar":
       console.log("Vamos listar")
       break
     case "sair":
     return
    }
  }
}

start();