document.getElementById('add-task-btn').addEventListener('click', function() {
  const input = document.getElementById('new-task');
  const taskText = input.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(' ' + taskText));
    document.getElementById('task-list').appendChild(li);
    input.value = '';
  }
});

document.getElementById('mark-done-btn').addEventListener('click', function() {
  const tasks = document.querySelectorAll('#task-list li input[type="checkbox"]');
  tasks.forEach(cb => {
    if (cb.checked) {
      cb.parentElement.style.textDecoration = 'line-through';
    }
  });
});