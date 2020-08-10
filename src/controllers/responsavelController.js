import { Op } from 'sequelize'
import { Responsavel } from '../database/models'

export default {

    add: (req, res, next) => {
        try {
            Responsavel.create(req.body).then(response => {
                res.status(200).json({ success: true, responsavel: response })
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
            Responsavel.update(req.body, { where: { id: req.params.id } }).then(response => {
                Responsavel.findOne({ where: { id: req.params.id } }).then(response => {
                    if (response) {
                        res.status(200).json({ success: true, responsavel: response })
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
            Responsavel.findAll().then((response) => {
                res.status(200).json({ success: true, responsaveis: response })
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
            Responsavel.findAll({ where: { ativo: true } }).then((response) => {
                if (response) {
                    res.status(200).json({ success: true, responsaveis: response })
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

    listEntities: (req, res, next) => {
        try {
            Responsavel.findAll({ where: { tipoDocumento: 'cnpj' } }).then((response) => {
                res.status(200).json({ success: true, responsaveis: response })
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

    listPersons: (req, res, next) => {
        try {
            Responsavel.findAll({ where: { tipoDocumento: 'cpf' } }).then((response) => {
                res.status(200).json({ success: true, responsaveis: response })
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
            Responsavel.findOne({ where: { id: req.params.id } }).then((response) => {
                if (response) {
                    res.status(200).json({ success: true, responsavel: response })
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
            Responsavel.findAll({
                where: {
                    [Op.or]: [
                        { nome: { [Op.like]: `%${req.params.termo}%` } },
                        { documento: { [Op.like]: `%${req.params.termo}%` } }
                    ]
                }
            }).then((response) => {
                res.status(200).json({ success: true, responsaveis: response })
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
            Responsavel.update({ ativo: true }, { where: { id: req.params.id } }).then(response => {
                Responsavel.findOne({ where: { id: req.params.id } }).then(response => {
                    if (response) {
                        res.status(200).json({ success: true, responsavel: response })
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
            Responsavel.update({ ativo: false }, { where: { id: req.params.id } }).then(response => {
                Responsavel.findOne({ where: { id: req.params.id } }).then(response => {
                    if (response) {
                        res.status(200).json({ success: true, responsavel: response })
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