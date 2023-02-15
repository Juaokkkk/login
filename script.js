function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin@gmail.com" && senha == "admin123"){
        alert('sucesso');
        location.href = "landingpage.html"
    }
    else{
        alert('Usuario ou senha incorretos')
    }
}
