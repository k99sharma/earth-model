<h1 align='center'>3D Earth Model</h1>

<p align='center'>
  <a href="https://opensource.org/licenses/MIT">
  <img alt="License" src="https://img.shields.io/github/license/k99sharma/earth-model"/>
  </a>
  
  <a href="https://app.netlify.com/sites/ghost32-earth/deploys">
    <img alt="deploy" src="https://img.shields.io/netlify/d7209d50-7c4c-478b-ab5a-516270ea81b7" />
  </a>
  
  <a>
    <img alt="tag" src="https://img.shields.io/github/v/tag/k99sharma/earth-model" />
  </a>
</p>

<p align='center'>
  🌎 Realistic 3D earth model powered by ThreeJs library. Easy to use and integrate in your next 3D project.
</p>

![earth_screenshot](https://user-images.githubusercontent.com/54969439/123535532-0d8ba100-d742-11eb-8a67-d898322a6181.png)

## Tech Stack & Open-source libraries
- [ThreeJs](https://threejs.org/) library is used to make 3D Earth model. 
- Layout is created using HTML5.

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

## Find this repository userful? :heart:
Give it a star.
<br>Also, __[Follow me](https://github.com/k99sharma)__ on GitHub for my next creations! 😎

# LICENSE
```xml
Designed and developed by 2021 (Kalash Sharma)

Licensed under the MIT License, (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   https://opensource.org/licenses/MIT

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
