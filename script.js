<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mood Tracker Diario</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <header>
      <h1 class="visually-hidden">Mood Tracker Diario de Alejandra Bárcena</h1>
      <img src="https://i.postimg.cc/Y2x0LR2X/LOGO-PRINCIPAL.png" alt="Logo de Luminous" class="logo" />
    </header>

    <section class="mood-section">
      <h2>¿Cómo te sientes hoy?</h2>
      <div class="mood-buttons">
        <button aria-label="Feliz" class="mood-icon-btn" onclick="selectMood('😊')">😊</button>
        <button aria-label="Triste" class="mood-icon-btn" onclick="selectMood('😢')">😢</button>
        <button aria-label="Duda" class="mood-icon-btn" onclick="selectMood('🤔')">🤔</button>
        <button aria-label="Enfermo" class="mood-icon-btn" onclick="selectMood('🤒')">🤒</button>
        <button aria-label="Enojado" class="mood-icon-btn" onclick="selectMood('😠')">😠</button>
      </div>
    </section>
      <!-- Agregar después del título "Tareas del día" -->
<h2>Tareas del día</h2>
<div class="activity-icons">
  <div class="activity">
    <img src="https://i.postimg.cc/qBsBw3xK/ahorrar.png" alt="Ahorro">
    <input type="checkbox">
  </div>
  <div class="activity">
    <img src="https://i.postimg.cc/7ZCpsvrR/bootcamp.png" alt="Bootcamp">
    <input type="checkbox">
  </div>
  <div class="activity">
    <img src="https://i.postimg.cc/s27bzpX9/checklist.png" alt="Checklist">
    <input type="checkbox">
  </div>
  <div class="activity">
    <img src="https://i.postimg.cc/TwcSLfnK/cita.png" alt="Cita psicológica">
    <input type="checkbox">
  </div>
  <div class="activity">
    <img src="https://i.postimg.cc/gcNQGcY5/desayuno.png" alt="Desayuno">
    <input type="checkbox">
  </div>
  <div class="activity">
    <img src="https://i.postimg.cc/mrYpJBXm/dormir-patsy.png" alt="Dormir con Patsy">
    <input type="checkbox">
  </div>
  <div class="activity">
    <img src="https://i.postimg.cc/TwQ72QXm/ducha.png" alt="Ducha">
    <input type="checkbox">
  </div>
  <div class="activity">
    <img src="https://i.postimg.cc/pdJkkkr7/ejercicio.png" alt="Ejercicio">
    <input type="checkbox">
  </div>
  <div class="activity">
    <img src="https://i.postimg.cc/kGzyDpYV/hora-comida.png" alt="Hora de comida">
    <input type="checkbox">
  </div>
  <div class="activity">
    <img src="https://i.postimg.cc/MG5b1TrJ/hora-de-dormir.png" alt="Hora de dormir">
    <input type="checkbox">
  </div>
  <div class="activity">
    <img src="https://i.postimg.cc/63QVcXD2/hora-medicinas.png" alt="Hora de medicinas">
    <input type="checkbox">
  </div>
  <div class="activity">
    <img src="https://i.postimg.cc/sX0Y0Lrn/idiomas.png" alt="Idiomas">
    <input type="checkbox">
  </div>
  <div class="activity">
    <img src="https://i.postimg.cc/QC9QLqNj/job.png" alt="Trabajo">
    <input type="checkbox">
  </div>
  <div class="activity">
    <img src="https://i.postimg.cc/GmJk1tRT/impresora.png" alt="Impresora">
    <input type="checkbox">
  </div>
  <div class="activity">
    <img src="https://i.postimg.cc/ZqwpCQCT/viaje.png" alt="Viaje">
    <input type="checkbox">
  </div>
  <div class="activity">
    <img src="https://i.postimg.cc/c6G8py5c/tiempo-lectura-y-arte.png" alt="Lectura y arte">
    <input type="checkbox">
  </div>
  <div class="activity">
    <img src="https://i.postimg.cc/L8BW5jLH/psiquiatra.png" alt="Psiquiatra">
    <input type="checkbox">
  </div>
  <div class="activity">
    <img src="https://i.postimg.cc/KY0srF0w/psicologa.png" alt="Psicóloga">
    <input type="checkbox">
  </div>
  <div class="activity">
    <img src="https://i.postimg.cc/tT7vBffT/pomodoro.png" alt="Pomodoro">
    <input type="checkbox">
  </div>
  <div class="activity">
    <img src="https://i.postimg.cc/gcCtKgKz/compras.png" alt="Compras">
    <input type="checkbox">
  </div>
  <div class="activity">
    <img src="https://i.postimg.cc/66vYTdxD/meditacion.png" alt="Meditación">
    <input type="checkbox">
  </div>
  <div class="activity">
    <img src="https://i.postimg.cc/Kzwbft06/journaling.png" alt="Journaling">
    <input type="checkbox">
  </div>
  <div class="activity">
    <img src="https://i.postimg.cc/zfwqJLXW/limpieza.png" alt="Limpieza">
    <input type="checkbox">
  </div>
</div>

      <label for="new-task">Escribe tu tarea:</label>
      <input type="text" id="new-task" placeholder="Añadir nueva tarea...">
      <label for="task-date">Selecciona una fecha:</label>
      <input type="date" id="task-date">
      <button id="add-task-btn">➕ Añadir tarea</button>
      <ul id="task-list"></ul>
      <button id="mark-done-btn">✅ Marcar completadas</button>
    </section>

    <section class="reflection-section">
      <h2>Agradecimientos del día</h2>
      <label for="gratitude">¿Por qué te sientes agradecida hoy?</label>
      <textarea id="gratitude" placeholder="Hoy agradezco..."></textarea>

      <h2>Aprendizaje y reflexión</h2>
      <label for="reflection">¿Qué aprendiste o reflexionaste?</label>
      <textarea id="reflection" placeholder="Hoy aprendí / reflexioné..."></textarea>
    </section>

    <section class="extras">
      <a href="https://codepen.io/Lunes-Montag/full/KwpxzdL" target="_blank" class="pomodoro-link">⏱️ Ir al Pomodoro</a>
      <button onclick="window.print();">🖨️ Imprimir/Guardar PDF</button>
    </section>

    <footer>
      <p>✨ Alejandra Bárcena & Patsy Pug</p>
    </footer>
  </div>
  <script>
    function selectMood(emoji) {
      alert(`Estado de ánimo seleccionado: ${emoji}`);
    }
  </script>
  <script src="script.js"></script>
</body>
</html>
