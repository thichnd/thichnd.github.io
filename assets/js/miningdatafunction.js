// Công thức tính khoảng cách giữa hai điểm trong mặt phẳng tọa độ
let indexSTT_Input = 20;
let indexSTT_Tam = 3;
let data_Min_Ketqua = [];
let data_STT = [];
function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - y1, 2) + Math.pow(x2 - y2, 2));
}

function addSTT(evt){
    indexSTT_Input++;
    document.getElementById('list-detail-stt').innerHTML += '<p>'+ indexSTT_Input +'.<input class=\"stt\" name=\'stt-'+ indexSTT_Input +'\' type=\'text\' placeholder=\'STT\' /\></p>';

}
function addTam(evt){
indexSTT_Tam++;
    document.getElementById('tam-detail').innerHTML += '<p>'+ indexSTT_Tam +'.<input class=\"tam\" name=\'tam-'+ indexSTT_Tam +'\' type=\'text\' placeholder=\'TAM\' /\></p>';


}


// Ham tinh ket qua
function tinhkq(evt){
    // Lay 3 diem cho san
    const diemValues = [];
    let index = 0;
    data_Min_Ketqua =   [];
    data_STT = [];
    document.getElementById('result').innerHTML = "";
    document.querySelectorAll('.tam-detail .tam').forEach(elementam => {
        if(elementam.value !=''){
            index++;
            diemValues.push(elementam.value);
            console.log('Tam :' + elementam.value);
            const tamArray = elementam.value.split(",");
             // Get values from inputs with a specific class
            const sttValues = [];
            let indexSTT = 0;
            document.getElementById('result').innerHTML += "<p>C" + index+ "</p>"
            document.querySelectorAll('.list-detail .stt').forEach(elementDiem => {
                if(elementDiem.value != ''){
                    indexSTT++;
                    sttValues.push(elementDiem.value);
                    // Cat chuoi Tam + Diem
                    //elemendiem.value
                    const diemArray = elementDiem.value.split(",");
                    console.log(diemArray)
                    data_STT.push(diemArray);
                    // Tinh toan toa do
                    //x1, y1, x2, y2
                    const d = distance(parseFloat(diemArray[0]), parseFloat(tamArray[0]), parseFloat(diemArray[1]), parseFloat(tamArray[1]));
                    // Lam tron 2 số
                    const drounded = Math.round(d * 100) / 100;
                    // => xuat ket qua    
                    console.log("Khoảng cách giữa hai điểm là:", drounded);
                    
                    document.getElementById('result').innerHTML += '<span>(X'+ indexSTT +',C'+ index +') = '+ drounded +'</span>&nbsp;';
                    
                    if(index == 1){
                        // add to list
                        data_Min_Ketqua.push(
                            {
                                "min": drounded,
                                "stt": indexSTT,
                                "tam": index
                            }

                        )
                    }
                    else{
                        if(data_Min_Ketqua[indexSTT-1].min > drounded){
                            data_Min_Ketqua[indexSTT-1].min = drounded
                            data_Min_Ketqua[indexSTT-1].stt = indexSTT
                            data_Min_Ketqua[indexSTT-1].tam = index
                        }
                    }
                    document.getElementById('result').innerHTML += '<br>'

                }
            });
            
          

        }
    
    });
    document.getElementById('result_min').innerHTML = ''
    data_Min_Ketqua.sort((a, b) => a.tam - b.tam);
    data_Min_Ketqua.forEach(kq_min => {
                    document.getElementById('result_min').innerHTML += '<p> Tam: C'+ kq_min.tam +' &nbsp; Min: '+ kq_min.min+ '&nbsp; (STT: '+ kq_min.stt +')&nbsp;</p>'
                    document.getElementById('result_min').innerHTML += ' '

            })
    
}

// tinh lại tâm
function tinhlaitam(evt){
    let indexTinhLaiTam = 0;
    document.getElementById('result_tam').innerHTML = '';
    document.querySelectorAll('.tam-detail .tam').forEach(elementam => {
            if(elementam.value !=''){
                indexTinhLaiTam++;
                data_Min_Ketqua.fi
                const tambyGroup = data_Min_Ketqua.filter(t => t.tam === indexTinhLaiTam);
                console.log("C: " + indexTinhLaiTam)
                if(tambyGroup != undefined && tambyGroup.length > 0){
                        let indexkstt = 0;
                        let x1kstt = 0;
                        let x2kstt = 0;
                        tambyGroup.forEach(k => {
                            indexkstt++;
                            console.log(data_STT[k.stt-1]) 
                            x1kstt = x1kstt + parseFloat(data_STT[k.stt-1][0]);
                            x2kstt = x2kstt + parseFloat(data_STT[k.stt-1][1]);
                        })
                        let x1tinhlaitam = x1kstt/indexkstt;
                        let x2tinhlaitam = x2kstt/indexkstt;
                        document.getElementById('result_tam').innerHTML += '<p> C'+ indexTinhLaiTam + ' (' + x1tinhlaitam +','+ x2tinhlaitam +')</p>';
                }
            }});
}