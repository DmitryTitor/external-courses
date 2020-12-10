const LS_NAME_TASKS = "tasks";
const mock = [
  {
    name: 'task0',
    id: 0
  },
  {
    name: 'task1',
    id: 1
  },
  {
    name: 'task2',
    id: 2
  },
  {
    name: 'task3',
    id: 3
  },
  {
    name: 'task4',
    id: 4
  },
  {
    name: 'task11',
    id: 5
  },
];

if (!localStorage.getItem(LS_NAME_TASKS)) {
  localStorage.setItem(LS_NAME_TASKS, JSON.stringify(mock));
}
