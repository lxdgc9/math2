// mui
import Container from '@mui/material/Container';
//
import { Helmet } from 'react-helmet-async';
// components
import GeoGebra from 'src/components/geogebra/Geogebra';
// @ts-ignores
import GGB from 'src/assets/geometry/thong-ke/hoi_quy.ggb';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Hồi quy </title>
      </Helmet>

      <Container maxWidth={false}>
        <GeoGebra
          appName="classic"
          showToolBar={false}
          filename={GGB}
          id="hoi-quy"
          title="Hồi quy"
        />
      </Container>
    </>
  );
}
