function moveKnob(element, index) {
  const knob = document.getElementById('knob');
  
  // Quitar active de todos y poner al actual
  document.querySelectorAll('.nav-item').forEach(li => li.classList.remove('active'));
  element.classList.add('active');

  // Calcular movimiento
  const gap = 5; // El padding del contenedor
  const position = element.offsetLeft;
  const width = element.offsetWidth;

  knob.style.left = `${position}px`;
  knob.style.width = `${width}px`;
}