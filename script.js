document.getElementById("checklistForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const checklistResults = [];

  // Kiểm tra các mục checklist
  checklistResults.push({
    "Sẵn sàng và có khả năng cung cấp văn bản chấp thuận tham gia nghiên cứu (có thể đồng ý tham gia nghiên cứu y sinh trong tương lai)": document.getElementById("consent").checked,
    "Đối tượng: bệnh nhân Ung thư đại trực tràng giai đoạn cuối, di căn, tiến triển; đã được điều trị, không đủ điều kiện, không dung nạp hoặc từ chối tất cả các liệu pháp điều trị tiêu chuẩn đã được chấp thuận theo phác đồ điều trị tiêu chuẩn của Bộ Y Tế. Ngoài ra đối tượng phải có bằng chứng bệnh tiến triển được ghi nhận trên 02 lần chụp (có thể bao gồm lần chụp baseline) được thực hiện trong vòng 02-04 tháng trước khi bắt đầu nghiên cứu.
": document.getElementById("consent").checked,
    "Đủ 18 tuổi vào ngày ký phiếu chấp thuận tham gia nghiên cứu (ICF)": document.getElementById("age").checked,
    "Có chẩn đoán Ung thư đại trực tràng bằng mô bệnh học hoặc tế bào học dựa trên báo cáo giải phẫu bệnh lý": document.getElementById("diagnosis").checked,
    "Có kỳ vọng sống thêm dự đoán ≥ 03 tháng trở lên": document.getElementById("life_expectancy").checked,
    "Có ít nhất 01 tổn thương có thể đo lường được theo RECIST 1.1": document.getElementById("measurable_tumor").checked,
    "Có chỉ số ECOG 0,1 hoặc 2; đánh giá trong vòng 14 ngày trước liều điều trị đầu tiên": document.getElementById("eco_g").checked,
    "Phải có mẫu mô trước điều trị (mẫu lưu trữ hoặc mô tươi): Có kết quả HMMD EG trước khi phân nhóm ngẫu nhiên. Nếu có thể, sẽ yêu cầu lấy mẫu mô trong quá trình điều trị. Bắt buộc phải lấy mẫu trước điều trị và sử dụng để phân nhóm ngẫu nhiên. Khi đối tượng được coi là đủ điều kiện, có thể yêu cầu lấy thêm một mẫu trước điều trị để phân tích mức nền ban đầu của miễn dịch.
": document.getElementById("sample_tissue").checked,
    "Có kết quả thử thai bằng nước tiểu hoặc huyết thanh âm tính trong vòng 72 giờ trước liều đầu tiên. Nếu thử thai nước tiểu có kết quả dương tính hoặc không thể xác nhận là âm tính, cần phải thử thai bằng huyết thanh": document.getElementById("pregnancy_test").checked,
    "Chức năng cơ quan đầy đủ và được thu thập trong vòng 14 ngày trước điều trị": document.getElementById("function_status").checked,
    "Đối với Phụ nữ còn có khả năng sinh con (PNCKNSC): đồng ý tránh quan hệ tình dục khác giới hoặc sử dụng biện pháp tránh thai có hiệu quả cao trong thời gian điều trị và ít nhất 120 ngày sau liều điều trị cuối cùng. Định nghĩa PNCKNSC: chưa mãn kinh, chưa đến giai đoạn mãn kinh (≥ 12 tháng liên tục không có kinh mà không xác định được nguyên nhân nào khác ngoài mãn kinh) và chưa phẫu thuật triệt sản (cắt buồng trứng và/hoặc tử cung). Ví dụ về các biện pháp tránh thai có tỷ lệ thất bại < 1% mỗi năm, bao gồm: thắt ống dẫn trứng hai bên, triệt sản nam, sử dụng đúng các biện pháp tránh thai nội tiết tố ức chế rụng trứng, dụng cụ tử cung giải phóng hormones và dụng cụ tử cung bằng đồng. Kiêng quan hệ định kỳ và xuất tinh ngoài không phải là những biện pháp tránh thai được chấp thuận.": document.getElementById("contraception_women").checked,
    "Đối với nam giới: đồng ý trong khoảng thời gian nghiên cứu, đối tượng nam sẽ không có con. Đối tượng nam phải kiêng quan hệ tình dục (hạn chế quan hệ tình dục với Phụ nữ có khả năng mang thai hoặc sử dụng các biện pháp tránh thai có tỉ lệ thất bại < 1% mỗi năm trong thời gian điều trị; và ít nhất 120 ngày sau liều điều trị nghiên cứu cuối cùng": document.getElementById("contraception_men").checked
  });

  // Tạo danh sách kết quả
  const resultList = document.getElementById("resultList");
  resultList.innerHTML = ""; // Xóa danh sách cũ

  checklistResults.forEach(item => {
    for (const key in item) {
      const listItem = document.createElement("li");
      listItem.textContent = `${key}: ${item[key] ? 'Có' : 'Không'}`;
      resultList.appendChild(listItem);
    }
  });

  // Hiển thị kết quả
  document.getElementById("result").style.display = "block";
});
