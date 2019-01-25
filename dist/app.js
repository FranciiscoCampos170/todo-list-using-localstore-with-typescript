let salvar = () => {
    let info = localStorage.info == null ? [] : JSON.parse(localStorage.info);
    let n_nota = document.querySelector("#txtNNota").value;
    let titulo = document.querySelector("#txtTitulo").value;
    let desc = document.querySelector("#txtDesc").value;
    let cor_fundo = document.querySelector("#txtEmer").value;
    if (n_nota == "" || n_nota == "0" || n_nota == undefined) {
        alert("Insira o Numero da Nota");
    }
    else {
        info.push({
            'n_nota': n_nota,
            'titulo': titulo,
            'desc': desc,
            'cor_fundo': cor_fundo
        });
        localStorage.info = JSON.stringify(info);
        exibir();
        window.open("index.html", "self");
    }
};
let exibir = () => {
    let info = localStorage.info == null ? [] : JSON.parse(localStorage.info);
    let panel = document.querySelector("#divMae");
    panel.innerHTML = "";
    info.forEach((element) => {
        panel.innerHTML += `
       
            <div class="box ${element.cor_fundo} box-solid">
        
            <div class="box-header with-border">
            <h3 class="box-title">${element.titulo}</h3>
            <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
            </div>
        </div>
        <div class="box-body">
            <p>${element.desc}</p>
            <button class="btn btn-primary" onclick="editar(${element.n_nota})">Editar Nota</button>
            <button class="btn btn-primary" onclick="remover(${element.n_nota})">Eliminar Nota</button>
                
        </div>
    
        `;
    });
};
let editar = (doc) => {
    let info = localStorage.info == null ? [] : JSON.parse(localStorage.info);
    let n_nota = document.querySelector("#txtNNota");
    let titulo = document.querySelector("#txtTitulo");
    let desc = document.querySelector("#txtDesc");
    let id = document.querySelector("#txtId");
    let btnGuardar = document.querySelector("#btnGuardar");
    let btnModificar = document.querySelector("#btnModificar");
    let btnGuardar_ = document.querySelector("#btnGuardar_");
    let resultado = info.find((e) => e.n_nota == doc);
    let resultadoIndex = info.findIndex((e) => e.n_nota == doc);
    if (resultado != undefined) {
        btnGuardar.style.display = "none";
        btnModificar.style.display = "block";
        btnGuardar_.style.display = "block";
        n_nota.value = resultado.n_nota;
        titulo.value = resultado.titulo;
        desc.value = resultado.desc;
        id.value = resultadoIndex;
    }
    else {
        alert("Nota não encontrada");
    }
    window.open("index.html", "self");
};
let modificar = () => {
    let info = localStorage.info == null ? [] : JSON.parse(localStorage.info);
    let n_nota = document.querySelector("#txtNNota").value;
    let titulo = document.querySelector("#txtTitulo").value;
    let desc = document.querySelector("#txtDesc").value;
    let id = document.querySelector("#txtId").value;
    let btnGuardar = document.querySelector("#btnGuardar");
    let btnModificar = document.querySelector("#btnModificar");
    let btnGuardar_ = document.querySelector("#btnGuardar_");
    info[id].n_nota = n_nota;
    info[id].titulo = titulo;
    info[id].desc = desc;
    btnGuardar.style.display = "block";
    btnModificar.style.display = "none";
    btnGuardar_.style.display = "none";
    localStorage.info = JSON.stringify(info);
    exibir();
    window.open("index.html", "self");
    alert("Dados Modificados");
};
let remover = (doc) => {
    let info = localStorage.info == null ? [] : JSON.parse(localStorage.info);
    let resultadoIndex = info.findIndex((e) => e.n_nota == doc);
    if (resultadoIndex != -1) {
        info.splice(resultadoIndex, 1);
        localStorage.info = JSON.stringify(info);
        exibir();
    }
    else {
        alert("Não Encontrado");
    }
    window.open("index.html", "self");
};
