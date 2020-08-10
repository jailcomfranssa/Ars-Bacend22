'use strict';

module.exports = (sequelize, DataTypes) => {
    const SetorTipo = sequelize.define('SetorTipo', {
        descricao: DataTypes.STRING
    }, {
        freezeTableName: true
    });

    SetorTipo.associate = function (models) {
        SetorTipo.hasMany(models.Setor, { as: 'setores', foreignKey: 'setorTipoId' })
    };

    return SetorTipo;
};