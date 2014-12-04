    var svg = dimple.newSvg("#myChart", 700, 600);
    var data = [
      { "Major":"Computer Science", "Polarity":.4931034483 },
      { "Major":"Biology", "Polarity": .2285714 },
      { "Major":"Pychology", "Polarity":.606666667 }
    ];
    var chart = new dimple.chart(svg, data);
    chart.addCategoryAxis("x", "Major");
    chart.addMeasureAxis("y", "Polarity");
    chart.addSeries(null, dimple.plot.bar);
    chart.draw();
 	/*var svg = dimple.newSvg("#bubbleChart", 700, 600);
    var data = [
      { "Major":"Computer Science", "Polarity":.8, "article" : "Unsupervised and Supervised Machine Learning in User Modeling for Intelligent Learning Environments " },
      { "Major":"Biology", "Polarity": .2285714 },
      { "Major":"Pychology", "Polarity":.606666667 }
    ];

    var svg = dimple.newSvg("#bubbleChart", 700, 600);
    var chart = new dimple.chart(svg, data);
    chart.addCategoryAxis("x", "Major");
    chart.addMeasureAxis("y", "Polarity");
    chart.addSeries("article", dimple.plot.bubble);
    chart.draw();*/


          d3.tsv("http://chrischris292.github.io/data/cs.tsv", function (data) {
        // Latest period only
        dimple.filterData(data, "Date", "01/12/2012");
        // Create the chart
        var myChart = new dimple.chart(svg, data);
        myChart.setBounds(60, 30, 420, 330)

        // Create a standard bubble of SKUs by Price and Sales Value
        // We are coloring by Owner as that will be the key in the legend
        myChart.addMeasureAxis("x", "Price");
        myChart.addMeasureAxis("y", "Sales Value");
        myChart.addSeries(["SKU", "Channel", "Owner"], dimple.plot.bubble);
        var myLegend = myChart.addLegend(530, 100, 60, 300, "Right");
        myChart.draw();
        
        // This is a critical step.  By doing this we orphan the legend. This
        // means it will not respond to graph updates.  Without this the legend
        // will redraw when the chart refreshes removing the unchecked item and
        // also dropping the events we define below.
        myChart.legends = [];

        // This block simply adds the legend title. I put it into a d3 data
        // object to split it onto 2 lines.  This technique works with any
        // number of lines, it isn't dimple specific.
        svg.selectAll("title_text")
          .data(["Click legend to","show/hide owners:"])
          .enter()
          .append("text")
            .attr("x", 499)
            .attr("y", function (d, i) { return 90 + i * 14; })
            .style("font-family", "sans-serif")
            .style("font-size", "10px")
            .style("color", "Black")
            .text(function (d) { return d; });

        // Get a unique list of Owner values to use when filtering
        var filterValues = dimple.getUniqueValues(data, "Owner");
        // Get all the rectangles from our now orphaned legend
        myLegend.shapes.selectAll("rect")
          // Add a click event to each rectangle
          .on("click", function (e) {
            // This indicates whether the item is already visible or not
            var hide = false;
            var newFilters = [];
            // If the filters contain the clicked shape hide it
            filterValues.forEach(function (f) {
              if (f === e.aggField.slice(-1)[0]) {
                hide = true;
              } else {
                newFilters.push(f);
              }
            });
            // Hide the shape or show it
            if (hide) {
              d3.select(this).style("opacity", 0.2);
            } else {
              newFilters.push(e.aggField.slice(-1)[0]);
              d3.select(this).style("opacity", 0.8);
            }
            // Update the filters
            filterValues = newFilters;
            // Filter the data
            myChart.data = dimple.filterData(data, "Owner", filterValues);
            // Passing a duration parameter makes the chart animate. Without
            // it there is no transition
            myChart.draw(800);
          });
      });
