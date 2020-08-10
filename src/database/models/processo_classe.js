'use strict';

module.exports = (sequelize, DataTypes) => {
    const ProcessoClasse = sequelize.define('ProcessoClasse', {
        descricao: DataTypes.STRING,
        ativo: DataTypes.BOOLEAN
    }, {
        freezeTableName: true
    });

    ProcessoClasse.associate = function (models) {
        ProcessoClasse.hasMany(models.Processo, { as: 'processos', foreignKey: 'processoClasseId' })
    };

    return ProcessoClasse;
};