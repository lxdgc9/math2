// react
import { useState } from 'react';
// mui
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
//
import { Helmet } from 'react-helmet-async';
// components
import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { useSnackbar } from 'src/components/snackbar';
import { TableHeadCustom } from 'src/components/table';

// ----------------------------------------------------------------------

const defaultValues = [
  {
    name: 'Tranh số 1',
    icon: 'tabler:circle-filled',
    color: '#FF0000',
    value: 3,
  },

  {
    name: 'Tranh số 2',
    icon: 'tabler:square-filled',
    color: '#00FF00',
    value: 5,
  },

  {
    name: 'Tranh số 3',
    icon: 'mdi:triangle',
    color: '#0000FF',
    value: 10,
  },
];

const listIcon = [
  {
    value: 'tabler:circle-filled',
    label: 'Hình tròn',
  },
  {
    value: 'tabler:square-filled',
    label: 'Hình vuông',
  },
  {
    value: 'mdi:triangle',
    label: 'Hình tam giác',
  },
  {
    value: 'fluent:animal-cat-28-filled',
    label: 'Con mèo',
  },
  {
    value: 'healthicons:animal-cow',
    label: 'Con bò',
  },
  {
    value: 'fluent:animal-rabbit-24-filled',
    label: 'Con thỏ',
  },
  {
    value: 'fluent:animal-turtle-24-filled',
    label: 'Con rùa',
  },
  {
    value: 'healthicons:animal-chicken',
    label: 'Con gà',
  },
  {
    value: 'mdi:fruit-pear',
    label: 'Trái lê',
  },
  {
    value: 'icon-park-solid:apple-one',
    label: 'Trái táo',
  },
  {
    value: 'icon-park-solid:orange',
    label: 'Trái cam',
  },
  {
    value: 'icon-park-solid:banana',
    label: 'Trái chuối',
  },
  {
    value: 'ic:round-house',
    label: 'Ngôi nhà',
  },
  {
    value: 'ant-design:car-filled',
    label: 'Xe hơi',
  },
  {
    value: 'icon-park-solid:phone',
    label: 'Điện thoại di động',
  },
  {
    value: 'mdi:airballoon',
    label: 'Khinh khí cầu',
  },
  {
    value: 'mdi:airplane',
    label: 'Máy bay',
  },
  {
    value: 'mdi:bag-personal',
    label: 'Cái balo',
  },
  {
    value: 'mdi:basket',
    label: 'Túi xách',
  },
];

const listColor = [
  {
    value: '#FF0000',
    label: 'Màu đỏ',
  },
  {
    value: '#00FF00',
    label: 'Màu xanh lá',
  },
  {
    value: '#0000FF',
    label: 'Màu xanh dương',
  },
  {
    value: '#FFFF00',
    label: 'Màu vàng',
  },
  {
    value: '#00FFFF',
    label: 'Màu da trời',
  },
  {
    value: '#FF00FF',
    label: 'Màu hồng',
  },
  {
    value: '#9933FF',
    label: 'Màu tím',
  },
  {
    value: '#8B4513',
    label: 'Màu nâu',
  },
];

export default function Page() {
  const [chartValue, setChartValue] = useState(defaultValues);

  const { enqueueSnackbar } = useSnackbar();

  const handleAddNew = () => {
    const newValue = {
      name: 'Tranh mới',
      icon: 'fluent:animal-cat-28-filled',
      color: '#FFFF00',
      value: 3,
    };

    const newValues = [...chartValue, newValue];

    setChartValue(newValues);

    enqueueSnackbar('Đã thêm dữ liệu tranh mới !');
  };

  const handleChangeName = ({ value, index }: { value: string; index: number }) => {
    const newValues = [...chartValue];

    newValues[index].name = value;

    setChartValue(newValues);
  };

  const handleChangeIcon = ({ value, index }: { value: string; index: number }) => {
    const newValues = [...chartValue];

    newValues[index].icon = value;

    setChartValue(newValues);
  };

  const handleChangeColor = ({ value, index }: { value: string; index: number }) => {
    const newValues = [...chartValue];

    newValues[index].color = value;

    setChartValue(newValues);
  };

  const handleDeleteItem = (index: number) => {
    const newValues = [...chartValue];

    if (newValues?.length === 1) {
      enqueueSnackbar('Cần ít nhất một dữ liệu !', { variant: 'error' });
    } else {
      newValues.splice(index, 1);

      setChartValue(newValues);

      enqueueSnackbar('Đã xoá dữ liệu thành công !');
    }
  };

  return (
    <>
      <Helmet>
        <title> Biểu đồ tranh </title>
      </Helmet>

      <Container maxWidth={false}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', maxHeight: '800px' }}>
              <Scrollbar sx={{ maxHeight: '800px' }}>
                <CardHeader title="Mẫu dữ liệu" />

                <CardContent>
                  <Stack spacing={3}>
                    <Stack spacing={1}>
                      <Button variant="contained" color="primary" onClick={handleAddNew}>
                        THÊM DỮ LIỆU MỚI
                      </Button>
                    </Stack>

                    {chartValue?.map((values, index) => (
                      <Stack key={index} spacing={2}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <TextField
                            fullWidth
                            value={chartValue[index]?.name}
                            label="Nhập vào tên tranh..."
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                              handleChangeName({ value: event.target.value, index })
                            }
                          />

                          <IconButton color="error" onClick={() => handleDeleteItem(index)}>
                            <Iconify icon="material-symbols:delete" />
                          </IconButton>
                        </Stack>

                        <Stack direction="row" spacing={1}>
                          <FormControl sx={{ width: '100%' }}>
                            <InputLabel>Chọn biểu tượng tranh</InputLabel>
                            <Select
                              label="Chọn biểu tượng tranh"
                              value={chartValue[index]?.icon}
                              onChange={(event: any) =>
                                handleChangeIcon({ value: event.target.value, index })
                              }
                              sx={{ width: '100%' }}
                            >
                              {listIcon?.map((option: any) => (
                                <MenuItem key={option?.value} value={option?.value}>
                                  {option?.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>

                          <FormControl sx={{ width: '100%' }}>
                            <InputLabel>Chọn màu sắc tranh</InputLabel>
                            <Select
                              label="Chọn màu sắc tranh"
                              value={chartValue[index]?.color}
                              onChange={(event: any) =>
                                handleChangeColor({ value: event.target.value, index })
                              }
                              sx={{ width: '100%' }}
                            >
                              {listColor?.map((option: any) => (
                                <MenuItem key={option?.value} value={option?.value}>
                                  {option?.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Stack>
                        <Divider sx={{ borderStyle: 'dashed', pt: 1 }} />
                      </Stack>
                    ))}
                  </Stack>
                </CardContent>
              </Scrollbar>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Card sx={{ height: '100%', maxHeight: '800px' }}>
              <Scrollbar sx={{ maxHeight: '800px' }}>
                <CardHeader title="Biểu đồ dữ liệu tranh" />
                <CardContent>
                  <TableContainer sx={{ mt: 3, overflow: 'unset' }}>
                    <Scrollbar>
                      <Table sx={{ minWidth: 800 }}>
                        <TableHeadCustom
                          headLabel={[
                            { id: 'stt', align: 'center', label: 'STT' },
                            { id: 'name', align: 'center', label: 'Tên tranh' },
                            { id: 'chart', align: 'center', label: 'Biểu đồ' },
                          ]}
                        />

                        <TableBody>
                          {chartValue?.map((chart, index) => (
                            <TableRow key={index}>
                              <TableCell align="center">{index + 1}</TableCell>
                              <TableCell align="center">{chart?.name}</TableCell>
                              <TableCell align="center">
                                <Rating
                                  name="customized-color"
                                  max={20}
                                  size="large"
                                  defaultValue={chart?.value}
                                  icon={<Iconify icon={chart?.icon} />}
                                  emptyIcon={<Iconify icon={chart?.icon} />}
                                  sx={{
                                    color: chart?.color,
                                  }}
                                />
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Scrollbar>
                  </TableContainer>
                </CardContent>
              </Scrollbar>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
