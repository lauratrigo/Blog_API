// É Importado o middleware isAuth que foi criado anteriormente. Esse middleware será utilizado nas rotas para garantir que apenas usuários autenticados possam acessar as funcionalidades. 
import { isAuth } from '../middlewares/is-auth.js';

// É criado um array vazio chamado posts. Esse array armazenará os posts criados pelos usuários. Como o exemplo não está usando banco de dados, ele armazena os posts apenas em memória.
const posts = []

// A função postsRoutes está sendo exportada. Ela recebe o objeto app, que é a instância do servidor Fastify, e dentro dessa função você define todas as rotas relacionadas aos posts.
export async function postsRoutes(app) {
    // Rota para listar os posts
    app.get('/posts', { onRequest: [isAuth] }, (request, reply) => {
        return reply.status(200).send(posts);
    });

    // Rota para criar um novo post
    app.post('/posts', { onRequest: [isAuth] }, (request, reply) => {
        const { username, title, content } = request.body;

        const post = {
            id: posts.length + 1,
            owner: username,
            title,
            content,
            date: new Date().toISOString(),
            comments: [],
            likes: []
        };

        posts.push(post);

        return reply.status(201).send(post);  
    })

    // Rota para comentar em um post
    app.post('/posts/:id/comment', { onRequest: [isAuth] }, (request, reply) => {
        const { id } = request.params

        const postIndex = posts.findIndex(post => post.id == +id) // o + no javascript transforma a string em número

        if (postIndex == -1) {
            return reply.status(404).send({message: 'Post not found.'})
        }

        const { username, content } = request.body

        const comment = {
            owner: username,
            content,
            date: new Date().toISOString()
        };

        posts[postIndex].comments.push(comment)

        return reply.status(201).send(posts[postIndex]);  
    })

    // Rota para dar like em um post
    app.patch('/posts/:id/like', { onRequest: [isAuth] }, (request, reply) => {
        const { id } = request.params

        const postIndex = posts.findIndex(post => post.id == +id) 

        if (postIndex == -1) {
            return reply.status(404).send({message: 'Post not found.'})
        }

        const { username } = request.body

        const likeIndex = posts[postIndex].likes.findIndex(item => item == username)

        if (likeIndex >= 0) {
            posts[postIndex].likes.splice(likeIndex, 1)

            return reply.status(200).send(posts[postIndex])
        }

        posts[postIndex].likes.push(username)

        return reply.status(200).send(posts[postIndex]);  
    })

    // Rota para excluir um post
    app.delete('/posts/:id', { onRequest: [isAuth] }, (request, reply) => {
        const { id } = request.params

        const postIndex = posts.findIndex(post => post.id == +id) 

        if (postIndex == -1) {
            return reply.status(404).send({message: 'Post not found.'})
        }

        const { username } = request.body

        if (username != posts[postIndex].owner) {
            return reply.status(400).send({message: 'User is not the post owner.'})
        }

        posts.splice(postIndex, 1)

        return reply.status(204).send();  
    })
}
