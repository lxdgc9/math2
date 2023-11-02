// react
import { useCallback, useState } from 'react';
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
import Chart, { useChart } from 'src/components/chart';
import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import Scrollbar from 'src/components/scrollbar';
import {
  InputAdornment,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tabs,
  Typography,
} from '@mui/material';
import { TableHeadCustom } from 'src/components/table';

// ----------------------------------------------------------------------

const defaultValues = {
  name: 'Điểm học sinh trong lớp',
  mau: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  tanso: [5, 3, 7, 11, 13, 6, 8, 9, 1, 6],
};

const TABS = [
  {
    value: '1',
    label: 'Bảng tần số',
  },
  {
    value: '2',
    label: 'Các số liệu',
  },
  {
    value: '3',
    label: 'Biểu đồ tần số',
  },
];

export default function Page() {
  const [currentTab, setCurrentTab] = useState('1');

  const [chartValue, setChartValue] = useState(defaultValues);

  const { enqueueSnackbar } = useSnackbar();

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  }, []);

  const chartOptions = useChart({
    xaxis: {
      categories: chartValue?.mau?.map((_, index) => `Tần số n (${index + 1})`),
    },
    tooltip: {
      x: {
        show: false,
      },
      marker: { show: false },
    },
  });

  const handleAddPoint = () => {
    const newValues = { ...chartValue };

    const newPoint = {
      ...newValues,
      mau: [...newValues.mau, 9.5],
      tanso: [...newValues.tanso, 5],
    };

    setChartValue(newPoint);
  };

  const handleChangeName = (value: string) => {
    const newValues = { ...chartValue };

    newValues.name = value;

    setChartValue(newValues);
  };

  const handleChangeMau = ({ value, index }: { value: string; index: number }) => {
    const newValues = { ...chartValue };

    newValues.mau[index] = +value;

    setChartValue(newValues);
  };

  const handleChangeTanSo = ({ value, index }: { value: string; index: number }) => {
    const newValues = { ...chartValue };

    newValues.tanso[index] = +value;

    setChartValue(newValues);
  };

  const handleDeleteItem = (index: number) => {
    const newValues = { ...chartValue };
    if (newValues?.mau?.length === 1) {
      enqueueSnackbar('Cần ít nhất một dữ liệu !', { variant: 'error' });
    } else {
      newValues?.mau?.splice(index, 1);
      newValues?.tanso?.splice(index, 1);

      setChartValue(newValues);

      enqueueSnackbar('Đã xoá dữ liệu thành công !');
    }
  };

  return (
    <>
      <Helmet>
        <title> Bảng tần số </title>
      </Helmet>

      <Container maxWidth={false}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', maxHeight: '800px' }}>
              <Scrollbar sx={{ maxHeight: '800px' }}>
                <CardHeader title="Mẫu dữ liệu" />

                <CardContent>
                  <Stack spacing={2}>
                    <Stack spacing={1}>
                      <Button variant="contained" color="info" onClick={handleAddPoint}>
                        THÊM DỮ LIỆU TẦN SỐ MỚI
                      </Button>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <TextField
                        fullWidth
                        value={chartValue?.name}
                        label="Nhập vào tên mẫu dữ liệu..."
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                          handleChangeName(event.target.value)
                        }
                      />
                    </Stack>

                    <Typography variant="subtitle2">Mẫu dữ liệu : </Typography>

                    <Grid container spacing={1}>
                      {chartValue?.mau?.map((item, index) => (
                        <Grid key={index} item xs={6}>
                          <TextField
                            type="number"
                            size="small"
                            value={item}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                              handleChangeMau({ value: event.target.value, index })
                            }
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Typography variant="caption">{`Mẫu x(${
                                    index + 1
                                  }) : `}</Typography>
                                </InputAdornment>
                              ),
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton color="error" onClick={() => handleDeleteItem(index)}>
                                    <Iconify icon="material-symbols:delete" />
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                      ))}
                    </Grid>

                    <Typography variant="subtitle2">Tần số dữ liệu : </Typography>

                    <Grid container spacing={1}>
                      {chartValue?.tanso?.map((item, index) => (
                        <Grid key={index} item xs={6}>
                          <TextField
                            type="number"
                            size="small"
                            value={item}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                              handleChangeTanSo({ value: event.target.value, index })
                            }
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Typography variant="caption">{`Tần số n(${
                                    index + 1
                                  }) : `}</Typography>
                                </InputAdornment>
                              ),
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton color="error" onClick={() => handleDeleteItem(index)}>
                                    <Iconify icon="material-symbols:delete" />
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Stack>
                </CardContent>
              </Scrollbar>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Card sx={{ height: '100%', maxHeight: '800px' }}>
              <Scrollbar sx={{ maxHeight: '800px' }}>
                <CardHeader
                  title={
                    <Tabs value={currentTab} onChange={handleChangeTab}>
                      {TABS.map((tab) => (
                        <Tab key={tab.value} value={tab.value} label={tab.label} />
                      ))}
                    </Tabs>
                  }
                />

                <CardContent>
                  {currentTab === '1' && (
                    <>
                      <TableContainer sx={{ mt: 3, overflow: 'unset' }}>
                        <Scrollbar>
                          <Table sx={{ minWidth: 800 }}>
                            <TableHeadCustom
                              headLabel={[
                                { id: 'stt', align: 'center', label: 'Số mẫu' },
                                { id: 'name', align: 'center', label: `${chartValue?.name} (x)` },
                                { id: 'tanso', align: 'center', label: 'Tần số (n)' },
                              ]}
                            />

                            <TableBody>
                              {chartValue?.mau.map((mau, index) => (
                                <TableRow key={index}>
                                  <TableCell align="center">Mẫu {index + 1}</TableCell>
                                  <TableCell align="center">{chartValue?.mau[index]}</TableCell>
                                  <TableCell align="center">{chartValue?.tanso[index]}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </Scrollbar>
                      </TableContainer>
                    </>
                  )}

                  {currentTab === '2' && (
                    <Stack spacing={2}>
                      <Typography>Công thức tính tổng số mẫu : n=∑f</Typography>

                      <Typography>
                        <strong>Tổng số mẫu (n) : </strong> {chartValue?.mau?.length}
                      </Typography>

                      <Typography>Công thức tính tổng số mẫu : fr = f / n * 100%</Typography>

                      <Typography>
                        <strong>Phân phối tần số tương ứng (fr) : </strong>
                      </Typography>

                      {chartValue?.tanso?.map((tanso, index) => (
                        <Typography>{`Tần số n(${index + 1}) : ${(
                          (tanso / Number(chartValue?.mau?.length)) *
                          100
                        ).toFixed(2)}%`}</Typography>
                      ))}
                    </Stack>
                  )}

                  {currentTab === '3' && (
                    <Chart
                      dir="ltr"
                      type="line"
                      series={[{ name: 'Tần số', data: chartValue.tanso }]}
                      options={chartOptions}
                    />
                  )}
                </CardContent>
              </Scrollbar>
              s
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
