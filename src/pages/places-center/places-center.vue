<template>
  <div class="places-center">
  <place-header @addPlace="addPlace"></place-header>
    <section class="place-content">
      <place-list v-if="!displayedPlace.id" :places="filteredPlaces" @displayPlace="displayPlace" @filter="placeFilter = $event">
      </place-list>
      <place-details v-else :displayedPlace="displayedPlace" @deletePlace="deletePlace" @closeDetails="closeDetails">
      </place-details>
      <place-map v-if="shouldshowMap" :places="filteredPlaces" :updateMap="updateMap">
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
        placesDB: [],
        currFilteredPlaces: [],
        shouldshowMap: true,
        displayedPlace: {},
        placeFilter: {name:'', lat:'', long:'', tags:[], type: 'all'},
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
        this.$http.delete(`place/${placeId}`);
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
      displayedPlaces() {
        if(this.placeFilter.type === 'all') {
          return this.currFilteredPlaces = this.placesDB.filter(place => {
              console.log('place type' , place.type);
              return place.type === 'all';
          });
          console.log(this.currFilteredPlaces);
        } else if (this.placeFilter.type === 'favorites') {
            return this.currFilteredPlaces = this.placesDB.filter(place => {
              return place.type === 'favorites';
          });
        }
      },
      filteredPlaces() {
        this.displayedPlaces;
        console.log(this.displayedPlaces);
        let placeName = this.placeFilter.name.toLowerCase();
        // let placeTags = this.placeFilter.tags;
        return this.currFilteredPlaces.filter(place => {
            return place.name.toLowerCase().includes(placeName);
            // place.tags.some(tag=>{tag.toLowerCase().includes(...placeTags)})
        })
      },
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

  @media screen and (max-width: 590px){
    .place-content{
      flex-direction: column;
    }
  }

  ul {
    list-style: none;
  }
</style>