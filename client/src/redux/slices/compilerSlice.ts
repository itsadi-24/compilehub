import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CompilerSliceStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };
  currentLanguage: 'html' | 'css' | 'javascript';
}

const initialState: CompilerSliceStateType = {
  fullCode: {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Todo List</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Todo List</h1>
    <input type="text" id="task-input" placeholder="Enter a task">
    <button id="add-task">Add</button>
    <ul id="task-list"></ul>
  </div>
  <script src="script.js"></script>
</body>
</html>`,
    css: `body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

input[type="text"] {
  width: 70%;
  padding: 10px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li span {
  flex-grow: 1;
  margin-right: 10px;
}

li button {
  background-color: #f44336;
}`,
    javascript: `const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const taskItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    const deleteBtn = document.createElement('button');

    taskSpan.textContent = taskText;
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', function() {
      taskItem.remove();
    });

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    taskInput.value = '';
  }
}`,
  },
  currentLanguage: 'html',
};

const compilerSlice = createSlice({
  name: 'compilerSlice',
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<CompilerSliceStateType['currentLanguage']>
    ) => {
      state.currentLanguage = action.payload;
    },
    updateCodeValue: (state, action: PayloadAction<string>) => {
      state.fullCode[state.currentLanguage] = action.payload;
    },
    updateFullCode: (
      state,
      action: PayloadAction<CompilerSliceStateType['fullCode']>
    ) => {
      state.fullCode = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCodeValue, updateFullCode } =
  compilerSlice.actions;
