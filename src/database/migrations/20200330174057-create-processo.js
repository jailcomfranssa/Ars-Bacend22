'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Processo', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            numeroDocumento: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true
            },
            autorPrincipal: {
                allowNull: false,
                type: Sequelize.STRING
            },
            reuPrincipal: {
                allowNull: false,
                type: Sequelize.STRING
            },
            volumes: {
                allowNull: false,
                type: Sequelize.INTEGER,
                defaultValue: 1
            },
            apensos: {
                allowNull: false,
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            status: {
                allowNull: false,
                type: Sequelize.ENUM('disponível', 'indisponível'),
                defaultValue: 'disponível'
            },
            ativo: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },
            setorId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Setor',
                    key: 'id'
                }
            },
            processoClasseId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'ProcessoClasse',
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
        return queryInterface.dropTable('Processo');
    }
};