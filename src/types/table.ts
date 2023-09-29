export type TableContextProps = {
  table_data: any; // dữ liệu trong bản
  table_header: any; // header của bảng
  table_rows: any; // dữ liệu hàng của bản
  table_row_selected: any; // các dữ liệu của hàng được chọn
  table_import_data: any; // dữ liệu import
  table_export_data: any; // dữ liệu export
  table_configs: {
    table_name: string; // tên của bảng
    access_role: string; // tên quyền truy cập bảng
    //
    filter_by_date: boolean; // cho phép filter theo ngày
    filter_by_type: boolean; // cho phép filter theo loại
    filter_by_search: boolean; // cho phép filter theo tên
    //
    add_data: boolean; // cho phép thêm mới
    chart_data: boolean; // cho phép xem biểu đồ dữ liệu
    access_data: boolean; // cho phép chia sẻ quyền truy cập dữ liệu
    history_data: boolean; // cho phép xem nhật ký chỉnh sửa dữ liệu
    album_data: boolean; // cho phép hiển thị album ảnh, video
    import_data: boolean; // cho phép import dữ liệu
    note_table: boolean; // cho phép ghi chú dữ liệu
    check_data: boolean; // cho phép kiểm tra dữ liệu có lỗi
    report_data: boolean; // cho phép tạo báo cáo tồn kho
    search_barcode: boolean; // cho phép tìm kiếm bằng mã vạch
    export_data_pdf: boolean; // cho phép export dữ liệu pdf
    export_data_json: boolean; // cho phép export dữ liệu json
    export_data_excel: boolean; // cho phép export dữ liệu excel
    //
    table_selected: boolean; // cho phép chọn hàng của bảng
    delete_all: boolean; // cho phép xoá tất cả
    //
    watch_row: boolean; // cho phép xem hàng
    print_row: boolean; // cho phép in hàng
    change_status_row: boolean; // cho phép đổi trạng thái
    watch_history: boolean; // cho phép xem lịch sử chỉnh sửa
    edit_row: boolean; // cho phép sửa hàng
    delete_row: boolean; // cho phép xoá hàng
    //
    delete_api: string; // api xoá
    delete_many_api: string; // api xoá nhiều
    create_many_api: string; // api thêm nhiều
  };
  //
  table_open_form: boolean; // mở form add, edit
  //
  setTableValue: (name: string, value: any) => void; // set giá trị provider
  onCreateNewRow: (newRow: any) => void; // handle thêm hàng mới vào bảng
  onCreateNewManyRow: (newRow: any) => void; // handle thêm nhiều hàng mới vào bảng
  onUpdateRow: (updatedRow: any) => void; // handle cập nhật một hàng trong bảng
};

export type FiltersTableProps = {
  name: string;
  type: string[];
  publisher: string[];
  rePublic: string[];
  language: string[];
  field: string[];
  startDate: Date | null;
  endDate: Date | null;
};
