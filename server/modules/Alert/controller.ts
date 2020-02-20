import { Request, Response } from 'express';
import * as _ from 'lodash';
import Handlers from '../../api/responses/handlers';
import Alert from './service';

class AlertController {

  constructor(){}

  getAll(req: Request, res: Response){
    Alert
        .getAll()
        .then(_.partial(Handlers.onSuccess, res))
        .catch(_.partial(Handlers.onError, res, `Erro ao buscar todos os alertas`))
  }

  getTopAlerts(req: Request, res: Response) {
    Alert
      .getTopAlerts()
      .then(_.partial(Handlers.onSuccess, res))
      .catch(_.partial(Handlers.onError, res, `Erro ao listar o top 3 de servidores que possuem mais erros`))
  }

  createAlert(req: Request, res: Response){
    Alert
        .create(req.body)
        .then(_.partial(Handlers.onSuccess, res))
        .catch(_.partial(Handlers.dbErrorHandler, res))
        .catch(_.partial(Handlers.onError, res, `Erro ao inserir novo usuário`));
  }

  getById(req: Request, res: Response){
    const userId = parseInt(req.params.id);
    Alert.getById(userId)
      .then(_.partial(Handlers.onSuccess, res))
      .catch(_.partial(Handlers.onError, res, `Alerta não encontrado`))
  }

  updateAlert(req: Request, res: Response){
    const alertId = parseInt(req.params.id);
    const props = req.body;
    Alert.update(alertId, props)
      .then(_.partial(Handlers.onSuccess, res))
      .catch(_.partial(Handlers.onError, res, `Falha ao atualizar alerta`))
  }

  deleteAlert(req: Request, res: Response){
    const alertId = parseInt(req.params.id);
    Alert.delete(alertId)
      .then(_.partial(Handlers.onSuccess, res))
      .catch(_.partial(Handlers.onError, res, `Erro ao excluir alerta`))
  }
}

export default new AlertController();