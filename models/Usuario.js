
import banco from "../config/banco.js";
import Pessoa from "./Pessoa.js";

const Usuario = banco.sequelize.define('usuarios',{
    id:{
        type:banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username:{
        type:banco.Sequelize.STRING(100)
    },
    senha:{
        type:banco.Sequelize.STRING(250)
    },
    categoria:{
        type: banco.Sequelize.INTEGER
    },
    status:{
        type: banco.Sequelize.INTEGER
    }
})

Usuario.belongsTo(Pessoa,{ // definindo chave estrangeira
    foreignkey:'pessoa_id',
    constraint: true, // define que a coluna pessoa_id so armazenda ida de pessoa
    onDelete: 'CASCADE', // define que quando uma pessoa for deletada o usuario dela tambem vai ser
    as: 'pessoa' // modelo vai ter um propiedade vai ter um modelo pessoa que vai armazenar pessoa
})

Usuario.sync()

export default Usuario;