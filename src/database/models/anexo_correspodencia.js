'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('AnexoCorrespodencia', {
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
            correspodenciaId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Correspodencia',
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
        return queryInterface.dropTable('AnexoCorrespodencias');
    }
};


// module.exports = (sequelize, DataTypes) => {
//   const AnexoCorrespodencia = sequelize.define(
//     "AnexoCorrespodencia",
//     {
//       resultadoCorreios: DataTypes.STRING,
//       arqiovoAR: DataTypes.TEXT,
//       correspodenciaId: DataTypes.INTEGER,
//     },
//     {
//       freezeTableName: true,
//     }
//   );

//   AnexoCorrespodencia.associate = function (models) {
//     AnexoCorrespodencia.belongsTo(models.Correspodencia, {
//       as: "correspodencia",
//       foreignKey: "correspodenciaId",
//     });
//   };

//   return AnexoCorrespodencia;
// };