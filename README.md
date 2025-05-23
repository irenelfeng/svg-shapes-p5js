# svg-shapes-js
A p5.js library for loading and creating SVGs. 

![p5Shape](./p5ShapeSVG.png)

## Features

+ `loadSVG()` - loads an SVG file and converts it to a p5.js ShapeSVG class. Methods for this class are below

| Method             | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `display()`          | Displays the shape (similar to `shape(PShape)` in processing) |
| `disableStyle()`     | Disables the shape's style data and uses Processing styles                   |
| `enableStyle()`      | Enables the shape's style data and ignores the Processing styles             |
| `getChildCount()`    | Returns the number of children                                              |
| `getChild(i)`    | Returns a child element of a shape as a PShape object at the index                       |
| `addChild(shape)`         | Adds a new child                                                            |
| `contains(x,y)`        | Returns true if the point is inside the shape                               |
| `getVertexCount()`   | Returns the total number of vertices as an int                              |
| `getVertex(i)`        | Returns the vertex at the index position                                    |
| `getAllNodes()`      | Returns all nodes in the SVG tree                                          |
| `getType()`          | Returns the type of the shape (e.g., `path`, `primitive`, `group`, `geometry`) |

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
- [ ] Add functionality for more primitives (only rectangle, circle, and ellipse are implemented)
- [ ] Add 'geometry' type
- [ ] Add more shape geometry methods (e.g., `getBounds()`, `getCenter()`, etc.)
r                                                        |
## MIT License
