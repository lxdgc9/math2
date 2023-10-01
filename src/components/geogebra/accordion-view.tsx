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
    detail: (
      <p>
        Đồ thị của phân phối Student có dạng hình chuông, với đỉnh là giá trị trung bình μ. Độ rộng
        của phân phối phụ thuộc vào cỡ mẫu n. Khi cỡ mẫu n càng lớn, phân phối Student càng giống
        với phân phối chuẩn.
      </p>
    ),
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

const phan_phoi_co_si: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối Cô-si?',
    detail: (
      <p>
        Phân phối Cô-si là một phân phối xác suất liên tục, được sử dụng để mô tả dữ liệu thu thập
        từ một mẫu ngẫu nhiên, khi biến ngẫu nhiên được mô tả bởi một biến ngẫu nhiên góc.
      </p>
    ),
  },
  {
    id: 2,
    heading: 'Các tham số của phân phối Cô-si',
    detail: (
      <div>
        <ul>
          <li>
            <strong>Giá trị trung bình:</strong> 0
          </li>
          <li>
            <strong>Độ lệch chuẩn:</strong> 1
          </li>
          <li>
            <strong>Độ lệch cực đại:</strong> 90
          </li>
        </ul>
      </div>
    ),
  },
];

const phan_phoi_weibull: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối Weibull?',
    detail: (
      <p>
        Phân phối Weibull là một phân phối xác suất liên tục, được sử dụng để mô tả dữ liệu thu thập
        từ một mẫu ngẫu nhiên, khi biến ngẫu nhiên có tính chất là thời gian đến sự kiện.
      </p>
    ),
  },
  {
    id: 2,
    heading: 'Các tham số của phân phối Weibull',
    detail: (
      <div>
        <ul>
          <li>
            <strong>Giá trị trung bình:</strong> 1/β
          </li>
          <li>
            <strong>Độ lệch chuẩn:</strong> 1/β√α
          </li>
          <li>
            <strong>Độ cong:</strong> α
          </li>
        </ul>
      </div>
    ),
  },
];

const phan_phoi_gamma: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối gamma?',
    detail: (
      <p>
        Phân phối gamma là một phân phối xác suất liên tục, được sử dụng để mô tả dữ liệu thu thập
        từ một mẫu ngẫu nhiên, khi biến ngẫu nhiên có tính chất là tổng của các biến ngẫu nhiên độc
        lập có phân phối chuẩn.
      </p>
    ),
  },
  {
    id: 2,
    heading: 'Các tham số của phân phối gamma',
    detail: (
      <div>
        <ul>
          <li>
            <strong>Giá trị trung bình:</strong> shape / rate
          </li>
          <li>
            <strong>Độ lệch chuẩn:</strong> shape / rate^(3/2)
          </li>
          <li>
            <strong>Shape</strong>: Một số thực dương, xác định hình dạng của phân phối.
          </li>
          <li>
            <strong>Rate</strong>: Một số thực dương, xác định vị trí của phân phối.
          </li>
        </ul>
      </div>
    ),
  },
];

const phan_phoi_log_normal: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối Log Normal?',
    detail: (
      <p>
        Phân phối Log-Normal là một phân phối xác suất liên tục, được sử dụng để mô tả dữ liệu thu
        thập từ một mẫu ngẫu nhiên, khi biến ngẫu nhiên là logarit của một biến ngẫu nhiên có phân
        phối chuẩn.
      </p>
    ),
  },
  {
    id: 2,
    heading: 'Các tham số của phân phối Log-Normal',
    detail: (
      <div>
        <ul>
          <li>
            <strong>Mean</strong>: Giá trị trung bình của biến ngẫu nhiên logarit.
          </li>
          <li>
            <strong>Standard deviation</strong>: Độ lệch chuẩn của biến ngẫu nhiên logarit.
          </li>
        </ul>
      </div>
    ),
  },
];

const phan_phoi_logistic: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối Logistic?',
    detail: (
      <p>
        Phân phối Logistic là một phân phối xác suất liên tục, được sử dụng để mô tả dữ liệu thu
        thập từ một mẫu ngẫu nhiên, khi biến ngẫu nhiên có tính chất là xác suất của một sự kiện xảy
        ra.
      </p>
    ),
  },
  {
    id: 2,
    heading: 'Các tham số của phân phối Logistic',
    detail: (
      <div>
        <ul>
          <li>
            <strong>Giá trị trung bình:</strong> Giá trị trung bình của phân phối, là điểm tập trung
            của phân phối.
          </li>
          <li>
            <strong>Độ lệch chuẩn:</strong> Độ rộng của phân phối, là khoảng cách giữa giá trị trung
            bình và điểm cách xa 50% dữ liệu.
          </li>
        </ul>
      </div>
    ),
  },
];

const phan_phoi_nhi_thuc: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối nhị thức?',
    detail: (
      <p>
        Phân phối nhị thức là một phân phối xác suất rời rạc, được sử dụng để mô tả số lượng thành
        công trong một chuỗi các thử nghiệm Bernoulli độc lập.
      </p>
    ),
  },
  {
    id: 2,
    heading: 'Các tham số của phân phối nhị thức',
    detail: (
      <div>
        <ul>
          <li>
            <strong>N</strong>: Số lần thử nghiệm.
          </li>
          <li>
            <strong>P</strong>: Xác suất thành công của mỗi lần thử nghiệm.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    heading: 'Hàm khối xác suất của phân phối nhị thức có dạng sau:',
    detail: <p>P(X = k) = nCk * p^k * (1 - p)^(n - k)</p>,
  },
];

const phan_phoi_pascal: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối Pascal?',
    detail: (
      <p>
        Phân phối Pascal là một phân phối xác suất rời rạc, được sử dụng để mô tả số lượng thành
        công trong một chuỗi các thử nghiệm Bernoulli độc lập, cho đến khi có k lần thất bại.
      </p>
    ),
  },
  {
    id: 2,
    heading: 'Các tham số của phân phối Pascal',
    detail: (
      <div>
        <ul>
          <li>
            <strong>K</strong>: Số lần thất bại.
          </li>
          <li>
            <strong>P</strong>: Xác suất thành công của mỗi lần thử nghiệm.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    heading: 'Hàm khối xác suất của phân phối Pascal có dạng sau:',
    detail: <p>P(X = k) = nCk-1 * p^k * (1 - p)^(n - k)</p>,
  },
];

const phan_phoi_poat_xong: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối Poisson?',
    detail: (
      <p>
        Phân phối Poisson là một phân phối xác suất rời rạc, được sử dụng để mô tả số lượng sự kiện
        xảy ra trong một khoảng thời gian hoặc không gian nhất định, khi xác suất xảy ra của mỗi sự
        kiện là không đổi.
      </p>
    ),
  },
  {
    id: 2,
    heading: 'Các tham số của phân phối Poisson',
    detail: (
      <div>
        <ul>
          <li>
            <strong>Lambda</strong>: Số trung bình của các sự kiện xảy ra trong một khoảng thời gian
            hoặc không gian nhất định.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    heading: 'Hàm khối xác suất của phân phối Poisson có dạng sau:',
    detail: (
      <div>
        <p>
          Đồ thị của phân phối Poisson có dạng hình chuông, với đỉnh là (lambda, lambda *
          e^(-lambda)).
        </p>
      </div>
    ),
  },
];

const phan_phoi_sieu_boi: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối siêu bội?',
    detail: (
      <p>
        Phân phối siêu bội là một phân phối xác suất rời rạc, được sử dụng để mô tả số lượng thành
        công trong một chuỗi các thử nghiệm Bernoulli độc lập, khi số lượng thành công tối đa được
        chỉ định.
      </p>
    ),
  },
  {
    id: 2,
    heading: 'Các tham số của phân phối siêu bội',
    detail: (
      <div>
        <ul>
          <li>
            <strong>N</strong>: Số lần thử nghiệm.
          </li>
          <li>
            <strong>K</strong>: Số thành công tối đa.
          </li>
          <li>
            <strong>P</strong>: Xác suất thành công của mỗi lần thử nghiệm.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    heading: 'Hàm khối xác suất của phân phối siêu bội có dạng sau:',
    detail: <p>P(X = k) = nCk * p^k * (1 - p)^(n - k)</p>,
  },
];

const da_thuc_noi_suy: AccordionType[] = [
  {
    id: 1,
    heading: 'Đối tượng',
    detail: (
      <p>
        Hàm DaThucNoiSuy được sử dụng để suy đoán giá trị của hàm số f(x) tại một điểm x bất kỳ dựa
        trên các giá trị đã biết của hàm số f(x) tại các điểm x khác
      </p>
    ),
  },
  {
    id: 2,
    heading: 'Tham số',
    detail: (
      <img
        src=" data:image/png;base64,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"
        alt="jk"
      />
    ),
  },
];

const do_lech_chuan: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm stdev?',
    detail: (
      <div>
        <img
          src=" 
       data:image/png;base64,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"
          alt="stdev"
        />
        <p>Trả về độ lệch chuẩn mẫu của danh sách số đã cho.</p>
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Hàm DoLechChuanX',
    detail: (
      <div>
        <img
          src=" data:image/png;base64,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"
          alt="doclechchuanx"
        />
        <p>Trả về độ lệch chuẩn của tọa độ x của các điểm từ danh sách đã cho.</p>
      </div>
    ),
  },
  {
    id: 3,
    heading: 'DoLechChuanY',
    detail: (
      <div>
        <img
          src="
       data:image/png;base64,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
      "
          alt="dolechchuany"
        />
        <p>Trả về độ lệch chuẩn của tọa độ y của các điểm từ danh sách đã cho.</p>
      </div>
    ),
  },
];

const duong_hoi_quy: AccordionType[] = [
  {
    id: 1,
    heading: 'ĐườngHồiQuyX',
    detail: (
      <div>
        <img
          src=" data:image/png;base64,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"
          alt="duonghoiquyx"
        />
        <p>Tính toán đường hồi quy x trên y của các điểm.</p>
      </div>
    ),
  },
  {
    id: 2,
    heading: 'DuongHoiQuyY',
    detail: (
      <div>
        <img
          src="
       data:image/png;base64,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
      "
          alt="duonghoiquyy"
        />
        <p>Tương tự hàm trên</p>
      </div>
    ),
  },
];

const chuyen_co_so: AccordionType[] = [
  {
    id: 1,
    heading: '',
    detail: (
      <div>
        <img
          src="
         data:image/png;base64,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"
          alt="vl"
        />
        <p>Với cách nhập như sau: TênBiến = Hàm(Các tham số, ...)</p>
        <p>Nếu bạn không nhập tên biến, Hệ thống sẽ tự động sinh tên biến ngẫu nhiên</p>
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
          {renderContent(Object.keys({ phan_phoi_co_si })[0].replace(/_/g, '-'), phan_phoi_co_si)}
          {renderContent(
            Object.keys({ phan_phoi_weibull })[0].replace(/_/g, '-'),
            phan_phoi_weibull
          )}
          {renderContent(Object.keys({ phan_phoi_gamma })[0].replace(/_/g, '-'), phan_phoi_gamma)}
          {renderContent(
            Object.keys({ phan_phoi_log_normal })[0].replace(/_/g, '-'),
            phan_phoi_log_normal
          )}
          {renderContent(
            Object.keys({ phan_phoi_logistic })[0].replace(/_/g, '-'),
            phan_phoi_logistic
          )}
          {renderContent(
            Object.keys({ phan_phoi_nhi_thuc })[0].replace(/_/g, '-'),
            phan_phoi_nhi_thuc
          )}
          {renderContent(Object.keys({ phan_phoi_pascal })[0].replace(/_/g, '-'), phan_phoi_pascal)}
          {renderContent(
            Object.keys({ phan_phoi_poat_xong })[0].replace(/_/g, '-'),
            phan_phoi_poat_xong
          )}
          {renderContent(
            Object.keys({ phan_phoi_sieu_boi })[0].replace(/_/g, '-'),
            phan_phoi_sieu_boi
          )}
          {renderContent(Object.keys({ da_thuc_noi_suy })[0].replace(/_/g, '-'), da_thuc_noi_suy)}
          {renderContent(Object.keys({ do_lech_chuan })[0].replace(/_/g, '-'), do_lech_chuan)}
          {renderContent(Object.keys({ duong_hoi_quy })[0].replace(/_/g, '-'), duong_hoi_quy)}
          {renderContent(Object.keys({ chuyen_co_so })[0].replace(/_/g, '-'), chuyen_co_so)}
        </ComponentBlock>
      </Stack>
    </Container>
  );
}
