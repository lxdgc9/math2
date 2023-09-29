import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useRouter } from 'src/routes/hooks';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export default function HomePage() {
  const { replace } = useRouter();
  useEffect(() => {
    replace(paths.home.bieu_do.bieu_do_duong);
  }, [replace]);

  return (
    <>
      <Helmet>
        <title> Trang chủ </title>
      </Helmet>

      <Container maxWidth={false}>Hello</Container>
    </>
  );
}
