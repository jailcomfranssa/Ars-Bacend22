'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('ProcessoMovimentacao', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            dataDevolucao: {
                allowNull: true,
                type: Sequelize.DATE
            },
            observacoesDevolucao: {
                allowNull: true,
                type: Sequelize.TEXT
            },
            processoId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Processo',
                    key: 'id'
                }
            },
            movimentacaoId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Movimentacao',
                    key: 'id'
                }
            },
            createdAt: {
                allowNull: false,
                defaultValue: Sequelize.fn('NOW'),
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                defaultValue: Sequelize.fn('NOW'),
                type: Sequelize.DATE
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('ProcessoMovimentacao');
    }
};