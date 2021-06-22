<script>
  import { Col, Container, Row, Styles } from "sveltestrap";
  import { teams } from '../store';

  export let teamNumber;

</script>

<div>
  <Container class="contenedor">
    <Row>
      <Col class="columna">
        <span class="team_name">{$teams[teamNumber - 1].name}</span>
        <img class="team_logo" src={$teams[teamNumber - 1].logo} alt="" />
        <span class="season">{$teams[teamNumber - 1].season}</span>
      </Col>
    </Row>

    <Row>
      <Col class="col-5 columna" />
      <Col class="columna headers_row">Home</Col>
      <Col class="columna headers_row">Away</Col>
      <Col class="columna headers_row">Total</Col>
    </Row>
    <Row>
      <Col class="col-5 columna headers_row">Games Played</Col>
      <Col class="columna">{$teams[teamNumber - 1].statistics.fixtures.played.home}</Col>
      <Col class="columna">{$teams[teamNumber - 1].statistics.fixtures.played.away}</Col>
      <Col class="columna">{$teams[teamNumber - 1].statistics.fixtures.played.total}</Col>
    </Row>
    <Row>
      <Col class="col-5 columna headers_row">Wins</Col>
      <Col class="columna">{$teams[teamNumber - 1].statistics.fixtures.wins.home}</Col>
      <Col class="columna">{$teams[teamNumber - 1].statistics.fixtures.wins.away}</Col>
      <Col class="columna">{$teams[teamNumber - 1].statistics.fixtures.wins.total}</Col>
    </Row>
    <Row>
      <Col class="col-5 columna headers_row">Draws</Col>
      <Col class="columna">{$teams[teamNumber - 1].statistics.fixtures.draws.home}</Col>
      <Col class="columna">{$teams[teamNumber - 1].statistics.fixtures.draws.away}</Col>
      <Col class="columna">{$teams[teamNumber - 1].statistics.fixtures.draws.total}</Col>
    </Row>
    <Row>
      <Col class="col-5 columna headers_row">Losses</Col>
      <Col class="columna">{$teams[teamNumber - 1].statistics.fixtures.loses.home}</Col>
      <Col class="columna">{$teams[teamNumber - 1].statistics.fixtures.loses.away}</Col>
      <Col class="columna">{$teams[teamNumber - 1].statistics.fixtures.loses.total}</Col>
    </Row>
    <Row>
      <Col class="col-5 columna headers_row">Goals For</Col>
      <Col class="columna">{$teams[teamNumber - 1].statistics.goals.for.total.home}</Col>
      <Col class="columna">{$teams[teamNumber - 1].statistics.goals.for.total.away}</Col>
      <Col class="columna">{$teams[teamNumber - 1].statistics.goals.for.total.total}</Col>
    </Row>
    <Row>
      <Col class="col-5 columna headers_row">Goals Against</Col>
      <Col class="columna">{$teams[teamNumber - 1].statistics.goals.against.total.home}</Col>
      <Col class="columna">{$teams[teamNumber - 1].statistics.goals.against.total.away}</Col>
      <Col class="columna">{$teams[teamNumber - 1].statistics.goals.against.total.total}</Col>
    </Row>
  </Container>
</div>

<style scoped>
  img {
    max-width: 50px;
    max-height: 50px;
  }

  :global(.columna) {
    background-color: #58ff84;
    color: #38003c;
    border: #38003c 1px solid;
    min-height: 40px;
    padding-top: 7px;
  }

  .team_name {
    color: #38003c;
    margin: 10px;
    font-size: 20px;
    font-weight: 800;
  }

  .team_logo {
    margin: 10px;
  }
  .season {
    color: #38003c;
    margin: 10px;
    font-size: 20px;
    font-weight: 800;
  }

  :global(.contenedor) {
    margin-bottom: 50px;
    padding: 5px;
  }

  :global(.headers_row) {
    font-weight: 900;
    color: #38003c;
  }
</style>
