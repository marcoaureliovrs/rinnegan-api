import { Application, Request, Response } from 'express';
import AlertRoutes from '../../modules/Alert/routes';

class Routes {

 // constructor() { }

  initRoutes(app: Application): void {
    app.route('/api/alerts/all').get(AlertRoutes.index);
    app.route('/api/alerts/top').get(AlertRoutes.getTopAlerts);
    app.route('/api/alerts').post(AlertRoutes.create);
    app.route('/api/alerts/:id').put(AlertRoutes.update);
    app.route('/api/alerts/:id').get(AlertRoutes.findOne);
    app.route('/api/alerts/:id/destroy').delete(AlertRoutes.destroy);
  }
}

export default new Routes();
