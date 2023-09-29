// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { alpha, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// theme
import { bgGradient } from 'src/theme/css';
// components
import Logo from 'src/components/logo';

// ----------------------------------------------------------------------

type Props = {
  title?: string;
  image?: string;
  children: React.ReactNode;
};

export default function AuthClassicLayout({ children, image, title }: Props) {
  const theme = useTheme();

  const upMd = useResponsive('up', 'md');

  const renderLogo = (
    <Logo
      sx={{
        zIndex: 9,
        position: 'absolute',
        m: 2,
      }}
    />
  );

  const renderContent = (
    <Stack
      justifyContent="center"
      sx={{
        width: 1,
        mx: 'auto',
        maxWidth: 480,
        px: { xs: 2, md: 8 },
        py: { xs: 15, md: 30 },
      }}
    >
      {children}
    </Stack>
  );

  const renderSection = (
    <Stack
      flexGrow={1}
      alignItems="center"
      justifyContent="space-between"
      sx={{
        py: 3,
        ...bgGradient({
          color: alpha(
            theme.palette.background.default,
            theme.palette.mode === 'light' ? 0.88 : 0.94
          ),
          imgUrl: '/assets/background/overlay_2.jpg',
        }),
      }}
    >
      <Box sx={{ px: 3, py: 1, bgcolor: 'secondary.main', borderRadius: 20 }}>
        <Typography variant="h5" color="white" fontWeight={900} sx={{ textAlign: 'center' }}>
          {title || 'PHẦN MỀM HỖ TRỢ GIẢNG DẠY TOÁN HỌC'}
        </Typography>
      </Box>

      <Box
        component="img"
        alt="auth"
        src={image || '/assets/images/login/login_bg.png'}
        sx={{ maxWidth: 720 }}
      />

      <Typography variant="subtitle2">Copyright © all rights reserved by IIT 2023</Typography>
    </Stack>
  );

  return (
    <Stack
      component="main"
      direction="row"
      sx={{
        maxHeight: '100vh',
      }}
    >
      {renderLogo}

      {upMd && renderSection}

      {renderContent}
    </Stack>
  );
}
