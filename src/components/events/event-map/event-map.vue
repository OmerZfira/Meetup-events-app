<template>
    <div id='app'>
        <div class="place-map">
            <div>
                <div class="map" ref="map"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import GoogleMapsLoader from 'google-maps';
    GoogleMapsLoader.KEY = 'AIzaSyAIelHI3S7VnFDUcfdhGjl6__MsJn-pMCc';
    export default {
        props : { 
            event : {
                type: Object
            }
        } ,
        data() { 
            return {
             
            }
        },
        mounted() {
            GoogleMapsLoader.load(google => {
                var mapOptions = {
                    center: new google.maps.LatLng(this.event.venue.lat, this.event.venue.lon),
                    zoom: 18,
                    panControl: false,
                    zoomControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    overviewMapControl: false,
                    rotateControl: false
                }
                let MarkerPosition = new google.maps.LatLng(this.event.venue.lat, this.event.venue.lon);

                let map = new google.maps.Map(this.$refs.map, mapOptions);
                var marker = new google.maps.Marker({
                    position: MarkerPosition ,
                    animation:google.maps.Animation.BOUNCE
                });
                marker.setMap(map);

            });
        }
    }
</script>

<style scoped>
    .place-map {
        flex: 1 1 50%;
    }
    .map {
        height: 200px;
    }
</style>