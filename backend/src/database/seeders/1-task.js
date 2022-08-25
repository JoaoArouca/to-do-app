module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'tasks',
      [
        {
          description: 'Acabar essa Porra',
          status: 'Pendente',
          user_id: 1,
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
