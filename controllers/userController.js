const fetch = require('node-fetch');

const getTodosItems = async (id) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    const finalData = data.filter((obj) => {
      return obj.userId == id;
    });

    return finalData;
  } catch (error) {
    return res.status(500).send('Error occured at Backend', error);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const data = await response.json();

    const todosData = await getTodosItems(id);

    const dataToSend = { ...data, todos: todosData };
    return res.status(200).json(dataToSend);
  } catch (error) {
    return res.status(500).send('Error occured at Backend', error);
  }
};

module.exports = {
  getUser,
};
