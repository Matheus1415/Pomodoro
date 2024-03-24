# Comodoro 🕒

O Comodoro é um projeto simples desenvolvido com HTML, CSS, TypeScript e JavaScript. Ele permite criar uma lista de tarefas com um cronômetro, onde as tarefas são marcadas como concluídas quando o tempo acabar. Este projeto depende da utilização do Live Server para funcionar corretamente. 🚀

## Funcionalidades

- Criação de lista de tarefas ✏️
- Cronômetro para cada tarefa ⏱️
- Marcação automática da tarefa principal quando o tempo acabar ✅

![Foto do site Comodoro](https://github.com/Matheus1415/Comodoro/blob/main/FotoReadme.png)

## Como usar

Para utilizar o Comodoro, siga estas etapas:

1. Clone este repositório:
    ```bash
    git clone https://github.com/Matheus1415/Comodoro
    ```

2. Instale as dependências:
    ```bash
    cd Comodoro
    npm install
    ```

3. Inicie o Live Server:
    ```bash
    npm run start
    ```

4. Abra o navegador e acesse http://localhost:3000 para visualizar o Comodoro. 🌐

## Como usar o Live Server no Visual Studio Code

O Live Server é uma extensão do Visual Studio Code que permite visualizar seu projeto HTML, CSS e JavaScript em tempo real no navegador. 🚀

### Instalação

1. Abra o Visual Studio Code.
2. Clique no ícone de extensões na barra lateral esquerda (ou pressione Ctrl+Shift+X).
3. Na barra de pesquisa, digite "Live Server".
4. A extensão Live Server deve aparecer nos resultados da pesquisa. Clique no botão "Instalar" ao lado dela.
5. Após a instalação, você pode clicar no botão "Abrir" na página da extensão ou simplesmente fechar a página de extensões.

### Uso

1. Abra o arquivo HTML do seu projeto.
2. Clique com o botão direito do mouse em qualquer lugar do código.
3. No menu de contexto, selecione a opção "Abrir com Live Server". 🌐

O Live Server iniciará um servidor local e abrirá o seu projeto no navegador padrão. Ele também recarregará automaticamente a página no navegador sempre que você salvar qualquer alteração no seu código, facilitando o desenvolvimento e a visualização das mudanças em tempo real.

Agora você está pronto para começar a usar o Live Server no seu projeto! ✨

## Configurações do TypeScript

O arquivo `tsconfig.json` inclui as seguintes configurações:

```json
{
    "compilerOptions": {
        "lib": ["ES2015", "DOM"],
        "module": "commonjs",
        "strict": true,
        "target": "ES2015"
    }
}
