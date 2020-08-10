"use strict";

module.exports = (sequelize, DataTypes) => {
  const AnexoCorrespodencia = sequelize.define(
    "AnexoCorrespodencia",
    {
      resultadoCorreios: DataTypes.STRING,
      arqiovoAR: DataTypes.TEXT,
      correspodenciaId: DataTypes.INTEGER,
    },
    {
      freezeTableName: true,
    }
  );

  AnexoCorrespodencia.associate = function (models) {
    AnexoCorrespodencia.belongsTo(models.Correspodencia, {
      as: "correspodencia",
      foreignKey: "correspodenciaId",
    });
  };

  return AnexoCorrespodencia;
};
