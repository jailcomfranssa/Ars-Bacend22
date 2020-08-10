import { Op } from 'sequelize'
import { Processo, Setor, Usuario, ProcessoClasse } from '../database/models'

export default {

    add: (req, res, next) => {
        try {
            Processo.create(req.body).then(response => {
                res.status(200).json({ success: true, processo: response })
            }).catch(error => {
                res.status(400).json({
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram inseridos.'
                })
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    update: (req, res, next) => {
        try {
            Processo.update(req.body, { where: { id: req.params.id } }).then(response => {
                Processo.findOne({ where: { id: req.params.id } }).then(response => {
                    if (response) {
                        res.status(200).json({ success: true, processo: response })
                    } else {
                        res.status(404).json({
                            success: false,
                            message: 'O registro solicitado não foi encontrado no sistema.'
                        })
                    }
                })
            }).catch(error => {
                res.status(400).json({
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram atualizados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    list: (req, res, next) => {
        try {
            Processo.findAll({
                attributes: {
                    exclude: ['setorId', 'usuarioId', 'processoClasseId']
                },
                include: [{
                    model: Setor,
                    as: 'setor'
                }, {
                    model: Usuario,
                    as: 'usuario'
                }, {
                    model: ProcessoClasse,
                    as: 'classe'
                }]
            }).then((response) => {
                res.status(200).json({ success: true, processos: response })
            }).catch((error) => {
                res.status(400).json({
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    listActive: (req, res, next) => {
        try {
            Processo.findAll({
                where: { ativo: true },
                attributes: {
                    exclude: ['setorId', 'usuarioId', 'processoClasseId']
                },
                include: [{
                    model: Setor,
                    as: 'setor'
                }, {
                    model: Usuario,
                    as: 'usuario'
                }, {
                    model: ProcessoClasse,
                    as: 'classe'
                }]
            }).then((response) => {
                if (response) {
                    res.status(200).json({ success: true, processos: response })
                } else {
                    res.status(404).json({
                        success: false,
                        message: 'O registro solicitado não foi encontrado no sistema.'
                    })
                }
            }).catch((error) => {
                res.status(400).json({
                    success: false,
                    message: 'Ocorreu um erro enquanto o dado era recuperado.'
                })
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    listBySetor: (req, res, next) => {
        try {
            Processo.findAll({
                where: { setorId: req.params.id },
                attributes: {
                    exclude: ['setorId', 'usuarioId', 'processoClasseId']
                },
                include: [{
                    model: Setor,
                    as: 'setor'
                }, {
                    model: Usuario,
                    as: 'usuario'
                }, {
                    model: ProcessoClasse,
                    as: 'classe'
                }]
            }).then((response) => {
                res.status(200).json({ success: true, processos: response })
            }).catch((error) => {
                res.status(400).json({
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    listEmMovimentacao: (req, res, next) => {
        try {
            Processo.findAll({
                where: { status: 'indisponível' },
                attributes: {
                    exclude: ['setorId', 'usuarioId', 'processoClasseId']
                },
                include: [{
                    model: Setor,
                    as: 'setor'
                }, {
                    model: Usuario,
                    as: 'usuario'
                }, {
                    model: ProcessoClasse,
                    as: 'classe'
                }]
            }).then((response) => {
                res.status(200).json({ success: true, processos: response })
            }).catch((error) => {
                res.status(400).json({
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    findById: (req, res, next) => {
        try {
            Processo.findOne({
                where: { id: req.params.id },
                attributes: {
                    exclude: ['setorId', 'usuarioId', 'processoClasseId']
                },
                include: [{
                    model: Setor,
                    as: 'setor'
                }, {
                    model: Usuario,
                    as: 'usuario'
                }, {
                    model: ProcessoClasse,
                    as: 'classe'
                }]
            }).then((response) => {
                if (response) {
                    res.status(200).json({ success: true, processo: response })
                } else {
                    res.status(404).json({
                        success: false,
                        message: 'O registro solicitado não foi encontrado no sistema.'
                    })
                }
            }).catch((error) => {
                res.status(400).json({
                    success: false,
                    message: 'Ocorreu um erro enquanto o dado era recuperado.'
                })
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },


    search: (req, res, next) => {
        try {
            Processo.findAll({
                where: {
                    [Op.or]: [
                        { numeroDocumento: { [Op.like]: `%${req.params.termo}%` } },
                        { autorPrincipal: { [Op.like]: `%${req.params.termo}%` } },
                        { reuPrincipal: { [Op.like]: `%${req.params.termo}%` } }
                    ]
                },
                attributes: {
                    exclude: ['setorId', 'usuarioId', 'processoClasseId']
                },
                include: [{
                    model: Setor,
                    as: 'setor'
                }, {
                    model: Usuario,
                    as: 'usuario'
                }, {
                    model: ProcessoClasse,
                    as: 'classe'
                }]
            }).then((response) => {
                res.status(200).json({ success: true, processos: response })
            }).catch((error) => {
                res.status(400).json({
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    activate: (req, res, next) => {
        try {
            Processo.update({ ativo: true }, { where: { id: req.params.id } }).then(response => {
                Processo.findOne({
                    where: { id: req.params.id },
                    attributes: {
                        exclude: ['setorId', 'usuarioId', 'processoClasseId']
                    },
                    include: [{
                        model: Setor,
                        as: 'setor'
                    }, {
                        model: Usuario,
                        as: 'usuario'
                    }, {
                        model: ProcessoClasse,
                        as: 'classe'
                    }]
                }).then(response => {
                    if (response) {
                        res.status(200).json({ success: true, processo: response })
                    } else {
                        res.status(404).json({
                            success: false,
                            message: 'O registro solicitado não foi encontrado no sistema.'
                        })
                    }
                })
            }).catch(error => {
                res.status(400).json({
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram atualizados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    deactivate: (req, res, next) => {
        try {
            Processo.update({ ativo: false }, { where: { id: req.params.id } }).then(response => {
                Processo.findOne({
                    where: { id: req.params.id },
                    attributes: {
                        exclude: ['setorId', 'usuarioId', 'processoClasseId']
                    },
                    include: [{
                        model: Setor,
                        as: 'setor'
                    }, {
                        model: Usuario,
                        as: 'usuario'
                    }, {
                        model: ProcessoClasse,
                        as: 'classe'
                    }]
                }).then(response => {
                    if (response) {
                        res.status(200).json({ success: true, processo: response })
                    } else {
                        res.status(404).json({
                            success: false,
                            message: 'O registro solicitado não foi encontrado no sistema.'
                        })
                    }
                })
            }).catch(error => {
                res.status(400).json({
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram atualizados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    updateStatus: (req, res, next) => {
        try {
            Processo.update(req.body, { where: { id: req.params.id } }).then(response => {
                Processo.findOne({ 
                    where: { id: req.params.id },
                    attributes: {
                        exclude: [ 'setorId', 'usuarioId', 'processoClasseId' ]
                    },
                    include: [{
                        model: Setor,
                        as: 'setor'
                    },{
                        model: Usuario,
                        as: 'usuario'
                    },{
                        model: ProcessoClasse,
                        as: 'classe'
                    }]
                }).then(response => {
                    if (response) {
                        res.status(200).json({ success: true, processo: response })
                    } else {
                        res.status(404).json({
                            success: false,
                            message: 'O registro solicitado não foi encontrado no sistema.'
                        })
                    }
                })
            }).catch(error => {
                res.status(400).json({
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram atualizados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    }

}