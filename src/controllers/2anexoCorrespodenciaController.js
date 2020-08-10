import fs from "fs";
import path from "path";
import { Op } from "sequelize";
import utilsService from "../services/utilsService";
import { ProcessoMovimentacao, AnexoMovimentacao } from "../database/models";
import {
  Movimentacao,
  Processo,
  Responsavel,
  Usuario,
} from "../database/models";
import tokenService from "../services/tokenService";
import models from "../database/models";

const storeFile = (file) => {
  return new Promise((resolve, reject) => {
    const arquivo = utilsService.renameFile();
    file.mv(utilsService.formatUploadPath(arquivo), (error) => {
      if (error) {
        reject({ error: error });
      } else {
        resolve({ arquivo: arquivo });
      }
    });
  });
};

export default {};
