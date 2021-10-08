module.exports = (connectMysql,Sequelize) => {
  const requestOff = connectMysql.define("request_off", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      leave_type: {
        type: Sequelize.STRING
      },
      leave_date: {
        type: Sequelize.DATE
      },
      reason: {
        type: Sequelize.STRING
      },
    });
  return requestOff;
};