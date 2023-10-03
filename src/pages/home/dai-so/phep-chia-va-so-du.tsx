// mui
import Container from '@mui/material/Container';
//
import { Helmet } from 'react-helmet-async';
// components
import GeoGebra from 'src/components/geogebra/Geogebra';
// @ts-ignores
import GGB from 'src/assets/geometry/dai-so/phep_chia_va_so_du.ggb';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Phép chia và số dư </title>
      </Helmet>

      <Container maxWidth={false}>
        <GeoGebra
          appName="classic"
          showToolBar={false}
          filename={GGB}
          id="phep-chia-va-so-du"
          title="Phép chia và số dư"
        />
      </Container>
    </>
  );
}
