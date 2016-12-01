"use strict;"
var body = d3.select("body");
var svg = d3.select("#map");

var jsonData = [
						{"name":"France","gdp":1737000000000,"growth":2.10,"imports":419700000000,"exports":419000000000,"x":0,"y":0},
						{"name":"Bresil","gdp":1492000000000,"growth":5.10,"imports":61000000000,"exports":95000000000,"x":0,"y":0},
						{"name":"Italie","gdp":1609000000000,"growth":1.30,"imports":329300000000,"exports":336400000000,"x":0,"y":0},
						{"name":"Japon","gdp":3745000000000,"growth":2.90,"imports":401800000000,"exports":538800000000,"x":0,"y":0},
						{"name":"Allemagne","gdp":2362000000000,"growth":1.70,"imports":716700000000,"exports":893300000000,"x":0,"y":0},
						{"name":"Royaume-Uni","gdp":1782000000000,"growth":3.20,"imports":439400000000,"exports":347200000000,"x":0,"y":0},
						{"name":"Russie","gdp":1408000000000,"growth":6.70,"imports":92910000000,"exports":162500000000,"x":0,"y":0},
						{"name":"Inde","gdp":3319000000000,"growth":6.20,"imports":89330000000,"exports":69180000000,"x":0,"y":0},
						{"name":"Chine","gdp":7262000000000,"growth":9.10,"imports":552400000000,"exports":583100000000,"x":0,"y":0},
						{"name":"Etats Unis","gdp":11750000000000,"growth":4.40,"imports":1476000000000,"exports":795000000000,"x":0,"y":0}
					];
																			
var frCenterX = d3.select("#frx").node().getBBox().x + d3.select("#frx").node().getBBox().width/2;
var frCenterY = d3.select("#frx").node().getBBox().y + d3.select("#frx").node().getBBox().height/2;		

jsonData[0]["x"] = frCenterX;		
jsonData[0]["y"] = frCenterY;												

var brCenterX = d3.select("#br").node().getBBox().x + d3.select("#br").node().getBBox().width/2;
var brCenterY = d3.select("#br").node().getBBox().y + d3.select("#br").node().getBBox().height/2;																		

jsonData[1]["x"] = brCenterX;		
jsonData[1]["y"] = brCenterY;	

var itCenterX = d3.select("#it").node().getBBox().x + d3.select("#it").node().getBBox().width/2;
var itCenterY = d3.select("#it").node().getBBox().y + d3.select("#it").node().getBBox().height/2;																		

jsonData[2]["x"] = itCenterX;		
jsonData[2]["y"] = itCenterY;	

var jpCenterX = d3.select("#jp").node().getBBox().x + d3.select("#jp").node().getBBox().width/2;
var jpCenterY = d3.select("#jp").node().getBBox().y + d3.select("#jp").node().getBBox().height/2;																		

jsonData[3]["x"] = jpCenterX;		
jsonData[3]["y"] = jpCenterY;	

var deCenterX = d3.select("#de").node().getBBox().x + d3.select("#de").node().getBBox().width/2;
var deCenterY = d3.select("#de").node().getBBox().y + d3.select("#de").node().getBBox().height/2;																		

jsonData[4]["x"] = deCenterX;		
jsonData[4]["y"] = deCenterY;	

var gbCenterX = d3.select("#gb").node().getBBox().x + d3.select("#gb").node().getBBox().width/2;
var gbCenterY = d3.select("#gb").node().getBBox().y + d3.select("#gb").node().getBBox().height/2;																		

jsonData[5]["x"] = gbCenterX;		
jsonData[5]["y"] = gbCenterY;	

var ruCenterX = d3.select("#ru").node().getBBox().x + d3.select("#ru").node().getBBox().width/2;
var ruCenterY = d3.select("#ru").node().getBBox().y + d3.select("#ru").node().getBBox().height/2;																		

jsonData[6]["x"] = ruCenterX;		
jsonData[6]["y"] = ruCenterY;	

var inCenterX = d3.select("#in").node().getBBox().x + d3.select("#in").node().getBBox().width/2;
var inCenterY = d3.select("#in").node().getBBox().y + d3.select("#in").node().getBBox().height/2;																		

jsonData[7]["x"] = inCenterX;		
jsonData[7]["y"] = inCenterY;	

var cnCenterX = d3.select("#cnx").node().getBBox().x + d3.select("#cnx").node().getBBox().width/2;
var cnCenterY = d3.select("#cnx").node().getBBox().y + d3.select("#cnx").node().getBBox().height/2;																		

jsonData[8]["x"] = cnCenterX;		
jsonData[8]["y"] = cnCenterY;	

var usCenterX = d3.select(".metropolitan").node().getBBox().x + d3.select(".metropolitan").node().getBBox().width/2;
var usCenterY = d3.select(".metropolitan").node().getBBox().y + d3.select(".metropolitan").node().getBBox().height/2;																		

jsonData[9]["x"] = usCenterX;		
jsonData[9]["y"] = usCenterY;	

var div = d3.select("#tooltip");

var usefulCountries = d3.select("#map").selectAll(".useful").data(jsonData);


var usefulCountriesAttributes = usefulCountries.attr('stroke',"white")
																.attr('fill', function (d) {
																					if(d.growth < 2) {
																						return "#66ccff";
																					} else if(d.growth < 4) {
																						return "#4499ff";
																					} else if(d.growth < 6) {
																						return "#0077ff";
																					} else if(d.growth < 8) {
																						return "#0033ff"; 
																					} else {
																						return "#0000aa";
																					}
																			})
																.on("mouseover", function (d) {
																	d3.select(this).attr("opacity", "0.5");
																})
																.on("mouseout", function (d) {
																	d3.select(this).attr("opacity", "1");
																	d3.select("#tooltip").style("visibility","hidden");
																})
																.on("click", function (d) {
																		d3.select("#tooltip").html("<p><strong>"+d.name+"</strong></p><p><strong>Croissance</strong> : "+d.growth+" %</p><p><strong>Imports</strong> : "+d.imports/1000000000+" milliards de dollars</p><p><strong>Exports</strong> : "+d.exports/1000000000+" milliards de dollars</p><p><strong>Balance</strong> : "+(d.exports - d.imports)/1000000000+" milliards de dollars</p>")
																	   .style("left",(d3.event.pageX) + "px")
																	   .style("top",(d3.event.pageY) + "px")
																	   .style("visibility","visible")
																	   .style("position","absolute")
																	   .style("background-color","white")
																	   .style("border-style","solid")
																	   .style("border-width","3px")
																	   .style("padding","2px");
																	   if (d.exports - d.imports < 0){
																		   d3.select("#balance").attr("background-color","red");
																	   } else if (d.exports - d.imports > 0) {
																		   d3.select("#balance").attr("background-color","green");
																	   } else {
																		   d3.select("#balance").attr("background-color","yellow");
																	   }
															   });

																		
																			
var markersContainer = d3.select("#map").append("g");
	
var markers = markersContainer.selectAll("circle").data(jsonData).enter().append("circle");

var markerAttributes = markers
	   .attr("cx", function (d) {return d.x;})
	   .attr("cy", function (d) {return d.y;})
	   .attr("r", function (d) {return (5 + d.gdp/200000000000);})
	   .attr("fill", "#ff2800")
	   .attr("class","gdp")
	   .on("mouseover", function (d){
		   d3.select(this).attr("r", (15 + d.gdp/200000000000));
		   d3.select("#pibtooltip").html("<p><strong>PIB</strong> : "+d.gdp/1000000000+" milliards de dollars</p>")
								   .style("left",(d3.event.pageX) + "px")
								   .style("top",(d3.event.pageY) + "px")
								   .style("visibility","visible")
								   .style("position","absolute")
								   .style("background-color","white")
								   .style("border-style","solid")
								   .style("border-width","3px")
								   .style("padding","2px");
	   })
	   .on("mouseout", function (d) {
		   d3.select("#pibtooltip").style("visibility",'hidden');
		   d3.select(this).attr("r", (5 + d.gdp/200000000000));
	   });
		   
		   
var legende = d3.select(".legende").style("position","absolute")
												.style("bottom","0px")
												.style("right","0px")
												.style("width","150px")
												.style("background-color","white")
												.style("border-style","solid")
												.style("border-width","3px")
												.style("padding","2px");
		   

		   
		   