'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Movimentacao', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            numeroMovimentacao: {
                allowNull: true,
                type: Sequelize.STRING,
                unique: true
            },
            tipo: {
                allowNull: false,
                type: Sequelize.ENUM('carga', 'remessa')
            },
            observacoesSaida: {
                allowNull: true,
                type: Sequelize.TEXT
            },
            previsaoDevolucao: {
                allowNull: true,
                type: Sequelize.DATE
            },
            responsavelId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Responsavel',
                    key: 'id'
                }
            },
            usuarioId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Usuario',
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
        return queryInterface.dropTable('Movimentacao');
    }
};