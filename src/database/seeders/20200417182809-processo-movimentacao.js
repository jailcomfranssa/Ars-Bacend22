'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('ProcessoMovimentacao', [{
            id: 1,
            dataDevolucao: '2020-03-03 00:00:00',
            observacoesDevolucao: null,
            processoId: 1,
            movimentacaoId: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 2,
            dataDevolucao: null,
            observacoesDevolucao: null,
            processoId: 2,
            movimentacaoId: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 3,
            dataDevolucao: null,
            observacoesDevolucao: null,
            processoId: 3,
            movimentacaoId: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 4,
            dataDevolucao: null,
            observacoesDevolucao: null,
            processoId: 5,
            movimentacaoId: 2,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 5,
            dataDevolucao: null,
            observacoesDevolucao: null,
            processoId: 6,
            movimentacaoId: 2,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 6,
            dataDevolucao: '2020-03-05 00:00:00',
            observacoesDevolucao: null,
            processoId: 7,
            movimentacaoId: 2,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 7,
            dataDevolucao: '2020-03-05 00:00:00',
            observacoesDevolucao: null,
            processoId: 9,
            movimentacaoId: 3,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 8,
            dataDevolucao: null,
            observacoesDevolucao: null,
            processoId: 10,
            movimentacaoId: 3,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 9,
            dataDevolucao: null,
            observacoesDevolucao: null,
            processoId: 13,
            movimentacaoId: 4,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 10,
            dataDevolucao: null,
            observacoesDevolucao: null,
            processoId: 14,
            movimentacaoId: 4,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 11,
            dataDevolucao: null,
            observacoesDevolucao: null,
            processoId: 15,
            movimentacaoId: 4,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 12,
            dataDevolucao: '2020-04-03 00:00:00',
            observacoesDevolucao: null,
            processoId: 17,
            movimentacaoId: 5,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 13,
            dataDevolucao: null,
            observacoesDevolucao: null,
            processoId: 18,
            movimentacaoId: 5,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 14,
            dataDevolucao: null,
            observacoesDevolucao: null,
            processoId: 19,
            movimentacaoId: 5,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 15,
            dataDevolucao: null,
            observacoesDevolucao: null,
            processoId: 21,
            movimentacaoId: 6,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 16,
            dataDevolucao: null,
            observacoesDevolucao: null,
            processoId: 22,
            movimentacaoId: 6,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 17,
            dataDevolucao: '2020-04-06 00:00:00',
            observacoesDevolucao: null,
            processoId: 23,
            movimentacaoId: 6,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 18,
            dataDevolucao: '2020-04-06 00:00:00',
            observacoesDevolucao: null,
            processoId: 25,
            movimentacaoId: 7,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 19,
            dataDevolucao: null,
            observacoesDevolucao: null,
            processoId: 26,
            movimentacaoId: 7,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 20,
            dataDevolucao: '2020-04-14 00:00:00',
            observacoesDevolucao: null,
            processoId: 29,
            movimentacaoId: 8,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 21,
            dataDevolucao: '2020-04-14 00:00:00',
            observacoesDevolucao: null,
            processoId: 30,
            movimentacaoId: 8,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('ProcessoMovimentacao', null, {});
    }
};
