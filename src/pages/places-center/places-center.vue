<template>
  <div class="app">
    <section class="place-content">
      <place-list v-if="!displayedPlace.venue" :places="places" @displayPlace="displayPlace" @filter="placeFilter = $event">
      </place-list>
      <place-details v-else :displayedPlace="displayedPlace" @deletePlace="deletePlace" @closeDetails="closeDetails">
      </place-details>
      <place-map :places="places" :updateMap="updateMap">
      </place-map>
    </section>
  </div>
</template>

<script>
  import placeList from '../../components/places/place-list/place-list.vue'
  import placeDetails from '../../components/places/place-details/place-details.vue'
  import placeMap from '../../components/places/place-map/place-map.vue'


  export default {

    data() {
      return {
        placesDB: [
          {
            "venue": {
              "id": 1,
              "name": 'this',
              "lat": 32.06399154663086,
              "lng": 34.77415084838867,
              "tags": ['fun', 'food'],
              "type": 'upcoming'
            },
          },
          {
            "venue": {
              "id": 2,
              "name": "is",
              "lat": 32.02274703979492,
              "lng": 34.77984619140625,
              "tags": ['work', 'anything'],
              "type": 'upcoming'
            },
          },
          {
            "venue": {
              "id": 3,
              "name": "mapAPI",
              "lat": 32.06999969482422,
              "lng": 34.79000045776367,
              "tags": ['fun', 'work'],
              "type": 'favorites'
            },
          },
        ],
        displayedPlace: {},
        placeFilter: { type: 'all' },
      }
    },
    computed: {
      places() {
        console.log('reached computed center');
        if (!this.placeFilter.txt && this.placeFilter.type === 'all') {
          return this.placesDB
        }
        else {
          return this.placesDB.filter(place => {
            return (place.venue.name.toLowerCase().includes(this.placeFilter.txt.toLowerCase()) ||
              place.venue.tags.join(' ').toLowerCase().includes(this.placeFilter.txt.toLowerCase())) &&
              (this.placeFilter.type === 'all' || place.venue.type === this.placeFilter.type)
          });

        };
      }
    },
    methods: {
      displayPlace(placeId) {
        this.places.forEach(place => {
          if (place.venue.id === placeId) {
            place.venue.isDisplayed = true;
            this.displayedPlace = place;
          } else {
            place.venue.isDisplayed = false;
          }
        });
      },
      closeDetails() {
        this.displayedPlace = {};
      },
      deletePlace(placeId) {
        this.placesDB = this.placesDB.filter(place => place.venue.id !== placeId);
        this.displayedPlace = {};
      },
    },
    components: {
      placeList,
      placeDetails,
      placeMap
    }
  }
</script>

<style>
.app {
  width: 85%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
}
.place-content {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  min-height: 300px;
}

ul {
  list-style: none;
}


</style>