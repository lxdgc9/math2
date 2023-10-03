// mui
import Container from '@mui/material/Container';
//
import { Helmet } from 'react-helmet-async';
// components
import GeoGebra from 'src/components/geogebra/Geogebra';
// @ts-ignores
import GGB from 'src/assets/geometry/dai-so/tich_vector.ggb';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Tích vector </title>
      </Helmet>

      <Container maxWidth={false}>
        <GeoGebra
          appName="classic"
          showToolBar={false}
          filename={GGB}
          id="tich-vector"
          title="Tích vector"
        />
      </Container>
    </>
  );
}
