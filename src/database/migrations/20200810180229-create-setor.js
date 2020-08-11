'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Setor', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            descricao: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true
            },
            endereco: {
                allowNull: false,
                type: Sequelize.STRING
            },
            ativo: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },
            setorTipoId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'SetorTipo',
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
        return queryInterface.dropTable('Setor');
    }
};