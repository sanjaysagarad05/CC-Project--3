module.exports = {
  HOST: "test2.cray40le0qqz.us-east-1.rds.amazonaws.com",
  USER: "root",
  PASSWORD: "98765432",
  DB: "mygurudb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
