"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Relatorio", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      resultado: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      data: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      anexocorespodenciaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "AnexoCorrespodencia",
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
    return queryInterface.dropTable("Relatorio");
  },
};
