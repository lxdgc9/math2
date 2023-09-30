// mui
import Container from '@mui/material/Container';
//
import { Helmet } from 'react-helmet-async';
// components
import GeoGebra from 'src/components/geogebra/Geogebra';
// @ts-ignores
import GGB from 'src/assets/geometry/xac-suat/phan_phoi_poat_xong.ggb';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Phân phối Poát-xông </title>
      </Helmet>

      <Container maxWidth={false}>
        <GeoGebra
          appName="classic"
          filename={GGB}
          showAlgebraInput={false}
          id="phan-phoi-poat-xong"
          title="Phân phối Poát-xông"
        />
      </Container>
    </>
  );
}
