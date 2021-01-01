'use strict';

// ここから雛形
const addTaskTrigger = document.getElementsByClassName('js-addTask-trigger')[0]; /*登録ボタン*/
const addTaskTarget = document.getElementsByClassName('js-addTask-target')[0]; /*空のリスト*/
const addTaskValue = document.getElementsByClassName('js-addTask-value')[0]; /*登録用インプット*/
// タスクを消す動作
const removeTask = removeButton => {
  const targetTask = removeButton.closest('li');
  addTaskTarget.removeChild(targetTask);
};
// タスクを追加した時の挙動
const addTask = task => {
  const listItem = document.createElement('li');
  const removeButton = document.createElement('button');

  removeButton.innerText = '削除';
  removeButton.addEventListener('click', () => removeTask(removeButton));

  listItem.innerText = task;

  listItem.append(removeButton);
  addTaskTarget.appendChild(listItem);
};
// 登録イベント
addTaskTrigger.addEventListener('click', event => {
  const task = addTaskValue.value;
  addTask(task);
  addTaskValue.value = '';
});
// ここまで雛形

// // あきと、増子
// archive{

// }

// // そーた、たくま
// dashboard{

// }

// // たくや
// comunity{

// }
const a = new Date();
console.log(a);


