document.getElementById("checklistForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const checklistResults = [];

  // Kiểm tra các mục checklist
  checklistResults.push({
    "Sẵn sàng tham gia nghiên cứu": document.getElementById("consent").checked,
    "Ung thư đại trực tràng giai đoạn cuối, di căn, tiến triển; đã được điều trị, không đủ điều kiện, không dung    nạp hoặc từ chối tất cả các liệu pháp điều trị tiêu chuẩn đã được chấp thuận theo phác đồ điều trị tiêu chuẩn của Bộ Y Tế + có bằng chúng tiến triển": document.getElementById("consent").checked,
    "Đủ 18 tuổi trở lên": document.getElementById("age").checked,
    "Có chẩn đoán ung thư bằng Giải phẫu bệnh": document.getElementById("diagnosis").checked,
    "Kỳ vọng sống bằng hoặc trên 3 tháng": document.getElementById("life_expectancy").checked,
    "Có ít nhất 01 tổn thương có thể đo lường": document.getElementById("measurable_tumor").checked,
    "Chỉ số ECOG 0,1,2": document.getElementById("eco_g").checked,
    "Có mẫu mô trước điều trị": document.getElementById("sample_tissue").checked,
    "Kết quả thử thai trong vòng 72 giờ trước liều đầu tiên": document.getElementById("pregnancy_test").checked,
    "Chức năng cơ quan đầy đủ và được thu thập trong 14 ngày trước điều trị": document.getElementById("function_status").checked,
    "Biện pháp tránh thai phụ nữ còn khả năng sinh con": document.getElementById("contraception_women").checked,
    "Biện pháp tránh thai nam giới": document.getElementById("contraception_men").checked
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
