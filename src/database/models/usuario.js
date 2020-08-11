'use strict';

module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        nome: DataTypes.STRING,
        usuario: DataTypes.STRING,
        setorId: DataTypes.INTEGER,
        usuarioPapelId: DataTypes.INTEGER,
        ativo: DataTypes.BOOLEAN
    }, {
        freezeTableName: true
    });

    Usuario.associate = function (models) {
        Usuario.belongsTo(models.Setor, { as: 'setor', foreignKey: 'setorId' })
        Usuario.belongsTo(models.UsuarioPapel, { as: 'papel', foreignKey: 'usuarioPapelId' })
      //  Usuario.hasMany(models.Movimentacao, { as: 'movimentacoes', foreignKey: 'usuarioId' })
        Usuario.hasMany(models.Processo, { as: 'processos', foreignKey: 'usuarioId' })
    };

    return Usuario;
};