'use strict';

module.exports = (sequelize, DataTypes) => {
    const Processo = sequelize.define('Processo', {
        numeroDocumento: DataTypes.STRING,
        autorPrincipal: DataTypes.STRING,
        reuPrincipal: DataTypes.STRING,
        volumes: DataTypes.INTEGER,
        apensos: DataTypes.INTEGER,
        status: DataTypes.ENUM('disponível', 'indisponível'),
        ativo: DataTypes.BOOLEAN,
        setorId: DataTypes.INTEGER,
        processoClasseId: DataTypes.INTEGER,
        usuarioId: DataTypes.INTEGER
    }, {
        freezeTableName: true
    });

    Processo.associate = function (models) {
        Processo.belongsTo(models.Setor, { as: 'setor', foreignKey: 'setorId' })
        Processo.belongsTo(models.Usuario, { as: 'usuario', foreignKey: 'usuarioId' })
        Processo.belongsTo(models.ProcessoClasse, { as: 'classe', foreignKey: 'processoClasseId' })
        Processo.belongsToMany(models.Movimentacao, { as: 'movimentacoes', through: 'processoMovimentacao' })
    };
    
    return Processo;
};