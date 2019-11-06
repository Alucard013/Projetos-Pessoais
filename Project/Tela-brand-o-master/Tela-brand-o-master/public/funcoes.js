function registrar() {
    var formulario = new URLSearchParams(new FormData(form_cadastro));
    Swal.fire({
        title: 'Carregando...',
        text: 'Estamos efetuando o seu cadastro!',
        imageUrl: 'images/Loading.gif',
        imageAlt: 'Custom image',
        showConfirmButton: false
    })
    fetch("../usuarios/cadastro", {
        method: "POST",
        body: formulario
    }).then(function (response) {

        if (response.ok) {

            response.json().then(function (resposta) {
                if (resposta == false) {
                    Swal.fire('Algo deu errado', 'Tente novamente', 'warning');
                } else {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000
                    });

                    Toast.fire({
                        type: 'success',
                        title: 'Cadastrado com sucesso!'
                    }).then(function () {
                        sessionStorage.id = resposta.id;
                        window.location.href = 'login.html';
                    })

                }

            });
        } else {
            Swal.fire('Erro no cadastro', 'Tente novamente', 'error');
        }
    });
    return false;
}