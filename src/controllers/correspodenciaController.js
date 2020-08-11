import { Op } from "sequelize";
import { Correspodencia, Usuario } from "../database/models";


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
      Correspodencia.create(req.body)
        .then((response) => {
          res.status(200).json({ success: true, correspodencia: response });
        })
        .catch((error) => {
          res.status(400).json({
            success: false,
            message: "Ocorreu um erro enquanto os dados eram inseridos.",
          });
        });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Ocorreu um erro desconhecido com o sistema.",
      });
      next(error);
    }
  },
  update: (req, res, next) => {
    try {
      Correspodencia.update(req.body, { where: { id: req.params.id } })
        .then((response) => {
          Correspodencia.findOne({ where: { id: req.params.id } }).then(
            (response) => {
              if (response) {
                res
                  .status(200)
                  .json({ success: true, correspodencia: response });
              } else {
                res.status(404).json({
                  success: false,
                  message:
                    "O registro solicitado não foi encontrado no sistema.",
                });
              }
            }
          );
        })
        .catch((error) => {
          res.status(400).json({
            success: false,
            message: "Ocorreu um erro enquanto os dados eram atualizados.",
          });
        });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Ocorreu um erro desconhecido com o sistema.",
      });
      next(error);
    }
  },
  list: (req, res, next) => {
    try {
      Correspodencia.findAll({
        attributes: {
          exclude: ["usuarioId"],
        },
        include: [
          {
            model: Usuario,
            as: "usuario",
          },
        ],
      })
        .then((response) => {
          res.status(200).json({ success: true, correspodencia: response });
        })
        .catch((error) => {
          res.status(400).json({
            success: false,
            message: "Ocorreu um erro enquanto os dados eram recuperados.",
          });
        });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Ocorreu um erro desconhecido com o sistema.",
      });
      next(error);
    }
  },
  findById: (req, res, next) => {
    try {
      Correspodencia.findOne({
        where: { id: req.params.id },
      })
        .then((response) => {
          if (response) {
            res.status(200).json({ success: true, correspodencia: response });
          } else {
            res.status(404).json({
              success: false,
              message: "O registro solicitado não foi encontrado no sistema.",
            });
          }
        })
        .catch((error) => {
          res.status(400).json({
            success: false,
            message: "Ocorreu um erro enquanto o dado era recuperado.",
          });
        });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Ocorreu um erro desconhecido com o sistema.",
      });
      next(error);
    }
  },
  ///ANEXOS

  upload: (req, res, next) => {
    try {
        Correspodencia.findOne({ where: { id: req.params.id } }).then(correspodencia => {
            if (correspodencia && req.files && 'anexo' in req.files && req.files.anexo.name.endsWith('.pdf')) {
                storeFile(req.files.anexo).then(anexo => {
                    AnexoCorrespodencia.create({
                        arquivo: anexo.arquivo,
                        observacoes: req.body.observacoes,
                        correspodenciaId: req.params.id
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
                AnexoCorrespodencia.findOne({ where: { arquivo: req.params.arquivo } }).then(anexo => {
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

};