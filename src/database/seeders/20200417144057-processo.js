'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Processo', [{
            id: 1,
            numeroDocumento: '0000004-06.2017.4.05.8200',
            autorPrincipal: 'Gilberto Soares da Silva',
            reuPrincipal: 'Sulamerica Companhia Nacional de Seguros',
            volumes: 1,
            apensos: 0,
            status: 'disponível',
            ativo: 1,
            setorId: 1,
            processoClasseId: 1,
            usuarioId: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 2,
            numeroDocumento: '0000164-90.2001.4.05.8200',
            autorPrincipal: 'Joao Targino Alves',
            reuPrincipal: 'Presidente do Conselho Regional de Farmacia do Estado da Paraiba',
            volumes: 1,
            apensos: 0,
            status: 'indisponível',
            ativo: 1,
            setorId: 1,
            processoClasseId: 3,
            usuarioId: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 3,
            numeroDocumento: '0201920-19.2002.4.05.8200',
            autorPrincipal: 'Instituto Nacional de Seguro Social',
            reuPrincipal: 'Domicio Leonardo Araujo Alves',
            volumes: 1,
            apensos: 0,
            status: 'indisponível',
            ativo: 1,
            setorId: 1,
            processoClasseId: 2,
            usuarioId: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 4,
            numeroDocumento: '0000004-89.2005.4.05.8200',
            autorPrincipal: 'Carla Gonçalves Dias',
            reuPrincipal: 'Instituto Nacional de Seguro Social',
            volumes: 1,
            apensos: 0,
            status: 'disponível',
            ativo: 1,
            setorId: 1,
            processoClasseId: 1,
            usuarioId: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 5,
            numeroDocumento: '0000004-06.2015.4.05.8200',
            autorPrincipal: 'Maria da Silva Soares',
            reuPrincipal: 'Instituto Nacional de Seguro Social',
            volumes: 1,
            apensos: 0,
            status: 'indisponível',
            ativo: 1,
            setorId: 1,
            processoClasseId: 1,
            usuarioId: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 6,
            numeroDocumento: '0000176-45.2017.4.05.8200',
            autorPrincipal: 'Juciene Fluvia Felipe Montenegro',
            reuPrincipal: 'Liberty Seguros',
            volumes: 1,
            apensos: 0,
            status: 'indisponível',
            ativo: 1,
            setorId: 1,
            processoClasseId: 1,
            usuarioId: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 7,
            numeroDocumento: '0008561-89.2011.4.05.8200',
            autorPrincipal: 'João Carlos Lima Rodrigues Pita',
            reuPrincipal: 'Reitor da Universidade Federal da Paraíba',
            volumes: 1,
            apensos: 0,
            status: 'indisponível',
            ativo: 1,
            setorId: 1,
            processoClasseId: 3,
            usuarioId: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 8,
            numeroDocumento: '0009891-68.2004.4.05.8200',
            autorPrincipal: 'João Carlos Cardoso da Costa',
            reuPrincipal: 'Eva Marli da Cruz',
            volumes: 1,
            apensos: 0,
            status: 'disponível',
            ativo: 1,
            setorId: 1,
            processoClasseId: 5,
            usuarioId: 1,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 9,
            numeroDocumento: '0110915-86.1900.4.05.8200',
            autorPrincipal: 'Caixa Economica Federal',
            reuPrincipal: 'Joao Carlos Santiago',
            volumes: 1,
            apensos: 0,
            status: 'disponível',
            ativo: 1,
            setorId: 2,
            processoClasseId: 4,
            usuarioId: 2,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 10,
            numeroDocumento: '0114601-86.1900.4.05.8200',
            autorPrincipal: 'Joao Carlos Pereira Padilha',
            reuPrincipal: 'Instituto Nacional de Previdencia Social',
            volumes: 1,
            apensos: 0,
            status: 'disponível',
            ativo: 1,
            setorId: 2,
            processoClasseId: 1,
            usuarioId: 2,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 11,
            numeroDocumento: '0000553-12.2000.4.05.8200',
            autorPrincipal: 'Joao Henrique Caminha de Souza',
            reuPrincipal: 'Sindicato dos Trabalhadores Rurais de Sapé',
            volumes: 1,
            apensos: 0,
            status: 'disponível',
            ativo: 1,
            setorId: 2,
            processoClasseId: 4,
            usuarioId: 2,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 12,
            numeroDocumento: '0006803-42.1992.4.05.8200',
            autorPrincipal: 'Francisco Martinez Conde e Outros',
            reuPrincipal: 'Instituto Nacional do Seguro Social',
            volumes: 1,
            apensos: 0,
            status: 'indisponível',
            ativo: 1,
            setorId: 2,
            processoClasseId: 3,
            usuarioId: 2,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 13,
            numeroDocumento: '0012200-77.1995.4.05.8200',
            autorPrincipal: 'Erminia Fernandes de Holanda Cavalcanti',
            reuPrincipal: 'Caixa Economica Federal',
            volumes: 1,
            apensos: 0,
            status: 'indisponível',
            ativo: 1,
            setorId: 2,
            processoClasseId: 2,
            usuarioId: 2,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 14,
            numeroDocumento: '0003162-13.2010.4.05.8201',
            autorPrincipal: 'João Henrique Ribeiro Nunes',
            reuPrincipal: 'Coordenador Geral do Curso de Graduação da UFCG',
            volumes: 1,
            apensos: 0,
            status: 'disponível',
            ativo: 1,
            setorId: 2,
            processoClasseId: 5,
            usuarioId: 2,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 15,
            numeroDocumento: '0000297-95.2016.4.05.8204',
            autorPrincipal: 'Conselho Regional de Contabilidade do Estado da Paraíba',
            reuPrincipal: 'João Henrique do Nascimento Neto',
            volumes: 1,
            apensos: 0,
            status: 'disponível',
            ativo: 1,
            setorId: 2,
            processoClasseId: 2,
            usuarioId: 2,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 16,
            numeroDocumento: '0001214-41.2007.4.05.8201',
            autorPrincipal: 'Conselho Regional de Odontologia',
            reuPrincipal: 'Elen Lucie Ribeiro Torres Campos',
            volumes: 1,
            apensos: 0,
            status: 'indisponível',
            ativo: 1,
            setorId: 2,
            processoClasseId: 1,
            usuarioId: 2,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 17,
            numeroDocumento: '0000109-46.2018.4.05.8200',
            autorPrincipal: 'Maria Nazaré Serpa e Outros',
            reuPrincipal: 'Liberty Seguros e Outro',
            volumes: 1,
            apensos: 0,
            status: 'indisponível',
            ativo: 1,
            setorId: 3,
            processoClasseId: 5,
            usuarioId: 3,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 18,
            numeroDocumento: '0009920-79.2008.4.05.8200',
            autorPrincipal: 'Gustavo Cesar de Figueiredo Porto',
            reuPrincipal: 'Sindicato dos Servidores do Ministério da Economia',
            volumes: 1,
            apensos: 0,
            status: 'disponível',
            ativo: 1,
            setorId: 3,
            processoClasseId: 3,
            usuarioId: 3,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 19,
            numeroDocumento: '0000611-20.1997.4.05.8200',
            autorPrincipal: 'Maria Veronica Oliveira de Souza e Outro',
            reuPrincipal: 'João Ferreira Sobrinho',
            volumes: 1,
            apensos: 0,
            status: 'disponível',
            ativo: 1,
            setorId: 3,
            processoClasseId: 4,
            usuarioId: 3,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 20,
            numeroDocumento: '0019014-76.1993.4.05.8200',
            autorPrincipal: 'Alvaro Gustavo Ribeiro da Costa',
            reuPrincipal: 'Ana Helena Nunes da Silva e Outro',
            volumes: 1,
            apensos: 0,
            status: 'disponível',
            ativo: 1,
            setorId: 3,
            processoClasseId: 2,
            usuarioId: 3,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 21,
            numeroDocumento: '0019650-94.1900.4.05.8202',
            autorPrincipal: 'Jucicleide Soares de Sousa e Sales',
            reuPrincipal: 'Caixa Economica Federal',
            volumes: 1,
            apensos: 0,
            status: 'disponível',
            ativo: 1,
            setorId: 3,
            processoClasseId: 5,
            usuarioId: 3,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 22,
            numeroDocumento: '0006555-95.2000.4.05.8200',
            autorPrincipal: 'Henrique Miranda de Assis e Outros',
            reuPrincipal: 'Delegado da Receita Federal em João Pessoa',
            volumes: 1,
            apensos: 0,
            status: 'disponível',
            ativo: 1,
            setorId: 3,
            processoClasseId: 2,
            usuarioId: 3,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 23,
            numeroDocumento: '0001075-44.1997.4.05.8200',
            autorPrincipal: 'Manoel Fernandes Sobrinho e Outros',
            reuPrincipal: 'Universidade Federal da Paraíba',
            volumes: 1,
            apensos: 0,
            status: 'disponível',
            ativo: 1,
            setorId: 3,
            processoClasseId: 3,
            usuarioId: 3,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 24,
            numeroDocumento: '0001752-15.2013.4.05.8200',
            autorPrincipal: 'Ministério Público Federal',
            reuPrincipal: 'José Osni Nunes e Outro',
            volumes: 1,
            apensos: 0,
            status: 'indisponível',
            ativo: 1,
            setorId: 3,
            processoClasseId: 5,
            usuarioId: 3,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 25,
            numeroDocumento: '0003482-91.1995.4.05.8200',
            autorPrincipal: 'Fernando Jose Lianza Dias',
            reuPrincipal: 'Caixa Economica Federal',
            volumes: 1,
            apensos: 0,
            status: 'indisponível',
            ativo: 1,
            setorId: 4,
            processoClasseId: 2,
            usuarioId: 4,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 26,
            numeroDocumento: '0003985-82.2013.4.05.8200',
            autorPrincipal: 'Universidade Federal da Paraíba',
            reuPrincipal: 'Zilma Maria Ramos Jarry Richardson',
            volumes: 1,
            apensos: 0,
            status: 'disponível',
            ativo: 1,
            setorId: 4,
            processoClasseId: 1,
            usuarioId: 4,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 27,
            numeroDocumento: '0001090-03.2003.4.05.8200',
            autorPrincipal: 'Maria Jose de Carvalho Luna e Outros',
            reuPrincipal: 'Instituto Nacional do Seguro Social',
            volumes: 1,
            apensos: 0,
            status: 'disponível',
            ativo: 1,
            setorId: 4,
            processoClasseId: 4,
            usuarioId: 4,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 28,
            numeroDocumento: '0000101-84.2009.4.05.8200',
            autorPrincipal: 'Abel Florencio Costa e Outros',
            reuPrincipal: 'Caixa Economica Federal',
            volumes: 1,
            apensos: 0,
            status: 'indisponível',
            ativo: 1,
            setorId: 4,
            processoClasseId: 5,
            usuarioId: 4,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 29,
            numeroDocumento: '0000181-24.2004.4.05.8200',
            autorPrincipal: 'Grace Graça Gomes',
            reuPrincipal: 'Fabio Leite de Farias Brito e Outros',
            volumes: 1,
            apensos: 0,
            status: 'indisponível',
            ativo: 1,
            setorId: 4,
            processoClasseId: 3,
            usuarioId: 4,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 30,
            numeroDocumento: '0000239-51.2009.4.05.8200',
            autorPrincipal: 'Luzimar Campos da Silva',
            reuPrincipal: 'Instituto Nacional de Seguro Social',
            volumes: 1,
            apensos: 0,
            status: 'disponível',
            ativo: 1,
            setorId: 4,
            processoClasseId: 2,
            usuarioId: 4,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 31,
            numeroDocumento: '0000283-70.2009.4.05.8200',
            autorPrincipal: 'Sonia Maria Oliveira de Alencar',
            reuPrincipal: 'Caixa Economica Federal',
            volumes: 1,
            apensos: 0,
            status: 'disponível',
            ativo: 1,
            setorId: 4,
            processoClasseId: 5,
            usuarioId: 4,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 32,
            numeroDocumento: '0001065-34.1996.4.05.8200',
            autorPrincipal: 'Helena Ferreira da Silva',
            reuPrincipal: 'Instituto Brasieiro do Meio Ambiente e dos Recursos Naturais',
            volumes: 1,
            apensos: 0,
            status: 'disponível',
            ativo: 1,
            setorId: 4,
            processoClasseId: 3,
            usuarioId: 4,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 33,
            numeroDocumento: '0001569-25.2005.4.05.8200',
            autorPrincipal: 'Ministério Público Federal',
            reuPrincipal: 'Polibio Alves dos Santos e Outros',
            volumes: 1,
            apensos: 0,
            status: 'disponível',
            ativo: 1,
            setorId: 4,
            processoClasseId: 1,
            usuarioId: 4,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Processo', null, {});
    }
};