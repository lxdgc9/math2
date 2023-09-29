// mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
//
import { Helmet } from 'react-helmet-async';
// components

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Toán cơ bản </title>
      </Helmet>

      <Container maxWidth={false}>
        <Card sx={{ m: 1, height: '100%', minHeight: '800px', position: 'relative' }}>
          <iframe
            src="https://vi.symbolab.com/geometry-calculator/parallel-lines-calculator"
            title="Microsoft Math Solver"
            style={{
              width: '100%',
              height: '100%',

              border: 'none',
            }}
          />
        </Card>
      </Container>
    </>
  );
}
