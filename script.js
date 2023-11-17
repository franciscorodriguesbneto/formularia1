const form = document.querySelectorAll("#form");
const nomeinput = document.querySelectorAll("#nome");
const senhainput = document.querySelectorAll("#senha");
const emailinput = document.querySelectorAll("#email");
/*
form.addEventListener("submit" ,(evente) => {
    evente.preventDefault();
   
    //validações
    if (nomeinput.value === ""){
        alert('O campo Nome é obrigatório');
        return;
        
    }
    console.log("funciona")
})
form.addEventListener();

*/
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



