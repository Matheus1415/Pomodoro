interface Tarefa {
    descricao: string
    concluida: boolean
}

interface EstadoAplicacao {
    tarefas: Tarefa[]
    tarefaSelecionada: Tarefa | null
}

let estadoInicial: EstadoAplicacao = {
    tarefas: [
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
    ],
    tarefaSelecionada: null
}

const selecionarTarefa = (estado: EstadoAplicacao, tarefa: Tarefa) : EstadoAplicacao => {

    return {
        ...estado,
        tarefaSelecionada: tarefa === estado.tarefaSelecionada ? null : tarefa
    }
}

const adicionarTarefa = (estado: EstadoAplicacao, tarefa: Tarefa) : EstadoAplicacao => {
    return {
        ...estado,
        tarefas: [...estado.tarefas, tarefa]
    }
}

const atualizarUI = () => {
    const taskIconSvg = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF" />
            <path
                d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
                fill="#01080E" />
        </svg>
    `
    const ulTarefas = document.querySelector('.app__section-task-list');
    const formAdicionarTarefa = document.querySelector<HTMLFormElement>('.app__form-add-task');
    const btnAdicionarTarefa = document.querySelector<HTMLButtonElement>('.app__button--add-task');
    const textarea = document.querySelector<HTMLTextAreaElement>('.app__form-textarea');
    const btnCancelar = document.querySelector<HTMLButtonElement>(".app__form-footer__button--cancel");
    const btnDeletar = document.querySelector<HTMLButtonElement>(".app__form-footer__button--delete");


    if (!btnAdicionarTarefa) {
        throw Error("Caro colega, o elemento btnAdicionarTarefa não foi encontrado. Favor rever.")
    }

    if (!btnCancelar) {
        throw Error("Caro colega, o elemento btncancelar não foi encontrado. Favor rever.")
    }

    if (!btnDeletar) {
        throw Error("Caro colega, o elemento btnDeletar não foi encontrado. Favor rever.")
    }

    btnAdicionarTarefa.onclick = () => {
        formAdicionarTarefa?.classList.toggle('hidden')
    }

    btnCancelar.onclick = () =>{
        console.log("cancelar clicado")
        formAdicionarTarefa!.classList.add("hidden")
    }

    btnDeletar.onclick = () => {
        textarea!.value = ''
    };

    const formLimparEFechar = () =>{
        formAdicionarTarefa?.reset()
        //Opcional
        // formAdicionarTarefa!.classList.add("hidden")
    }

    formAdicionarTarefa!.onsubmit = (evento) => {
        evento.preventDefault()
        let descricao = textarea!.value
        estadoInicial = adicionarTarefa(estadoInicial, { 
            descricao,
            concluida: false
        })
        atualizarUI()
        formLimparEFechar()
    }

    if (ulTarefas) {
        ulTarefas.innerHTML = ''
    }

    estadoInicial.tarefas.forEach(tarefa => {
        const li = document.createElement('li')
        li.classList.add('app__section-task-list-item')
        const svgIcon = document.createElement('svg')
        svgIcon.innerHTML = taskIconSvg
        
        const paragraph = document.createElement('p')
        paragraph.classList.add('app__section-task-list-item-description')
        paragraph.textContent = tarefa.descricao


        const button = document.createElement('button')
        button.classList.add('app_button-edit')
    
        const editIcon = document.createElement('img')
        editIcon.setAttribute('src', '/imagens/edit.png')
        editIcon.onclick = () =>{
            formAdicionarTarefa?.classList.toggle('hidden')
        }
    
        button.appendChild(editIcon)

        if (tarefa.concluida) {
            button.setAttribute('disabled', 'true')
            li.classList.add('app__section-task-list-item-complete')
        }

        li.appendChild(svgIcon)
        li.appendChild(paragraph)
        li.appendChild(button)

        li.addEventListener('click', e => {
            console.log('A tarefa foi clicada', tarefa);
            let btnAtualizar = document.querySelector<HTMLButtonElement>(".app__form-footer__button--confirm") 
            formAdicionarTarefa?.classList.remove("hidden");
        
            // Encontrar o índice da tarefa clicada no array de tarefas
            const indiceTarefaSelecionada = estadoInicial.tarefas.indexOf(tarefa);
            const valorTarefaSelecionada = estadoInicial.tarefas[indiceTarefaSelecionada].descricao;
        
            // Atribuir o valor da tarefa ao valor do textarea
            textarea!.value = valorTarefaSelecionada.toString();
        
            btnAtualizar!.onclick = () => {
                // Atualizar o estado com a tarefa selecionada
                estadoInicial.tarefas[indiceTarefaSelecionada].descricao = textarea!.value;
                atualizarUI();
            };
        });        
        

        ulTarefas?.appendChild(li)
    })
}

atualizarUI()