import { Op } from 'sequelize'
import { Usuario, Setor } from '../database/models'
import tokenService from '../services/tokenService'

export default {

    add: (req, res, next) => {
        try {
            Usuario.create(req.body).then(response => {
                res.status(200).json({ success: true, usuario: response })
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
            Usuario.update(req.body, { where: { id: req.params.id } }).then(response => {
                Usuario.findOne({ where: { id: req.params.id } }).then(response => {
                    if (response) {
                        res.status(200).json({ success: true, usuario: response })
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
            Usuario.findAll({
                attributes: {
                    exclude: ['setorId']
                },
                include: [{
                    model: Setor,
                    as: 'setor'
                }]
            }).then((response) => {
                res.status(200).json({ success: true, usuarios: response })
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
            Usuario.findOne({ where: { id: req.params.id } }).then((response) => {
                if (response) {
                    res.status(200).json({ success: true, usuario: response })
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

    listAtivos: (req, res, next) => {
        try {
            Usuario.findAll({ where: { ativo: true } }).then((response) => {
                res.status(200).json({ success: true, usuarios: response })
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

    deactivate: (req, res, next) => {
        try {
            Usuario.update({ ativo: false }, { where: { id: req.params.id } }).then(response => {
                Usuario.findOne({ where: { id: req.params.id } }).then(response => {
                    if (response) {
                        res.status(200).json({ success: true, usuario: response })
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

    activate: (req, res, next) => {
        try {
            Usuario.update({ ativo: true }, { where: { id: req.params.id } }).then(response => {
                Usuario.findOne({ where: { id: req.params.id } }).then(response => {
                    if (response) {
                        res.status(200).json({ success: true, usuario: response })
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

    listUsuarioByPapel: (req, res, next) => {
        try {
            Usuario.findAll({ 
                where: { usuarioPapelId: req.params.id },
                attributes: {
                    exclude: ['setorId']
                },
                include: [{
                    model: Setor,
                    as: 'setor'
                }]
            }).then((response) => {
                res.status(200).json({ success: true, usuarios: response })
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

    listUsuarioBySetor: (req, res, next) => {
        try {
            Usuario.findAll({ 
                where: { setorId: req.params.id },
                attributes: {
                    exclude: ['setorId']
                },
                include: [{
                    model: Setor,
                    as: 'setor'
                }]
            }).then((response) => {
                res.status(200).json({ success: true, usuarios: response })
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

    login: (req, res, next) => {
        try {
            const usuario = req.body.usuario
            const token = tokenService.encode(usuario.id, usuario.papel.descricao, usuario.usuario)
            res.status(200).json({ usuario, token })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    }

}