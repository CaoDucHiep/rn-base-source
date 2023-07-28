// Đăng nhập
export const API_POST_LOGIN = `api/Sys_Auth/login`
export const API_POST_GET_PERMISSION_BY_USERNAME = `api/Sys_User/GetPermissionByUserName`

// Password
export const API_GET_VERIFY_OLD_PASS = `api/Sys_User/VerifyPassword`
export const API_POST_CHANGE_PASS = `api/Sys_User/ChangePassword`

// ==== Cát Bà ====
// Kiểm vé
export const API_POST_CHECK_TICKET = `api/Cat_ControlDoor/CheckCodeByApp`

// Bán vé
export const API_POST_TICKET_TYPE_GET_ALL = `api/Ticket_Type/GetAll`
export const API_POST_TICKET_TYPE_GET_ALL_BY_USER_HD = `api/Ticket_type/GetTicketByUser`
// Luu ve
export const API_POST_SALE_TICKET = `api/Ticket_Sale/SaveTicketDetail`
// Lay chi tiet ve
export const API_GET_TICKET_FOR_PRINT = `api/Ticket_Sale/GetTicketBillById`
// Lay ds phuogn tien
export const API_POST_VEHICLE_GET_ALL = `api/Vel_Vehicle/GetAllPaging`

export const API_POST_PRINT_DATA = `api/List_Ticket_Bill/GetById`
export const API_POST_TICKET_BILL_GET_ALL = `api/List_Ticket_Bill/GetAllPaging`

// Mở rộng: Xả cổng
export const API_GET_GATES_GET_ALL = `api/Cat_StatusControlDoor/GetAll`
export const API_POST_GATES_UPDATE_STATUS = `api/Cat_StatusControlDoor/UpdateStautsControlDoorAsync`

// Quan ly ve
export const API_POST_TICKET_BILL_GET_BY_ID = `api/List_Ticket_Bill/GetById`
export const API_POST_CANCEL_TICKETS = `api/Ticket_Sale/CancelTickets`

// Phương tiện
export const API_GET_VEHICLE_TYPE_GET_ALL = `api/Vel_TypeVehicle/GetAll`
export const API_GET_VEHICLE_STATUS_GET_ALL = `api/Vel_StatusVehicle/GetAll`
export const API_POST_VEHICLE_ADD = `api/Vel_Vehicle/Create`
export const API_POST_VEHICLE_CHECK_STATUS = `api/Vel_Vehicle/CheckTrungMaPhuongTien`

// Khách hàng - GetAll
export const API_GET_CUSTOMER_GET_ALL = `api/Cat_Customer/GetAll`

// Nhân viên - GetAll
export const API_GET_EMPLOYEE_GET_ALL = `api/Sys_User/GetAll`

// Báo cáo
export const API_POST_REPORT_BY_CUSTOMER = `api/Report/GetDataForReportCustomerAsync`
export const API_POST_REPORT_BY_TIME = `api/Report/GetDataForReportTimeAsync`
export const API_POST_REPORT_BY_VEHICLE = `api/Report/GetDataForReportVehicleAsync`
export const API_POST_REPORT_BY_USER = `api/Report/GetDataForReportByUserAsync`

// Lưu và in vé gửi xe
export const API_POST_SAVE_AND_PRINT_TICKET_PARKING = ``

// ==== Hòn Dấu ====
// Report by User (Employee)
export const API_POST_GET_REPORT_BY_EMPLOYEE = `api/Report/ReportByUser`
// Get all User (Employee)
export const API_GET_GET_ALL_USER = `api/Sys_User/GetAll`
// Report by ticket type
export const API_POST_GET_REPORT_BY_TICKET_TYPE_HD = `api/Report/ReportByTicketType`
// Report by ticket revenue (Cá nhân)
export const API_POST_GET_REPORT_BY_REVENUE_HD = `api/Report/ReportRevenue`
export const API_POST_GET_REPORT_BY_REVENUE_PAGING = `api/Report/ReportRevenuePaging`

// ==== Vé Cát Hải ====
// Lấy tất cả địa điểm (Không cần token)
export const API_GET_LOCATION_CH = `api/Sys_User/GetDepartment`
// save ticket CH
export const API_POST_SAVE_TICKET_CH = `api/Ticket_CatHai/SaveTicketDetail`
// Get bill detail
export const API_GET_TICKET_BILL_DETAIL = `api/Ticket_CatHai/GetTicketBillById`
// Report
export const API_POST_REPORT_BY_USER_CH = `api/Ticket_CatHai/GetAllBillPaging`
// BKH
export const API_POST_BO_KY_HIEU = `api/Ticket_CatHai/GetListForHoaDon`

// ==== Vé xe Đồ Sơn ====
// ==SALE==
export const API_GET_TICKET_TYPE_DS = `api/Ticket_Type/GetTicketByUser`
export const API_POST_SAVE_TICKET_DS = `api/Ticket_Sale/SaveTicketDetail`
export const API_POST_GET_TICKET_DETAIL_DS = `api/Ticket_Sale/GetTicketBillById`
// API check out danh sách vé theo số vé
export const API_POST_GET_TICKET_CHECKOUT_DS = `api/Ticket_Sale/GetDataCheckoutVehicle`
// Xuất hóa đơn
export const API_POST_GET_BILL_CHECKOUT_DS = `api/Ticket_Sale/VehicleCheckout`
// ==REPORT==
// Report by User (Employee)
export const API_POST_GET_REPORT_BY_EMPLOYEE_DS = `api/Report/ReportByUser`
// Get all User (Employee)
export const API_GET_GET_ALL_USER_DS = `api/Sys_User/GetAll`
// Report by ticket type
export const API_POST_GET_REPORT_BY_TICKET_TYPE_DS = `api/Report/ReportByTicketType`
// Report by ticket revenue (Cá nhân)
export const API_POST_GET_REPORT_BY_REVENUE_DS = `api/Report/ReportRevenue`
