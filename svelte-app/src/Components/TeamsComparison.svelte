<script>
  import { Col, Container, Row } from "sveltestrap";
  import TeamsSelected from "./TeamsSelected.svelte";
</script>

<Container>
  <Row cols={2}>
    <Col><TeamsSelected teamNumber={1} /></Col>
    <Col><TeamsSelected teamNumber={2} /></Col>
  </Row>
</Container>
