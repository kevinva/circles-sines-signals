var SINC = (function() {

var canvasWidth = 700;
var canvasHeight = 200;
var MARGINS =
  {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

var vis = d3.select('#sinc');

var plotWidth = canvasWidth - MARGINS.left - MARGINS.right;
var plotHeight = canvasHeight - MARGINS.top - MARGINS.bottom;

var xRangeTime = d3.scale.linear().range([0, canvasWidth]);
xRangeTime.domain([-8 * Math.PI, 8 * Math.PI]);

var yRangeTime = d3.scale.linear().range([canvasHeight, 0]);
yRangeTime.domain([-1, 1.2]);

var data = d3.range(-8 * Math.PI, 8 * Math.PI, 0.01);

var signal = d3.svg.line()
  .x(function (d, i) { return xRangeTime(d) + 1; })
  .y(function (d, i) { return yRangeTime(Math.sin(d) / (d + 0.00000001))} );


var xAxis = d3.svg.axis()
  .scale(xRangeTime)
  .tickSize(0)
  .ticks(0)
  .tickSubdivide(true);

vis.append('svg:g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0,' + yRangeTime(0) + ')')
  .style("opacity", 0.35)
  .call(xAxis);

var path = vis.append('svg:path')
  .attr("stroke-width", 2.0)
  .attr("stroke", "steelblue")
  .attr("fill", "none")
  .attr("opacity", 0.7)
  .attr("d", signal(data));

}) ();
