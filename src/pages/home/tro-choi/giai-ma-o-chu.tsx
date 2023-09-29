// react
// mui
import Container from '@mui/material/Container';
//
import { Helmet } from 'react-helmet-async';
import ViewIframe from 'src/components/view-iframe';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Giải mã ô chữ </title>
      </Helmet>

      <Container maxWidth={false}>
        <ViewIframe src="https://sodoku-iit.netlify.app/" />
      </Container>
    </>
  );
}
