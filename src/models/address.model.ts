import {sequelize} from "../core/db.js";
import {DataTypes} from "sequelize";
export const Address = sequelize.define('address',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    user_id: {type: DataTypes.STRING},
    address:{type: DataTypes.STRING}
})