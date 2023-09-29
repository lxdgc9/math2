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

const defaultValues = {
  name: 'Giá trị',
  data: Array.from({ length: 10 }).map((item, index) => ({
    name: `Dữ liệu ${index + 1}`,
    value: 10,
  })),
};

export default function Page() {
  const [chartValue, setChartValue] = useState(defaultValues);

  const { enqueueSnackbar } = useSnackbar();

  const chartOptions = useChart({
    labels: chartValue?.data?.map((item) => item.name),
    legend: {
      position: 'right',
      itemMargin: {
        vertical: 8,
      },
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false,
      },
    },
    tooltip: {
      fillSeriesColor: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
  });

  const handleAddNew = () => {
    const newValues = { ...chartValue };

    newValues.data = [...newValues.data, { name: 'Dữ liệu mới', value: 10 }];

    setChartValue(newValues);

    enqueueSnackbar('Đã thêm dữ liệu mới !');
  };

  const handleChangeName = ({ value, index }: { value: string; index: number }) => {
    const newValues = { ...chartValue };

    newValues.data[index].name = value;

    setChartValue(newValues);
  };

  const handleChangeValue = ({ value, index }: { value: string; index: number }) => {
    const newValues = { ...chartValue };

    newValues.data[index].value = +value;

    setChartValue(newValues);
  };

  const handleDeleteItem = (index: number) => {
    const newValues = { ...chartValue };

    newValues.data.splice(index, 1);

    setChartValue(newValues);

    enqueueSnackbar('Đã xoá dữ liệu thành công !');
  };

  return (
    <>
      <Helmet>
        <title> Biểu đồ quạt </title>
      </Helmet>

      <Container maxWidth={false}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', maxHeight: '800px' }}>
              <Scrollbar sx={{ maxHeight: '800px' }}>
                <CardHeader title="Mẫu dữ liệu" />

                <CardContent>
                  <Stack spacing={3}>
                    <Button variant="contained" color="primary" onClick={handleAddNew}>
                      THÊM DỮ LIỆU MỚI
                    </Button>

                    {chartValue?.data?.map((item, index) => (
                      <Stack key={index} spacing={1}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <TextField
                            fullWidth
                            value={item.name}
                            label="Tên dữ liệu..."
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                              handleChangeName({ value: event.target.value, index })
                            }
                          />

                          <TextField
                            fullWidth
                            value={item.value}
                            type="number"
                            label="Giá trị..."
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                              handleChangeValue({ value: event.target.value, index })
                            }
                          />

                          <IconButton color="error" onClick={() => handleDeleteItem(index)}>
                            <Iconify icon="material-symbols:delete" />
                          </IconButton>
                        </Stack>
                      </Stack>
                    ))}
                  </Stack>
                </CardContent>
              </Scrollbar>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', maxHeight: '800px' }}>
              <CardHeader title="Biểu đồ dữ liệu dạng quạt" />

              <CardContent>
                <Chart
                  dir="ltr"
                  type="pie"
                  series={chartValue.data.map((item) => item.value)}
                  options={chartOptions}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
