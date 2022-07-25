(function () {

    var formulario = document.getElementsByName('formulario')[0]

    var repositorios = document.getElementById('repositorios')

    var validarCampos = function (e) {
        if (formulario.nome.value == 0) {
            alert("Preencher o nome");
            e.preventDefault();
        }

        if (formulario.email.value == 0) {
            alert("Preencher o email");
            e.preventDefault();
        }

        if (formulario.assunto.value == 0) {
            alert("Preencher o assunto");
            e.preventDefault();
        }

        if (formulario.textArea.value == 0) {
            alert("Preencher a messagem");
            e.preventDefault();
        }
    };

    var validar = function (e) {
        validarCampos(e);

    };

    formulario.addEventListener("submit", validar)


    fetch(`https://api.github.com/users/gicordone/repos`)
        .then(response => {
            response.json()
            .then(repo => {

                repositorios.innerHTML = `<div class="col">
            <a href="${data[0].clone_url}" target="_blank"><button type="button" class="btn btn-secondary btn-lg">${data[0].name}</button></a>
        </div><div class="col">
        <a href="${data[3].clone_url}" target="_blank"><button type="button" class="btn btn-secondary btn-lg">${data[3].name}</button></a>
    </div><div class="col">
    <a href="${data[4].clone_url}" target="_blank"><button type="button" class="btn btn-secondary btn-lg">${data[4].name}</button></a>
</div>`
            })

        })

}())