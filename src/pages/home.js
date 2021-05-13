import { Container } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

import { AirQualityChart, AirQualityData } from '../components';

const Home = ({ airData, date }) => {

    return (
        <Container>
            <AirQualityData airData={airData} date={date} />
            <AirQualityChart airData={airData} />
        </Container>

    )
}

const mapStateToProps = ({ airquality }) => ({
    airData: airquality.airData,
    date: airquality.date
});

export default connect(
    mapStateToProps,
    null
)(Home);
