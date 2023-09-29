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
        <title> Thử thách tính nhẩm </title>
      </Helmet>

      <Container maxWidth={false}>
        <ViewIframe src="https://math-game-iit.netlify.app" />
      </Container>
    </>
  );
}
