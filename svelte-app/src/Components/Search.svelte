<script>
    import SearchBox from '../Components/SearchBox.svelte';
</script>

<div class="search">
    <b-container>
    <b-row >
        <b-col >
          <search-box :teamNumber="0"/>
      </b-col>
      <b-col >
          <search-box :teamNumber="1"/>
      </b-col>
    </b-row>
    </b-container>
</div>

<style>
    .search {
        width: 100%;
        height: 150px;
        padding: 10px;
    }
</style>
