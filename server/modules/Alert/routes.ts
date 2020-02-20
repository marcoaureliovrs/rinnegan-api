import { Request, Response } from 'express';
import AlertController from './controller';

class AlertRoutes {

  constructor(){}

  index(req: Request, res: Response){
    return AlertController.getAll(req, res);
  }

  getTopAlerts(req: Request, res: Response) {
    return AlertController.getTopAlerts(req,res);
  }

  create(req: Request, res: Response){
    return AlertController.createAlert(req, res);
  }

  findOne(req: Request, res: Response){
    return AlertController.getById(req, res);
  }

  update(req: Request, res: Response){
    return AlertController.updateAlert(req, res);
  }

  destroy(req: Request, res: Response){
    return AlertController.deleteAlert(req, res);
  }
}

export default new AlertRoutes();
