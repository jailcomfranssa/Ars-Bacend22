'use strict';

module.exports = (sequelize, DataTypes) => {
    const ProcessoMovimentacao = sequelize.define('ProcessoMovimentacao', {
        dataDevolucao: DataTypes.DATE,
        observacoesDevolucao: DataTypes.TEXT,
        processoId: DataTypes.INTEGER,
        movimentacaoId: DataTypes.INTEGER
    }, {
        freezeTableName: true
    });

    ProcessoMovimentacao.associate = function (models) {
        ProcessoMovimentacao.belongsTo(models.Processo, { as: 'processo', foreignKey: 'processoId' })
        ProcessoMovimentacao.belongsTo(models.Movimentacao, { as: 'movimentacao', foreignKey: 'movimentacaoId' })
    };

    return ProcessoMovimentacao;
};