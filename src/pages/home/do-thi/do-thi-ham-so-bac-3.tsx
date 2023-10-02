// mui
import Container from '@mui/material/Container';
//
import { Helmet } from 'react-helmet-async';
// components
import GeoGebra from 'src/components/geogebra/Geogebra';
// @ts-ignores
import GGB from 'src/assets/geometry/do-thi/do_thi_ham_so_bac_3.ggb';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Đồ thị hàm số bậc 3 </title>
      </Helmet>

      <Container maxWidth={false}>
        <GeoGebra
          appName="classic"
          showToolBar={false}
          filename={GGB}
        />
      </Container>
    </>
  );
}
