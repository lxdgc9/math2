import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// auth
import { AuthGuard } from 'src/auth/guard';
// layouts
import HomeLayout from 'src/layouts/home';
// components
import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

// Page
const IndexPage = lazy(() => import('src/pages/home/home'));
// biểu đồ
const BieuDoDuong = lazy(() => import('src/pages/home/bieu-do/bieu-do-duong'));
const BieuDoMien = lazy(() => import('src/pages/home/bieu-do/bieu-do-mien'));
const BieuDoCotDon = lazy(() => import('src/pages/home/bieu-do/bieu-do-cot-don'));
const BieuDoCotKep = lazy(() => import('src/pages/home/bieu-do/bieu-do-cot-kep'));
const BieuDoCotChong = lazy(() => import('src/pages/home/bieu-do/bieu-do-cot-chong'));
const BieuDoQuat = lazy(() => import('src/pages/home/bieu-do/bieu-do-quat'));
const BieuDoDienTich = lazy(() => import('src/pages/home/bieu-do/bieu-do-dien-tich'));
// xác suất
const PhanPhoiChuan = lazy(() => import('src/pages/home/xac-suat/phan-phoi-chuan'));
const PhanPhoiStudent = lazy(() => import('src/pages/home/xac-suat/phan-phoi-student'));
const PhanPhoiChiBinhPhuong = lazy(
  () => import('src/pages/home/xac-suat/phan-phoi-chi-binh-phuong')
);
const PhanPhoiF = lazy(() => import('src/pages/home/xac-suat/phan-phoi-f'));
const PhanPhoiMu = lazy(() => import('src/pages/home/xac-suat/phan-phoi-mu'));
const PhanPhoiCoSi = lazy(() => import('src/pages/home/xac-suat/phan-phoi-co-si'));
const PhanPhoiWeibull = lazy(() => import('src/pages/home/xac-suat/phan-phoi-weibull'));
const PhanPhoiGamma = lazy(() => import('src/pages/home/xac-suat/phan-phoi-gamma'));
const PhanPhoiLogNormal = lazy(() => import('src/pages/home/xac-suat/phan-phoi-log-normal'));
const PhanPhoiLogistic = lazy(() => import('src/pages/home/xac-suat/phan-phoi-logistic'));
const PhanPhoiNhiThuc = lazy(() => import('src/pages/home/xac-suat/phan-phoi-nhi-thuc'));
const PhanPhoiPascal = lazy(() => import('src/pages/home/xac-suat/phan-phoi-pascal'));
const PhanPhoiPoatXong = lazy(() => import('src/pages/home/xac-suat/phan-phoi-poat-xong'));
const PhanPhoiSieuBoi = lazy(() => import('src/pages/home/xac-suat/phan-phoi-sieu-boi'));
// thống kê
const DaThucNoiSuy = lazy(() => import('src/pages/home/thong-ke/da-thuc-noi-suy'));
const DoLechChuan = lazy(() => import('src/pages/home/thong-ke/do-lech-chuan'));
const DuongHoiQuy = lazy(() => import('src/pages/home/thong-ke/duong-hoi-quy'));
const HeSoTuongQuan = lazy(() => import('src/pages/home/thong-ke/he-so-tuong-quan'));
const HoiQuy = lazy(() => import('src/pages/home/thong-ke/hoi-quy'));
const KiemDinh = lazy(() => import('src/pages/home/thong-ke/kiem-dinh'));
const MauVaPhuongSai = lazy(() => import('src/pages/home/thong-ke/mau-va-phuong-sai'));
const TrungBinhVaTrungVi = lazy(() => import('src/pages/home/thong-ke/trung-binh-va-trung-vi'));
const XichMa = lazy(() => import('src/pages/home/thong-ke/xich-ma'));
// đại số
const ChuyenCoSo = lazy(() => import('src/pages/home/dai-so/chuyen-co-so'));
const GtlnGtnn = lazy(() => import('src/pages/home/dai-so/gtln-gtnn'));
const GiaiPhuongTrinh = lazy(() => import('src/pages/home/dai-so/giai-phuong-trinh'));
const KhaiTrienPhuongTrinh = lazy(() => import('src/pages/home/dai-so/khai-trien-phuong-trinh'));
const MauSoChung = lazy(() => import('src/pages/home/dai-so/mau-so-chung'));
const PhepChiaVaSoDu = lazy(() => import('src/pages/home/dai-so/phep-chia-va-so-du'));
const SoNguyenTo = lazy(() => import('src/pages/home/dai-so/so-nguyen-to'));
const TichVector = lazy(() => import('src/pages/home/dai-so/tich-vector'));
const ThuaSoVaSoVoTy = lazy(() => import('src/pages/home/dai-so/thua-so-va-so-vo-ty'));
const UocSoVaBoiSo = lazy(() => import('src/pages/home/dai-so/uoc-so-va-boi-so'));
// đồ thị
const DoThiHamSoBac2 = lazy(() => import('src/pages/home/do-thi/do-thi-ham-so-bac-2'));
const DoThiHamSoBac3 = lazy(() => import('src/pages/home/do-thi/do-thi-ham-so-bac-3'));
const DoThiHamSoCanCac = lazy(() => import('src/pages/home/do-thi/do-thi-ham-so-can-bac'));
const DoThiHamSoGiaiThuc = lazy(() => import('src/pages/home/do-thi/do-thi-ham-so-giai-thuc'));
const DoThiHamSoGioiHan = lazy(() => import('src/pages/home/do-thi/do-thi-ham-so-gioi-han'));
const DoThiHamSoLogarit = lazy(() => import('src/pages/home/do-thi/do-thi-ham-so-logarit'));
const DoThiHamSoLuongGiac = lazy(() => import('src/pages/home/do-thi/do-thi-ham-so-luong-giac'));
const DoThiHamSoModulo = lazy(() => import('src/pages/home/do-thi/do-thi-ham-so-modulo'));
const DoThiHamSoMu = lazy(() => import('src/pages/home/do-thi/do-thi-ham-so-mu'));
const DoThiHamSoTuyenTinh = lazy(() => import('src/pages/home/do-thi/do-thi-ham-so-tuyen-tinh'));
// hình học phẳng
const CacDangDuongThang = lazy(() => import('src/pages/home/hinh-hoc-phang/cac-dang-duong-thang'));
const DaGiac = lazy(() => import('src/pages/home/hinh-hoc-phang/da-giac'));
const DiemVaDoanThang = lazy(() => import('src/pages/home/hinh-hoc-phang/diem-va-doan-thang'));
const DuongTron = lazy(() => import('src/pages/home/hinh-hoc-phang/duong-tron'));
const GocVaPhepQuay = lazy(() => import('src/pages/home/hinh-hoc-phang/goc-va-phep-quay'));
// hình học không gian
const HinhCau = lazy(() => import('src/pages/home/hinh-hoc-khong-gian/hinh-cau'));
const HinhChop = lazy(() => import('src/pages/home/hinh-hoc-khong-gian/hinh-chop'));
const HinhLapPhuong = lazy(() => import('src/pages/home/hinh-hoc-khong-gian/hinh-lap-phuong'));
const HinhNon = lazy(() => import('src/pages/home/hinh-hoc-khong-gian/hinh-non'));
const HinhTru = lazy(() => import('src/pages/home/hinh-hoc-khong-gian/hinh-tru'));
const MatPhang = lazy(() => import('src/pages/home/hinh-hoc-khong-gian/mat-phang'));
// bổ sung hình học theo tiêu chuẩn kỹ thuật
const HinhBinhHanh2D = lazy(() => import('src/pages/home/hinh-hoc-phang/bo-sung/hinh-binh-hanh'));
const HinhChuNhat2D = lazy(() => import('src/pages/home/hinh-hoc-phang/bo-sung/hinh-chu-nhat'));
const HinhHop2D = lazy(() => import('src/pages/home/hinh-hoc-phang/bo-sung/hinh-hop'));
const HinhThoi2D = lazy(() => import('src/pages/home/hinh-hoc-phang/bo-sung/hinh-thoi'));
const HinhTron2D = lazy(() => import('src/pages/home/hinh-hoc-phang/bo-sung/hinh-tron'));
const HinhTru2D = lazy(() => import('src/pages/home/hinh-hoc-phang/bo-sung/hinh-tru'));
const HinhVuong2D = lazy(() => import('src/pages/home/hinh-hoc-phang/bo-sung/hinh-vuong'));
const HinhTamGiac2D = lazy(() => import('src/pages/home/hinh-hoc-phang/bo-sung/hinh-tam-giac'));
// lý thuyết
const ThongKeVaXacXuat = lazy(() => import('src/pages/home/ly-thuyet/thong-ke-va-xac-suat'));
const DaiSoVaGiaiTich = lazy(() => import('src/pages/home/ly-thuyet/dai-so-va-giai-tich'));
const HinhHocVaDoLuong = lazy(() => import('src/pages/home/ly-thuyet/hinh-hoc-va-do-luong'));
// thực hành
const BieuDienHinhHocPhang = lazy(
  () => import('src/pages/home/thuc-hanh/bieu-dien-hinh-hoc-phang')
);
const BieuDienHinhHocKhongGian = lazy(
  () => import('src/pages/home/thuc-hanh/bieu-dien-hinh-hoc-khong-gian')
);
// trò chơi
const ThuThachTinhNham = lazy(() => import('src/pages/home/tro-choi/thu-thach-tinh-nham'));
const GiaiMaOchu = lazy(() => import('src/pages/home/tro-choi/giai-ma-o-chu'));

// ----------------------------------------------------------------------

export const homeRoutes = [
  {
    path: 'home',
    element: (
      <HomeLayout>
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
      </HomeLayout>
    ),
    children: [
      { element: <IndexPage />, index: true },
      {
        path: 'bieu-do',
        children: [
          { element: <BieuDoDuong />, index: true },
          { path: 'bieu-do-duong', element: <BieuDoDuong /> },
          { path: 'bieu-do-mien', element: <BieuDoMien /> },
          { path: 'bieu-do-cot-don', element: <BieuDoCotDon /> },
          { path: 'bieu-do-cot-kep', element: <BieuDoCotKep /> },
          { path: 'bieu-do-cot-chong', element: <BieuDoCotChong /> },
          { path: 'bieu-do-quat', element: <BieuDoQuat /> },
          { path: 'bieu-do-dien-tich', element: <BieuDoDienTich /> },
        ],
      },

      {
        path: 'xac-suat',
        children: [
          { element: <PhanPhoiChuan />, index: true },
          { path: 'phan-phoi-chuan', element: <PhanPhoiChuan /> },
          { path: 'phan-phoi-chuan', element: <PhanPhoiChuan /> },
          { path: 'phan-phoi-student', element: <PhanPhoiStudent /> },
          { path: 'phan-phoi-chi-binh-phuong', element: <PhanPhoiChiBinhPhuong /> },
          { path: 'phan-phoi-f', element: <PhanPhoiF /> },
          { path: 'phan-phoi-mu', element: <PhanPhoiMu /> },
          { path: 'phan-phoi-co-si', element: <PhanPhoiCoSi /> },
          { path: 'phan-phoi-weibull', element: <PhanPhoiWeibull /> },
          { path: 'phan-phoi-gamma', element: <PhanPhoiGamma /> },
          { path: 'phan-phoi-log-normal', element: <PhanPhoiLogNormal /> },
          { path: 'phan-phoi-logistic', element: <PhanPhoiLogistic /> },
          { path: 'phan-phoi-nhi-thuc', element: <PhanPhoiNhiThuc /> },
          { path: 'phan-phoi-pascal', element: <PhanPhoiPascal /> },
          { path: 'phan-phoi-poat-xong', element: <PhanPhoiPoatXong /> },
          { path: 'phan-phoi-sieu-boi', element: <PhanPhoiSieuBoi /> },
        ],
      },
      {
        path: 'thong-ke',
        children: [
          { element: <DaThucNoiSuy />, index: true },
          { path: 'da-thuc-noi-suy', element: <DaThucNoiSuy /> },
          { path: 'do-lech-chuan', element: <DoLechChuan /> },
          { path: 'duong-hoi-quy', element: <DuongHoiQuy /> },
          { path: 'he-so-tuong-quan', element: <HeSoTuongQuan /> },
          { path: 'hoi-quy', element: <HoiQuy /> },
          { path: 'kiem-dinh', element: <KiemDinh /> },
          { path: 'mau-va-phuong-sai', element: <MauVaPhuongSai /> },
          { path: 'trung-binh-va-trung-vi', element: <TrungBinhVaTrungVi /> },
          { path: 'xich-ma', element: <XichMa /> },
        ],
      },
      {
        path: 'dai-so',
        children: [
          { element: <ChuyenCoSo />, index: true },
          { path: 'chuyen-co-so', element: <ChuyenCoSo /> },
          { path: 'gia-tri-lon-nhat-va-gia-tri-nho-nhat', element: <GtlnGtnn /> },
          { path: 'giai-phuong-trinh', element: <GiaiPhuongTrinh /> },
          { path: 'khai-trien-phuong-trinh', element: <KhaiTrienPhuongTrinh /> },
          { path: 'mau-so-chung', element: <MauSoChung /> },
          { path: 'phep-chia-va-so-du', element: <PhepChiaVaSoDu /> },
          { path: 'so-nguyen-to', element: <SoNguyenTo /> },
          { path: 'tich-vector', element: <TichVector /> },
          { path: 'thua-so-va-so-vo-ty', element: <ThuaSoVaSoVoTy /> },
          { path: 'uoc-so-va-boi-so', element: <UocSoVaBoiSo /> },
        ],
      },
      {
        path: 'do-thi',
        children: [
          { element: <DoThiHamSoBac2 />, index: true },
          { path: 'do-thi-ham-so-bac-2', element: <DoThiHamSoBac2 /> },
          { path: 'do-thi-ham-so-bac-3', element: <DoThiHamSoBac3 /> },
          { path: 'do-thi-ham-so-can-bac', element: <DoThiHamSoCanCac /> },
          { path: 'do-thi-ham-so-giai-thuc', element: <DoThiHamSoGiaiThuc /> },
          { path: 'do-thi-ham-so-gioi-han', element: <DoThiHamSoGioiHan /> },
          { path: 'do-thi-ham-so-logarit', element: <DoThiHamSoLogarit /> },
          { path: 'do-thi-ham-so-luong-giac', element: <DoThiHamSoLuongGiac /> },
          { path: 'do-thi-ham-so-modulo', element: <DoThiHamSoModulo /> },
          { path: 'do-thi-ham-so-mu', element: <DoThiHamSoMu /> },
          { path: 'do-thi-ham-so-tuyen-tinh', element: <DoThiHamSoTuyenTinh /> },
        ],
      },
      {
        path: 'hinh-hoc-phang',
        children: [
          { element: <BieuDienHinhHocPhang />, index: true },
          { path: 'bieu-dien-hinh-hoc-phang', element: <BieuDienHinhHocPhang /> },
          { path: 'cac-dang-duong-thang', element: <CacDangDuongThang /> },
          { path: 'da-giac', element: <DaGiac /> },
          { path: 'diem-va-doan-thang', element: <DiemVaDoanThang /> },
          { path: 'duong-tron', element: <DuongTron /> },
          { path: 'goc-va-phep-quay', element: <GocVaPhepQuay /> },
          { path: 'hinh-binh-hanh', element: <HinhBinhHanh2D /> },
          { path: 'hinh-chu-nhat', element: <HinhChuNhat2D /> },
          { path: 'hinh-hop', element: <HinhHop2D /> },
          { path: 'hinh-thoi', element: <HinhThoi2D /> },
          { path: 'hinh-tron', element: <HinhTron2D /> },
          { path: 'hinh-tru', element: <HinhTru2D /> },
          { path: 'hinh-vuong', element: <HinhVuong2D /> },
          { path: 'hinh-tam-giac', element: <HinhTamGiac2D /> },
        ],
      },
      {
        path: 'hinh-hoc-khong-gian',
        children: [
          { element: <BieuDienHinhHocKhongGian />, index: true },
          { path: 'hinh-cau', element: <HinhCau /> },
          { path: 'hinh-chop', element: <HinhChop /> },
          { path: 'hinh-lap-phuong', element: <HinhLapPhuong /> },
          { path: 'hinh-non', element: <HinhNon /> },
          { path: 'hinh-tru', element: <HinhTru /> },
          { path: 'mat-phang', element: <MatPhang /> },
        ],
      },
      {
        path: 'ly-thuyet',
        children: [
          { element: <ThongKeVaXacXuat />, index: true },
          { path: 'thong-ke-va-xac-suat', element: <ThongKeVaXacXuat /> },
          { path: 'dai-so-va-giai-tich', element: <DaiSoVaGiaiTich /> },
          { path: 'hinh-hoc-va-do-luong', element: <HinhHocVaDoLuong /> },
        ],
      },
      {
        path: 'thuc-hanh',
        children: [
          { element: <BieuDienHinhHocPhang />, index: true },
          { path: 'bieu-dien-hinh-hoc-phang', element: <BieuDienHinhHocPhang /> },
          { path: 'bieu-dien-hinh-hoc-khong-gian', element: <BieuDienHinhHocKhongGian /> },
        ],
      },
      {
        path: 'tro-choi',
        children: [
          { element: <ThuThachTinhNham />, index: true },
          { path: 'thu-thach-tinh-nham', element: <ThuThachTinhNham /> },
          { path: 'giai-ma-o-chu', element: <GiaiMaOchu /> },
        ],
      },
    ],
  },
];
