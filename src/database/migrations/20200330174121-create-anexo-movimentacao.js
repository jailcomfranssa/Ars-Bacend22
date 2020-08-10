'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('AnexoMovimentacao', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            arquivo: {
                allowNull: true,
                type: Sequelize.STRING
            },
            observacoes: {
                allowNull: true,
                type: Sequelize.TEXT
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
        return queryInterface.dropTable('AnexoMovimentacaos');
    }
};