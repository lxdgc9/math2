import { useMemo } from 'react';
// routes
import { paths } from 'src/routes/paths';
// locales
import { useLocales } from 'src/locales';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  bieu_do: icon('bieu_do'),
  tan_so: icon('tan_so'),
  xac_suat: icon('xac_suat'),
  thong_ke: icon('thong_ke'),
  dai_so: icon('dai_so'),
  do_thi: icon('do_thi'),
  hinh_hoc_phang: icon('hinh_hoc_phang'),
  hinh_hoc_khong_gian: icon('hinh_hoc_khong_gian'),
  ly_thuyet: icon('ly_thuyet'),
  thuc_hanh: icon('thuc_hanh'),
  tro_choi: icon('tro_choi'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useLocales();

  const data = useMemo(
    () => [
      {
        subheader: t('Thống kê & xác xuất'),

        items: [
          {
            title: t('Biểu đồ'),
            path: paths.home.bieu_do.root,
            icon: ICONS.bieu_do,
            children: [
              {
                title: t('Biểu đồ tranh'),
                path: paths.home.bieu_do.bieu_do_tranh,
              },
              {
                title: t('Biểu đồ đoạn thẳng'),
                path: paths.home.bieu_do.bieu_do_doan_thang,
              },
              {
                title: t('Biểu đồ đường'),
                path: paths.home.bieu_do.bieu_do_duong,
              },
              {
                title: t('Biểu đồ miền'),
                path: paths.home.bieu_do.bieu_do_mien,
              },
              {
                title: t('Biểu đồ cột đơn'),
                path: paths.home.bieu_do.bieu_do_cot_don,
              },
              {
                title: t('Biểu đồ cột kép'),
                path: paths.home.bieu_do.bieu_do_cot_kep,
              },
              {
                title: t('Biểu đồ cột chồng'),
                path: paths.home.bieu_do.bieu_do_cot_chong,
              },
              {
                title: t('Biểu đồ quạt'),
                path: paths.home.bieu_do.bieu_do_quat,
              },
              {
                title: t('Biểu đồ diện tích'),
                path: paths.home.bieu_do.bieu_do_dien_tich,
              },
            ],
          },
          {
            title: t('Tần số'),
            path: paths.home.tan_so.root,
            icon: ICONS.tan_so,
            children: [
              {
                title: t('Bảng tần số'),
                path: paths.home.tan_so.bang_tan_so,
              },
            ],
          },
          {
            title: t('Xác xuất'),
            path: paths.home.xac_suat.root,
            icon: ICONS.xac_suat,
            children: [
              {
                title: t('Phân phối chuẩn'),
                path: paths.home.xac_suat.phan_phoi_chuan,
              },
              {
                title: t('Phân phối Student'),
                path: paths.home.xac_suat.phan_phoi_student,
              },
              {
                title: t('Phân phối Chi-bình phương'),
                path: paths.home.xac_suat.phan_phoi_chi_binh_phuong,
              },

              {
                title: t('Phân phối Cô-si'),
                path: paths.home.xac_suat.phan_phoi_co_si,
              },
              {
                title: t('Phân phối Weibull'),
                path: paths.home.xac_suat.phan_phoi_weibull,
              },
              {
                title: t('Phân phối Gamma'),
                path: paths.home.xac_suat.phan_phoi_gamma,
              },
              {
                title: t('Phân phối Log-Normal'),
                path: paths.home.xac_suat.phan_phoi_log_normal,
              },
              {
                title: t('Phân phối Logistic'),
                path: paths.home.xac_suat.phan_phoi_logistic,
              },
              {
                title: t('Phân phối nhị thức'),
                path: paths.home.xac_suat.phan_phoi_nhi_thuc,
              },
              {
                title: t('Phân phối Pascal'),
                path: paths.home.xac_suat.phan_phoi_pascal,
              },
              {
                title: t('Phân phối Poát-xông'),
                path: paths.home.xac_suat.phan_phoi_poat_xong,
              },
              {
                title: t('Phân phối siêu bội'),
                path: paths.home.xac_suat.phan_phoi_sieu_boi,
              },
            ],
          },
          {
            title: t('Thống kê'),
            path: paths.home.thong_ke.root,
            icon: ICONS.thong_ke,
            children: [
              {
                title: t('Đa thức nội suy'),
                path: paths.home.thong_ke.da_thuc_noi_suy,
              },
              {
                title: t('Độ lệch chuẩn'),
                path: paths.home.thong_ke.do_lech_chuan,
              },
              {
                title: t('Đường hồi quy'),
                path: paths.home.thong_ke.duong_hoi_quy,
              },
              {
                title: t('Hệ số tương quan'),
                path: paths.home.thong_ke.he_so_tuong_quan,
              },
              {
                title: t('Hồi quy'),
                path: paths.home.thong_ke.hoi_quy,
              },
              {
                title: t('Kiểm định'),
                path: paths.home.thong_ke.kiem_dinh,
              },
              {
                title: t('Mẫu và phương sai'),
                path: paths.home.thong_ke.mau_va_phuong_sai,
              },
              {
                title: t('Trung bình và trung vị'),
                path: paths.home.thong_ke.trung_binh_va_trung_vi,
              },
              {
                title: t('Xích ma'),
                path: paths.home.thong_ke.xich_ma,
              },
            ],
          },
        ],
      },
      {
        subheader: t('ĐẠI SỐ & GIẢI TÍCH'),

        items: [
          {
            title: t('Đại số'),
            path: paths.home.dai_so.root,
            icon: ICONS.dai_so,
            children: [
              {
                title: t('Chuyển cơ số'),
                path: paths.home.dai_so.chuyen_co_so,
              },
              {
                title: t('Giải phương trình'),
                path: paths.home.dai_so.giai_phuong_trinh,
              },
              {
                title: t('Khai triển phương trình'),
                path: paths.home.dai_so.khai_trien_phuong_trinh,
              },
              {
                title: t('Mẫu số chung'),
                path: paths.home.dai_so.mau_so_chung,
              },
              {
                title: t('Phép chia và số dư'),
                path: paths.home.dai_so.phep_chia_va_so_du,
              },
              {
                title: t('Số nguyên tố'),
                path: paths.home.dai_so.so_nguyen_to,
              },
              {
                title: t('Tích vector'),
                path: paths.home.dai_so.tich_vector,
              },
              {
                title: t('Thừa số và số vô tỷ'),
                path: paths.home.dai_so.thua_so_va_so_vo_ty,
              },
              {
                title: t('Ước số và bội số'),
                path: paths.home.dai_so.uoc_so_va_boi_so,
              },
            ],
          },
          {
            title: t('Đồ thị'),
            path: paths.home.do_thi.root,
            icon: ICONS.do_thi,
            children: [
              {
                title: t('Đồ thị hàm số bậc 2'),
                path: paths.home.do_thi.do_thi_ham_so_bac_2,
              },
              {
                title: t('Đồ thị hàm số bậc 3'),
                path: paths.home.do_thi.do_thi_ham_so_bac_3,
              },
              {
                title: t('Đồ thị hàm số căn bậc'),
                path: paths.home.do_thi.do_thi_ham_so_can_bac,
              },
              {
                title: t('Đồ thị hàm số giải thức'),
                path: paths.home.do_thi.do_thi_ham_so_giai_thuc,
              },
              {
                title: t('Đồ thị hàm số giới hạn'),
                path: paths.home.do_thi.do_thi_ham_so_gioi_han,
              },
              {
                title: t('Đồ thị hàm số Logarit'),
                path: paths.home.do_thi.do_thi_ham_so_logarit,
              },
              {
                title: t('Đồ thị hàm số lượng giác'),
                path: paths.home.do_thi.do_thi_ham_so_luong_giac,
              },
              {
                title: t('Đồ thị hàm số Modulo'),
                path: paths.home.do_thi.do_thi_ham_so_modulo,
              },
              {
                title: t('Đồ thị hàm số mũ'),
                path: paths.home.do_thi.do_thi_ham_so_mu,
              },
              {
                title: t('Đồ thị hàm số tuyến tính'),
                path: paths.home.do_thi.do_thi_ham_so_tuyen_tinh,
              },
            ],
          },
        ],
      },
      {
        subheader: t('HÌNH HỌC & ĐO LƯỜNG'),

        items: [
          {
            title: t('Mặt phẳng'),
            path: paths.home.hinh_hoc_phang.root,
            icon: ICONS.hinh_hoc_phang,
            children: [
              {
                title: t('Các dạng đường thẳng'),
                path: paths.home.hinh_hoc_phang.cac_dang_duong_thang,
              },
              {
                title: t('Đa giác'),
                path: paths.home.hinh_hoc_phang.da_giac,
              },
              {
                title: t('Điểm và đoạn thẳng'),
                path: paths.home.hinh_hoc_phang.diem_va_doan_thang,
              },
              {
                title: t('Đường tròn'),
                path: paths.home.hinh_hoc_phang.duong_tron,
              },
              {
                title: t('Góc và phép quay'),
                path: paths.home.hinh_hoc_phang.goc_va_phep_quay,
              },
              {
                title: t('Hình bình hành'),
                path: paths.home.hinh_hoc_phang.hinh_binh_hanh,
              },
              {
                title: t('Hình chữ nhật'),
                path: paths.home.hinh_hoc_phang.hinh_chu_nhat,
              },
              {
                title: t('Hình hộp'),
                path: paths.home.hinh_hoc_phang.hinh_hop,
              },
              {
                title: t('Hình thoi'),
                path: paths.home.hinh_hoc_phang.hinh_thoi,
              },
              {
                title: t('Hình tròn'),
                path: paths.home.hinh_hoc_phang.hinh_tron,
              },
              {
                title: t('Hình trụ'),
                path: paths.home.hinh_hoc_phang.hinh_tru,
              },
              {
                title: t('Hình vuông'),
                path: paths.home.hinh_hoc_phang.hinh_vuong,
              },
              {
                title: t('Hình tam giác'),
                path: paths.home.hinh_hoc_phang.hinh_tam_giac,
              },
            ],
          },
          {
            title: t('Không gian'),
            path: paths.home.hinh_hoc_khong_gian.root,
            icon: ICONS.hinh_hoc_khong_gian,
            children: [
              {
                title: t('Hình cầu'),
                path: paths.home.hinh_hoc_khong_gian.hinh_cau,
              },
              {
                title: t('Hình chóp'),
                path: paths.home.hinh_hoc_khong_gian.hinh_chop,
              },
              {
                title: t('Hình lập phương'),
                path: paths.home.hinh_hoc_khong_gian.hinh_lap_phuong,
              },
              {
                title: t('Hình nón'),
                path: paths.home.hinh_hoc_khong_gian.hinh_non,
              },
              {
                title: t('Hình trụ'),
                path: paths.home.hinh_hoc_khong_gian.hinh_tru,
              },
              {
                title: t('Mặt phẳng'),
                path: paths.home.hinh_hoc_khong_gian.mat_phang,
              },
            ],
          },
        ],
      },
      {
        subheader: t('PHƯƠNG PHÁP HỌC TẬP'),

        items: [
          {
            title: t('Lý thuyết'),
            path: paths.home.ly_thuyet.root,
            icon: ICONS.ly_thuyet,
            children: [
              {
                title: t('Thống kê và xác suất'),
                path: paths.home.ly_thuyet.thong_ke_va_xac_suat,
              },
              {
                title: t('Đại số và giải tích'),
                path: paths.home.ly_thuyet.dai_so_va_giai_tich,
              },
              {
                title: t('Hình học và đo lường'),
                path: paths.home.ly_thuyet.hinh_hoc_va_do_luong,
              },
            ],
          },
          {
            title: t('Thực hành'),
            path: paths.home.thuc_hanh.root,
            icon: ICONS.thuc_hanh,
            children: [
              {
                title: t('Biểu diễn hình học phẳng'),
                path: paths.home.thuc_hanh.bieu_dien_hinh_hoc_phang,
              },
              {
                title: t('Biểu diễn hình học không gian'),
                path: paths.home.thuc_hanh.bieu_dien_hinh_hoc_khong_gian,
              },
            ],
          },
          {
            title: t('Trò chơi'),
            path: paths.home.tro_choi.root,
            icon: ICONS.tro_choi,
            children: [
              {
                title: t('Thử thách tính nhẩm'),
                path: paths.home.tro_choi.thu_thach_tinh_nham,
              },
              {
                title: t('Giải mã ô chữ Sudoku'),
                path: paths.home.tro_choi.giai_ma_o_chu,
              },
            ],
          },
        ],
      },
    ],
    [t]
  );

  return data;
}
