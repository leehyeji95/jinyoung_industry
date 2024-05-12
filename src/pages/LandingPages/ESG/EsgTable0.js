import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, description) {
    return { name, description};
}

const rows = [
    createData('Frozen yoghurt', '기초질서 준수'),
];

export default function EsgTable0() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>SHE 방침</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        {/*<TableCell align="right">Fat&nbsp;(g)</TableCell>*/}
                        {/*<TableCell align="right">Carbs&nbsp;(g)</TableCell>*/}
                        {/*<TableCell align="right">Protein&nbsp;(g)</TableCell>*/}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.description} <a href="/pages/LandingPages/ESG/ethics.html">gg</a></TableCell>
                            {/*<TableCell align="right">{row.fat}</TableCell>*/}
                            {/*<TableCell align="right">{row.carbs}</TableCell>*/}
                            {/*<TableCell align="right">{row.protein}</TableCell>*/}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}