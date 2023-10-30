// mui
import Container from '@mui/material/Container';
//
import { Helmet } from 'react-helmet-async';
// components
import GeoGebra from 'src/components/geogebra/Geogebra';
import SwitchTab from 'src/components/switch-tab';
// @ts-ignores
import GGB from 'src/assets/geometry/hinh-hoc-phang/bo-sung/hinhbinhhanh2D.ggb';
// @ts-ignores
import MAU from 'src/assets/geometry/hinh-hoc-phang/bieu_dien_hinh_hoc_phang.ggb';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Hình bình hành </title>
      </Helmet>

      <Container maxWidth={false}>
        <SwitchTab
          tab1={
            <GeoGebra
              appName="classic"
              showToolBar={false}
              filename={GGB}
              id="hinh-hoc"
              title="Hình bình hành"
            />
          }
          tab2={<GeoGebra appName="classic" filename={MAU} language="vi" />}
        />
      </Container>
    </>
  );
}
