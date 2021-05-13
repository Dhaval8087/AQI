import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';

import { timeSince } from '../util/timeslice';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tablecontainer: {
        marginTop: '100px'
    },
    good: {
        backgroundColor: '#00a152'
    },
    satisfactory: {
        backgroundColor: '#6fbf73'
    },
    modarate: {
        backgroundColor: '#ffeb3b',
        color: '#000'
    },
    poor: {
        backgroundColor: '#ffc107',
        color: '#000'
    },
    vpoor: {
        backgroundColor: '#f6685e',
    },
    severe: {
        backgroundColor: '#aa2e25',
    }
});
export const AirQualityData = ({ airData, date }) => {
    const classes = useStyles();
    const getColorCode = (value) => {
        console.log(value);
        if (value >= 0 && value <= 50) {
            return classes.good
        } else if (value >= 51 && value <= 100) {
            return classes.satisfactory
        } else if (value >= 101 && value <= 200) {
            return classes.modarate
        } else if (value >= 201 && value <= 300) {
            return classes.poor
        } else if (value >= 301 && value <= 400) {
            return classes.vpoor
        } else if (value >= 401 && value <= 500) {
            return classes.severe
        }


    }
    return (
        <TableContainer component={Paper} className={classes.tablecontainer}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell align="right">Current AQI</TableCell>
                        <TableCell align="right">Last Updated</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {airData.map((item, index) => {
                        return (
                            <TableRow key={`${item.city}-${index}`}>
                                <TableCell component="th" scope="row">
                                    {index + 1}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {item.city}
                                </TableCell>
                                <TableCell align="right" className={getColorCode(Math.ceil(item.aqi))}>
                                    {item.aqi.toFixed(2)}
                                </TableCell>
                                <TableCell align="right">
                                    {timeSince(date)}
                                </TableCell>

                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

