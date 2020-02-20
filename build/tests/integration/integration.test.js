"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HTTPStatus = require("http-status");
const helpers_1 = require("./config/helpers");
const model = require('../../server/models');
describe('Testes de Integração', () => {
    const alertTest = {
        id: 100,
        server: 'br-a1-rinnegan02',
        description: 'Erro de disco',
        server_type: 'virtual',
    };
    const alertDefault = {
        id: 1,
        server: 'br-a1-rinnegan01',
        description: 'Erro de disco',
        server_type: 'virtual',
    };
    beforeEach((done) => {
        model.Alert.destroy({
            where: {}
        }).then(() => {
            return model.Alert.create(alertDefault);
        }).then(alert => {
            model.Alert.create(alertTest)
                .then(() => {
                done();
            });
        });
    });
    describe('GET /api/alerts/all', () => {
        it('Deve retornar um Array com todos os Alertas', done => {
            helpers_1.request('http://localhost:7000')
                .get('/api/alerts/all')
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload).to.be.an('array');
                //expect(res.body.payload[0].server).to.be.equal(alertDefault.server);
                //expect(res.body.payload[0].description).to.be.equal(alertDefault.description);
                done(error);
            });
        });
    });
    describe('GET /api/alerts/:id', () => {
        it('Deve retornar um Array com apenas um Alertas', done => {
            helpers_1.request(helpers_1.app)
                .get(`/api/alerts/${alertDefault.id}`)
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload.id).to.equal(alertDefault.id);
                helpers_1.expect(res.body.payload).to.have.all.keys([
                    'id', 'server', 'description', 'created_at', 'server_type',
                ]);
                done(error);
            });
        });
    });
    describe('POST /api/alerts/create', () => {
        it('Deve criar um novo Alerta', done => {
            const alert = {
                id: 2,
                server: 'br-a1-rinnegan02',
                description: 'Erro de disco',
                server_type: 'virtual',
            };
            helpers_1.request(helpers_1.app)
                .post('/api/alerts')
                .set('Content-Type', 'application/json')
                .send(alert)
                .end((error, res) => {
                console.log(res.body);
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload.id).to.eql(alert.id);
                helpers_1.expect(res.body.payload.server).to.eql(alert.server);
                helpers_1.expect(res.body.payload.description).to.eql(alert.description);
                done(error);
            });
        });
    });
    describe('PUT /api/alerts/:id', () => {
        it('Deve atualizar um Alerta', done => {
            const alert = {
                server: 'br-a1-rinnegan02',
                description: 'Memória de swap em uso por mais de 15 minutos',
                server_type: 'virtual',
            };
            helpers_1.request(helpers_1.app)
                .put(`/api/alerts/${alertTest.id}`)
                .set('Content-Type', 'application/json')
                .send(alert)
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload[0]).to.eql(1);
                done(error);
            });
        });
    });
    describe('DELETE /api/alerts/:id/destroy', () => {
        it('Should delete an Alert', done => {
            helpers_1.request(helpers_1.app)
                .del(`/api/alerts/${alertTest.id}/destroy`)
                .set('Content-Type', 'application/json')
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload).to.eql(1);
                done(error);
            });
        });
    });
});
