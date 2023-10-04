// @mui
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// components
import Iconify from 'src/components/iconify';
//
import imgFitPolyFunc from './images/fit-poly.function.png';
import imgFitPolyEx from './images/fit-poly.example.png';
import imgstdevpFunc from './images/stdevp.function.png';
import imgstdevpEx from './images/stdevp.example.png';
import imgSDXFunc from './images/sdx.function.png';
import imgSDXEx from './images/sdx.example.png';
import imgSDYFunc from './images/sdy.function.png';
import imgSDYEx from './images/sdy.example.png';
import imgFitlineXFunc from './images/fitlinex.function.png';
import imgFitlineXEx from './images/fitlinex.example.png';
import imgFitlineFunc from './images/fitline.function.png';
import imgFitlineEx from './images/fitline.example.png';
import imgSpearmanFunc from './images/spearman.function.png';
import imgSpearmanEx from './images/spearman.example.png';
import imgCorrelationCoefficientFunc from './images/correlation-coefficient.function.png';
import imgCorrelationCoefficientEx from './images/correlation-coefficient.example.png';
import imgRSquareFunc from './images/rsquare.function.png';
import imgRSquareEx from './images/rsquare.example.png';
import imgFitLogFunc from './images/fitlog.function.png';
import imgFitLogEx from './images/fitlog.example.png';
import imgFitLogisticFunc from './images/fitlogistic.function.png';
import imgFitLogisticEx from './images/fitlogistic.example.png';
import imgFitPowFunc from './images/fitpow.function.png';
import imgFitPowEx from './images/fitpow.example.png';
import imgFitExpFunc from './images/fitexp.function.png';
import imgFitExpEx from './images/fitexp.example.png';
import imgFitSinFunc from './images/fitsin.function.png';
import imgFitSinEx from './images/fitsin.example.png';
import imgFitGrowthFunc from './images/fitgrowth.function.png';
import imgFitGrowthEx from './images/fitgrowth.example.png';
import imgChiSquaredTestFunc from './images/chisquaredtest.function.png';
import imgChiSquaredTestEx from './images/chisquaredtest.example.png';
import imgTTestFunc from './images/ttest.function.png';
import imgTTestEx from './images/ttest.example.png';
import imgTTestPairedFunc from './images/ttestpaired.function.png';
import imgTTestPairedEx from './images/ttestpaired.example.png';
import imgSampleFunc from './images/sample.function.png';
import imgSampleEx from './images/sample.example.png';
import imgSampleVarianceFunc from './images/samplevariance.function.png';
import imgSampleVarianceEx from './images/samplevariance.example.png';
import imgVarianceFunc from './images/variance.function.png';
import imgVarianceEx from './images/variance.example.png';
import imgmeanFunc from './images/mean.function.png';
import imgmeanEx from './images/mean.example.png';
import imgRootMeanSquareFunc from './images/rootmeansquare.function.png';
import imgRootMeanSquareEx from './images/rootmeansquare.example.png';
import imgHarmonicMeanFunc from './images/harmonicmean.function.png';
import imgHarmonicMeanEx from './images/harmonicmean.example.png';
import imgGeometricMeanFunc from './images/geometricmean.function.png';
import imgGeometricMeanEx from './images/geometricmean.example.png';
import imgMedianFunc from './images/median.function.png';
import imgMedianEx from './images/median.example.png';
import imgSigmaFunc from './images/sigma.function.png';
import imgSigmaEx from './images/sigma.example.png';
import imgFromBaseFunc from './images/frombase.function.png';
import imgFromBaseEx from './images/frombase.example.png';
import imgToBaseFunc from './images/tobase.function.png';
import imgSolveFunc from './images/solve.function.png';
import imgSolveEx from './images/solve.example.png';
import imgExpandFunc from './images/expand.function.png';
import imgExpandEx from './images/expand.example.png';
import imgCommonDenominatorFunc from './images/commondenominator.function.png';
import imgCommonDenominatorEx from './images/commondenominator.example.png';
import imgDivisionFunc from './images/division.function.png';
import imgDivisionEx from './images/division.example.png';
import imgModFunc from './images/mod.function.png';
import imgModEx from './images/mod.example.png';
import imgCrossFunc from './images/cross.function.png';
import imgCrossEx from './images/cross.example.png';
import imgDotFunc from './images/dot.function.png';
import imgDotEx from './images/dot.example.png';
import imgIsPrimeFunc from './images/isprime.function.png';
import imgIsPrimeEx from './images/isprime.example.png';
import imgPreviousPrimeFunc from './images/previousprime.function.png';
import imgPreviousPrimeEx from './images/previousprime.example.png';
import imgPrimeFactorsFunc from './images/primefactos.function.png';
import imgPrimeFactorsEx from './images/primefactors.example.png';
import imgDivisorsFunc from './images/divisors.function.png';
import imgDivisorsEx from './images/divisors.example.png';
import imgDivisorsSumFunc from './images/divisorssum.function.png';
import imgDivisorsSumEx from './images/divisorssum.example.png';
import imgGCDFunc from './images/gcd.function.png';
import imgGCDEx from './images/gcd.example.png';
import imgLCMFunc from './images/lcm.function.png';
import imgLCMEx from './images/lcm.example.png';
import imgFactorFunc from './images/factor.function.png';
import imgFactorEx from './images/factor.example.png';
import imgIFactorFunc from './images/ifactor.function.png';
import imgIFactorEx from './images/ifactor.example.png';

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
    heading: 'Hàm FitPoly()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgFitPolyFunc} alt="img-fit-poly-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Points: Danh sách các điểm</li>
          <li>Degree of Polynomial: Bậc của đa thức</li>
          <li>Freehand Function: Chức năng tự do. Hàm được vẽ bởi Công cụ hình dạng tự do</li>
        </ul>

        <h4>Kết quả:</h4>
        <p>Đa thức nội suy với bậc cho trước được tính toán dựa trên các tham số đầu vào</p>

        <h4>Ví dụ:</h4>
        <img src={imgFitPolyEx} alt="img-fit-poly-ex" />
      </div>
    ),
  },
];

const do_lech_chuan: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm stdev() hoặc SD()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgstdevpFunc} alt="img-stdevp-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Raw Data: Danh sách các điểm</li>
          <li>List of Numbers: Danh sách số</li>
          <li>List of Frequencies: Danh sách tần số</li>
        </ul>

        <h4>Kết quả: </h4>
        <p>Độ lệch chuẩn dựa trên các tham số đầu vào</p>

        <h4>Ví dụ:</h4>
        <img src={imgstdevpEx} alt="img-stdevp-ex" />
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Hàm SDX()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgSDXFunc} alt="img-sdx-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Points: Danh sách các điểm</li>
        </ul>

        <h4>Kết quả: </h4>
        <p>Trả về độ lệch chuẩn của tọa độ x của các điểm từ danh sách đã cho.</p>

        <h4>Ví dụ:</h4>
        <img src={imgSDXEx} alt="img-sdx-ex" />
      </div>
    ),
  },
  {
    id: 3,
    heading: 'Hàm SDY()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgSDYFunc} alt="img-sdy-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Points: Danh sách các điểm</li>
        </ul>

        <h4>Kết quả: </h4>
        <p>Trả về độ lệch chuẩn của tọa độ y của các điểm từ danh sách đã cho.</p>

        <h4>Ví dụ:</h4>
        <img src={imgSDYEx} alt="img-sdy-ex" />
      </div>
    ),
  },
];

const duong_hoi_quy: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm Fitline()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgFitlineFunc} alt="img-fitline-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Points: Danh sách các điểm</li>
        </ul>

        <h4>Kết quả: </h4>
        <p>Tính toán đường hồi quy y trên x của các điểm.</p>

        <h4>Ví dụ:</h4>
        <img src={imgFitlineEx} alt="img-fitline-ex" />
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Hàm FitlineX()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgFitlineXFunc} alt="img-fitlinex-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Points: Danh sách các điểm</li>
        </ul>

        <h4>Kết quả: </h4>
        <p>Tính toán đường hồi quy x trên y của các điểm.</p>

        <h4>Ví dụ:</h4>
        <img src={imgFitlineXEx} alt="img-fitlinex-ex" />
      </div>
    ),
  },
];

const he_so_tuong_quan: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm Spearman()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgSpearmanFunc} alt="img-spearman-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Points: Danh sách các điểm</li>
          <li>List of Numbers: Danh sách các số</li>
        </ul>

        <h4>Kết quả: </h4>
        <ul>
          <li>
            Trả về hệ số tương quan xếp hạng của Spearman của tọa độ x và tọa độ y của các điểm
            trong danh sách.
          </li>
          <li>Trả về hệ số tương quan thứ hạng của Spearman của hai danh sách.</li>
        </ul>

        <h4>Ví dụ:</h4>
        <img src={imgSpearmanEx} alt="img-spearman-ex" />
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Hàm CorrelationCoefficient()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgCorrelationCoefficientFunc} alt="img-correlationcoefficient-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Points: Danh sách các điểm</li>
          <li>List of x-coordinates: Danh sách tọa độ x</li>
          <li>List of y-coordinates: Danh sách tọa độ y</li>
        </ul>

        <h4>Kết quả: </h4>
        <ul>
          <li>Tính hệ số tương quan mômen tích bằng cách sử dụng tọa độ của các điểm đã cho.</li>
          <li>
            Trả về hệ số tương quan xếp hạng của Spearman của tọa độ x và tọa độ y của các điểm
            trong danh sách.
          </li>
        </ul>

        <h4>Ví dụ:</h4>
        <img src={imgCorrelationCoefficientEx} alt="img-correlationcoefficient-ex" />
      </div>
    ),
  },
  {
    id: 3,
    heading: 'Hàm RSquare()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgRSquareFunc} alt="img-rsquare-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Points: Danh sách các điểm</li>
          <li>Function: Hàm số</li>
        </ul>

        <h4>Kết quả: </h4>
        <p>
          Tính hệ số xác định R² = 1 - SSE/Syy, giữa giá trị y của các điểm trong danh sách và giá
          trị hàm của giá trị x trong danh sách.
        </p>

        <h4>Ví dụ:</h4>
        <img src={imgRSquareEx} alt="img-rsquare-ex" />
      </div>
    ),
  },
];

const hoi_quy: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm FitLog()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgFitLogFunc} alt="img-fitlog-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Points: Danh sách các điểm</li>
        </ul>

        <h4>Kết quả: </h4>
        <p>Tính toán đường cong hồi quy logarit.</p>

        <h4>Ví dụ:</h4>
        <img src={imgFitLogEx} alt="img-fitlog-ex" />
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Hàm FitLogistic()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgFitLogisticFunc} alt="img-fitlogistic-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Points: Danh sách các điểm</li>
        </ul>

        <h4>Kết quả: </h4>
        <p>Tính toán đường cong hồi quy ở dạng a/(1 + b e^(-kx)).</p>

        <h4>Ví dụ:</h4>
        <img src={imgFitLogisticEx} alt="img-fitlogistic-ex" />
      </div>
    ),
  },
  {
    id: 3,
    heading: 'Hàm FitPow()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgFitPowFunc} alt="img-fitpow-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Points: Danh sách các điểm</li>
        </ul>

        <h4>Kết quả: </h4>
        <p>Tính toán đường cong hồi quy ở dạng a*x^b.</p>

        <h4>Ví dụ:</h4>
        <img src={imgFitPowEx} alt="img-fitpow-ex" />
      </div>
    ),
  },
  {
    id: 4,
    heading: 'Hàm FitExp()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgFitExpFunc} alt="img-fitexp-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Points: Danh sách các điểm</li>
        </ul>

        <h4>Kết quả: </h4>
        <p>Tính toán đường cong hồi quy hàm mũ ở dạng a*(ℯ^(bx)).</p>

        <h4>Ví dụ:</h4>
        <img src={imgFitExpEx} alt="img-fitexp-ex" />
      </div>
    ),
  },
  {
    id: 5,
    heading: 'Hàm FitSin()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgFitSinFunc} alt="img-fitsin-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Points: Danh sách các điểm</li>
        </ul>

        <h4>Kết quả: </h4>
        <p>Tính toán đường cong hồi quy có dạng a + b*sin(cx + d).</p>

        <h4>Ví dụ:</h4>
        <img src={imgFitSinEx} alt="img-fitsin-ex" />
      </div>
    ),
  },
  {
    id: 6,
    heading: 'Hàm FitGrowth()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgFitGrowthFunc} alt="img-fitgrowth-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Points: Danh sách các điểm</li>
        </ul>

        <h4>Kết quả: </h4>
        <p>
          Tính toán hàm có dạng a*b^x cho các điểm trong danh sách. (Rất giống với FitExp, chỉ ở
          dạng hơi khác một chút).
        </p>

        <h4>Ví dụ:</h4>
        <img src={imgFitGrowthEx} alt="img-fitgrowth-ex" />
      </div>
    ),
  },
];

const kiem_dinh: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm ChiSquaredTest()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgChiSquaredTestFunc} alt="img-chisquaredtest-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>Matrix: Ma trận</li>
          <li>Observed List: Danh sách quan sát</li>
          <li>Expected List: Danh sách dự kiến</li>
          <li>Observed Matrix: Ma trận quan sát</li>
          <li>Expected Matrix: Ma trận dự kiến</li>
        </ul>

        <h4>Kết quả:</h4>
        <ul>
          <li>
            Thực hiện kiểm tra chi bình phương để so sánh ma trận số lượng quan sát được với ma trận
            số lượng dự kiến được xác định bởi giả thuyết về tính độc lập
          </li>
          <li>
            Thực hiện kiểm tra Mức độ phù hợp để so sánh danh sách số lượng được quan sát nhất định
            với danh sách số lượng dự kiến
          </li>
          <li>
            Thực hiện kiểm tra chi bình phương để so sánh ma trận số lượng quan sát được với ma trận
            số lượng dự kiến đã cho
          </li>
        </ul>

        <h4>Ví dụ:</h4>
        <img src={imgChiSquaredTestEx} alt="img-chisquaredtest-ex" />
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Hàm TTest()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgTTestFunc} alt="img-ttest-func" />

        <h4>Tham số:</h4>
        <p>
          {
            'Thực hiện kiểm tra t một mẫu về trung bình tổng thể bằng cách sử dụng danh sách dữ liệu mẫu đã cho. Giá trị trung bình giả thuyết là giá trị trung bình tổng thể được giả định trong giả thuyết khống. Đuôi có thể có các giá trị <, >, ≠. Những điều này xác định giả thuyết thay thế như sau'
          }
        </p>

        <h4>Kết quả:</h4>
        <p>
          {'Kết quả được trả về dưới dạng danh sách dưới dạng {Giá trị xác suất, thống kê t-test}'}
        </p>

        <h4>Ví dụ:</h4>
        <img src={imgTTestEx} alt="img-ttest-ex" />
      </div>
    ),
  },
  {
    id: 3,
    heading: 'Hàm TTestPaired()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgTTestPairedFunc} alt="img-ttestpaired-func" />

        <h4>Tham số:</h4>
        <p>
          {
            'Thực hiện kiểm tra t ghép đôi bằng cách sử dụng danh sách dữ liệu mẫu được ghép nối đã cho. Đuôi có các giá trị có thể là "<", ">" , "≠" xác định các giả thuyết thay thế sau:'
          }
        </p>

        <h4>Kết quả:</h4>
        <p>
          {'Kết quả được trả về dưới dạng danh sách dưới dạng {Giá trị xác suất, thống kê t-test}.'}
        </p>

        <h4>Ví dụ:</h4>
        <img src={imgTTestPairedEx} alt="img-ttestpaired-ex" />
      </div>
    ),
  },
];

const mau_va_phuong_sai: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm Sample()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgSampleFunc} alt="img-sample-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List: Danh sách</li>
          <li>Size: Kích thước</li>
          <li>With Replacement: </li>
        </ul>

        <h4>Kết quả:</h4>
        <ul>
          <li>
            Trả về danh sách n phần tử được chọn ngẫu nhiên của danh sách; các phần tử có thể được
            chọn nhiều lần.
          </li>
          <li>
            Trả về danh sách n phần tử được chọn ngẫu nhiên của danh sách. Các phần tử có thể được
            chọn nhiều lần khi và chỉ khi tham số cuối cùng là đúng.
          </li>
        </ul>

        <h4>Ví dụ:</h4>
        <img src={imgSampleEx} alt="img-sample-ex" />
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Hàm SampleVariance()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgSampleVarianceFunc} alt="img-samplevariance-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Raw Data: Danh sách dữ liệu thô</li>
          <li>List of Numbers: Danh sách các số</li>
          <li>List of Frequencies: Danh sách tần số</li>
        </ul>

        <h4>Kết quả:</h4>
        <ul>
          <li>Trả về phương sai mẫu của danh sách số đã cho.</li>
          <li>Trả về phương sai mẫu của danh sách số đã cho có xét đến tần số </li>
        </ul>

        <h4>Ví dụ:</h4>
        <img src={imgSampleVarianceEx} alt="img-samplevariance-ex" />
      </div>
    ),
  },
  {
    id: 3,
    heading: 'Hàm Variance()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgVarianceFunc} alt="img-variance-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Raw Data: Danh sách dữ liệu thô</li>
          <li>List of Numbers: Danh sách các số</li>
          <li>List of Frequencies: Danh sách tần số</li>
        </ul>

        <h4>Kết quả:</h4>
        <ul>
          <li>Tính toán phương sai của các phần tử danh sách</li>
          <li>Tính toán phương sai của các phần tử danh sách, có xét đến tần số</li>
        </ul>

        <h4>Ví dụ:</h4>
        <img src={imgVarianceEx} alt="img-variance-ex" />
      </div>
    ),
  },
];

const trung_binh_va_trung_vi: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm mean()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgmeanFunc} alt="img-mean-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Raw Data: Danh sách dữ liệu thô</li>
          <li>List of Numbers: Danh sách các số</li>
          <li>List of Frequencies: Danh sách tần số</li>
        </ul>

        <h4>Kết quả:</h4>
        <ul>
          <li>Tính giá trị trung bình số học của các phần tử trong danh sách</li>
          <li>Tính giá trị trung bình có trọng số của các phần tử trong danh sách</li>
        </ul>

        <h4>Ví dụ:</h4>
        <img src={imgmeanEx} alt="img-mean-ex" />
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Hàm RootMeanSquare()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgRootMeanSquareFunc} alt="img-rootmeansquare-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Numbers: Danh sách các số</li>
        </ul>

        <h4>Kết quả:</h4>
        <p>Trả về bình phương trung bình gốc của danh sách các số đã cho</p>

        <h4>Ví dụ:</h4>
        <img src={imgRootMeanSquareEx} alt="img-rootmeansquare-ex" />
      </div>
    ),
  },
  {
    id: 3,
    heading: 'Hàm HarmonicMean()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgHarmonicMeanFunc} alt="img-harmonicmean-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Numbers: Danh sách các số</li>
        </ul>

        <h4>Kết quả:</h4>
        <p>Trả về giá trị trung bình điều hòa của danh sách số đã cho</p>

        <h4>Ví dụ:</h4>
        <img src={imgHarmonicMeanEx} alt="img-harmonicmean-ex" />
      </div>
    ),
  },
  {
    id: 4,
    heading: 'Hàm GeometricMean()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgGeometricMeanFunc} alt="img-geometricmean-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Numbers: Danh sách các số</li>
        </ul>

        <h4>Kết quả:</h4>
        <p>Trả về giá trị trung bình hình học của danh sách số đã cho</p>

        <h4>Ví dụ:</h4>
        <img src={imgGeometricMeanEx} alt="img-geometricmean-ex" />
      </div>
    ),
  },
  {
    id: 5,
    heading: 'Hàm Median()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgMedianFunc} alt="img-median-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Raw Data: Danh sách các điểm</li>
          <li>List of Numbers: Danh sách số</li>
          <li>List of Frequencies: Danh sách tần số</li>
        </ul>

        <h4>Kết quả:</h4>
        <ul>
          <li>Xác định trung vị của các phần tử trong danh sách</li>
          <li>Tính toán trung vị có trọng số của các phần tử trong danh sách</li>
        </ul>

        <h4>Ví dụ:</h4>
        <img src={imgMedianEx} alt="img-median-ex" />
      </div>
    ),
  },
];

const xich_ma: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm SigmaXX()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgSigmaFunc} alt="img-sigma-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Points: Danh sách các điểm</li>
          <li>List of x-coordinates: Danh sách tọa độ x</li>
          <li>List of y-coordinates: Danh sách tọa độ y</li>
        </ul>

        <h4>Kết quả:</h4>
        <ul>
          <li>Tính tổng từ các số cho trước</li>
          <li>Tính tổng các tích của tọa độ x và y.</li>
        </ul>

        <h4>Ví dụ:</h4>
        <img src={imgSigmaEx} alt="img-sigma-ex" />
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Hàm SigmaXY()',
    detail: (
      <div>
        <p>Tương tự SigmaXX()</p>
      </div>
    ),
  },
  {
    id: 3,
    heading: 'Hàm SigmaYY()',
    detail: (
      <div>
        <p>Tương tự SigmaYY()</p>
      </div>
    ),
  },
];

const chuyen_co_so: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm FromBase()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgFromBaseFunc} alt="img-frombase-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>Number as Text: Số cho trước</li>
          <li>Base: Cơ số phải nằm trong khoảng từ 2 đến 36. Số phải là số nguyên</li>
        </ul>

        <h4>Kết quả:</h4>
        <p>Chuyển đổi số từ cơ số đã cho thành cơ số thập phân</p>

        <h4>Ví dụ:</h4>
        <img src={imgFromBaseEx} alt="img-fromabase-func" />
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Hàm ToBase()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgToBaseFunc} alt="img-tobase-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>Number as Text: Số cho trước</li>
          <li>Base: Cơ số phải nằm trong khoảng từ 2 đến 36. Số phải là số nguyên</li>
        </ul>

        <h4>Kết quả:</h4>
        <p>Chuyển đổi số đã cho thành cơ số khác nhau</p>

        <h4>Ví dụ:</h4>
        <img src={imgFromBaseEx} alt="img-fromabase-func" />
      </div>
    ),
  },
];

const giai_phuong_trinh: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm Solve()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgSolveFunc} alt="img-solve-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>Equation: phương trình</li>
        </ul>

        <h4>Kết quả:</h4>
        <p>Trả về tập nghiệm của phương trình</p>

        <h4>Ví dụ:</h4>
        <img src={imgSolveEx} alt="img-solve-ex" />
      </div>
    ),
  },
];

const khai_trien_phuong_trinh: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm Expand()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgExpandFunc} alt="img-expand-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>Equation: Biểu thức</li>
        </ul>

        <h4>Kết quả:</h4>
        <p>Trả về kết quả sau khi khai triển biểu thức</p>

        <h4>Ví dụ:</h4>
        <img src={imgExpandEx} alt="img-expand-ex" />
      </div>
    ),
  },
];

const mau_so_chung: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm CommonDenominator()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgCommonDenominatorFunc} alt="img-commondenominator-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>Expression: Biểu thức</li>
        </ul>

        <h4>Kết quả:</h4>
        <p>Trả về hàm có mẫu số chung thấp nhất của hai biểu thức ở dạng phương trình</p>

        <h4>Ví dụ:</h4>
        <img src={imgCommonDenominatorEx} alt="img-commondenominator-ex" />
      </div>
    ),
  },
];

const phep_chia_va_so_du: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm Division()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgDivisionFunc} alt="img-division-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>Dividend Number: Số bị chia</li>
          <li>Divisor Number: Số chia</li>
          <li>Dividend Polynomial: Đa thức bị chia</li>
          <li>Divisor Polynomial: Đa thức chia</li>
        </ul>

        <h4>Kết quả:</h4>
        <ul>
          <li>Cho biết thương số (phần nguyên của kết quả) và phần dư của phép chia hai số</li>
          <li>Cho biết thương và số dư của phép chia hai đa thức</li>
        </ul>

        <h4>Ví dụ:</h4>
        <img src={imgDivisionEx} alt="img-division-ex" />
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Hàm Mod()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgModFunc} alt="img-mod-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>Dividend Number: Số bị chia</li>
          <li>Divisor Number: Số chia</li>
          <li>Dividend Polynomial: Đa thức bị chia</li>
          <li>Divisor Polynomial: Đa thức chia</li>
        </ul>

        <h4>Kết quả:</h4>
        <ul>
          <li>Trả về phần dư khi chia số bị chia cho số chia</li>
          <li>Trả về phần còn lại khi chia đa thức bị chia cho đa thức chia.</li>
        </ul>

        <h4>Ví dụ:</h4>
        <img src={imgModEx} alt="img-mod-ex" />
      </div>
    ),
  },
];

const so_nguyen_to: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm IsPrime()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgIsPrimeFunc} alt="img-isprime-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>Number: Số cho trước</li>
        </ul>

        <h4>Kết quả:</h4>
        <p>Cho kết quả đúng hoặc sai tùy thuộc vào số đó có phải là số nguyên tố hay không</p>

        <h4>Ví dụ:</h4>
        <img src={imgIsPrimeEx} alt="img-isprime-ex" />
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Hàm PreviousPrime()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgPreviousPrimeFunc} alt="img-previousprime-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>Number: Số cho trước</li>
        </ul>

        <h4>Kết quả:</h4>
        <p>Trả về số nguyên tố lớn nhất nhỏ hơn số đã nhập</p>

        <h4>Ví dụ:</h4>
        <img src={imgPreviousPrimeEx} alt="img-previousprime-ex" />
      </div>
    ),
  },
  {
    id: 3,
    heading: 'Hàm NextPrime()',
    detail: (
      <div>
        <p>Tương tự như PreviousPrime, nhưng là lấy số nguyên tố nhỏ nhất lớn hơn số đã cho</p>
      </div>
    ),
  },
  {
    id: 4,
    heading: 'Hàm PrimeFactors()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgPrimeFactorsFunc} alt="img-primefactors-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>Number: Số cho trước</li>
        </ul>

        <h4>Kết quả:</h4>
        <p>Trả về danh sách các số nguyên tố có tích bằng số đã cho</p>

        <h4>Ví dụ:</h4>
        <img src={imgPrimeFactorsEx} alt="img-primefactors-ex" />
      </div>
    ),
  },
];

const tich_vector: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm Cross()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgCrossFunc} alt="img-cross-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>Vector</li>
        </ul>

        <h4>Kết quả:</h4>
        <p>Tích có hướng của 2 vector</p>

        <h4>Ví dụ:</h4>
        <img src={imgCrossEx} alt="img-mod-ex" />
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Hàm Dot()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgDotFunc} alt="img-dot-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>Vector</li>
        </ul>

        <h4>Kết quả:</h4>
        <p>Tích vô hướng của 2 vector</p>

        <h4>Ví dụ:</h4>
        <img src={imgDotEx} alt="img-dot-ex" />
      </div>
    ),
  },
];

const thua_so_va_so_vo_ty: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm Factor()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgFactorFunc} alt="img-factor-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>Polynomial: Đa thức</li>
        </ul>

        <h4>Kết quả:</h4>
        <p>Phân tích thừa số</p>

        <h4>Ví dụ:</h4>
        <img src={imgFactorEx} alt="img-factor-ex" />
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Hàm IFactor()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgIFactorFunc} alt="img-ifactor-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>Polynomial: Đa thức</li>
        </ul>

        <h4>Kết quả:</h4>
        <p>Kết quả phân tích thành thừa số trên các số vô tỷ</p>

        <h4>Ví dụ:</h4>
        <img src={imgIFactorEx} alt="img-ifactor-ex" />
      </div>
    ),
  },
];

const uoc_so_va_boi_so: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm Divisors()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgDivisorsFunc} alt="img-divisors-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>Number: Số cho trước</li>
        </ul>

        <h4>Kết quả:</h4>
        <p>Tính số lượng tất cả các ước số dương, kể cả chính số đó</p>

        <h4>Ví dụ:</h4>
        <img src={imgDivisorsEx} alt="img-divisors-ex" />
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Hàm DivisorsSum()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgDivisorsSumFunc} alt="img-divisorssum-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>Number: Số cho trước</li>
        </ul>

        <h4>Kết quả:</h4>
        <p>Tính tổng của tất cả các ước số dương, kể cả chính số đó</p>

        <h4>Ví dụ:</h4>
        <img src={imgDivisorsSumEx} alt="img-divisorssum-ex" />
      </div>
    ),
  },
  {
    id: 3,
    heading: 'Hàm GCD()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgGCDFunc} alt="img-gcd-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Numbers: Danh sách các số</li>
          <li>Number: Số cho trước</li>
        </ul>

        <h4>Kết quả:</h4>
        <ul>
          <li>Tính ước chung lớn nhất của hai số</li>
          <li>Tính ước chung lớn nhất của dãy số</li>
        </ul>

        <h4>Ví dụ:</h4>
        <img src={imgGCDEx} alt="img-gcd-ex" />
      </div>
    ),
  },
  {
    id: 4,
    heading: 'Hàm LCM()',
    detail: (
      <div>
        <h4>Cách sử dụng</h4>
        <img src={imgLCMFunc} alt="img-lcm-func" />

        <h4>Tham số:</h4>
        <ul>
          <li>List of Numbers: Danh sách các số</li>
          <li>Number: Số cho trước</li>
        </ul>

        <h4>Kết quả:</h4>
        <ul>
          <li>Tính bội số chung nhỏ nhất của hai số</li>
          <li>Tính bội số chung nhỏ nhất của các phần tử trong danh sách</li>
        </ul>

        <h4>Ví dụ:</h4>
        <img src={imgLCMEx} alt="img-lcm-ex" />
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
              <Accordion key={item.id}>
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
    <Container sx={{ my: 2 }}>
      <Stack spacing={2}>
        {renderContent(Object.keys({ phan_phoi_chuan })[0].replace(/_/g, '-'), phan_phoi_chuan)}
        {renderContent(Object.keys({ phan_phoi_student })[0].replace(/_/g, '-'), phan_phoi_student)}
        {renderContent(
          Object.keys({ phan_phoi_chi_binh_phuong })[0].replace(/_/g, '-'),
          phan_phoi_chi_binh_phuong
        )}
        {renderContent(Object.keys({ phan_phoi_co_si })[0].replace(/_/g, '-'), phan_phoi_co_si)}
        {renderContent(Object.keys({ phan_phoi_weibull })[0].replace(/_/g, '-'), phan_phoi_weibull)}
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
        {renderContent(Object.keys({ he_so_tuong_quan })[0].replace(/_/g, '-'), he_so_tuong_quan)}
        {renderContent(Object.keys({ xich_ma })[0].replace(/_/g, '-'), xich_ma)}
        {renderContent(Object.keys({ hoi_quy })[0].replace(/_/g, '-'), hoi_quy)}
        {renderContent(Object.keys({ kiem_dinh })[0].replace(/_/g, '-'), kiem_dinh)}
        {renderContent(Object.keys({ mau_va_phuong_sai })[0].replace(/_/g, '-'), mau_va_phuong_sai)}
        {renderContent(
          Object.keys({ trung_binh_va_trung_vi })[0].replace(/_/g, '-'),
          trung_binh_va_trung_vi
        )}
        {renderContent(Object.keys({ giai_phuong_trinh })[0].replace(/_/g, '-'), giai_phuong_trinh)}
        {renderContent(
          Object.keys({ khai_trien_phuong_trinh })[0].replace(/_/g, '-'),
          khai_trien_phuong_trinh
        )}
        {renderContent(Object.keys({ mau_so_chung })[0].replace(/_/g, '-'), mau_so_chung)}
        {renderContent(
          Object.keys({ phep_chia_va_so_du })[0].replace(/_/g, '-'),
          phep_chia_va_so_du
        )}
        {renderContent(Object.keys({ so_nguyen_to })[0].replace(/_/g, '-'), so_nguyen_to)}
        {renderContent(Object.keys({ tich_vector })[0].replace(/_/g, '-'), tich_vector)}
        {renderContent(
          Object.keys({ thua_so_va_so_vo_ty })[0].replace(/_/g, '-'),
          thua_so_va_so_vo_ty
        )}
        {renderContent(Object.keys({ uoc_so_va_boi_so })[0].replace(/_/g, '-'), uoc_so_va_boi_so)}
      </Stack>
    </Container>
  );
}
