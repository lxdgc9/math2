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
import Chart, { useChart } from 'src/components/chart';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { useSnackbar } from 'src/components/snackbar';

// ----------------------------------------------------------------------

const defaultValues = [
  {
    name: 'Cột kép số 1',
    data: [10, 5, 12, 41, 23, 42, 12, 33, 40, 32],
  },

  {
    name: 'Cột kép số 2',
    data: [51, 54, 65, 76, 87, 61, 91, 69, 71, 81],
  },
  {
    name: 'Cột kép số 3',
    data: [102, 113, 143, 145, 111, 113, 132, 105, 137, 141],
  },
];

export default function Page() {
  const [chartValue, setChartValue] = useState(defaultValues);

  const [showMarker, setShowMarker] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const chartOptions = useChart({
    xaxis: {
      categories: chartValue[0]?.data?.map((_, index) => `Điểm ${index + 1}`),
    },
    tooltip: {
      x: {
        show: false,
      },
      marker: { show: showMarker },
    },
  });

  const handleAddNew = () => {
    const newValue = {
      name: 'Cột kép mới',
      data: chartValue[0]?.data?.map((_) => 50),
    };

    const newValues = [...chartValue, newValue];

    setChartValue(newValues);

    enqueueSnackbar('Đã thêm cột kép dữ liệu mới !');
  };

  const handleAddPoint = () => {
    const newValues = [...chartValue];

    const newPoint = newValues?.map((value, index) => ({
      ...value,
      data: [...value.data, 10 * (index + 1)],
    }));

    setChartValue(newPoint);
  };

  const handleChangeName = ({ value, index }: { value: string; index: number }) => {
    const newValues = [...chartValue];

    newValues[index].name = value;

    setChartValue(newValues);
  };

  const handleChangeData = ({
    value,
    index,
    idx,
  }: {
    value: string;
    index: number;
    idx: number;
  }) => {
    const newValues = [...chartValue];

    newValues[index].data[idx] = +value;

    setShowMarker(!showMarker);

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
        <title> Biểu đồ cột kép </title>
      </Helmet>

      <Container maxWidth={false}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', maxHeight: '600px' }}>
              <Scrollbar sx={{ maxHeight: '600px' }}>
                <CardHeader title="Mẫu dữ liệu" />

                <CardContent>
                  <Stack spacing={3}>
                    <Stack spacing={1}>
                      <Button variant="contained" color="primary" onClick={handleAddNew}>
                        THÊM CỘT DỮ LIỆU
                      </Button>

                      <Button variant="contained" color="info" onClick={handleAddPoint}>
                        THÊM ĐIỂM DỮ LIỆU
                      </Button>
                    </Stack>

                    {chartValue?.map((values, index) => (
                      <Stack key={index} spacing={1}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <TextField
                            fullWidth
                            value={chartValue[index]?.name}
                            label="Nhập vào tên cột kép..."
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                              handleChangeName({ value: event.target.value, index })
                            }
                          />

                          <IconButton color="error" onClick={() => handleDeleteItem(index)}>
                            <Iconify icon="material-symbols:delete" />
                          </IconButton>
                        </Stack>

                        <Grid container spacing={1}>
                          {values?.data?.map((item, idx) => (
                            <Grid key={idx} item xs={2.4}>
                              <TextField
                                type="number"
                                size="small"
                                value={item}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                  handleChangeData({ value: event.target.value, index, idx })
                                }
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </Stack>
                    ))}
                  </Stack>
                </CardContent>
              </Scrollbar>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Card sx={{ height: '100%', maxHeight: '600px' }}>
              <Scrollbar sx={{ maxHeight: '600px' }}>
                <CardHeader title="Biểu đồ dữ liệu dạng cột kép" />

                <CardContent>
                  <Chart dir="ltr" type="bar" series={chartValue} options={chartOptions} />
                </CardContent>
              </Scrollbar>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
