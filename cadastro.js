// Array para armazenar os registros
let users = [];
let editIndex = -1;

// Selecionando os elementos do formulário e da tabela
const form = document.getElementById('formCadastro');
const userTable = document.getElementById('userTable');
const nomeInput = document.getElementById('nome');
const sobrenomeInput = document.getElementById('sobrenome');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');

// Função para exibir os dados na tabela
function renderTable() {
    userTable.innerHTML = ''; // Limpa a tabela
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.nome}</td>
            <td>${user.sobrenome}</td>
            <td>${user.email}</td>
            <td>
                <button onclick="editUser(${index})">Editar</button>
                <button onclick="deleteUser(${index})">Excluir</button>
            </td>
        `;
        userTable.appendChild(row);
    });
}

// Função para adicionar ou atualizar um usuário
function handleSubmit(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    const newUser = {
        nome: nomeInput.value,
        sobrenome: sobrenomeInput.value,
        email: emailInput.value,
        senha: senhaInput.value,
    };

    if (editIndex === -1) {
        // Adicionar novo usuário
        users.push(newUser);
    } else {
        // Atualizar usuário existente
        users[editIndex] = newUser;
        editIndex = -1; // Resetar o índice de edição
    }

    // Limpar os campos de entrada
    nomeInput.value = '';
    sobrenomeInput.value = '';
    emailInput.value = '';
    senhaInput.value = '';

    renderTable(); // Atualizar a tabela
}

// Função para editar um usuário
function editUser(index) {
    const user = users[index];

    nomeInput.value = user.nome;
    sobrenomeInput.value = user.sobrenome;
    emailInput.value = user.email;
    senhaInput.value = user.senha;

    editIndex = index; // Salvar o índice do usuário a ser editado
}

// Função para excluir um usuário
function deleteUser(index) {
    users.splice(index, 1); // Remove o usuário do array
    renderTable(); // Atualizar a tabela
}

// Adicionar o evento de envio do formulário
form.addEventListener('submit', handleSubmit);

// Inicializar a tabela
renderTable();
