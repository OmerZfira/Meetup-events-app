<template>
    <div class="place-map">
        <div>
            <span style="display:none;"> {{places}}</span>
<div class="map" ref="map">

</div>
</div>
</div>
</template>

<script>
    import GoogleMapsLoader from 'google-maps';
    GoogleMapsLoader.KEY = 'AIzaSyAIelHI3S7VnFDUcfdhGjl6__MsJn-pMCc';

    export default {
        props: {
            places: {
                required: true,
                type: Array
            }
        },
        mounted() {
            var setCenter = { lat: 32.06399154663086, lng: 34.77415084838867 };
            const options = {
                zoom: 12,
                center: setCenter
            };
            GoogleMapsLoader.load(google => {
                let map = new google.maps.Map(this.$refs.map, options);
                if (this.places.length > 0) {
                    this.places.forEach(place => {
                        var infowindow = new google.maps.InfoWindow();
                        infowindow.setContent('<div class="infoWin"><br><strong>' + place.venue.name + '</strong><br>' +
                            'Place ID: ' + place.venue.id + '<br>' +
                            place.venue.tags + '</div>');
                        infowindow.setOptions({disableAutoPan: true})
                        let latlangs = {};
                        latlangs.lat = place.venue.lat;
                        latlangs.lng = place.venue.lng;
                        let marker = new google.maps.Marker({
                            position: latlangs,
                            map: map
                        });
                        google.maps.event.addListener(marker, 'mouseover', function () {
                            infowindow.open(map, this);
                        });
                        google.maps.event.addListener(marker, 'mouseout', () => infowindow.close());
                    });
                }
            });
        },
        updated() {
            var setCenter = { lat: 32.06399154663086, lng: 34.77415084838867 };
            const options = {
                zoom: 12,
                center: setCenter
            };
            GoogleMapsLoader.load(google => {
                let map = new google.maps.Map(this.$refs.map, options);
                if (this.places.length > 0) {
                    this.places.forEach(place => {
                        var infowindow = new google.maps.InfoWindow();
                        infowindow.setContent('<div class="infoWin"><strong>' + place.venue.name + '</strong><br>' +
                            'Place ID: ' + place.venue.id + '<br>' +
                            place.venue.tags + '</div>');
                        let latlangs = {};
                        latlangs.lat = place.venue.lat;
                        latlangs.lng = place.venue.lng;
                        let marker = new google.maps.Marker({
                            position: latlangs,
                            map: map
                        });
                        google.maps.event.addListener(marker, 'mouseover', function () {
                            infowindow.open(map, this);
                        });
                        google.maps.event.addListener(marker, 'mouseout', function () {
                            infowindow.close();
                        });
                    });
                }
            });
            console.log('updated map');
        }

    }
</script>

<style scoped>
.place-map {
    flex: 1 1 50%;
}
 .map {
    height: 300px;
}
.infoWin {
}

</style>