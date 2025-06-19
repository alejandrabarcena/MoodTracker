// Espera a que el DOM esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
  // Selección de estado de ánimo
  const moodButtons = document.querySelectorAll('.mood-icon-btn');

  moodButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Quita selección anterior
      moodButtons.forEach(b => b.classList.remove('selected'));
      // Marca seleccionado
      btn.classList.add('selected');
    });
  });

  // Añadir tareas
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskList = document.getElementById('task-list');
  const newTaskInput = document.getElementById('new-task');

  addTaskBtn.addEventListener('click', () => {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      li.appendChild(checkbox);
      li.append(` ${taskText}`);
      taskList.appendChild(li);
      newTaskInput.value = '';
    }
  });

  // Marcar tareas completadas
  const markDoneBtn = document.getElementById('mark-done-btn');
  markDoneBtn.addEventListener('click', () => {
    const items = taskList.querySelectorAll('li');
    items.forEach(li => {
      const checkbox = li.querySelector('input[type="checkbox"]');
      if (checkbox && checkbox.checked) {
        li.style.textDecoration = 'line-through';
        li.style.color = 'green';
      }
    });
  });
});


