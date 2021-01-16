module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define(
    "coa",
    {
      olibs: {
        type: Sequelize.STRING(100),
      },
      jenis: {
        type: Sequelize.STRING(10),
      },
      pl: {
        type: Sequelize.STRING(17),
      },
      description: {
        type: Sequelize.STRING(35),
      },
      category: {
        type: Sequelize.STRING(5),
      },
      duplicate: {
        type: Sequelize.BOOLEAN(5),
      },
      ket: {
        type: Sequelize.STRING(100),
      },
      ket2: {
        type: Sequelize.TEXT("long"),
      },
    },
    {
      //timestamps: false,
      tableName: "coa",
      freezeTableName: true,
    }
  );

  return Tutorial;
};
