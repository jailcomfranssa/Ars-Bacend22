import { Op } from 'sequelize'
import { Setor } from '../database/models'

export default {

    add: (req, res, next) => {
        try {
            Setor.create(req.body).then(response => {
                res.status(200).json({ success: true, setor: response })
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

    list: (req, res, next) => {
        try {
            Setor.findAll().then((response) => {
                res.status(200).json({ success: true, setores: response })
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
            Setor.findOne({ where: { id: req.params.id } }).then((response) => {
                if (response) {
                    res.status(200).json({ success: true, setor: response })
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

    activate: (req, res, next) => {
        try {
            Setor.update({ ativo: true }, { where: { id: req.params.id } }).then(response => {
                Setor.findOne({  where: { id: req.params.id } }).then(response => {
                    if (response) {
                        res.status(200).json({ success: true, setor: response })
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
            Setor.update({ ativo: false }, { where: { id: req.params.id } }).then(response => {
                Setor.findOne({ where: { id: req.params.id } }).then(response => {
                    if (response) {
                        res.status(200).json({ success: true, setor: response })
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

    listActive: (req, res, next) => {
        try {
            Setor.findAll({ where: { ativo: true } }).then((response) => {
                if (response) {
                    res.status(200).json({ success: true, setores: response })
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

    update: (req, res, next) => {
        try {
            Setor.update(req.body, { where: { id: req.params.id } }).then(response => {
                Setor.findOne({ where: { id: req.params.id } }).then(response => {
                    if (response) {
                        res.status(200).json({ success: true, setor: response })
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