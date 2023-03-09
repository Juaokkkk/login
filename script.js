function logar(){
    const login = document.querySelector('#login').value;
    const senha = document.querySelector('#senha').value;

    if(login === "admin@gmail.com" && senha === "admin123"){
        alert('sucesso');
        location.href = "landingpage.html"
    }
    else{
        alert('Usuario ou senha incorretos')
    }
}
