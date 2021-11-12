// window.CESIUM_BASE_URL = '';
import React, { Component, useState, useEffect } from 'react';
import 'cesium/Widgets/widgets.css';
import * as Cesium  from "cesium/Cesium";


function InitViewer() {

    useEffect(() => {

        Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ZjlhMGRmMS03NWE0LTQyZWYtOTQwNC01NTg2MzBkNTJhMGUiLCJpZCI6NzE3MTYsImlhdCI6MTYzNTQwNDg2Nn0.UG6dIrTzpIJuNLs8Fp57m19-fvhBIs_vtexTqFPgPt8';
        // Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.
        const viewer = new Cesium.Viewer('cesiumContainer', {
            terrainProvider: Cesium.createWorldTerrain()
        });
// Add Cesium OSM Buildings, a global 3D buildings layer.
//         const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());
// // Fly the camera to San Francisco at the given longitude, latitude, and height.
//         viewer.camera.flyTo({
//             destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
//             orientation: {
//                 heading: Cesium.Math.toRadians(0.0),
//                 pitch: Cesium.Math.toRadians(-15.0)
//             }
//         });
    });

    return (
      <div id="cesiumContainer" style={{height:'300px'}} />
    )
}

export default InitViewer;
