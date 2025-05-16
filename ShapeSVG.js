// Converted from processing to p5.js
// https://www.perplexity.ai/search/can-you-rewrite-this-pshapesvg-rIK.abgqRmeZqof1.DLK7A
// TODO: consider await / async without using .then syntax
p5.prototype.loadSVG = async function (path) {
  let thing = fetch(path)
    .then((response) => {
      if (!response.ok) {
        p5._friendlyFileLoadError(0, path);
        throw new Error("No File found at " + path);
      }

      return response.text();
    })
    .then((svgText) => {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
      return new ShapeSVG(svgDoc.documentElement);
    });
  return await thing;
}

class ShapeSVG {
  constructor(svgElement, parent = null) {
    this.parent = parent;
    this.children = [];
    this.name = svgElement.id || '';
    this.matrix = new p5.Matrix();
    this.styles = {};
    this.pathData = null;
    this.type = null;
    this.svgElement = svgElement;
    this.style = true;

    // Parse attributes
    this._parseAttributes(svgElement);

    // Parse children recursively
    Array.from(svgElement.children).forEach(child => {

      this.children.push(new ShapeSVG(child, this));
    });
  }

  // doesn't really work 
  toString() {
    return this.svgElement;
  }

  /**
   * Like getFamily() in PShape. 
   * @returns {string} The type of the shape (e.g., 'path', 'primitive', 'group')
   */
  getType() {
    return this.type;
  }

  _parseAttributes(element) {
    // Basic style attributes
    this.styles = {
      fill: element.getAttribute('fill') || 'black',
      stroke: element.getAttribute('stroke') || 'none',
      strokeWidth: parseFloat(element.getAttribute('stroke-width')) || 0
    };

    // Transformation matrix
    const transform = element.getAttribute('transform');
    if (transform) this.matrix = this._parseTransform(transform);

    // Path data (for <path>, <rect>, etc.)
    switch (element.tagName.toLowerCase()) {
      case 'path':
        this.pathData = element.getAttribute('d');
        this.type = 'path';
        break;
      case 'rect':
        this._createRectPath(element);
        this.type = 'primitive';
        break;
      case 'circle':
        this._createCirclePath(element);
        this.type = 'primitive';
        break;
      case 'ellipse':
        this._createEllipsePath(element);
        this.type = 'primitive';
        break;
      case 'g':
        this.type = 'group';
    }
  }

  _parseTransform(transformStr) {
    // Simple matrix parser (handles matrix(a,b,c,d,e,f))
    const matrix = new p5.Matrix();
    const matches = transformStr.match(/matrix\(([\d\s.,-]+)\)/i);
    if (matches) {
      const [a, b, c, d, e, f] = matches[1].split(/[\s,]+/).map(parseFloat);
      matrix.set(a, b, c, d, e, f);
    }
    return matrix;
  }

  _createRectPath(element) {
    const x = parseFloat(element.getAttribute('x')) || 0;
    const y = parseFloat(element.getAttribute('y')) || 0;
    const w = parseFloat(element.getAttribute('width')) || 0;
    const h = parseFloat(element.getAttribute('height')) || 0;
    this.pathData = `M${x},${y} h${w} v${h} h-${w} Z`;
  }

  /**
   * displays on canvas
   * @param {Window} g 
   */
  display(g = window) {
    const ctx = g.drawingContext;
    g.push();

    // Apply transformation matrix
    if (this.matrix) {
      g.applyMatrix(
        this.matrix.mat4[0], this.matrix.mat4[1],
        this.matrix.mat4[4], this.matrix.mat4[5],
        this.matrix.mat4[12], this.matrix.mat4[13]
      );
    }

    // Apply styles
    if (this.style) {
      if (this.style) {
        if (this.styles.fill !== "none") {
          ctx.fillStyle = this.styles.fill;
          ctx.fill(new Path2D(this.pathData));
        }
  
        if (this.styles.stroke !== "none") {
          ctx.strokeStyle = this.styles.stroke;
          ctx.lineWidth = this.styles.strokeWidth;
          ctx.stroke(new Path2D(this.pathData));
        }
      } else {
        // allow styles to be used from graphics
        ctx.fill(new Path2D(this.pathData));
        ctx.stroke(new Path2D(this.pathData));
      }
    }

    // TODO: draw individual vertices
    ctx.fill(new Path2D(this.pathData));
    ctx.stroke(new Path2D(this.pathData));

    // Draw children
    this.children.forEach(child => child.display(g));

    g.pop();
  }

  /**
   * Gets child by searching by name (svg id attribute)
   * @param {string} name 
   * @returns {ShapeSVG} child
   */
  getChild(name) {
    return this.children.find(child => child.name === name);
  }

  /**
   * Adds a ShapeSVG child to this shape
   * @param {ShapeSVG} shape 
   */
  addChild(shape) {
    shape.parent = this;
    this.children.push(shape);
  }

  /**
   * Disables the style of this shape and all its children
   */
  disableStyle() {
    this.style = false;

    for (const element of this.children) {
      element.disableStyle();
    }
  }

  /**
   * Enables the style of this shape and all its children
   */
  enableStyle() {
    this.style = true;

    for (const element of this.children) {
      element.enableStyle();
    }
  }
}