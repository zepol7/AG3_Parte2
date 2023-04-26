// Import stylesheets
import './style.css';
// Write Javascript code!
const appDiv = document.getElementById('app');

d3.json(
  'https://raw.githubusercontent.com/raul27868/07MBIG-Visualizacion-Actividades-Guiadas/master/columnas.json',
  function (data) {
    var visualization = d3plus
      .viz()
      .container('#viz2')
      .data(data)
      .type('bar')
      .id('name')
      .x('year')
      .y('value')
      .axes({ ticks: 'false' })
      .draw();
  }
);

d3.csv(
  'https://raw.githubusercontent.com/mwaskom/seaborn-data/master/titanic.csv',
  function (error, data) {
    if (error) {
      console.log('Error al leer el fichero titanic.csv');
    } else {
      var visualization = d3plus
        .viz()
        .container('#viz1')
        .data([
          { year: 1991, name: 'alpha', value: 15 },
          { year: 1992, name: 'alpha', value: 20 },
        ])
        .type('bar')
        .id('name')
        .x('year')
        .y('value')
        .draw();
    }
  }
);

var data = [
  { year: 1991, name: 'alpha', value: 15 },
  { year: 1991, name: 'beta', value: 10 },
  { year: 1991, name: 'gamma', value: 5 },
  { year: 1991, name: 'delta', value: 50 },
  { year: 1992, name: 'alpha', value: 20 },
  { year: 1992, name: 'beta', value: 10 },
  { year: 1992, name: 'gamma', value: 10 },
  { year: 1992, name: 'delta', value: 43 },
  { year: 1993, name: 'alpha', value: 30 },
  { year: 1993, name: 'beta', value: 40 },
  { year: 1993, name: 'gamma', value: 20 },
  { year: 1993, name: 'delta', value: 17 },
  { year: 1994, name: 'alpha', value: 60 },
  { year: 1994, name: 'beta', value: 60 },
  { year: 1994, name: 'gamma', value: 25 },
  { year: 1994, name: 'delta', value: 32 },
];

// Crear instancia de D3plus
var visualization = d3plus
  .viz()
  .container('#viz3') // Seleccionar contenedor
  .data(data) // Establecer datos
  .type('box') // Establecer tipo de gráfico
  .id('name') // Establecer columna para etiquetas
  .x('year') // Configurar eje X
  .y('value') // Configurar eje Y
  .legend(true) // Mostrar leyenda
  .draw(); // Dibujar gráfico
