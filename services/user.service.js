const boom = require('@hapi/boom');
const {models} = require('../libs/sequalize');

class UserService {
  constructor() {
  }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    const users = await models.User.findAll();
    return users;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await models.User.findByPk(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await models.User.findByPk(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
