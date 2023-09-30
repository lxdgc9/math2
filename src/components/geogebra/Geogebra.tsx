import { useEffect, useRef, useState } from 'react';
// Geogebra
import Geogebra from 'react-geogebra';
// Components
import { LoadingScreen } from '../loading-screen';
import Turtorial from './Turtorial';

export default function GeoGebra(props: any) {
  const { idTurtorial } = props;
  const [width, setWidth] = useState(0);
  const ref = useRef<any>(null);

  useEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  return (
    <div ref={ref}>
      {width && (
        <>
          <Geogebra
            appName="classic"
            language="vi"
            width={width}
            showMenuBar={false}
            showToolBar
            showZoomButtons
            showFullscreenButton
            showToolBarHelp={false}
            showLogging={false}
            LoadComponent={() => <LoadingScreen />}
            {...props}
          />
        </>
      )}

      <Turtorial id={idTurtorial} />
    </div>
  );
}
