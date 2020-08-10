'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Usuario', [{
            id: 1,
            nome: 'Ricardo Correia de Miranda Henriques',
            usuario: 'ricardo',
            setorId: 1,
            usuarioPapelId: 1,
            ativo: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 2,
            nome: 'Luiz Linderman de Queiroz Medeiros Sobrinho',
            usuario: 'linderman',
            setorId: 2,
            usuarioPapelId: 1,
            ativo: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 3,
            nome: 'Mardone Rodrigues Rêgo Sarmento',
            usuario: 'mardone.sarmento',
            setorId: 3,
            usuarioPapelId: 2,
            ativo: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 4,
            nome: 'José Victor Dantas',
            usuario: 'estagio.josevictor',
            setorId: 4,
            usuarioPapelId: 1,
            ativo: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 5,
            nome: 'Jailson Silva de França',
            usuario: 'estagio.jailson',
            setorId: 4,
            usuarioPapelId: 2,
            ativo: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 6,
            nome: 'Mauricio Pereira da Costa Junior',
            usuario: 'estagio.mauricioj',
            setorId: 4,
            usuarioPapelId: 2,
            ativo: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 7,
            nome: 'Paulo Henrique Felix Oliveira',
            usuario: 'estagio.henriqueo',
            setorId: 4,
            usuarioPapelId: 1,
            ativo: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Usuario', null, {});
    }
};
