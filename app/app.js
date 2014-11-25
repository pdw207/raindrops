
// Variables

var width = 1000,
  height = 500,
  margin = 40,
  dictionary = {},
  range = 20,
  rounds = 0,
  interval = 4000,
  r = 5;

// Slider
$(function(){
    var currentValue = $('#currentValue');

    $('#slider').change(function(){
        currentValue.html(this.value);
        rounds = parseInt(this.value);
        d3.selectAll("svg").remove();
        dictionary = {};
        update_chart();
    });

    $('#slider').change();

});

function update_chart() {

  //clear data


  // Containers:

  var chart = d3.select("#visuals")
    .append('svg')
    .attr('height', height)
    .attr('width', width);

  var xAxis = d3.svg.axis()
      .orient("bottom")
      .ticks(12);

  // Scale:

  var xScale = d3.scale.linear()
    .range([r,width-r])
    .domain([0,range + 1]);

  // Axis:

  xAxis.scale(xScale);

  chart.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,475)')
    .call(xAxis);

  // Binding Draw Function

  function draw(data) {
    var binding = chart.selectAll('circles')
      .data(data, function(d){
        return d
      });

    binding.enter().append('circle')
      .style('fill', '#ccc')
      .attr('r', r)
      .attr('cx', function(d){
        return xScale(d);
      })
      .attr('cy', r)
      .transition()
        .ease('bounce')
        .duration(interval)
        .attr('cy', function(d){
          return calculate_height(d);
        });
  }


  function run_animation(){
    var round = 0;
    var timer = null;
    var dataset = create_dataset(rounds);

    function build_animation(){
      draw(dataset[round]);
      round++

      if ((dataset.length !== rounds)  || round == rounds) {
        clearInterval(timer);
      }
    }

    timer = setInterval(build_animation, 5);
  }

  run_animation()
}
