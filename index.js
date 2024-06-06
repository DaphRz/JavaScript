function criarTabela(){

// Criando a div //

        // Seleciono onde eu quero criar o elemento
        const pai_div_cartela = document.getElementById ('bingo');

        // Crio uma div para minha cartela
        const div_bingo = document.createElement ('div');
        div_bingo.className = 'cartela_bingo';

        // Insiro a div dentro do pai
        pai_div_cartela.appendChild(div_bingo);

// Criando nome do jogador //

        // Criar um elemento de texto para o nome do jogador
        const h4_jogador = document.createElement ('h4');
        var nome = prompt("Digite seu nome:");
        h4_jogador.innerText = nome;

        // Inserir o nome do jogador na div
        div_bingo.appendChild(h4_jogador);

// Criando a tabela do Bingo //

        // Criando elementos principais
        const tabela = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        // Criando elementos do thead
        const th_B = document.createElement('th');
        const th_I = document.createElement('th');
        const th_N = document.createElement('th');
        const th_G = document.createElement('th');
        const th_O = document.createElement('th');

        th_B.innerHTML = 'B';
        th_I.innerHTML = 'I';
        th_N.innerHTML = 'N';
        th_G.innerHTML = 'G';
        th_O.innerHTML = 'O';

        // Criando cabeçalho //Inserindo th no thead
        const tr_head = document.createElement('tr');
        thead.appendChild(th_B);
        thead.appendChild(th_I);
        thead.appendChild(th_N);
        thead.appendChild(th_G);
        thead.appendChild(th_O);

        // Adicionando a linha do cabeçalho ao thead
        thead.appendChild(tr_head);

        // Criando // Inserindo na tabela
        tabela.appendChild(thead);
        tabela.appendChild(tbody);

        // Insere a tabela na div_bingo
        pai_div_cartela.appendChild(tabela);

        //Inserindo os elementos no tbody
        for(var i = 0; i < 5; i++){
            const tr = document.createElement('tr');

            for(var j = 0; j < 5; j++){
                const td = document.createElement('td');
                td.innerHTML = "X";
                tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}