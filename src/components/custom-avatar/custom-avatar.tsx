// @mui
import Avatar, { AvatarProps } from '@mui/material/Avatar';

// ----------------------------------------------------------------------

export default function CustomAvatar({ src, sx, ...other }: AvatarProps) {
  return <Avatar src={src} {...other} sx={sx} />;
}
