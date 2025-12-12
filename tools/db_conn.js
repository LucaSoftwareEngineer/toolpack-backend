import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('TOOLPACK', 'sa', 'admin', {
    dialect: 'mssql',
    host: 'host.docker.internal',
    dialectOptions: {
        encrypt: true
    }
});

sequelize.authenticate().then(() => {
    console.log('connessione con il database stabilita con successo');
}).catch(err => {
    console.error('attenzione, il database non è collegato', err);
});

export default sequelize;