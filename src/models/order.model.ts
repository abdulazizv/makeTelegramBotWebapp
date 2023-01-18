import {sequelize} from "../core/db.js";
import {DataTypes, INTEGER} from "sequelize";

export const Order = sequelize.define('order',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        unique:true,
        primaryKey:true
    },
    user_id:{type:DataTypes.STRING},
    clothes_id:{type:DataTypes.STRING},
    price:{type:DataTypes.INTEGER}
})