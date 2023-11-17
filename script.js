const form = document.querySelector("form");
const nomeinput = document.querySelector("nome");
const senhainput = document.querySelector("senha");
const emailinput = document.querySelector("email");




    //validações
    const validarNome = () => {
        if(nomeinput.value === ""){
            alert('Por favor, preencha o campo Nome!');
            return false;

            }else{
                return true;
                };

    }
    const validarSenha = () => {
        if (senhainput.value ===""){
            alert ('Por favor, preencha a Senha!')
            return false;
            } else if (senhainput.length < 6){
                alert ("A senha precisa ter no mínimo 6 caracteres!");
                return false;
                }else{
                    return true;
                    }
    }
    


    form.addEventListener("submit" ,(evente) => {
        evente.preventDefault();
        
      
        console.log("passou")
    })
















/*






let erro = false;

function validarNome()
 {
    if (nomeinput.value === ""){
        alert("Preencha todos os campos!");
        console.log("funciona");
    }
}
function validarSenha(){
    if(senhainput.value != "123456"){
        alert ("A senha precisa ter 6 digitos!")
    }
}

*/

