import { Sequelize } from 'sequelize';
// import * as config from '../config/config';
import config from '../config/config';

export default new Sequelize(config);