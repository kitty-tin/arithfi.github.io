---
slug: arithfi-article-Nov27
title: Điều kiện tiên quyết cho sự hiệu quả của Tài chính Thuật toán 
tags: ['Article']

---

![file](https://nftstorage.link/ipfs/bafkreiclrtwbfuqegljizwklkyxwgfoazfb66umu2eattqxzvkccq3cjve)

Đa số mọi người hy vọng rằng các dịch vụ và sản phẩm tài chính có thể hoàn toàn dựa vào thuật toán trên blockchain để tạo ra. Tầm nhìn này luôn thu hút các doanh nhân trong lĩnh vực blockchain, bao gồm các dự án như stablecoin thuật toán, tự động market maker, vay mượn thuật toán, v.v. Tuy nhiên, những dự án này vẫn chưa thể được coi là thành công trong tài chính thuật toán, không chỉ vì quy mô hạn chế, mà còn vì thiết kế nội bộ của chúng tồn tại một số vấn đề. Dưới đây là tóm tắt ngắn gọn về những vấn đề này.

Đầu tiên, từ góc độ thiết kế hệ thống, nhiều dự án quá đơn giản. Chúng chỉ dựa vào mối quan hệ chức năng để xác định cơ sở của toàn bộ dự án, mà không coi trọng cấu trúc trò chơi xoay quanh dự án. Ví dụ, thiết kế của stablecoin Dai chỉ liên quan đến chức năng thế chấp đơn giản. Mặc dù bề nổi, mọi người đều theo cùng một tỷ lệ giảm giá để thế chấp Ethereum, nhưng thực tế, Dai được tạo ra từ việc thế chấp vào các thời điểm khác nhau có cấu trúc rủi ro khác nhau. Nếu có một hợp đồng Dai thứ hai xuất hiện, điều này có thể dẫn đến việc mọi người rời bỏ dự án trước đó. Thiết kế tài chính thuật toán chính xác nên xây dựng toàn bộ hệ thống thành một trò chơi, ví dụ như Bitcoin là một cuộc chơi giành hashrate lớn, do các thợ mỏ cạnh tranh để giành quyền đào Bitcoin.

Thứ hai, do luồng thông tin được sử dụng có tính dự đoán, hoặc hàm giao dịch không phải là martingale (một loại quy trình ngẫu nhiên), không thể đảm bảo công bằng trong giao dịch. Ví dụ, một số hàm được sử dụng trong các dự án, như xy=k hoặc hàm lãi suất của Compound, rõ ràng có khả năng cho sự chênh lệch giá tiềm năng, điều này gây thiệt hại cho những người cung cấp thanh khoản. Cách làm đúng là sử dụng dòng thông tin thực sự ngẫu nhiên và đảm bảo rằng hàm giao dịch cho mỗi giao dịch là martingale, tức là hàm công bằng. Chỉ có hệ thống được thiết kế như vậy mới có khả năng duy trì ổn định và hướng tới sự đồng quy.

Hơn nữa, giá và lượng cung không nên được liên kết trực tiếp, nếu không sẽ gây ra một số hiệu ứng vòng lặp, dẫn đến sự sụp đổ của hệ thống. Trong nhiều dự án stablecoin thuật toán, lượng cung liên quan trực tiếp đến biến đổi giá, sự tương tác thông tin quá đơn giản và nhanh chóng, dễ dẫn đến vòng xoáy tử thần, khó có thể cứu vãn. Thực tế, hầu hết các dự án stablecoin thuật toán đều thất bại vì lý do này, bao gồm cả dự án Luna đã làm chấn động ngành công nghiệp, càng chứng minh rõ ràng lý thuyết này. Dù có sự hỗ trợ của nguồn vốn mạnh mẽ đến đâu, mô hình này đều định sẽ thất bại.

Cuối cùng, ít nhất phải có một biến số trò chơi đến từ nhu cầu thực sự và việc sẵn lòng trả đúng giá trị. Như đã đề cập ở trên, trong dự án Luna, mọi người đều cố gắng kiếm lời bằng chênh lệch giá, vậy ai sẽ cung cấp giá trị? Nếu không có nguồn thu nhập rõ ràng, hệ thống không thể duy trì. Vấn đề này làm đau đầu cho nhiều dự án DeFi, thậm chí là hầu hết các dự án blockchain công cộng không có nguồn giá trị và người đóng góp rõ ràng. Điều này làm cho dự án trở nên không bền vững, cuối cùng sụp đổ, hoặc ít nhất là bị gạt ra khỏi cuộc chơi.
