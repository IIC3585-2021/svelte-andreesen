<script>
  import { Col, Container, Row, Styles } from "sveltestrap";

  export let teamNumber;

  const team = {
    id: 33,
    league: 39,
    season: 2020,
    name: "Manchester United",
    logo: "https://media.api-sports.io/football/teams/33.png",
    statistics: {
      goals: {
        for: {
          total: {
            home: 40,
            away: 26,
            total: 66,
          },
          average: {
            home: "2.1",
            away: "1.4",
            total: "1.7",
          },
        },
        against: {
          total: {
            home: 17,
            away: 19,
            total: 36,
          },
          average: {
            home: "0.9",
            away: "1.0",
            total: "0.9",
          },
        },
      },
      fixtures: {
        played: {
          home: 19,
          away: 19,
          total: 38,
        },
        wins: {
          home: 10,
          away: 8,
          total: 18,
        },
        draws: {
          home: 7,
          away: 5,
          total: 12,
        },
        loses: {
          home: 2,
          away: 6,
          total: 8,
        },
      },
    },
  };
</script>

<div>
  <Container class="contenedor">
    <Row>
      <Col class="columna">
        <span class="team_name">{team.name}</span>
        <img class="team_logo" src={team.logo} alt="" />
        <span class="season">{team.season}</span>
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
      <Col class="columna">{team.statistics.fixtures.played.home}</Col>
      <Col class="columna">{team.statistics.fixtures.played.away}</Col>
      <Col class="columna">{team.statistics.fixtures.played.total}</Col>
    </Row>
    <Row>
      <Col class="col-5 columna headers_row">Wins</Col>
      <Col class="columna">{team.statistics.fixtures.wins.home}</Col>
      <Col class="columna">{team.statistics.fixtures.wins.away}</Col>
      <Col class="columna">{team.statistics.fixtures.wins.total}</Col>
    </Row>
    <Row>
      <Col class="col-5 columna headers_row">Draws</Col>
      <Col class="columna">{team.statistics.fixtures.draws.home}</Col>
      <Col class="columna">{team.statistics.fixtures.draws.away}</Col>
      <Col class="columna">{team.statistics.fixtures.draws.total}</Col>
    </Row>
    <Row>
      <Col class="col-5 columna headers_row">Losses</Col>
      <Col class="columna">{team.statistics.fixtures.loses.home}</Col>
      <Col class="columna">{team.statistics.fixtures.loses.away}</Col>
      <Col class="columna">{team.statistics.fixtures.loses.total}</Col>
    </Row>
    <Row>
      <Col class="col-5 columna headers_row">Goals For</Col>
      <Col class="columna">{team.statistics.goals.for.total.home}</Col>
      <Col class="columna">{team.statistics.goals.for.total.away}</Col>
      <Col class="columna">{team.statistics.goals.for.total.total}</Col>
    </Row>
    <Row>
      <Col class="col-5 columna headers_row">Goals Against</Col>
      <Col class="columna">{team.statistics.goals.against.total.home}</Col>
      <Col class="columna">{team.statistics.goals.against.total.away}</Col>
      <Col class="columna">{team.statistics.goals.against.total.total}</Col>
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
