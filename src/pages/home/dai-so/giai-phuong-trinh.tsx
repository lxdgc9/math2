// mui
import Container from '@mui/material/Container';
//
import { Helmet } from 'react-helmet-async';
// components
import GeoGebra from 'src/components/geogebra/Geogebra';
// @ts-ignores
import GGB from 'src/assets/geometry/dai-so/giai_phuong_trinh.ggb';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Giải phương trình </title>
      </Helmet>

      <Container maxWidth={false}>
        <GeoGebra
          appName="classic"
          showToolBar={false}
          filename={GGB}
          id="giai-phuong-trinh"
          title="Giải phương trình"
        />
      </Container>
    </>
  );
}
