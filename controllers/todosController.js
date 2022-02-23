const fetch = require('node-fetch');

const getTodos = async (req, res) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    console.log(data);
    const filteredData = data.map((element) => {
      delete element.userId;
      return element;
    });

    console.log(filteredData);

    return res.status(200).json(filteredData);
  } catch (error) {
    return res.status(500).send('Error occured at Backend', error);
  }
};

module.exports = {
  getTodos,
};
