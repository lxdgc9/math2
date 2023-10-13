// mui
import Container from '@mui/material/Container';
//
import { Helmet } from 'react-helmet-async';
// components
import GeoGebra from 'src/components/geogebra/Geogebra';
// @ts-ignores
import GGB from 'src/assets/geometry/hinh-hoc-phang/bieu_dien_hinh_hoc_phang.ggb';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Biểu diễn hình học phẳng </title>
      </Helmet>

      <Container maxWidth={false}>
        <GeoGebra appName="classic" filename={GGB} language="vi" />
      </Container>
    </>
  );
}
