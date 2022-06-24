'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const rboard = sequelize.define("rboard",{
    rboardId : {
        field: "rboard_id",
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    companyId : { 
      field: "company_id",
      type: DataTypes.INTEGER,
      allowNull: false
    },
    companyName : { 
        field: "company_name",
        type: DataTypes.STRING,
        allowNull: false
    },
    nation : { 
      field: "nation",
      type: DataTypes.STRING,
      allowNull: false
    },
    region : { 
      field: "region",
      type: DataTypes.STRING,
      allowNull: false
    },
    position : { 
      field: "position",
      type: DataTypes.STRING,
      allowNull: false
    },
    salary : { 
      field: "salary",
      type: DataTypes.INTEGER,
      allowNull: false
    },
    skill : { 
      field: "skill",
      type: DataTypes.STRING,
      allowNull: false
    },
    post : { 
      field: "post",
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: "rboard"
  });
  return rboard;
};