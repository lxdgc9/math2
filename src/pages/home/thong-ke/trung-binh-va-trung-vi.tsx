// mui
import Container from '@mui/material/Container';
//
import { Helmet } from 'react-helmet-async';
// components
import GeoGebra from 'src/components/geogebra/Geogebra';
// @ts-ignores
import GGB from 'src/assets/geometry/thong-ke/trung_binh_va_trung_vi.ggb';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Trung bình và trung vị </title>
      </Helmet>

      <Container maxWidth={false}>
        <GeoGebra appName="classic" showToolBar={false} filename={GGB}
        id="trung-binh-va-trung-vi"
        title="Trung bình và trung vị"
         />
      </Container>
    </>
  );
}
