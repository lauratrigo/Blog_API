export function isAuth(request, reply, done) {
    const {authorization} = request.headers

    if (authorization != 'token') {
        reply.status(403).send({message: 'Unathorized.'})
    }

    done()
}

/* 1ª linha: Export function isAuth(request, reply, done)
    - Cria uma função chamada isAuth (is Authorized), que será um middleware. Middleware: Uma função que recebe 3 parâmetros:
        - Request: O objeto de requisição (contém as informações da requisição feita pelo usuário, como cabeçalhos, corpo, parâmetros, etc.).
        - Reply: O objeto de resposta (responsável por enviar a resposta ao cliente).  
        - Done: Uma função de callback que deve ser chamada para indicar que o middleware foi concluído e a execução pode seguir para a próxima função ou rota.

    2ª linha: const { authorization } = request.headers;
    - o valor do cabeçalho authorization está sendo extraído da requisição HTTP. O cabeçalho authorization normalmente é usado para enviar um token de autenticação (como um token JWT ou 
    um simples token de sessão).

    3ª linha: if (authorization != 'token') {
    - É verificado se o valor do cabeçalho authorization é diferente de 'token'. Ou seja, se o cabeçalho não contiver exatamente a string 'token', o código dentro do bloco if será executado.

    4ª linha: reply.status(403).send({ message: 'Unauthorized.' });
    - Caso o valor do cabeçalho authorization não seja igual a 'token', o servidor vai responder com um código de status HTTP 403 (Forbidden - Proibido). Além disso, será enviado um objeto
    JSON com a mensagem 'Unauthorized.', indicando que o usuário não tem permissão para acessar o recurso.
        - O código 403 é utilizado quando o servidor entende a requisição, mas não autoriza o acesso ao recurso. Ele é comumente usado em sistemas de autenticação e autorização.

    5ª linha: done()
    - Caso o valor do cabeçalho authorization seja igual a 'token', o middleware chama a função done(). Isso indica que o middleware foi completado com sucesso e que a execução pode continuar 
    para a próxima função, seja outra parte do middleware ou a própria rota que o usuário está tentando acessar. (Como return em C)
*/