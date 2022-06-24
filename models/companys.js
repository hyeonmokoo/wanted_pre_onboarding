"use strict";
module.exports = (sequelize, DataTypes) => {
    const company = sequelize.define("company",{
        companyId : {
            field: "company_id",
            type: DataTypes.STRING,
            unique: true,
            autoIncrement: true,
            primaryKey: true
        },
        companyName : { 
            field: "company_name",
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: "company"
    });
    return company;
};