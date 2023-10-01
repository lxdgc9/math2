// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// components
import Iconify from 'src/components/iconify';
// _mock
import { _mock } from './_mock';
//
import ComponentBlock from './component-block';

// ----------------------------------------------------------------------

type AccordionType = {
  id: number;
  heading: string;
  detail: React.ReactNode;
};

const phan_phoi_chuan: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối chuẩn là gì?',
    detail: (
      <div>
        <p>
          Phân phối chuẩn, còn gọi là phân phối Gauss hay hình chuông Gauss, là một phân phối xác
          suất có dạng tổng quát giống nhau, chỉ khác tham số vị trí (giá trị trung bình μ) và tỉ lệ
          (phương sai σ2)
        </p>
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Các tham số của phân phối chuẩn',
    detail: (
      <div>
        <p>
          • Giá trị trung bình μ: Giá trị trung bình của phân phối, là điểm tập trung của phân phối.
        </p>
        <p>
          • Độ lệch chuẩn σ: Độ rộng của phân phối, là khoảng cách giữa giá trị trung bình và điểm
          cách xa 50% dữ liệu.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    heading: 'Đồ thị của phân phối chuẩn',
    detail: (
      <div>
        Đồ thị của phân phối chuẩn có dạng hình chuông, với đỉnh là giá trị trung bình μ. Khoảng
        68,26% dữ liệu nằm trong khoảng ±1σ của giá trị trung bình, khoảng 95,44% dữ liệu nằm trong
        khoảng ±2σ của giá trị trung bình, và khoảng 99,73% dữ liệu nằm trong khoảng ±3σ của giá trị
        trung bình,
      </div>
    ),
  },
];

const phan_phoi_student: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối Student là gì?',
    detail: (
      <div>
        Phân phối Student, còn gọi là phân phối t-Student, là một phân phối xác suất liên tục, được
        sử dụng để mô tả dữ liệu thu thập từ một mẫu ngẫu nhiên, khi phương sai tổng thể của tổng
        thể chưa biết.
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Các tham số của phân phối Student',
    detail: (
      <p>
        Phân phối Student có hai tham số:
        <ul>
          <li>
            <strong>Giá trị trung bình μ:</strong> Giá trị trung bình của phân phối, là điểm tập
            trung của phân phối.
          </li>
          <li>
            <strong>Độ lệch chuẩn σ:</strong> Độ lệch chuẩn của tổng thể.
          </li>
        </ul>
      </p>
    ),
  },
  {
    id: 3,
    heading: 'Đồ thị của phân phối Student',
    detail:
      'Đồ thị của phân phối Student có dạng hình chuông, với đỉnh là giá trị trung bình μ. Độ rộng của phân phối phụ thuộc vào cỡ mẫu n. Khi cỡ mẫu n càng lớn, phân phối Student càng giống với phân phối chuẩn.',
  },
];

const phan_phoi_chi_binh_phuong: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối chi-bình phương là gì?',
    detail: (
      <div>
        <p>
          Phân phối chi-bình phương là một phân phối xác suất liên tục, được sử dụng để mô tả tổng
          của các bình phương của các biến ngẫu nhiên chuẩn độc lập. Phân phối chi-bình phương có
          một tham số là bậc tự do (df), là số biến ngẫu nhiên độc lập trong tổng.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Các đặc điểm của phân phối chi-bình phương',
    detail: (
      <div>
        <ul>
          <li>
            <strong>Giá trị trung bình:</strong> df/2
          </li>
          <li>
            <strong>Phương sai:</strong> df
          </li>
          <li>
            <strong>Đồ thị:</strong> Đồ thị của phân phối chi-bình phương có dạng hình chuông, với
            đỉnh là giá trị trung bình. Độ rộng của phân phối phụ thuộc vào bậc tự do df. Khi bậc tự
            do df càng lớn, phân phối chi-bình phương càng giống với phân phối chuẩn.
          </li>
        </ul>
      </div>
    ),
  },
];

// ----------------------------------------------------------------------

type Props = {
  id: string;
};

export default function AccordionView(props: Props) {
  const { id } = props;

  const renderContent = (idInput: string, val: AccordionType[]) => {
    return (
      <>
        {id === idInput && (
          <>
            {val.map((item, index) => (
              <Accordion key={item.id} disabled={index === 3}>
                <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
                  <Typography variant="subtitle1">{item.heading}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.detail}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </>
        )}
      </>
    );
  };

  return (
    <Container sx={{ my: 10 }}>
      <Stack spacing={3}>
        <ComponentBlock title="Các mục hướng dẫn" spacing={0}>
          {renderContent(Object.keys({ phan_phoi_chuan })[0].replace(/_/g, '-'), phan_phoi_chuan)}
          {renderContent(
            Object.keys({ phan_phoi_student })[0].replace(/_/g, '-'),
            phan_phoi_student
          )}
          {renderContent(
            Object.keys({ phan_phoi_chi_binh_phuong })[0].replace(/_/g, '-'),
            phan_phoi_chi_binh_phuong
          )}
        </ComponentBlock>
      </Stack>
    </Container>
  );
}
