// mui
import Container from '@mui/material/Container';
//
import { Helmet } from 'react-helmet-async';
// components
import GeoGebra from 'src/components/geogebra/Geogebra';
// @ts-ignores
import GGB from 'src/assets/geometry/hinh-hoc-khong-gian/bieu_dien_hinh_hoc_khong_gian.ggb';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Biểu diễn hình học không gian </title>
      </Helmet>

      <Container maxWidth={false}>
        <GeoGebra appName="classic" filename={GGB} />
      </Container>
    </>
  );
}
