# svg-shapes-js
A p5.js library for loading and creating SVGs. 

## Features

+ loadSVG() - loads an SVG file and converts it to a p5.js shape
+ disableStyle() - disables (and enables) the style of the SVG 
+ MIT License

## Installation
Link ShapesSVG.js in your HTML file on p5.js:
```
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
    <script src="ShapeSVG.js"></script>
    <script src="mysketch.js"></script>
</head>
```

## Usage
[Processing example]https://editor.p5js.org/ifenghm/sketches/yHnx6FDvb)

## TODO
- [ ] Add getVertexCount() and getVertex() methods to get the number of vertices and the vertex at a given index for the path variable. 
- [ ] Add more primitives (only rectangle, circle, and ellipse are implemented)
