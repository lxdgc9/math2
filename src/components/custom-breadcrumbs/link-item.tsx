// @mui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// router
import { RouterLink } from 'src/routes/components';
// type
import { BreadcrumbsLinkProps } from './types';
import SvgColor from '../svg-color/svg-color';

// ----------------------------------------------------------------------

type Props = {
  link: BreadcrumbsLinkProps;
  activeLast?: boolean;
  disabled: boolean;
};

export default function BreadcrumbsLink({ link, activeLast, disabled }: Props) {
  const { name, href, icon } = link;

  const getIcon = (
    <SvgColor src={`/assets/icons/navbar/${icon}.svg`} sx={{ width: 14, height: 14, mr: 1 }} />
  );

  const styles = {
    typography: 'body2',
    alignItems: 'center',
    color: 'text.primary',
    display: 'inline-flex',
    ...(disabled &&
      !activeLast && {
        cursor: 'default',
        pointerEvents: 'none',
        color: 'text.disabled',
      }),
  };

  const renderContent = (
    <Stack direction="row" alignItems="center">
      {icon && getIcon}

      {name}
    </Stack>
  );

  if (href) {
    return (
      <Link component={RouterLink} href={href} sx={styles}>
        <Button
          color="primary"
          sx={{
            textTransform: 'unset',
          }}
          variant="contained"
        >
          {renderContent}
        </Button>
      </Link>
    );
  }

  return <Box sx={styles}> {renderContent} </Box>;
}
