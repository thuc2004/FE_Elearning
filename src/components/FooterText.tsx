import React from "react";
import img from "../assets/img/dk.png";
import img1 from "../assets/img/1.png";
const FooterText = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start">
          {/* Logo và Thông tin công ty */}
          <div>
            <img src={img1} alt="Vovinam" className="w-40 h-20" />
            <p className="font-bold">Công ty Cổ phần ABC</p>
            <p>51 Quan Nhân, Thanh Xuân, Hà Nội</p>
            <p>0321 654 987</p>
            <p>info@domain.vn</p>
            <p>1234567890</p>
          </div>

          {/* Về chúng tôi */}
          <div>
            <h4 className="font-semibold mb-2">VỀ CHÚNG TÔI</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Cơ hội hợp tác
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Quy chế hoạt động
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Quy định đóng gói hàng hóa
                </a>
              </li>
            </ul>
          </div>

          {/* Hỗ trợ khách hàng */}
          <div>
            <h4 className="font-semibold mb-2">HỖ TRỢ KHÁCH HÀNG</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Gửi yêu cầu hỗ trợ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Hướng dẫn đặt hàng
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Chính sách đổi trả
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Chính sách vận chuyển
                </a>
              </li>
            </ul>
          </div>

          {/* Hợp tác và liên kết */}
          <div>
            <h4 className="font-semibold mb-2">HỢP TÁC VÀ LIÊN KẾT</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Quy chế hoạt động TMDT
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Bán hàng cùng chúng tôi
                </a>
              </li>
            </ul>
            <img
              src={img}
              alt="Đăng ký Bộ Công Thương"
              className="mb-4 w-40 h-auto"
            />
          </div>
        </div>

        {/* Phần bản quyền */}
        <div className="mt-8 text-center">
          <p className="text-gray-500">
            &copy; 2022 congbtyabc.vn. Bản quyền thuộc sở hữu của Tổng Công Ty
            Cổ Phần ABC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterText;
