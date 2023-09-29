// mui
import Container from '@mui/material/Container';
//
import { Helmet } from 'react-helmet-async';
// component
import ViewIframe from 'src/components/view-iframe';
// @ts-ignores
import PDF from 'src/assets/pdf/hinh-hoc-do-luong/0.pdf';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Hình học và đo lường </title>
      </Helmet>

      <Container maxWidth={false}>
        <ViewIframe src={PDF} />
      </Container>
    </>
  );
}
