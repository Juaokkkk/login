function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "jaoalfrdo@gmail.com" && senha == "joaoalfredo12"){
        alert('sucesso');
        location.href = "landingpage.html"
    }
    else{
        alert('Usuario ou senha incorretos')
    }
}
