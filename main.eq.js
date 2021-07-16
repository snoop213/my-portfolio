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
  { quiz : '第88回全国高校野球選手権決勝で延長戦は何回まで続いた？',
  ans : ['15','17','12','18'],
  right : '15'
  },
  {
    quiz : 'この中で通算勝利数が一番多いのは誰ですか？',
  ans : ['山本昌','工藤公康','杉下茂','桑田真澄'],
  right : '工藤公康'
  },
  {
  quiz : 'この中でメジャーリーグ(マイナーリーグ含め)経験が無いのは誰ですか？',
  ans : ['陽岱鋼','田中賢介','マイケルジョーダン','小宮山悟'],
right : '陽岱鋼'
  },
  {
  quiz : 'この中で打点王獲得者経験者では無いのは誰ですか？',
ans : ['イチロー','新井貴浩','小久保祐紀','柳田悠岐'],
right : '柳田悠岐'
  },
  {
  quiz : '王貞治が現役最後の年に打った本塁打の数は？',
ans : ['21','8','19','30'],
right : '30'
  },
  {
  quiz : 'この中で監督時に日本一回数が一番少ないのは誰ですか？',
ans : ['野村克也','落合博満','長嶋茂雄','王貞治'],
right : '落合博満'
  },
  {
  quiz : 'この中でプロ野球でのノーヒットノーラン達成者は誰ですか？',
ans : ['佐々岡真司','松坂大輔','岩隈久志','野茂英雄'],
right : '佐々岡真司'
  },
  {
  quiz : 'この中で通算二塁打記録保持者は誰ですか？',
ans : ['福本豊','稲葉篤紀','金本知憲','立浪和義'],
right : '立浪和義'
  },
  {
  quiz : 'この中で通算打点が一番高いのは誰ですか？',
ans : ['T・ローズ','ラミレス','カブレラ','バース'],
right : 'ラミレス'
  },
  {
  quiz : 'この中でメジャーワールドシリーズで制覇したことのない球団は？',
ans : ['シカゴカブス','サンフランシスコジャイアンツ','シアトルマリナーズ','アリゾナダイヤモンドバックス'],
right : 'シアトルマリナーズ'
  },//10
  {
  quiz : 'この中で苗字が佐藤では無いの誰は？',
ans : ['ツギオ','由規','パンチ','ユウキ'],
right : 'ユウキ'
  },
  {
  quiz : 'イチローのメジャーリーグでのオールスターゲーム出場回数は？',
ans : ['5','6','8','10'],
right : '10'
  },
  {
  quiz : 'この中で松坂世代に該当しないのは誰？',
ans : ['岩隈久志','森本稀哲','村田修一','藤川球児'],
right : '岩隈久志'
  },
  {
  quiz : 'この中で通算サヨナラホームランが一番多いのは誰？',
ans : ['中村紀洋','王貞治','清原和博','長嶋茂雄'],
right : '清原和博'
  },
  {
  quiz : '夏の甲子園での大会奪三振記録保持者は誰？',
ans : ['斎藤佑樹','江川卓','板東英二','松坂大輔'],
right : '板東英二'
  },
  {
  quiz : 'この中で巨人の永久欠番に指定されていない背番号は？',
ans : ['1','2','3','4'],
right : '2'
  },
  {
  quiz : 'メジャーリーグで通算303勝したランディジョンソンの30歳時点での通算勝利数は？',
ans : ['158','128','98','68'],
right : '68'
  },
  {
  quiz : 'この中で特撮では無い人は誰？',
ans : ['内藤尚行','佐々木主浩','松井秀喜','尾崎将司'],
right : '尾崎将司'
  },
  {
  quiz : 'この中で台湾リーグでの経験が無い人は誰？',
ans : ['渡辺久信','高津臣吾','西岡剛','川崎宗則'],
right : '西岡剛'
  },
  {
  quiz : '山本昌が対戦したことのない選手は誰？',
ans : ['衣笠祥雄','若松勉','中原清','大谷翔平'],
right : '大谷翔平'
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
      if(total === 20){
        fan.play();
        window.alert('お疲れさまでした全問正解です。これであなたも野球狂の仲間入りです。');
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
