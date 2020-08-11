module.exports = (sequelize, DataTypes) => {
    const Correspodencia = sequelize.define(
      "Correspodencia",
      {
        resultado: DataTypes.STRING,
        data: DataTypes.STRING,
  
        anexocorespodenciaId: DataTypes.INTEGER,
      },
      {
        freezeTableName: true,
      }
    );
    Correspodencia.associate = function (models) {
      Correspodencia.belongsTo(models.Usuario, {
        as: "anexocorespodencia",
        foreignKey: "anexocorespodenciaId",
      });
    };
  
    return Correspodencia;
  };