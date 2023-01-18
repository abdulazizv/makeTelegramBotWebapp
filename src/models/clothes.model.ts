import {sequelize} from "../core/db.js";
import {DataTypes} from "sequelize";

export const Clothes = sequelize.define('clothes',{
    id:{
       type:DataTypes.INTEGER,
       unique: true,
       autoIncrement: true,
       primaryKey: true
    },
    image: {type: DataTypes.STRING},
    price: {type:DataTypes.INTEGER},
    size: {type:DataTypes.INTEGER}
})