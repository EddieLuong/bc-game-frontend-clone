import { format } from 'date-fns';
import React from 'react';

import { useQuery } from '@apollo/client';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Layout from './components/Layout';
import { QUERIES_GAMEBANK_HISTORY } from './graphql/queries/gamebank_history';

function App() {
  const { data } = useQuery(QUERIES_GAMEBANK_HISTORY, {
    variables: {
      input: {
        game: 'minipoker',
        symbol: 'hoh',
      },
    },
  });

  return (
    <>
      <Layout>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Amount</TableCell>
                <TableCell align="right">Created at</TableCell>
                <TableCell align="right">Direction</TableCell>
                <TableCell align="right">Share ratio</TableCell>
                <TableCell align="right">Type name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.gamebank_history?.map((row) => (
                <TableRow
                  key={row.amount}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.amount}
                  </TableCell>
                  <TableCell align="right">
                    {row?.createdAt &&
                      format(Number(row?.createdAt), 'dd/MM/yyyy')}
                  </TableCell>
                  <TableCell align="right">
                    {row.direction === 1 ? 'Asc' : 'Desc'}
                  </TableCell>
                  <TableCell align="right">
                    {row.shareRatio === 1 ? 'Checked' : 'unChecked'}
                  </TableCell>
                  <TableCell align="right">{row.__typename}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Layout>
    </>
  );
}

export default App;
