$(".VistA").hover(function () {
  $(".toggle").slideToggle();
});

let prjMain = document.getElementById('prjdft');
let prjEMR = document.getElementById('EMRCnt');
let headText = document.getElementById('prjHeader');
let subText = document.getElementById('prjContentV');
let cntImg = document.getElementById('img');
let cntTxt = document.getElementById('cntTxt');
let cnt = document.getElementById('prjContents');
let navh =document.getElementById('nav_prj');
let table =document.getElementById('table');

let eduArr =['Delphi','RAD Studio XE8','MUMPS, MySQL','처방 실습 / 환자 관리 실습 / 모의차트 문제풀이 / PHR차트 문제풀이'
            ,'가상의 샘플 데이터 및 가상 환자를 활용하여 학생들이 직접 EMR 실습을 할 수 있으며, 국가고시에 필요한 모의차트와 PHR 차트를 활용한 문제 풀이 기능 탑재'];
let CCTVArr=['HTML5 + CSS3 + JavaScript','Visual Studio Code','-'
            ,'작업 현장 선택 / 작업 현장 별 CCTV 화면 출력 / 화면 분할 선택 / 화면 확대 / CCTV PTZ / 비전 인식'
            ,'HIK Vision사의 CCTV를 활용하여 CCTV 화면 출력 및 PTZ 조작과 CCTV 화면에 영상 처리를 통한 작업자 및 안전모를 인식하여 화면에 출력'];
let DDSArr=['HTML5 + CSS3 + JavaScript, Python 3.9',' Visual Studio Code, Pycharm','MySQL'
            ,'고속도로 구역 선택 / 구역 별 지도 및 마커 출력 / 구역 별 데이터(위도, 경도, 온도, 습도 등) 테이블 출력 / 구역 별 CCTV 출력 / 이상 경고 출력'
            ,'고속도로 비탈면에 온습도 등의 재난 발생 위험 감지를 위한 장비를 부착하고 장비와 통신하여 데이터를 수신, 각 비탈면 구역별로 위험 상황 모니터링 및 경고 알림'];

let i;

function prjOnclick(flag, text, vista) {
  prjMain.style.display = 'block';
  headText.innerText = text;
  
  if (flag == 0) {
    prjDisplay('./images/eduEmr.png','block','block');
    subText.innerText = '교육용 EMR';    
    navh.style.height = '130vh';
    devTable(eduArr);
    // if (vista == "HIS") {
    //   // subText.innerText = '병원정보시스템분석';    
    // }
    // else if (vista == 'EMR') {
    //   //스크롤이동 
    // }
  }
  else if (flag == 1) {
    navh.style.height = '100%';
    prjDisplay('./images/cctv.png', 'none', 'none');
    event.stopPropagation();
    devTable(CCTVArr);

  }
  else if (flag == 2) {
    navh.style.height = '100%';
    prjDisplay('./images/smartDDS.png','none', 'none');
    event.stopPropagation();
    devTable(DDSArr);
  }
}

function prjDisplay(src, display, EMRDisplay) {
  cntImg.src = src;
  // cntTxt.style.transform = 'translate(10%)';
  subText.style.display=display;
  prjEMR.style.display=EMRDisplay;
}

function devTable (arrName) {
  for(i=0; i<5;i++){
    document.getElementsByTagName('td')[i].innerText=arrName[i];
    }
}