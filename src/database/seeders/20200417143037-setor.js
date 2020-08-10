'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Setor', [{
            id: 1,
            descricao: 'Núcleo Judiciário',
            endereco: 'R. João Teixeira de Carvalho, 480',
            ativo: 1,
            setorTipoId: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 2,
            descricao: '3ª Vara Federal',
            endereco: 'R. João Teixeira de Carvalho, 480',
            ativo: 1,
            setorTipoId: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 3,
            descricao: '10ª Vara Federal',
            endereco: 'R. João Teixeira de Carvalho, 480',
            ativo: 1,
            setorTipoId: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 4,
            descricao: 'Escritório de Inovação',
            endereco: 'R. João Teixeira de Carvalho, 480',
            ativo: 1,
            setorTipoId: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Setor', null, {});
    }
};
