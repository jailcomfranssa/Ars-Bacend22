'use strict';

module.exports = (sequelize, DataTypes) => {
    const Setor = sequelize.define('Setor', {
        descricao: DataTypes.STRING,
        endereco: DataTypes.STRING,
        ativo: DataTypes.BOOLEAN,
        setorTipoId: DataTypes.INTEGER
    }, {
        freezeTableName: true
    });

    Setor.associate = function (models) {
        Setor.hasMany(models.Usuario, { as: 'usuarios', foreignKey: 'setorId' })
        Setor.belongsTo(models.SetorTipo, { as: 'tipo', foreignKey: 'setorTipoId' })
        Setor.hasMany(models.Correspondencia, { as: 'correspondencia', foreignKey: 'setorId' })
    };

    return Setor;
};