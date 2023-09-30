import AppBar from '@mui/material/AppBar';
import Dialog from '@mui/material/Dialog';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef } from 'react';
import { useBoolean } from 'src/hooks/use-boolean';
import Typography from '@mui/material/Typography/Typography';
import { Button, Divider, List, ListItemButton, ListItemText } from '@mui/material';
import Iconify from 'src/components/iconify/iconify';

const Transition = forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>
  ) => <Slide direction="up" ref={ref} {...props} />
);

export default function Turtorial({ id }: { id: string }) {
  const dialog = useBoolean();

  return (
    <>
      <Fab
        style={{
          margin: 0,
          top: 'auto',
          right: 20,
          bottom: 20,
          left: 'auto',
          position: 'fixed',
        }}
        variant="extended"
        size="medium"
        color="primary"
        onClick={dialog.onTrue}
      >
        Hướng dẫn
      </Fab>

      <Dialog
        fullScreen
        open={dialog.value}
        onClose={dialog.onFalse}
        TransitionComponent={Transition}
      >
        <AppBar position="relative" color="default">
          <Toolbar>
            <IconButton color="inherit" edge="start" onClick={dialog.onFalse}>
              <Iconify icon="mingcute:close-line" />
            </IconButton>

            <Typography variant="h6" sx={{ flex: 1, ml: 2 }}>
              Sound
            </Typography>

            <Button autoFocus color="inherit" variant="contained" onClick={dialog.onFalse}>
              Save {id}
            </Button>
          </Toolbar>
        </AppBar>

        <List>
          <ListItemButton>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItemButton>

          <Divider />

          <ListItemButton>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItemButton>
        </List>
      </Dialog>
    </>
  );
}
