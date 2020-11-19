const LS_NAME_TASKS = "tasks";
const initialData = {
  backlog: [
    {
      id: 0,
      title: "Walk with dog"
    },
    {
      id: 1,
      title: "Clean room"
    },
    {
      id: 2,
      title: "Resolve merge conflict"
    }
  ],
  ready: [
    {
      id: 3,
      title: "Cook food"
    },
    {
      id: 4,
      title: "Buy new mouse"
    }
  ],
  inProgress: [
    {
      id: 5,
      title: "Buy car"
    },
    {
      id: 6,
      title: "Grow up tree"
    }
  ],
  finished: []
};

if (!localStorage.getItem(LS_NAME_TASKS)) {
  localStorage.setItem(LS_NAME_TASKS, JSON.stringify(initialData));
  localStorage.setItem('id-count', '5')
}