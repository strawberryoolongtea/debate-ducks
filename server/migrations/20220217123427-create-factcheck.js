"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("factchecks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pros: {
        type: Sequelize.BOOLEAN,
      },
      contents: {
        type: Sequelize.STRING,
      },
      debate_id: {
        references: {
          model: "debates",
          key: "id",
        },
        type: Sequelize.INTEGER,
      },
      user_id: {
        references: {
          model: "users",
          key: "id",
        },
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("factchecks");
  },
};
