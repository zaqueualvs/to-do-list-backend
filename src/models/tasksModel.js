import connection from './connection.js';

const getAll = async () => {
  const tasks = await connection`SELECT * FROM tasks`;
  return tasks;
};

const createTask = async (task) => {
  const { title } = task;

  const dateUTC = new Date(Date.now()).toUTCString();

  const createdTask = await connection`
    INSERT INTO tasks(title, status, created_at) VALUES (${title}, 'Pendente', ${dateUTC})
    `;

  return { insertId: createdTask.insertId };
};

const deleteTask = async (id) => {
  const removedTask = await connection`DELETE FROM tasks WHERE id = ${id}`;

  return removedTask;
};
const updateTask = async (id, task) => {
  const { title, status } = task;

  const updatedTask = await connection`
  UPDATE tasks SET title = ${title}, status = ${status} WHERE id = ${id}
  `;

  return updatedTask;
};

export default { getAll, createTask, deleteTask, updateTask };
