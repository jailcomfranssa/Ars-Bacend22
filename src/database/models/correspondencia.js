'use strict';

module.exports = (sequelize, DataTypes) => {
    const Correspodencia = sequelize.define('Correspodencia', {
        numeroProcesso: DataTypes.STRING,
        destinatario: DataTypes.STRING,
        data: DataTypes.DATE,
        status: DataTypes.ENUM('disponível', 'indisponível'),
        ativo: DataTypes.BOOLEAN,
        setorId: DataTypes.INTEGER,
        usuarioId: DataTypes.INTEGER
    }, {
        freezeTableName: true
    });

    Correspodencia.associate = function (models) {
        Correspodencia.belongsTo(models.Setor, { as: 'setor', foreignKey: 'setorId' })
        Correspodencia.belongsTo(models.Usuario, { as: 'usuario', foreignKey: 'usuarioId' })
       // Correspodencia.belongsTo(models.CorrespodenciaClasse, { as: 'classe', foreignKey: 'CorrespodenciaClasseId' })
       // Correspodencia.belongsToMany(models.Movimentacao, { as: 'movimentacoes', through: 'CorrespodenciaMovimentacao' })
    };
    
    return Correspodencia;
};