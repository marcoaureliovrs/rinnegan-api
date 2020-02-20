import { IAlert, IAlertDetail, createAlert, createAlerts, createAlertById } from './interface';
import * as Bluebird from 'bluebird';
import sequelize from 'sequelize';
const model = require('../../models');


class Alert implements IAlert {
  public id: number;
  public server: string;
  public description: string;
  public created_at: string;
  public server_type: string;

  constructor(){}

  create(alert: any){
    return model.Alert.create(alert);
  }

  getAll(): Bluebird<IAlert[]>{
    return model.Alert.findAll({
      order: ['server']
    })
    .then(createAlerts);
  }

  getById(id: number): Bluebird<IAlertDetail> {
    return model.Alert.findOne({
      where: {id}
    })
    .then(createAlertById);
  }

  update(id: number, alert: any){
    return model.Alert.update(alert, {
      where: {id},
      fields: ['description', 'created_at', 'server_type',],
      hooks: true,
      individualHooks: true
    });
  }

  delete(id: number){
    return model.Alert.destroy({
      where: {id}
    });
  }

  getTopAlerts() {
    return model.Alert.count({
     attributes:['server', [sequelize.fn('count', sequelize.col('server')), 'count']],
     group:['Alert.server'],
     limit: 3,
     
     // order:['server'],
      
      //group:'server'
      //[sequelize.fn('COUNT', sequelize.col('server')), 'amount_alerts']
      
    }).then(topAlerts => {
      console.log(topAlerts)
      return topAlerts;
    });
  }
}

export default new Alert();