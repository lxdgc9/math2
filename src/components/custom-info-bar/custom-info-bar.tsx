// @mui
import Stack from '@mui/material/Stack';
import ListItemText from '@mui/material/ListItemText';
// components
import CustomAvatar from '../custom-avatar/custom-avatar';
import TextMaxLine from '../text-max-line/text-max-line';

// ----------------------------------------------------------------------

type CustomInfoBarProps = {
  primary: string;
  secondary: string;
  alt?: string;
  src?: string;
};

export default function CustomInfoBar({ primary, secondary, alt, src }: CustomInfoBarProps) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {src && <CustomAvatar alt={alt} src={src} variant="rounded" />}

      <ListItemText
        primary={
          <TextMaxLine variant="body2" line={1}>
            {primary || 'Không xác định...'}
          </TextMaxLine>
        }
        secondary={
          (
            <TextMaxLine variant="caption" color="text.disabled" line={1}>
              {secondary || 'Không xác định...'}
            </TextMaxLine>
          ) || 'Không xác định...'
        }
      />
    </Stack>
  );
}
