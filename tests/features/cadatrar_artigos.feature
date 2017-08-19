#language: pt

Funcionalidade: Cadastrar artigos
    Sendo um publicador
    Posso acessar ao cadastrado de artigos
    Parar criar novos artigos que poderão ser exibidos no blog

    Contexto: Acesso ao cadastro de artigos
        * usuário acessa o cadastro de artigos

    @smoke
    Cenario: Cadastrar novo artigo

        Dado que eu tenho um novo artigo
        Quando faço o cadastro desse artigo
        Então vejo o toaster com a mensagem "Artigo cadastrado com sucesso!"

