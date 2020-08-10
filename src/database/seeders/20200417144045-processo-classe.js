'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('ProcessoClasse', [{
            id: 1,
            descricao: 'Execução de Medidas Alternativas',
            ativo: true,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 2,
            descricao: 'Seção Cível',
            ativo: true,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 3,
            descricao: 'Seção Infrancional',
            ativo: true,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 4,
            descricao: 'Pedido de Providências',
            ativo: true,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 5,
            descricao: 'Processo Administrativo',
            ativo: true,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 6,
            descricao: 'Processo Administrativo Disciplinar em face de Servidor',
            ativo: true,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 7,
            descricao: 'Reclamação Disciplinar',
            ativo: true,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 8,
            descricao: 'Sindicância',
            ativo: true,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 9,
            descricao: 'Outros Procedimentos',
            ativo: true,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 10,
            descricao: 'Processo Cautelar',
            ativo: true,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 11,
            descricao: 'Processo de Conhecimento',
            ativo: true,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 12,
            descricao: 'Processo de Execução',
            ativo: true,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 13,
            descricao: 'Recursos',
            ativo: true,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 14,
            descricao: 'Medidas Cautelares',
            ativo: true,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 15,
            descricao: 'Medidas Garantidoras',
            ativo: true,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 16,
            descricao: 'Medidas Preparatórias',
            ativo: true,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 17,
            descricao: 'Petição Criminal',
            ativo: true,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 18,
            descricao: 'Procedimento Comum',
            ativo: true,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 19,
            descricao: 'Procedimentos Investigatórios',
            ativo: true,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 20,
            descricao: 'Processo Especial',
            ativo: true,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 21,
            descricao: 'Questões e Processos Incidentes',
            ativo: true,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('ProcessoClasse', null, {});
    }
};
