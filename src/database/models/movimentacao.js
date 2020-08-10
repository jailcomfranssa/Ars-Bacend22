'use strict';

module.exports = (sequelize, DataTypes) => {
    const Movimentacao = sequelize.define('Movimentacao', {
        numeroMovimentacao: DataTypes.STRING,
        tipo: DataTypes.ENUM('carga', 'remessa'),
        observacoesSaida: DataTypes.TEXT,
        previsaoDevolucao: DataTypes.DATE,
        responsavelId: DataTypes.INTEGER,
        usuarioId: DataTypes.INTEGER
    }, {
        freezeTableName: true
    });

    Movimentacao.associate = function (models) {
        Movimentacao.belongsTo(models.Usuario, { as: 'usuario', foreignKey: 'usuarioId' })
        Movimentacao.belongsTo(models.Responsavel, { as: 'responsavel', foreignKey: 'responsavelId' })
        Movimentacao.belongsToMany(models.Processo, { as: 'processos', through: 'ProcessoMovimentacao' })
        Movimentacao.hasMany(models.AnexoMovimentacao, { as: 'anexos', foreignKey: 'movimentacaoId' })
    };

    return Movimentacao;
};