'use strict';

module.exports = (sequelize, DataTypes) => {
    const UsuarioPapel = sequelize.define('UsuarioPapel', {
        descricao: DataTypes.STRING,
        ativo: DataTypes.BOOLEAN
    }, {
        freezeTableName: true
    });

    UsuarioPapel.associate = function (models) {
        UsuarioPapel.hasMany(models.Usuario, { as: 'usuarios', foreignKey: 'usuarioPapelId' })
    };

    return UsuarioPapel;
};