// ====== 1. BANCO DE DADOS FAKE (MOCK DATA) ======
const posts = [
    {
        id: 1,
        titulo: "Descobrindo o JavaScript no Ano de 2026",
        autor: "Thaís Midlej",
        categoria: "tecnologia",
        conteudo: "Manipular o DOM e criar elementos do zero pode parecer desafiador no começo, mas é a base para construir qualquer aplicação web moderna e interativa.",
        data: "06/06/2026"
    },
    {
        id: 2,
        titulo: "Como organizar os estudos de programação",
        autor: "Rodrigo Silva",
        categoria: "estudos",
        conteudo: "A melhor forma de aprender é praticando. Em vez de apenas assistir vídeos, construa projetos pequenos como cardápios, listas de tarefas e blogs.",
        data: "05/06/2026"
    }
];

// ====== 2. SELEÇÃO DE ELEMENTOS ======
const containerPosts = document.getElementById('container-posts');
const formulario = document.getElementById('form-novo-post');

// ====== 3. RENDERIZAÇÃO DINÂMICA ======
function renderizarPosts(listaDePosts) {
    containerPosts.innerHTML = ""; // Limpa a tela para não duplicar

    // Renderiza do mais novo para o mais antigo (ordem inversa)
    listaDePosts.slice().reverse().forEach(post => {
        const artigo = document.createElement('article');
        artigo.classList.add('post-card');

        artigo.innerHTML = `
            <span class="categoria-tag">${post.categoria}</span>
            <h2>${post.titulo}</h2>
            <div class="meta-dados">Por <strong>${post.autor}</strong> em ${post.data}</div>
            <p>${post.conteudo}</p>
        `;

        containerPosts.appendChild(artigo);
    });
}

// ====== 4. CAPTURA DE FORMULÁRIO (NOVO APRENDIZADO) ======
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede a página de recarregar no envio do formulário

    // Capturando os valores digitados nos inputs
    const tituloInput = document.getElementById('titulo').value;
    const autorInput = document.getElementById('autor').value;
    const categoriaSelect = document.getElementById('categoria').value;
    const conteudoTextArea = document.getElementById('conteudo').value;

    // Criando o novo objeto de post
    const novoPost = {
        id: posts.length + 1,
        titulo: tituloInput,
        autor: autorInput,
        categoria: categoriaSelect,
        conteudo: conteudoTextArea,
        data: new Date().toLocaleDateString('pt-BR') // Pega a data atual formatada
    };

    // Adiciona o novo post no nosso banco de dados fake
    posts.push(novoPost);

    // Renderiza novamente para mostrar o post novo na tela
    renderizarPosts(posts);

    // Limpa os campos do formulário para o próximo post
    formulario.reset();
});

// Inicializa o blog exibindo os posts padrões
renderizarPosts(posts);