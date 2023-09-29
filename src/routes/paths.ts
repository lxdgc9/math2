// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  AUTH_DEMO: '/auth-demo',
  HOME: '/home',
};

// ----------------------------------------------------------------------

export const paths = {
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/login`,
    },
  },

  // HOME
  home: {
    root: ROOTS.HOME,
    homepage: ROOTS.HOME,
    bieu_do: {
      root: `${ROOTS.HOME}/bieu-do`,
      bieu_do_duong: `${ROOTS.HOME}/bieu-do/bieu-do-duong`,
      bieu_do_mien: `${ROOTS.HOME}/bieu-do/bieu-do-mien`,
      bieu_do_cot_don: `${ROOTS.HOME}/bieu-do/bieu-do-cot-don`,
      bieu_do_cot_kep: `${ROOTS.HOME}/bieu-do/bieu-do-cot-kep`,
      bieu_do_cot_chong: `${ROOTS.HOME}/bieu-do/bieu-do-cot-chong`,
      bieu_do_quat: `${ROOTS.HOME}/bieu-do/bieu-do-quat`,
      bieu_do_dien_tich: `${ROOTS.HOME}/bieu-do/bieu-do-dien-tich`,
    },
    xac_suat: {
      root: `${ROOTS.HOME}/xac-suat`,
      phan_phoi_chuan: `${ROOTS.HOME}/xac-suat/phan-phoi-chuan`,
      phan_phoi_student: `${ROOTS.HOME}/xac-suat/phan-phoi-student`,
      phan_phoi_chi_binh_phuong: `${ROOTS.HOME}/xac-suat/phan-phoi-chi-binh-phuong`,
      phan_phoi_f: `${ROOTS.HOME}/xac-suat/phan-phoi-f`,
      phan_phoi_mu: `${ROOTS.HOME}/xac-suat/phan-phoi-mu`,
      phan_phoi_co_si: `${ROOTS.HOME}/xac-suat/phan-phoi-co-si`,
      phan_phoi_weibull: `${ROOTS.HOME}/xac-suat/phan-phoi-weibull`,
      phan_phoi_gamma: `${ROOTS.HOME}/xac-suat/phan-phoi-gamma`,
      phan_phoi_log_normal: `${ROOTS.HOME}/xac-suat/phan-phoi-log-normal`,
      phan_phoi_logistic: `${ROOTS.HOME}/xac-suat/phan-phoi-logistic`,
      phan_phoi_nhi_thuc: `${ROOTS.HOME}/xac-suat/phan-phoi-nhi-thuc`,
      phan_phoi_pascal: `${ROOTS.HOME}/xac-suat/phan-phoi-pascal`,
      phan_phoi_poat_xong: `${ROOTS.HOME}/xac-suat/phan-phoi-poat-xong`,
      phan_phoi_sieu_boi: `${ROOTS.HOME}/xac-suat/phan-phoi-sieu-boi`,
    },
    thong_ke: {
      root: `${ROOTS.HOME}/thong-ke`,
      da_thuc_noi_suy: `${ROOTS.HOME}/thong-ke/da-thuc-noi-suy`,
      do_lech_chuan: `${ROOTS.HOME}/thong-ke/do-lech-chuan`,
      duong_hoi_quy: `${ROOTS.HOME}/thong-ke/duong-hoi-quy`,
      he_so_tuong_quan: `${ROOTS.HOME}/thong-ke/he-so-tuong-quan`,
      hoi_quy: `${ROOTS.HOME}/thong-ke/hoi-quy`,
      kiem_dinh: `${ROOTS.HOME}/thong-ke/kiem-dinh`,
      mau_va_phuong_sai: `${ROOTS.HOME}/thong-ke/mau-va-phuong-sai`,
      trung_binh_va_trung_vi: `${ROOTS.HOME}/thong-ke/trung-binh-va-trung-vi`,
      xich_ma: `${ROOTS.HOME}/thong-ke/xich-ma`,
    },
    dai_so: {
      root: `${ROOTS.HOME}/dai-so`,
      chuyen_co_so: `${ROOTS.HOME}/dai-so/chuyen-co-so`,
      gtln_gtnn: `${ROOTS.HOME}/dai-so/gia-tri-lon-nhat-va-gia-tri-nho-nhat`,
      giai_phuong_trinh: `${ROOTS.HOME}/dai-so/giai-phuong-trinh`,
      khai_trien_phuong_trinh: `${ROOTS.HOME}/dai-so/khai-trien-phuong-trinh`,
      mau_so_chung: `${ROOTS.HOME}/dai-so/mau-so-chung`,
      phep_chia_va_so_du: `${ROOTS.HOME}/dai-so/phep-chia-va-so-du`,
      so_nguyen_to: `${ROOTS.HOME}/dai-so/so-nguyen-to`,
      tich_vector: `${ROOTS.HOME}/dai-so/tich-vector`,
      thua_so_va_so_vo_ty: `${ROOTS.HOME}/dai-so/thua-so-va-so-vo-ty`,
      uoc_so_va_boi_so: `${ROOTS.HOME}/dai-so/uoc-so-va-boi-so`,
    },
    do_thi: {
      root: `${ROOTS.HOME}/do-thi`,
      do_thi_ham_so_bac_2: `${ROOTS.HOME}/do-thi/do-thi-ham-so-bac-2`,
      do_thi_ham_so_bac_3: `${ROOTS.HOME}/do-thi/do-thi-ham-so-bac-3`,
      do_thi_ham_so_can_bac: `${ROOTS.HOME}/do-thi/do-thi-ham-so-can-bac`,
      do_thi_ham_so_giai_thuc: `${ROOTS.HOME}/do-thi/do-thi-ham-so-giai-thuc`,
      do_thi_ham_so_gioi_han: `${ROOTS.HOME}/do-thi/do-thi-ham-so-gioi-han`,
      do_thi_ham_so_logarit: `${ROOTS.HOME}/do-thi/do-thi-ham-so-logarit`,
      do_thi_ham_so_luong_giac: `${ROOTS.HOME}/do-thi/do-thi-ham-so-luong-giac`,
      do_thi_ham_so_modulo: `${ROOTS.HOME}/do-thi/do-thi-ham-so-modulo`,
      do_thi_ham_so_mu: `${ROOTS.HOME}/do-thi/do-thi-ham-so-mu`,
      do_thi_ham_so_tuyen_tinh: `${ROOTS.HOME}/do-thi/do-thi-ham-so-tuyen-tinh`,
    },
    hinh_hoc_phang: {
      root: `${ROOTS.HOME}/hinh-hoc-phang`,
      cac_dang_duong_thang: `${ROOTS.HOME}/hinh-hoc-phang/cac-dang-duong-thang`,
      da_giac: `${ROOTS.HOME}/hinh-hoc-phang/da-giac`,
      diem_va_doan_thang: `${ROOTS.HOME}/hinh-hoc-phang/diem-va-doan-thang`,
      duong_tron: `${ROOTS.HOME}/hinh-hoc-phang/duong-tron`,
      goc_va_phep_quay: `${ROOTS.HOME}/hinh-hoc-phang/goc-va-phep-quay`,
    },
    hinh_hoc_khong_gian: {
      root: `${ROOTS.HOME}/hinh-hoc-khong-gian`,
      hinh_cau: `${ROOTS.HOME}/hinh-hoc-khong-gian/hinh-cau`,
      hinh_chop: `${ROOTS.HOME}/hinh-hoc-khong-gian/hinh-chop`,
      hinh_lap_phuong: `${ROOTS.HOME}/hinh-hoc-khong-gian/hinh-lap-phuong`,
      hinh_non: `${ROOTS.HOME}/hinh-hoc-khong-gian/hinh-non`,
      hinh_tru: `${ROOTS.HOME}/hinh-hoc-khong-gian/hinh-tru`,
      mat_phang: `${ROOTS.HOME}/hinh-hoc-khong-gian/mat-phang`,
    },
    ly_thuyet: {
      root: `${ROOTS.HOME}/ly-thuyet`,
      thong_ke_va_xac_suat: `${ROOTS.HOME}/ly-thuyet/thong-ke-va-xac-suat`,
      dai_so_va_giai_tich: `${ROOTS.HOME}/ly-thuyet/dai-so-va-giai-tich`,
      hinh_hoc_va_do_luong: `${ROOTS.HOME}/ly-thuyet/hinh-hoc-va-do-luong`,
    },
    thuc_hanh: {
      root: `${ROOTS.HOME}/thuc-hanh`,
      bieu_dien_hinh_hoc_phang: `${ROOTS.HOME}/thuc-hanh/bieu-dien-hinh-hoc-phang`,
      bieu_dien_hinh_hoc_khong_gian: `${ROOTS.HOME}/thuc-hanh/bieu-dien-hinh-hoc-khong-gian`,
    },
    tro_choi: {
      root: `${ROOTS.HOME}/tro-choi`,
      thu_thach_tinh_nham: `${ROOTS.HOME}/tro-choi/thu-thach-tinh-nham`,
      giai_ma_o_chu: `${ROOTS.HOME}/tro-choi/giai-ma-o-chu`,
    },
  },
};
