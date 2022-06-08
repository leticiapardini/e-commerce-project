import express, {
    request,
    response
} from 'express';
import {
    v4
} from 'uuid';

const server = express();
server.use(express.json());



let users = [];

// USERS

/********************
 *     Dados         *
 *                   *
 * id: string;       *
 * name: string      *
 * email: string     *
 * password: string  *
 *                   *
 ********************/

//     listagem
server.get('/users', (request, response) => {
    response.send(users);
});

//     pesquisa
server.get('/users/:id', (request, response) => {
    const {
        id
    } = request.params;
    const user = users.find(x => x.id === id);
    response.send(user);
})

//     cadastro
server.post('/users', (request, response) => {
    const {
        name,
        email,
        password
    } = request.body;

    const id = v4();
    const user = {
        id,
        name,
        email,
        password
    }

    users.push(user);

    response.send({
        conteudo: name
    });
});

//     edição
server.put('/users/:id', (request, response) => {
    const {
        id
    } = request.params;
    const {
        name,
        email,
        password
    } = request.body;

    const userIndex = users.findIndex(x => x.id === id)
    const user = {
        id,
        name,
        email,
        password,
    };
    users[userIndex] = user;

    response.send(user);
});

//      delete
server.delete('/users/:id', (request, response) => {
    const {
        id
    } = request.params;
    users = users.filter(x => x.id !== id);
    response.send({})
});

// TODO fazer processo acima para PROTUDOS(LIVROS)

const PORT = 3333;
server.listen(PORT, () => console.log(`~*~ Server listening on PORT: ${PORT}. ~*~`));