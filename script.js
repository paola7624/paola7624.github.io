// //Menu de hhamburgesa en pantallas peque;as
// document.getElementById('menu-toggle').addEventListener('click', function() {
//     const menu = document.getElementById('menu');
//     menu.classList.toggle('hidden');
// });


document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    
    toggleButton.addEventListener('click', function() {
        menu.classList.toggle('hidden');
        toggleButton.classList.toggle('active');
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.getElementById('menu-toggle');
//     const menu = document.getElementById('menu');
    
//     // Agregar un listener para el clic en el botón de menú
//     menuToggle.addEventListener('click', function() {
//         // Alternar las clases para mostrar u ocultar el menú
//         if (menu.classList.contains('hidden')) {
//             menu.classList.remove('hidden');
//         } else {
//             menu.classList.add('hidden');
//         }
//     });
// });

