// mui
import Container from '@mui/material/Container';
//
import { Helmet } from 'react-helmet-async';
// components
import GeoGebra from 'src/components/geogebra/Geogebra';
// @ts-ignores
import GGB from 'src/assets/geometry/hinh-hoc-phang/cac_dang_duong_thang.ggb';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Các dạng đường thằng </title>
      </Helmet>

      <Container maxWidth={false}>
        <GeoGebra appName="classic" showToolBar={false} filename={GGB} />
      </Container>
    </>
  );
}
