// mui
import Container from '@mui/material/Container';
//
import { Helmet } from 'react-helmet-async';
// components
import GeoGebra from 'src/components/geogebra/Geogebra';
import SwitchTab from 'src/components/switch-tab';
// @ts-ignores
import GGB from 'src/assets/geometry/hinh-hoc-khong-gian/hinh_chop.ggb';
// @ts-ignores
import MAU from 'src/assets/geometry/hinh-hoc-khong-gian/bieu_dien_hinh_hoc_khong_gian.ggb';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Hình chóp </title>
      </Helmet>

      <Container maxWidth={false}>
        <SwitchTab
          tab1={
            <GeoGebra
              appName="classic"
              showToolBar={false}
              filename={GGB}
              id="hinh-hoc"
              title="Hình học không gian"
            />
          }
          tab2={<GeoGebra appName="classic" filename={MAU} language="vi" />}
        />
      </Container>
    </>
  );
}
