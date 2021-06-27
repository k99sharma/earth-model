# 3D Earth Model
### Realistic earth model using threejs library
![earth_screenshot](https://user-images.githubusercontent.com/54969439/123535532-0d8ba100-d742-11eb-8a67-d898322a6181.png)

## World Component
- `World` folder contains the files for model
- World component can be integrated in any application 
- `threejs` library is imported using CDN links

## Implementation
- Import `World` class from `World.js` file located in `World` component
``` javascript
  import { World } from './World/World.js';
```
- Create new instance of world class
``` javascript
  const container = document.getElementById('scene-container');              // div element for model in html file
  const world = new World(container);
```
- If your component is not in `src` folder change assets path in `Earth`, `Space` and `Moon` component 

## Geolocation Feature
- Earth in model is assumed to be Spherical in shape rather than Elliptical
- Geolocation is done using `latitude` and `longitude` of location
- See how to convert latitude and longitude into 3D coordinate [Spherical Coordinate](https://en.wikipedia.org/wiki/Spherical_coordinate_system#Cartesian_coordinates)
``` javascript 
  world.findLocation(latitude, longitude);
```
- If latitude is degree North use `positive` otherwise `negative`
- If longitude is degree East use `positive` otherwise `negative`
``` html
  India (20.5937° N, 78.9629° E) -> (20.5937, 78.9629)
  Brazil (14.2350° S, 51.9253° W) -> (- 14.2350, -51.9253)
  Australia (25.2744° S, 133.7751° E) -> (-25.2744, 133.7751)
```
