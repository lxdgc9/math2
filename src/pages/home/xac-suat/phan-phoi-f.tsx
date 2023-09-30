// mui
import Container from '@mui/material/Container';
//
import { Helmet } from 'react-helmet-async';
// components
import GeoGebra from 'src/components/geogebra/Geogebra';
// @ts-ignores
import GGB from 'src/assets/geometry/xac-suat/phan_phoi_f.ggb';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Phân phối F </title>
      </Helmet>

      <Container maxWidth={false}>
        <GeoGebra
          appName="classic"
          filename={GGB}
          showAlgebraInput={false}
          id="phan-phoi-f"
          title="Phân phối F"
        />
      </Container>
    </>
  );
}
