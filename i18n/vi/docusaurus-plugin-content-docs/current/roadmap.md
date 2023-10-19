---
sidebar_position: 5
---

# Roadmap

## **Giai đoạn 1 - Giai đoạn Newton**

Công nghệ blockchain thể hiện đặc tính tăng chi phí biên tăng. Do đó, việc sử dụng Layer1 cho hàng hóa và dịch vụ không kinh tế, vì blockchain vượt trội trong việc phát hành tài sản và giải quyết (xem bài viết tham khảo).

ArithFi cam kết tạo ra một lớp tài sản trên chuỗi mới. Trong giai đoạn ban đầu của dự án, chúng tôi sẽ cung cấp dịch vụ giao dịch bằng máy chủ và sử dụng blockchain để phát hành tài sản và giải quyết. Tiếp cận này giảm ngưỡng vào cho người dùng sớm, mang lại cho họ trải nghiệm người dùng tương tự như sàn giao dịch tập trung.

Trong giai đoạn đầu tiên, chúng tôi chủ yếu cung cấp dịch vụ giao dịch tương lai, và do đặc điểm của mô hình SCP, chúng tôi có thể đưa một số Tài sản Thế giới Thực (RWAs) vào một cách hiệu quả về chi phí, đáp ứng nhu cầu của nhiều người dùng và lan truyền triết lý dự án đến nhiều người dùng hơn.

## **Giai đoạn 2 - Giai đoạn Euler**

Khi số người dùng hoạt động hàng ngày vượt quá 1000, chúng tôi sẽ khởi đầu kế hoạch Layer2 của mình. ArithFi sẽ xây dựng một Layer2 dành riêng trên Ethereum để nâng cao tính phân cấp và sự chống lại sự kiểm duyệt.

Layer2 của ArithFi sẽ sử dụng công nghệ Layer2 hỗ trợ các kênh riêng. Các kênh này đảm bảo rằng giao dịch có thể được xác nhận trong các khối cụ thể, mang lại sự chắc chắn cho thời gian giải quyết của các sản phẩm tài chính trên chuỗi. Các sản phẩm tài chính trên chuỗi hiện có thường gặp vấn đề về thời gian giải quyết không chắc chắn, do các giao dịch cần phải được xác nhận có thể bị trì hoãn do tắc nghẽn hoặc tấn công độc hại. ArithFi nhắm vào giải quyết vấn đề này với giải pháp Layer2 trong nhà, đặt nó làm cơ sở quan trọng cho giao dịch tài sản dựa trên chuỗi.

## **Giai đoạn 3 - Giai đoạn Gauss**

Sau khi xây dựng Layer2 của ArithFi, chúng tôi sẽ tạo M-Function dựa trên các hợp đồng thông minh. M-Function là một thư viện chức năng kết hợp tương tự Máy ảo Ethereum (EVM). Mỗi M-Function được cấu hình trong một hợp đồng thông minh, cho phép bất kỳ ai xây dựng các sản phẩm tài chính khác nhau, chẳng hạn như tương lai, tùy chọn và các sản phẩm phái sinh khác, dựa trên M-Function và luồng thông tin từ oracles.

M-Function thừa hưởng bản chất của Ethereum. EVM về cơ bản là sự kết hợp của mã cơ bản, có thể được triệu hồi bằng cách trả một số lượng gas nhất định. Thu nhập cho mỗi sản phẩm trên M-Function có thể được xem xét là sự kết hợp tuyến tính của một số hàm thu nhập cơ bản. Các hàm thu nhập cơ bản này có thể được thu được bằng cách trả một chi phí nhất định, đó là giá trị chiết khấu của thu nhập này. Logic cơ bản của M-Function tương tự như EVM, điều này có nghĩa rằng tất cả các phát triển EVM có thể được triển khai trên M-Function.

Các sản phẩm tài chính được xây dựng trên M-Function lý thuyết có cung cấp vô hạn, đáp ứng nhu cầu của nhiều người dùng thuộc thị trường tiềm năng và tạo ra các sản phẩm phái sinh tài chính mà không có hoặc hiếm thấy trên thị trường.

Xem xét đến các hạn chế về tài nguyên của các hợp đồng thông minh, chúng tôi sẽ xác định một số cụm hàm cơ bản một cách lựa chọn. Nói chung, các hàm đa thức, hàm mũ, hàm logarithm và hầu hết các hàm giá trị thường được sử dụng trong thực tế. Chúng tôi sẽ thiết kế các cụm hàm cơ bản dựa trên các hàm thường sử dụng này. Mỗi hàm cơ bản tương ứng với một chi phí ngẫu nhiên, phải trả khi gọi hàm đó. Bằng cách kết hợp
