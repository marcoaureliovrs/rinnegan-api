import { testDouble, expect } from './config/helpers';
import Alert from '../../server/modules/Alert/service';
//import moment from 'moment';
const model = require('../../server/models');

describe('Testes Unitários do Service', () => {

  const defaultAlert = {
    id: 1,
    server: 'br-a1-rinnegan01',
    description: 'Erro de disco',
    server_type:'virtual',
  }

  beforeEach((done) => {
    model.Alert.destroy({
      where: {}
    })
    .then(() => {
      model.Alert.create(defaultAlert).then(() => {
        console.log(`Default Alert created`)
        done();
      });
    })
  });

  describe('Método Create', () => {
    it('Deve criar um novo alerta', () => {
      return Alert.create({
        id: 2,
        server: 'br-a1-rinnegan02',
        description: 'Erro de disco',
        //created_at: moment().toISOString(),
        server_type:'virtual',
      })
      .then(data => {
        expect(data.dataValues).to.have.all.keys(
          ['id', 'server', 'description', 'created_at', 'server_type', 'updatedAt', 'createdAt',]
        )
      });
    });
  })

  describe('Método Update', () => {
    it('Deve atualizar um alerta', () => {
      const usuarioAtualizado = {
        server: 'br-a1-rinnegan02',
        description: 'Erro de processamento',
        server_type:'virtual',
      };
      return Alert
              .update(defaultAlert.id, usuarioAtualizado)
              .then(data => {
                expect(data[0]).to.be.equal(1);
              })
            });
    });

  describe('Método GET Alerts', () => {
    it('Deve retornar uma lista com todos os alertas', () => {
      return Alert.getAll().then(data => {
        expect(data).to.be.an('array');
      })
    })
  });

  describe('Método getById', () => {
    it('Retornar um usuário de acordo com o ID passado', () => {
      //Deve implementar a lógica do teste.
        return Alert.getById(defaultAlert.id).then(data => {
            expect(data).to.have.all.keys(
              ['id', 'server', 'description', 'created_at', 'server_type']
            )
        })
    })
  })

  describe('Método Delete', () => {
    it('Deve deletar um Alerta', () => {
      return Alert.delete(defaultAlert.id).then(data => {
        console.log(data)
        // expect(data).to.be.equal(1);
      })
    });
  });

});
