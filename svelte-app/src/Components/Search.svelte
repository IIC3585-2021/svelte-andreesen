<script>
    import SearchBox from '../Components/SearchBox.svelte';
    import { Table, Card, Row, Col, Container } from 'sveltestrap';
</script>

<div class="search">
    <Row>
        <Col xs="6">
            <SearchBox teamNumber={0}/>
        </Col>
        <Col xs="6">
            <SearchBox teamNumber={1}/>
        </Col>
    </Row>
</div>

<style>
    :global(){

    }

    .search {
        width: 100%;
        height: 100%;
        padding: 10px;
        background-color: #38003C;
    }

    .purple {
        background-color: #38003C;
        color:  #38003C
    }
</style>
