"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("AnexoCorrespodencia", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      resultadoCorreios: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      arqiovoAR: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      correspodenciaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Correspodencia",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("AnexoCorrespodencia");
  },
};
