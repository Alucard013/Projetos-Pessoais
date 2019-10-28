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
    if(cadastro_nome.value.length > 2 && cadastro_email.value.endsWith('@gmail.com') && cadastro_senha.value.length >=6 && cadastro_senha.value == conf_senha.value){
        user_name += `${cadastro_nome.value}`;
        user_email +=  `${cadastro_email.value}`;
        user_password +=  `${cadastro_senha.value}`;

        alert('Cadastrado com Sucesso!');

        mostrar();
    }else{
        alert('Cadastro invalido!')
        if(cadastro_nome.value.length <2){
            lb_nome.innerHTML = 'Nick invalido';
            lb_nome.style.display = 'block';
            lb_cadastro_nome.style.display = 'none';
            cadastro_nome.value = '';
        }
        if(cadastro_senha.value != conf_senha.value){
            lb_senha.innerHTML = 'Senha incorreta';
            lb_senha.style.display = 'block';
            lb_cadastro_senha.style.display = 'none';
            cadastro_senha.value = '';
            conf_senha.value = '';
        }else{
            lb_email.innerHTML = 'Email incorreto';
            lb_email.style.display = 'block';
            lb_cadastro_email.style.display = 'none';
            cadastro_email.value ='';
        }
    }
}

function logar(){
    if(email.value == user_email && senha.value == user_password){
        window.location.href = 'http://www.clickjogos.com.br/jogos/naruto-fighting-cr-kakashi'
        a_conta.style.display = 'none';
        a_peril.style.display = 'block'
    }else{
        alert('Erro de validação!')
    }
}