import { Op } from "sequelize";
import { Relatorio } from "../database/models";

export default {
  add: (req, res, next) => {
    try {
      Relatorio.create(req.body)
        .then((response) => {
          res.status(200).json({ success: true, relatorio: response });
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
      Relatorio.update(req.body, { where: { id: req.params.id } })
        .then((response) => {
          Relatorio.findOne({ where: { id: req.params.id } }).then(
            (response) => {
              if (response) {
                res.status(200).json({ success: true, relatorio: response });
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
      Relatorio.findAll({})
        .then((response) => {
          res.status(200).json({ success: true, relatorio: response });
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
      Relatorio.findOne({
        where: { id: req.params.id },
      })
        .then((response) => {
          if (response) {
            res.status(200).json({ success: true, relatorio: response });
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
};
