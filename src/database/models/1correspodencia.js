module.exports = (sequelize, DataTypes) => {
  const Correspodencia = sequelize.define(
    "Correspodencia",
    {
      numeroProcesso: DataTypes.STRING,
      data: DataTypes.STRING,
      destinatario: DataTypes.STRING,
      usuarioId: DataTypes.INTEGER,
    },
    {
      freezeTableName: true,
    }
  );
  Correspodencia.associate = function (models) {
    Correspodencia.belongsTo(models.Usuario, {
      as: "usuario",
      foreignKey: "usuarioId",
    });
  };

  return Correspodencia;
};
