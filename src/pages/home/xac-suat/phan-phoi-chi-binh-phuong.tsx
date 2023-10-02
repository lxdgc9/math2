// mui
import Container from '@mui/material/Container';
//
import { Helmet } from 'react-helmet-async';
// components
import GeoGebra from 'src/components/geogebra/Geogebra';
// @ts-ignores
import GGB from 'src/assets/geometry/xac-suat/phan_phoi_chi_binh_phuong.ggb';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Phân phối Chi-bình phương </title>
      </Helmet>

      <Container maxWidth={false}>
        <GeoGebra
          appName="classic"
          language="vi"
          filename={GGB}
          showAlgebraInput={false}
          id="phan-phoi-chi-binh-phuong"
          title="Phân phối Chi-bình phương"
        />
      </Container>
    </>
  );
}
