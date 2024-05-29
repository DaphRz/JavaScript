function criarTabela(){

    //Criando elementos principais
    const tabela = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    //Criando a tabela
    tabela.appendChild(thead);
    tabela.appendChild(tbody);
    
    const body = document.querySelector("body");
    body.appendChild(tabela);
    
    const th_B = document.createElement("th");
    th_B.innerHTML = "B";
    const th_I = document.createElement("th");
    th_I.innerHTML = "I";
    const th_N = document.createElement("th");
    th_N.innerHTML = "N";
    const th_G = document.createElement("th");
    th_G.innerHTML = "G";
    const th_O = document.createElement("th");
    th_O.innerHTML = "O";

    //Criando cabeçalho
    const tr_head = document.createElement("tr");
    tr_head.appendChild(th_B);
    tr_head.appendChild(th_I);
    tr_head.appendChild(th_N);
    tr_head.appendChild(th_G);
    tr_head.appendChild(th_O);

    // Adicionando a linha do cabeçalho ao cabeçalho
    thead.appendChild(tr_head);

    var nome = prompt("Digite seu nome:");

    // Criando a célula de nome
    const td_nome = document.createElement("td");
    td_nome.innerHTML = nome;

    // Criando a linha do cabeçalho com o nome do usuário
    //Vinculando os elementos
    const tr_nome = document.createElement("tr");
    tr_nome.appendChild(td_nome);

    // Adicionando a linha com o nome ao cabeçalho
    thead.appendChild(tr_nome);

    //Inserindo os elementos no tbody
    for(let i = 0; i < 5; i++){
        const tr = document.createElement("tr");

        for(let j = 0; j < 5; j++){
            const td = document.createElement("td");
            td.innerHTML = "X";
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}