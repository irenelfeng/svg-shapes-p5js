# svg-shapes-js
A p5.js library for loading and creating SVGs. 

![p5Shape](./p5ShapeSVG.png)

## Features

+ `loadSVG()` - loads an SVG file and converts it to a p5.js shape
+ Features of SVGShape
+ `display()` - displays the SVG shape
+ `disableStyle()/enableStyle()` - disables (and enables) the style of the SVG 
+ `contains()` method to check if a point is inside the shape
+ `getVertexCount()` and `getVertex(i)` methods to get the number of vertices and the vertex at a given index for the path variable. 
+ `getAllNodes()` method to get the list of all nodes in the SVG tree

## Installation
Upload `ShapesSVG.js` in your p5.js editor, and link it in your HTML file on p5.js:

```javascript
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
    <script src="ShapeSVG.js"></script>
    <script src="mysketch.js"></script>
</head>
```

## Usage
[Processing example](https://editor.p5js.org/ifenghm/sketches/yHnx6FDvb)

## References 

- [Processing java code](https://github.com/processing/processing4/blob/main/core/src/processing/core/PShapeSVG.java#L1040)
- [SVG specification](https://www.w3.org/TR/SVG2/)

## TODO
- [ ] Contribute to the [libraries](https://github.com/processing/p5.js-website/blob/main/docs/contributing_libraries.md) p5.js website
- [ ] Add more primitives (only rectangle, circle, and ellipse are implemented)
- [ ] Add more shape geometry methods (e.g., `getBounds()`, `getCenter()`, etc.)

## MIT License
