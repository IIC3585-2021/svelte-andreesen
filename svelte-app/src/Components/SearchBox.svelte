<script>
    import axios from "axios";
    export let teamNumber;


    export default {
      data() {
        return {
          season: "",
          team: "",
          selected: null,
          options: [{ value: null, text: "<-- Press button to search teams " }],
        };
      },
      props: {
        teamNumber: Number,
      },
      computed: {
        seasonValid() {
          return this.season >= 1850 && this.season <= 2020;
        },
      },
      methods: {
        async fetchTeams() {
          console.log(this.season);
          const res = await axios.get(
            `https://api-football-v1.p.rapidapi.com/v3/teams`,
            {
              headers: {
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key":
                  "105a83c7c1msh176726663ad9425p1520d1jsn92b2b13b5a77",
              },
              params: {
                league: 39,
                season: this.season,
              },
            }
          );
          const jsonResponse = await res.data.response;
          let teams = [];
          teams.push({ value: null, text: "Select a team" });
          jsonResponse.forEach((element) => {
            teams.push({
              value: {
                  id: element.team.id,
                  name: element.team.name,
                  logo: element.team.logo
              }, 
              text: element.team.name,
            });
          });
          this.options = teams;
        },
    
        async teamSelected(){
            if (this.selected != null){
                const res = await axios.get(
            "https://api-football-v1.p.rapidapi.com/v3/teams/statistics",
            {
              headers: {
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key":
                  "105a83c7c1msh176726663ad9425p1520d1jsn92b2b13b5a77",
              },
              params: {
                league: 39,
                season: this.season,
                team: this.selected.id
              },
            }
          );
          const jsonResponse = await res.data.response;
          
          console.log(jsonResponse)
          const newTeam = {
              id: this.selected.id,
              league: 39,
              season: this.season,
              name: this.selected.name,
              logo: this.selected.logo,
              statistics: {
                  goals: jsonResponse.goals,
                  fixtures: jsonResponse.fixtures
              }
          }
          const teamNumber = this.teamNumber;
          this.$store.commit('changeTeam', {newTeam, teamNumber})
        }
            }
            
      },
    };
    </script>

<div style="">
    <h3>Change team {{ teamNumber + 1 }}:</h3>
    <b-row class="my-1">
      <b-col sm="2">
        <label class='select_season' style="padding-top: 8px" for="input-valid">Season</label>
      </b-col>
      <b-col sm="9">
        <b-form-input
          id="input-valid"
          :state="seasonValid"
          v-model="season"
          class="input"
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback">
          Enter year between 2010 and 2020
        </b-form-invalid-feedback>
      </b-col>
    </b-row>
    <b-row
      class="my-1"
      v-bind:class="{ show: !(season >= 2010 && season <= 2020) }"
    >
      <b-col sm="2">
        <button class="button" v-on:click="fetchTeams">Search</button>
      </b-col>
      <b-col sm="9">
        <b-form-select
          @change="teamSelected"
          v-model="selected"
          :options="options"
          style="width: 100%"
          class="selection"
        ></b-form-select>
      </b-col>
    </b-row>
  </div>

  <style>
    .show {
      display: none !important;
    }
    
    h3 {
      color: #E90B52;
      }
    
    .select_season {
       color: #58FF84;
    }
    
    #input-valid{
        background-color: #58FF84;
        color: #38003C;
    }
    
    .button{
        color: #58FF84;
        background-color: transparent;
        border-style: solid;
        border-color: #E90B52;
        margin-top: 5px;
    }
    
    .selection{
        border-radius: 5px;
        height: 110%;
        background-color: #58FF84;
        color: #38003C;
    }
    </style>