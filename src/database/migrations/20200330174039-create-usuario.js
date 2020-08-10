'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Usuario', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nome: {
                type: Sequelize.STRING
            },
            usuario: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: false
            },
            setorId: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Setor',
                    key: 'id'
                }
            },
            usuarioPapelId: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: 'UsuarioPapel',
                    key: 'id'
                }
            },
            ativo: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
                defaultValue: true
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
        return queryInterface.dropTable('Usuario');
    }
};