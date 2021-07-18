myData = [     
  {
    "name": "Evgeni",
    "score": 190
  },
  {
    "name": "Ivaylo",
    "score": 182
  },
  {
    "name": "Misho",
    "score": 182
  },
  {
    "name": "Ivelin",
    "score": 175
  },
  {
    "name": "Ivan",
    "score": 192
  }
];


var barWidth = 400;
var barScale = d3.scaleLinear().domain([0, 100]).range([0, barWidth]);

var u = d3.select('#wrapper')
  .selectAll('.person')
  .data(myData);

var entering = u.enter()
.append('div')
.classed('person', true);

entering.append('div')
.classed('label', true)
.text(function(d) {
return d.name;
});

entering.append('div')
.classed('bar', true)
.style('width', function(d) {
return barScale(d.score) + 'px';
});

function sort() {
  d3.selectAll('.person')
  .sort(function(a, b) {
  return b.score - a.score;
  });
}