import fastify from 'fastify';
import { postsRoutes } from './routes/posts.js';

const app = fastify({
    logger: {
        transport: {
            target: 'pino-pretty'
        }
    }
})

app.register(postsRoutes)

app.listen({
    host: '0.0.0.0',
    port: 4000
})

/* 1ª linha: import fastify from 'fastify';
    - Está sendo importado o módulo principal do Fastify, que é um framework web muito rápido e leve para Node.js. A variável fastify agora contém a função que você usará para criar o servidor 
    e configurar as rotas.

    2ª linha: import { postsRoutes } from './routes/posts.js';
    - Está sendo importada a função postsRoutes, que contém as definições das rotas relacionadas a posts. Essas rotas foram definidas no arquivo posts.js dentro da pasta routes. Ao importar essa função,
    você poderá registrar essas rotas na sua aplicação.

    3ª linha: const app = fastify ({...})
    - É criada a instância do servidor Fastify, armazenando-a na variável app. Esta instância é responsável por gerenciar as rotas, os middlewares e o servidor em si.
    
    4ª linha: logger: { transport: { target: 'pino-pretty' } }
    - O Fastify usa o Pino como logger por padrão, e está sendo configurado o transporte do logger para usar uma versão "bonita" e legível das mensagens no console, chamada pino-pretty. Isso ajuda 
    a tornar os logs mais fáceis de ler durante o desenvolvimento, ao invés de logs em formato JSON.

    5ª linha: app.register(postsRoutes);
    - A função register é usada para registrar rotas, plugins ou funcionalidades adicionais na instância do servidor Fastify.
    - Aqui é registrada a função postsRoutes, que define todas as rotas relacionadas a posts. Assim, quando o servidor for iniciado, as rotas definidas em posts.js estarão ativas e disponíveis para 
    receber requisições.

    6ª linha: app.listen({ host: '0.0.0.0', port: 4000 });
    - A função listen inicia o servidor e o coloca em escuta em um endereço e porta específicos. O servidor irá ouvir requisições HTTP a partir dessa configuração.
    - O parâmetro host define o endereço IP em que o servidor deve escutar. Usar '0.0.0.0' significa que o servidor irá escutar em todas as interfaces de rede disponíveis, permitindo que seja acessado 
    tanto localmente quanto externamente (por exemplo, em uma rede local ou na internet).
    - O parâmetro port define a porta em que o servidor vai escutar. No caso, a aplicação será acessível na porta 4000.
*/