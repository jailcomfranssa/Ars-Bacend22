'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Movimentacao', [{
            id: 1,
            numeroMovimentacao: '0000000001/2020',
            tipo: 'carga',
            observacoesSaida: null,
            previsaoDevolucao: '2020-03-02 00:00:00',
            responsavelId: 1,
            usuarioId: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 2,
            numeroMovimentacao: '0000000002/2020',
            tipo: 'carga',
            observacoesSaida: null,
            previsaoDevolucao: '2020-03-05 00:00:00',
            responsavelId: 2,
            usuarioId: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 3,
            numeroMovimentacao: '0000000003/2020',
            tipo: 'remessa',
            observacoesSaida: null,
            previsaoDevolucao: '2020-03-05 00:00:00',
            responsavelId: 10,
            usuarioId: 2,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 4,
            numeroMovimentacao: '0000000004/2020',
            tipo: 'remessa',
            observacoesSaida: null,
            previsaoDevolucao: '2020-03-09 00:00:00',
            responsavelId: 11,
            usuarioId: 2,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 5,
            numeroMovimentacao: '0000000005/2020',
            tipo: 'carga',
            observacoesSaida: null,
            previsaoDevolucao: '2020-06-12 00:00:00',
            responsavelId: 3,
            usuarioId: 3,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 6,
            numeroMovimentacao: '0000000006/2020',
            tipo: 'carga',
            observacoesSaida: null,
            previsaoDevolucao: '2020-06-15 00:00:00',
            responsavelId: 4,
            usuarioId: 3,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 7,
            numeroMovimentacao: '0000000007/2020',
            tipo: 'remessa',
            observacoesSaida: null,
            previsaoDevolucao: '2020-06-12 00:00:00',
            responsavelId: 12,
            usuarioId: 4,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 8,
            numeroMovimentacao: '0000000008/2020',
            tipo: 'remessa',
            observacoesSaida: null,
            previsaoDevolucao: '2020-06-12 00:00:00',
            responsavelId: 10,
            usuarioId: 4,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Movimentacao', null, {});
    }
};
