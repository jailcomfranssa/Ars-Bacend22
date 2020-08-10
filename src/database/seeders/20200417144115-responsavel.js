'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Responsavel', [{
            id: 1,
            nome: 'José Carlos de Souza',
            documento: '665.015.344-37',
            tipoDocumento: 'cpf',
            endereco: 'R. Rita Xavier de Oliveira, 500',
            telefone: '(83) 99854-5421',
            email: 'jcs@gmail.com',
            ativo: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 2,
            nome: 'Karine Maria Gonçalves Cortez',
            documento: '587.342.024-63',
            tipoDocumento: 'cpf',
            endereco: 'R. Comerciário Antônio Manoel de Sousa, 900',
            telefone: '(83) 96216-6512',
            email: 'kmgc@gmail.com',
            ativo: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 3,
            nome: 'Gustavo Pereira dos Santos',
            documento: '709.823.134-70',
            tipoDocumento: 'cpf',
            endereco: 'R. Osvaldo Travassos Campos, 852',
            telefone: '(83) 98754-6521',
            email: 'gps@gmail.com',
            ativo: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 4,
            nome: 'Alcione Monteiro Lucas Germino',
            documento: '437.103.424-14',
            tipoDocumento: 'cpf',
            endereco: 'R. Carreteiro João Simeão Sobrinho, 2015',
            telefone: '(83) 96214-5413',
            email: 'amlg@gmail.com',
            ativo: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 5,
            nome: 'Carolina Caraciolo de Souza',
            documento: '016.396.244-81',
            tipoDocumento: 'cpf',
            endereco: 'R. José Augusto Sebadelhe, 2138',
            telefone: '(83) 99658-2212',
            email: 'ccs@gmail.com',
            ativo: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 6,
            nome: 'Jonas Augusto de Barros Chaves',
            documento: '278.003.844-62',
            tipoDocumento: 'cpf',
            endereco: 'R. Maria Vilani Benicio Alves, 5412',
            telefone: '(83) 99210-5412',
            email: 'jabc@gmail.com',
            ativo: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 7,
            nome: 'Marcelo Henrique da Silva Veloso',
            documento: '651.382.324-28',
            tipoDocumento: 'cpf',
            endereco: 'R. Thiago Azevedo da Silva, 3214',
            telefone: '(83) 95432-5400',
            email: 'mhsv@gmail.com',
            ativo: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 8,
            nome: 'Luciana Dutra Cavalcanti Ricarte',
            documento: '025.828.374-23',
            tipoDocumento: 'cpf',
            endereco: 'R. Oceano Antártico, 30',
            telefone: '(83) 3225-6542',
            email: 'ldcr@gmail.com',
            ativo: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 9,
            nome: 'Álvaro Rogério Batista',
            documento: '144.185.984-56',
            tipoDocumento: 'cpf',
            endereco: 'R. Ascendino Toscano de Brito, 800',
            telefone: '(83) 96542-5413',
            email: 'arb@gmail.com',
            ativo: 0,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 10,
            nome: 'Ministério Público Federal',
            documento: '26.989.715/0020-75',
            tipoDocumento: 'cnpj',
            endereco: 'Av. Epitácio Pessoa, 1800',
            telefone: '(83) 3044-6200',
            email: 'arquivo@mpf.mp.br',
            ativo: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 11,
            nome: 'Instituto Nacional do Seguro Social',
            documento: '29.979.036/0001-40',
            tipoDocumento: 'cnpj',
            endereco: 'R. Paulino dos Santos Coelho, 30',
            telefone: '(83) 3255-0366',
            email: 'arquivo@inss.gov.br',
            ativo: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 12,
            nome: 'Caixa Economica Federal',
            documento: '00.360.305/0001-04',
            tipoDocumento: 'cnpj',
            endereco: 'R. Josefa Taveira, 1173',
            telefone: '(83) 3236-3399',
            email: 'atendimento@caixa.gov.br',
            ativo: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Responsavel', null, {});
    }
};
