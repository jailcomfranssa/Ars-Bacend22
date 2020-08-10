'use strict';

module.exports = (sequelize, DataTypes) => {
    const AnexoMovimentacao = sequelize.define('AnexoMovimentacao', {
        arquivo: DataTypes.STRING,
        observacoes: DataTypes.TEXT,
        movimentacaoId: DataTypes.INTEGER
    }, {
        freezeTableName: true
    });

    AnexoMovimentacao.associate = function (models) {
        AnexoMovimentacao.belongsTo(models.Movimentacao, { as: 'movimentacao', foreignKey: 'movimentacaoId'})
    };

    return AnexoMovimentacao;
};