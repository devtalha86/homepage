<template>
    <div class="map">
        <section id="find">
            <div class="container-fluid">
                <div class="row no-gutters">
                    <div class="col-6">
                        <h1><span class="bold">Find Your</span><span class="borderBreak"><span>fire department</span></span></h1>
                    </div>
                    <div class="col-6">
                        <form class="search-form">
                            <button type="submit" class="search-button">
                                <span class="lodur-icon-search"></span>
                            </button>
                            <input type="search" value="" placeholder="Search..." class="search-input tooltipped"
                                   v-tooltip:left="'Suche Deine Feuerwehr'"
                                v-on:focus="zooming = true"
                                v-on:blur="zooming = false"
                            >
                        </form>
                    </div>
                </div>
                <div class="row no-gutters">
                    <div class="col-md-12">
                        <div class="map-container" :class="{disabled:zooming === false}" id="map"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Map from 'ol/Map.js';
    import View from 'ol/View.js';
    import TileLayer from 'ol/layer/Tile.js'
    import OSM from "ol/source/OSM";
    import {fromLonLat} from 'ol/proj';

export default {
    name: "Map",
    data() {
        return {
            zooming: false
        }
    },
    mounted() {
        let map = new Map({
            target: 'map',
            layers: [
                new TileLayer({source: new OSM()})
            ],
            controls : [],
            view: new View({
                center: fromLonLat([37.41, 8.82]),
                zoom: 4
            })
        })
    }

}

</script>

<style scoped>
    @import "~ol/ol.css";
    #map {
        height: 650px;
    }
    #find .map-container {
        margin: 15px -47px 0 -47px;
    }
</style>