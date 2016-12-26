<template>
  <div class="places-center">
  <place-header @addPlace="addPlace"></place-header>
    <section class="place-content">
      <place-list v-if="!displayedPlace.id" :places="placesDB" @displayPlace="displayPlace" @filter="placeFilter = $event">
      </place-list>
      <place-details v-else :displayedPlace="displayedPlace" @deletePlace="deletePlace" @closeDetails="closeDetails">
      </place-details>
      <place-map v-if="shouldshowMap" :places="placesDB" :updateMap="updateMap">
      </place-map>
      <place-add v-else @placeSaved="placeSaved" @addPlace="addPlace">
      </place-add>
    </section>
  </div>
</template>

<script>
  import placeList from '../../components/places/place-list/place-list.vue'
  import placeDetails from '../../components/places/place-details/place-details.vue'
  import placeMap from '../../components/places/place-map/place-map.vue'
  import placeHeader from '../../components/places/place-header/place-header.vue'
  import placeAdd from '../../components/places/place-add/place-add.vue'

  export default {

    data() {
      return {
        placesDB: [
          // {
          //   "venue": {
          //     "id": 1,
          //     "name": 'this',
          //     "lat": 32.06399154663086,
          //     "lng": 34.77415084838867,
          //     "tags": ['fun', 'food'],
          //     "type": 'upcoming',
          //     isDisplayed: false
          //   },
          // },
          // {
          //   "venue": {
          //     "id": 2,
          //     "name": "is",
          //     "lat": 32.02274703979492,
          //     "lng": 34.77984619140625,
          //     "tags": ['work', 'anything'],
          //     "type": 'upcoming',
          //     isDisplayed: false
          //   },
          // },
          // {
          //   "venue": {
          //     "id": 3,
          //     "name": "mapAPI",
          //     "lat": 32.06999969482422,
          //     "lng": 34.79000045776367,
          //     "tags": ['fun', 'work'],
          //     "type": 'favorites',
          //     isDisplayed: false
          //   },
          // },
        ],
        currFilteredPlaces: [],
        shouldshowMap: true,
        displayedPlace: {},
        placeFilter: {name:'', lat:'', long:'', tags:'', type: 'all'},
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
            return (place.name.toLowerCase().includes(this.placeFilter.txt.toLowerCase()) ||
              place.tags.join(' ').toLowerCase().includes(this.placeFilter.txt.toLowerCase())) &&
              (this.placeFilter.type === 'all' || place.type === this.placeFilter.type)
          });
        };
      }
    },
    methods: {
      addPlace(ev) {
        this.shouldshowMap = ev;
       },
      displayPlace(placeId) {
        this.shouldshowMap = true;
        this.placesDB.forEach(place => {
          if (place.id === placeId) {
            place.isDisplayed = true;
            this.displayedPlace = place;
          } else {
            place.isDisplayed = false;
          }
        });
      },
      reloadPlaces() {
          this.$http.get('places')
              .then(res => res.json())
              .then(places => {
                  this.placesDB = places;
              });
      },
      closeDetails() {
        this.displayedPlace = {};
      },
      deletePlace(placeId) {
        this.placesDB = this.placesDB.filter(place => place.id !== placeId);
        this.displayedPlace = {};
      },
      placeSaved(place) {
        this.shouldshowMap = true;
        this.placesDB.push(place);
      }
    },
    components: {
      placeList,
      placeDetails,
      placeMap,
      placeHeader,
      placeAdd
    },
    created(){
      this.reloadPlaces();
    },
    computed: {
      // displayedPlaces() {
      //   if(this.placeFilter.type === 'all') {
      //     return this.currFilteredPlaces= this.placesDB.filter(place => {
      //         return place.type === 'all';
      //     });
      //   } else if (this.placeFilter.type === 'favorites') {
      //       return this.currFilteredPlaces = this.placesDB.filter(place => {
      //         return place.type === 'favorites';
      //     });
      //   }
      // },
      // filteredPlaces() {
      //   this.displayedPlaces;
      //   let placeName = this.emailFilter.name.toLowerCase();
      //   // let placeTags = this.emailFilter.tags;
      //   return this.currFilteredEmails.filter(place => {
      //     return true;
      //       // return place.name.toLowerCase().includes(placeName);
      //       // place.tags.some(tag=>{tag.toLowerCase().includes()})
      //   })
      // },
    }
  }
</script>

<style>
  .places-center {
    width: 100%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    height: auto;
    position: relative;
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