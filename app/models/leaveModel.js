module.exports = (connectMysql,Sequelize) => {
  const Leave = connectMysql.define("leaves", {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true
          },
      user_id: {
          type: Sequelize.INTEGER
        },
      date_start:{
          type:Sequelize.DATE
       },
      date_end:{
          type: Sequelize.DATE
       },
      reason:{
        type: Sequelize.TEXT
       }
    });
  return Leave;
};