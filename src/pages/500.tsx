import { Helmet } from 'react-helmet-async';
// sections
import { View500 } from 'src/sections/error';

// ----------------------------------------------------------------------

export default function Page500() {
  return (
    <>
      <Helmet>
        <title> 500 Máy chủ tạm ngưng </title>
      </Helmet>

      <View500 />
    </>
  );
}
