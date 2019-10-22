var user_name = '';
var user_email = '';
var user_password = '';


function mostrar(){
    box_cadastro.style.display= 'none';
    box_login.style.display= 'block';
    a_cadastro.style.display= 'block';
    a_login.style.display= 'none';
}

function revelar(){
    a_cadastro.style.display= 'block';
    a_login.style.display= 'none';
    box_cadastro.style.display= 'block';
    box_login.style.display= 'none';
}

function cadastrar(){
    if(cadastro_nome.value.length > 2 && cadastro_email.value.endsWith('@hotmail.com') || cadastro_email.value.endsWith('@gmail.com') && cadastro_senha.value.length > 6 && cadastro_senha.value == conf_senha.value){
        user_name += `${cadastro_nome.value}`;
        user_email +=  `${cadastro_email.value}`;
        user_password +=  `${cadastro_senha.value}`;

        alert('Cadastrado com Sucesso!');

        mostrar();
    }else{
        alert('Cadastro invalido!')
    }
}

function logar(){
    if(email.value == user_email && senha.value == user_password){
        window.location.href = '../html/index.html'
    }else{
        alert('Erro de validação!')
    }
}