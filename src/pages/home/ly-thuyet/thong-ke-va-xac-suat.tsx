// mui
import Container from '@mui/material/Container';
//
import { Helmet } from 'react-helmet-async';
// component
import ViewIframe from 'src/components/view-iframe';
// @ts-ignores
import PDF from 'src/assets/pdf/thong-ke-xac-suat/0.pdf';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Thống kê và xác suất </title>
      </Helmet>

      <Container maxWidth={false}>
        <ViewIframe src={PDF} />
      </Container>
    </>
  );
}
