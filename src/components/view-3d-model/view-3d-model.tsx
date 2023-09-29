// react
import { useState } from 'react';
// MUI
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
// component
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

type Props = {
  src?: string;
};

export default function View3dModel({ src }: Props) {
  const [fullscreen, setFullscreen] = useState(false);
  return (
    <>
      <Card
        sx={{
          height: '100vh',
          mx: 3,
          ...(fullscreen && {
            position: 'fixed',
            inset: 0,
            width: '100vw',
            mx: 0,
            borderRadius: 0,
            zIndex: 999999999999,
          }),
        }}
      >
        <Button
          variant="contained"
          color="inherit"
          onClick={() => setFullscreen(!fullscreen)}
          sx={{
            position: 'absolute',
            left: '50%',
            top: 12,
            transform: 'translate(-50%)',
          }}
        >
          <SvgColor
            src={`/assets/icons/setting/${
              fullscreen ? 'ic_exit_full_screen' : 'ic_full_screen'
            }.svg`}
            sx={{ width: 16, height: 16, mr: 1 }}
          />

          {fullscreen ? 'Thoát toàn màn hình' : 'Toàn màn hình'}
        </Button>

        <iframe
          title="3D model"
          src={src}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        />
      </Card>
    </>
  );
}
