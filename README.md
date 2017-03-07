# Parallax

This project explores parallax scrolling with some of my own photos.

I used Gulp as a task runner.
Behind the scenes, it runs a watch process to compile Sass files into CSS as well as JavaScript files into a single JavaScript file.
The JavaScript process uses Webpack and the ES6 and React presets.

The project includes three React components: Parallax, Layer, and Sprite.
A new Parallax component can be added to the app by creating a parallax element and specifying the following:
```
const layers1 = [
  {id: 1, layer: 1, image: 'sky.png', top: "50px"},
  {id: 2, layer: 2, image: 'buildings.png', top: "300px"}
];

<Parallax name="parallax1" duration="2000" height="645px" layers={layers1}/>
```
In turn, the Parallax component creates a Layer component for each layer that is included in the layers array.

Similarly, a Sprite can be added to the app by creating a sprite element and specifying the following:
```
<Sprite name="bird" frames="14" resolution="20" layer="3"/>
```
Sprites will also need some additional configuration in the Sass file.

View the live demo here:
http://parallax.ingridcronburg.com
