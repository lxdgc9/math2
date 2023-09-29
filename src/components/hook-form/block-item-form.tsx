// @mui
import Box from '@mui/material/Box';
import Stack, { StackProps } from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

type BlockProps = StackProps & {
  label: string;
  required?: boolean;
};

export default function BlockItem({ label, required, children, sx, ...other }: BlockProps) {
  return (
    <Stack
      spacing={1}
      sx={{
        borderRadius: 1,
        overflow: 'hidden',

        ...sx,
      }}
      {...other}
    >
      <Box component="span" sx={{ typography: 'subtitle2' }}>
        {label}{' '}
        {required && (
          <Typography component="span" color="error.main">
            *
          </Typography>
        )}
      </Box>

      <Stack spacing={1} direction="row" flexWrap="wrap">
        {children}
      </Stack>
    </Stack>
  );
}
