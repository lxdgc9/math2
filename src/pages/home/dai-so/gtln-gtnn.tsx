// mui
import Container from '@mui/material/Container';
//
import { Helmet } from 'react-helmet-async';
// components
import GeoGebra from 'src/components/geogebra/Geogebra';
// @ts-ignores
import GGB from 'src/assets/geometry/dai-so/gia_tri_lon_nhat_gia_tri_nho_nhat.ggb';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Giá trị lớn nhất và giá trị nhỏ nhất </title>
      </Helmet>

      <Container maxWidth={false}>
        <GeoGebra appName="classic" showToolBar={false} filename={GGB} />
      </Container>
    </>
  );
}
