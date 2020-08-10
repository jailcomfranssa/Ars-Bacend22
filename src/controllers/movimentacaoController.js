import fs from 'fs'
import path from 'path'
import { Op } from 'sequelize'
import utilsService from '../services/utilsService'
import { ProcessoMovimentacao, AnexoMovimentacao } from '../database/models'
import { Movimentacao, Processo, Responsavel, Usuario } from '../database/models'
import tokenService from '../services/tokenService'
import models from '../database/models'

const storeFile = (file) => {
    return new Promise((resolve, reject) => {
        const arquivo = utilsService.renameFile()
        file.mv(utilsService.formatUploadPath(arquivo), (error) => {
            if (error) {
                reject({ error: error })
            } else {
                resolve({ arquivo: arquivo })
            }
        })
    })
}

export default {

    add: (req, res, next) => {
        try {
            const { processos, ...dados } = req.body
            models.sequelize.transaction((t) => {
                return Movimentacao.create(dados, { transaction: t }).then((movimentacao) => {
                    return movimentacao.update({ numeroMovimentacao: utilsService.generateIdentifier(movimentacao.id) }, { transaction: t }).then(response => {
                        return movimentacao.addProcessos(processos, { transaction: t }).then(response => {
                            return Processo.update({ status: 'indisponível' }, { where: { id: processos }, transaction: t }).then(response => {
                                res.status(200).json({ success: true, movimentacao })
                            })
                        })
                    })
                })
            }).catch(error => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram inseridos.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    devolucao: (req, res, next) => {
        try {
            const { devolucoes } = req.body
            const promises = devolucoes.map(devolucao => {
                devolucao.dataDevolucao = new Date()
                return ProcessoMovimentacao.update(devolucao, {
                    where: {
                        movimentacaoId: req.params.id,
                        processoId: devolucao.processoId
                    }
                })
            })

            Promise.all(promises).then(response => {
                Movimentacao.findOne({
                    where: { id: req.params.id },
                    attributes: {
                        exclude: ['responsavelId', 'usuarioId']
                    },
                    include: [{
                        model: Usuario,
                        as: 'usuario'
                    }, {
                        model: Responsavel,
                        as: 'responsavel'
                    }, {
                        model: Processo,
                        as: 'processos',
                        through: {
                            as: 'devolucao',
                            attributes: ['dataDevolucao', 'observacoesDevolucao']
                        },
                    }],
                }).then(movimentacao => {
                    if (movimentacao) {
                        const processos = devolucoes.map(devolucao => devolucao.processoId)
                        Processo.update({ status: 'disponível' }, { where: { id: processos } }).then(response => {
                            res.status(200).json({ success: true, movimentacao })
                        })
                    } else {
                        res.status(404).json({
                            success: false,
                            message: 'O registro solicitado não foi encontrado no sistema.'
                        })
                    }
                })
            }).catch(error => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram alterados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    list: (req, res, next) => {
        try {
            Movimentacao.findAll({
                attributes: {
                    exclude: ['responsavelId', 'usuarioId']
                },
                include: [{
                    model: Usuario,
                    as: 'usuario'
                }, {
                    model: Responsavel,
                    as: 'responsavel'
                }, {
                    model: AnexoMovimentacao,
                    as: 'anexos'
                }, {
                    model: Processo,
                    as: 'processos',
                    through: {
                        as: 'devolucao',
                        attributes: ['dataDevolucao', 'observacoesDevolucao']
                    },
                }],
                order: [
                    ['createdAt', 'DESC']
                ]
            }).then((movimentacoes) => {
                res.status(200).json({ success: true, movimentacoes })
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    listByTipo: (req, res, next) => {
        try {
            Movimentacao.findAll({
                where: { tipo: req.params.tipo },
                attributes: {
                    exclude: ['responsavelId', 'usuarioId']
                },
                include: [{
                    model: Usuario,
                    as: 'usuario'
                }, {
                    model: Responsavel,
                    as: 'responsavel'
                }, {
                    model: AnexoMovimentacao,
                    as: 'anexos'
                }, {
                    model: Processo,
                    as: 'processos',
                    through: {
                        as: 'devolucao',
                        attributes: ['dataDevolucao', 'observacoesDevolucao']
                    },
                }],
                order: [
                    ['createdAt', 'DESC']
                ]
            }).then((movimentacoes) => {
                res.status(200).json({ success: true, movimentacoes })
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    listBySetor: (req, res, next) => {
        try {
            Movimentacao.findAll({
                attributes: {
                    exclude: ['responsavelId', 'usuarioId']
                },
                include: [{
                    model: Usuario,
                    as: 'usuario'
                }, {
                    model: Responsavel,
                    as: 'responsavel'
                }, {
                    model: AnexoMovimentacao,
                    as: 'anexos'
                }, {
                    model: Processo,
                    as: 'processos',
                    where: { setorId: req.params.id },
                    through: {
                        as: 'devolucao',
                        attributes: ['dataDevolucao', 'observacoesDevolucao']
                    },
                }],
                order: [
                    ['createdAt', 'DESC']
                ]
            }).then((movimentacoes) => {
                res.status(200).json({ success: true, movimentacoes })
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    listEmCarga: (req, res, next) => {
        try {
            Movimentacao.findAll({
                attributes: {
                    exclude: ['responsavelId', 'usuarioId']
                },
                include: [{
                    model: Usuario,
                    as: 'usuario'
                }, {
                    model: Responsavel,
                    as: 'responsavel'
                }, {
                    model: AnexoMovimentacao,
                    as: 'anexos'
                }, {
                    model: Processo,
                    as: 'processos',
                    through: {
                        as: 'devolucao',
                        attributes: ['dataDevolucao', 'observacoesDevolucao'],
                        where: {
                            dataDevolucao: {
                                [Op.is]: null
                            }
                        }
                    },
                }],
                order: [
                    ['createdAt', 'DESC']
                ]
            }).then((movimentacoes) => {
                res.status(200).json({
                    success: true,
                    movimentacoes: movimentacoes.filter((mov) => mov.processos.length > 0)
                })
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    listEmCargaBySetor: (req, res, next) => {
        try {
            Movimentacao.findAll({
                attributes: {
                    exclude: ['responsavelId', 'usuarioId']
                },
                include: [{
                    model: Usuario,
                    as: 'usuario'
                }, {
                    model: Responsavel,
                    as: 'responsavel'
                }, {
                    model: AnexoMovimentacao,
                    as: 'anexos'
                }, {
                    model: Processo,
                    as: 'processos',
                    where: { setorId: req.params.id },
                    through: {
                        as: 'devolucao',
                        attributes: ['dataDevolucao', 'observacoesDevolucao'],
                        where: {
                            dataDevolucao: {
                                [Op.is]: null
                            }
                        }
                    },
                }],
                order: [
                    ['createdAt', 'DESC']
                ]
            }).then((movimentacoes) => {
                res.status(200).json({
                    success: true,
                    movimentacoes: movimentacoes.filter((mov) => mov.processos.length > 0)
                })
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    listMovimentacoesExpiradas: (req, res, next) => {
        try {
            Movimentacao.findAll({
                where: {
                    previsaoDevolucao: {
                        [Op.lt]: new Date(),
                    }
                },
                attributes: {
                    exclude: ['responsavelId', 'usuarioId']
                },
                include: [{
                    model: Usuario,
                    as: 'usuario'
                }, {
                    model: Responsavel,
                    as: 'responsavel'
                }, {
                    model: AnexoMovimentacao,
                    as: 'anexos'
                }, {
                    model: Processo,
                    as: 'processos',
                    through: {
                        as: 'devolucao',
                        attributes: ['dataDevolucao', 'observacoesDevolucao'],
                        where: {
                            dataDevolucao: {
                                [Op.is]: null
                            }
                        }
                    },
                }],
                order: [
                    ['createdAt', 'DESC']
                ]
            }).then((movimentacoes) => {
                res.status(200).json({
                    success: true,
                    movimentacoes: movimentacoes.filter((mov) => mov.processos.length > 0)
                })
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    listMovimentacoesExpiradasBySetor: (req, res, next) => {
        try {
            Movimentacao.findAll({
                where: {
                    previsaoDevolucao: {
                        [Op.lt]: new Date(),
                    }
                },
                attributes: {
                    exclude: ['responsavelId', 'usuarioId']
                },
                include: [{
                    model: Usuario,
                    as: 'usuario'
                }, {
                    model: Responsavel,
                    as: 'responsavel'
                }, {
                    model: AnexoMovimentacao,
                    as: 'anexos'
                }, {
                    model: Processo,
                    as: 'processos',
                    where: { setorId: req.params.id },
                    through: {
                        as: 'devolucao',
                        attributes: ['dataDevolucao', 'observacoesDevolucao'],
                        where: {
                            dataDevolucao: {
                                [Op.is]: null
                            }
                        }
                    },
                }],
                order: [
                    ['createdAt', 'DESC']
                ]
            }).then((movimentacoes) => {
                res.status(200).json({
                    success: true,
                    movimentacoes: movimentacoes.filter((mov) => mov.processos.length > 0)
                })
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    listCargasExpiradas: (req, res, next) => {
        try {
            Movimentacao.findAll({
                where: {
                    tipo: 'carga',
                    previsaoDevolucao: {
                        [Op.lt]: new Date(),
                    }
                },
                attributes: {
                    exclude: ['responsavelId', 'usuarioId']
                },
                include: [{
                    model: Usuario,
                    as: 'usuario'
                }, {
                    model: Responsavel,
                    as: 'responsavel'
                }, {
                    model: AnexoMovimentacao,
                    as: 'anexos'
                }, {
                    model: Processo,
                    as: 'processos',
                    through: {
                        as: 'devolucao',
                        attributes: ['dataDevolucao', 'observacoesDevolucao'],
                        where: {
                            dataDevolucao: {
                                [Op.is]: null
                            }
                        }
                    },
                }],
                order: [
                    ['createdAt', 'DESC']
                ]
            }).then((movimentacoes) => {
                res.status(200).json({
                    success: true,
                    movimentacoes: movimentacoes.filter((mov) => mov.processos.length > 0)
                })
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    listCargasExpiradasBySetor: (req, res, next) => {
        try {
            Movimentacao.findAll({
                where: {
                    tipo: 'carga',
                    previsaoDevolucao: {
                        [Op.lt]: new Date(),
                    }
                },
                attributes: {
                    exclude: ['responsavelId', 'usuarioId']
                },
                include: [{
                    model: Usuario,
                    as: 'usuario'
                }, {
                    model: Responsavel,
                    as: 'responsavel'
                }, {
                    model: AnexoMovimentacao,
                    as: 'anexos'
                }, {
                    model: Processo,
                    as: 'processos',
                    where: { setorId: req.params.id },
                    through: {
                        as: 'devolucao',
                        attributes: ['dataDevolucao', 'observacoesDevolucao'],
                        where: {
                            dataDevolucao: {
                                [Op.is]: null
                            }
                        }
                    },
                }],
                order: [
                    ['createdAt', 'DESC']
                ]
            }).then((movimentacoes) => {
                res.status(200).json({
                    success: true,
                    movimentacoes: movimentacoes.filter((mov) => mov.processos.length > 0)
                })
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    listRemessasPendentes: (req, res, next) => {
        try {
            Movimentacao.findAll({
                where: { tipo: 'remessa' },
                attributes: {
                    exclude: ['responsavelId', 'usuarioId']
                },
                include: [{
                    model: Usuario,
                    as: 'usuario'
                }, {
                    model: Responsavel,
                    as: 'responsavel',
                }, {
                    model: AnexoMovimentacao,
                    as: 'anexos'
                }, {
                    model: Processo,
                    as: 'processos',
                    through: {
                        as: 'devolucao',
                        attributes: ['dataDevolucao', 'observacoesDevolucao'],
                        where: {
                            dataDevolucao: { [Op.is]: null }
                        }
                    }
                }],
                order: [
                    ['createdAt', 'DESC']
                ]
            }).then((movimentacoes) => {
                res.status(200).json({
                    success: true,
                    movimentacoes: movimentacoes.filter((mov) => mov.processos.length > 0)
                })
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    listRemessasPendentesBySetor: (req, res, next) => {
        try {
            Movimentacao.findAll({
                where: { tipo: 'remessa' },
                attributes: {
                    exclude: ['responsavelId', 'usuarioId']
                },
                include: [{
                    model: Usuario,
                    as: 'usuario'
                }, {
                    model: Responsavel,
                    as: 'responsavel',
                }, {
                    model: AnexoMovimentacao,
                    as: 'anexos'
                }, {
                    model: Processo,
                    as: 'processos',
                    where: { setorId: req.params.id },
                    through: {
                        as: 'devolucao',
                        attributes: ['dataDevolucao', 'observacoesDevolucao'],
                        where: {
                            dataDevolucao: { [Op.is]: null }
                        }
                    },
                }],
                order: [
                    ['createdAt', 'DESC']
                ]
            }).then((movimentacoes) => {
                res.status(200).json({
                    success: true,
                    movimentacoes: movimentacoes.filter((mov) => mov.processos.length > 0)
                })
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    search: (req, res, next) => {
        try {
            Movimentacao.findAll({
                where: {
                    [Op.or]: [
                        { numeroMovimentacao: { [Op.like]: `%${req.params.termo}%` } },
                        { '$processos.numeroDocumento$': { [Op.like]: `%${req.params.termo}%` } },
                        { '$responsavel.nome$': { [Op.like]: `%${req.params.termo}%` } }
                    ]
                },
                attributes: {
                    exclude: ['responsavelId', 'usuarioId']
                },
                include: [
                    {
                        model: Usuario,
                        as: 'usuario'
                    }, {
                        model: Responsavel,
                        as: 'responsavel',
                    }, {
                        model: AnexoMovimentacao,
                        as: 'anexos'
                    }, {
                        model: Processo,
                        as: 'processos',
                    }
                ],
                order: [
                    ['createdAt', 'DESC']
                ]
            }).then((movimentacoes) => {
                res.status(200).json({ success: true, movimentacoes })
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    upload: (req, res, next) => {
        try {
            Movimentacao.findOne({ where: { id: req.params.id } }).then(movimentacao => {
                if (movimentacao && req.files && 'anexo' in req.files && req.files.anexo.name.endsWith('.pdf')) {
                    storeFile(req.files.anexo).then(anexo => {
                        AnexoMovimentacao.create({
                            arquivo: anexo.arquivo,
                            observacoes: req.body.observacoes,
                            movimentacaoId: req.params.id
                        }).then(anexo => {
                            res.status(200).json({ success: true, anexo })
                        }).catch(error => {
                            res.status(400).json({
                                error: error,
                                success: false,
                                message: 'Ocorreu um erro enquanto o arquivo era salvo.'
                            })
                        })
                    }).catch(error => {
                        res.status(500).json({
                            error: error,
                            success: false,
                            message: 'Ocorreu um erro enquanto o arquivo era salvo.'
                        })
                    })
                } else {
                    res.status(400).json({
                        success: false,
                        message: 'Ocorreu um erro enquanto o arquivo era salvo.'
                    })
                }
            }).catch((error) => {
                res.status(400).json({
                    error: error,
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

    download: (req, res, next) => {
        try {
            tokenService.verifyToken(req.params.token).then((result) => {
                if (result) {
                    AnexoMovimentacao.findOne({ where: { arquivo: req.params.arquivo } }).then(anexo => {
                        if (anexo) {
                            res.sendFile(utilsService.formatDownloadPath(anexo), {
                                root: 'uploads/',
                                dotfiles: 'deny',
                                headers: {
                                    'x-sent': true,
                                    'x-timestamp': Date.now(),
                                    'Content-Type': 'application/pdf'
                                }
                            }, (error) => {
                                if (error) {
                                    res.status(404).json({
                                        error: error,
                                        success: false,
                                        message: 'O arquivo solicitado não foi encontrado no sistema.'
                                    })
                                }
                            })
                        } else {
                            res.status(404).json({
                                success: false,
                                message: 'O arquivo solicitado não foi encontrado no sistema.'
                            })
                        }
                    }).catch(error => {
                        res.status(400).json({
                            error: error,
                            success: false,
                            message: 'Ocorreu um erro enquanto o arquivo era recuperado.'
                        })
                    })
                } else {
                    res.status(401).send({ 
                        success: false,
                        message: 'Você não possui um token de acesso válido.' 
                    })
                }
            })
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