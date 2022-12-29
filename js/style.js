// BT1 : Tính điểm tuyển sinh

document.getElementById('btnKetQua').onclick = function () {
    // input
    let Standar = +document.getElementById('diemChuan').value;
    let StudentArea = document.getElementById('khuVuc').value;
    let StudentType = document.getElementById('doiTuong').value;
    let sub1 = +document.getElementById('diemMon1').value;
    let sub2 = +document.getElementById('diemMon2').value;
    let sub3 = +document.getElementById('diemMon3').value;
    let ketQua = 0;

    // progress

    // Đối tượng
    if (StudentType === "1") {
        StudentType = "2.5";
    } else if (StudentType === "2") {
        StudentType = "1.5";

    } else if (StudentType === "3") {
        StudentType = "1";

    } else if (StudentType === "0") {
        StudentType = "0";
    }
    // Khu vực
    if (StudentArea === "A") {
        StudentArea = "2";
    } else if (StudentArea === "B") {
        StudentArea = "1";

    } else if (StudentArea === "C") {
        StudentArea = "0.5";

    } else if (StudentArea === "X") {
        StudentArea = "0";
    }
    let totalScore = sub1 + sub2 + sub3 + +StudentType + +StudentArea;

    if (totalScore >= Standar && sub1 != 0 && sub2 != 0 && sub3 != 0) {
        ketQua = "Bạn đã đậu, tổng điểm là:" + " " + totalScore;

    } else {
        ketQua = "Bạn đã rớt, tổng điểm là:" + " " + totalScore;
    }
    // output

    document.getElementById('kqBt1').innerHTML = ketQua;




}

// BT2: Tính tiền điện
document.getElementById('btnTienDien').onclick = function(){
    // input
   
    let name = document.getElementById('hoTen').value;
    let soKw = +document.getElementById('soKw').value;
    let chiPhi = 0;
    
    // Progress:
    if( soKw <= 50){
        chiPhi =  soKw * 500;
    } else if(soKw <= 100){
        chiPhi = 50 * 500 + (soKw - 50) * 650;
    } else if( soKw <= 200){
        chiPhi =  50 * 500 + 50 * 650 + (soKw - 100) * 850;
    } else if(soKw <= 350 ){
        chiPhi =  50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
    } else {
        chiPhi = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
    }
    
    // Output:
    document.getElementById('kqBt2').innerHTML = 'Họ và tên:' + " " + name + "," + " " + 'Tiền điện:' + " " + chiPhi.toLocaleString() + " " + "Đồng";
}

