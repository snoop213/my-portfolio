'use strict';
document.getElementById("start").addEventListener("click", function() {
  mondai();
  op.play();
});
const op = new Audio("クイズ・出題01.mp3");
const good = new Audio("クイズ・正解02.mp3");
const bad = new Audio("クイズ・間違い03.mp3");
const fan = new Audio("スタジアムの歓声.mp3");


const quizArray = [
  { quiz : 'この中で実際に野球界に存在しなかった選手は誰ですか？',
  ans : ['イチロー','ジロー','サブロー','銀仁郎'],
  right : 'ジロー'
  },
  {
    quiz : 'この中でシーズン本塁打数が一番多い選手は誰ですか？',
  ans : ['中村剛也','ラミレス','松井秀喜','中村紀洋'],
  right : '松井秀喜'
  },
  {
  quiz : 'この中でトリプルスリー達成者では無いのは誰ですか？',
ans : ['秋山幸二','山田哲人','松井稼頭央','坂本勇人'],
right : '坂本勇人'
  },
  {
  quiz : 'この中で本塁打王獲得者経験者は誰ですか？',
ans : ['筒香嘉智','清原和博','高橋由伸','ズレータ'],
right : '筒香嘉智'
  },
  {
  quiz : 'この中でメジャーリーグは経験者は誰ですか？',
ans : ['斉藤和巳','野茂英雄','杉内俊哉','岩瀬仁紀'],
right : '野茂英雄'
  },
  {
  quiz : 'この中で巨人軍在籍経験が無いのは誰ですか？',
ans : ['小笠原道大','落合博満','長嶋一茂','剛田武'],
right : '剛田武'
  },
  {
  quiz : 'この中でプロ野球最年長試合出場記録は誰ですか？',
ans : ['山本昌','工藤公康','山崎武司','谷繫元信'],
right : '山本昌'
  },
  {
  quiz : 'この中で監督経験が無いのは誰ですか？',
ans : ['三浦大輔','佐々岡真司','江川卓','渡辺久信'],
right : '江川卓'
  },
  {
  quiz : 'この中でWBC出場経験が無いのは誰ですか？',
ans : ['松中信彦','福留孝介','新庄剛志','上原浩治'],
right : '新庄剛志'
  },
  {
  quiz : 'この中でプロ野球経験者は誰ですか？',
ans : ['マイケルジャクソン','マイケルジョーダン','マイケル中村','マイケルダグラス'],
right : 'マイケル中村'
  },
];

// const quiz = 'この中で実際に野球界に存在しなかった選手は誰ですか？';
// const rou = ['イチロー','ジロー','サブロー','銀仁郎'];
// const right = 'ジロー';
const Qlength = quizArray.length;
let Qindex = 0 ;
let total = 0;


// document.getElementById('toi').textContent = quiz;
// let answer1 = document.getElementById('answer1').textContent = rou[0];
// let answer2 = document.getElementById('answer2').textContent = rou[1];
// let answer3 = document.getElementById('answer3').textContent = rou[2];
// let answer4 = document.getElementById('answer4').textContent = rou[3];

const mondai = function(){
    
  document.getElementById('toi').textContent = quizArray[Qindex].quiz;
   document.getElementById('answer1').textContent = quizArray[Qindex].ans[0];
   document.getElementById('answer2').textContent = quizArray[Qindex].ans[1];
   document.getElementById('answer3').textContent = quizArray[Qindex].ans[2];
   document.getElementById('answer4').textContent = quizArray[Qindex].ans[3];
};




//  document.getElementById('answer1').addEventListener()
//  answer1.addEventListener ('click',(e)=>{
  
 
   const clickE = (e)=>{
   if(quizArray[Qindex].right === e.target.textContent){
    good.play();  
     window.alert('正解');
     total++;
    }else{
      bad.play();
     window.alert('不正解');
    }
    Qindex++;
    if(Qindex < Qlength){
      mondai();
    }else{
      if(total === 10){
        fan.play();
        window.alert('お疲れさまでした全問正解です' + 'パスワードはdokaben');
            let kaitou = document.getElementById("kaitou");
        let btn1 = document.getElementById("btn1");
        let kaitouList = kaitou.style;
        btn1.onclick = function(){
        if( kaitouList.display === "block" ) {
          kaitouList.display = "none";
        } else {
          kaitouList.display = "block";
        }
  };

      }else{
        window.alert('お疲れさまでした' + Qlength + '問中' + total + '問' + '正解です');

      }
    }

   };
  

   answer1.addEventListener ('click',(e)=>{
    clickE(e);
  });
   answer2.addEventListener ('click',(e)=>{
    clickE(e);
  });
   answer3.addEventListener ('click',(e)=>{
    clickE(e);
  });
   answer4.addEventListener ('click',(e)=>{
    clickE(e);
  });


  //  if(right === e.target.textContent){
  //    window.alert('正解');
  //   }else{
  //    window.alert('不正解');

  //  }
  // });
