'use strict';

module.exports = (sequelize, DataTypes) => {
    const Responsavel = sequelize.define('Responsavel', {
        nome: DataTypes.STRING,
        documento: DataTypes.STRING,
        tipoDocumento: DataTypes.ENUM('cpf', 'cnpj'),
        endereco: DataTypes.STRING,
        telefone: DataTypes.STRING,
        email: DataTypes.STRING,
        ativo: DataTypes.BOOLEAN
    }, {
        freezeTableName: true
    });

    Responsavel.associate = function (models) {
        Responsavel.hasMany(models.Movimentacao, { as: 'movimentacoes', foreignKey: 'responsavelId' })
    };

    return Responsavel;
};