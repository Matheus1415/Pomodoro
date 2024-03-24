let tarefas = [
    {
        descricao: 'Tarefa concluída',
        concluida: true
    },
    {
        descricao: 'Tarefa pendente 1',
        concluida: false
    },
    {
        descricao: 'Tarefa pendente 2',
        concluida: false
    }
];

let tarefaSelecionada = null;
let tarefaEmEdicao = null;
let paragraphEmEdicao = null;

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const removerTarefa = (tarefa) => {
    tarefas = tarefas.filter(t => t !== tarefa);
};

const selecionaTarefaParaEditar = (tarefa, index) => {
    tarefaEmEdicao = tarefa;
    paragraphEmEdicao = index;
    rl.question('Digite a nova descrição para a tarefa: ', (descricao) => {
        tarefaEmEdicao.descricao = descricao;
        tarefas[index] = tarefaEmEdicao;
        console.log('Tarefa editada com sucesso!');
        exibirTarefas();
    });
};

const exibirTarefas = () => {
    console.log('=== Tarefas ===');
    tarefas.forEach((tarefa, index) => {
        const status = tarefa.concluida ? 'concluída' : 'pendente';
        console.log(`${index + 1}. ${tarefa.descricao} - ${status}`);
    });
    console.log('===============');
};

const menuPrincipal = () => {
    console.log('=== Menu ===');
    console.log('1. Adicionar Tarefa');
    console.log('2. Editar Tarefa');
    console.log('3. Remover Tarefa');
    console.log('4. Sair');
    console.log('============');
    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                rl.question('Digite a descrição da nova tarefa: ', (descricao) => {
                    const novaTarefa = {
                        descricao: descricao,
                        concluida: false
                    };
                    tarefas.push(novaTarefa);
                    console.log('Tarefa adicionada com sucesso!');
                    exibirTarefas();
                    menuPrincipal();
                });
                break;
            case '2':
                rl.question('Digite o número da tarefa que deseja editar: ', (numero) => {
                    const index = parseInt(numero) - 1;
                    if (index >= 0 && index < tarefas.length) {
                        selecionaTarefaParaEditar(tarefas[index], index);
                    } else {
                        console.log('Tarefa não encontrada!');
                        menuPrincipal();
                    }
                });
                break;
            case '3':
                rl.question('Digite o número da tarefa que deseja remover: ', (numero) => {
                    const index = parseInt(numero) - 1;
                    if (index >= 0 && index < tarefas.length) {
                        removerTarefa(tarefas[index]);
                        console.log('Tarefa removida com sucesso!');
                        exibirTarefas();
                        menuPrincipal();
                    } else {
                        console.log('Tarefa não encontrada!');
                        menuPrincipal();
                    }
                });
                break;
            case '4':
                console.log('Saindo...');
                rl.close();
                break;
            default:
                console.log('Opção inválida!');
                menuPrincipal();
                break;
        }
    });
};

console.log('Bem-vindo ao gerenciador de tarefas!');
exibirTarefas();
menuPrincipal();
