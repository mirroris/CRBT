
var valueofAnswerTab ={
    11:[2.1,5.1,2.1,5.1,10.1,2.1,2.1,2.1],
    12:[10.1,10.1,10.1,2.1,2.1,2.1,5.1,2.1],
    13:[5.1,2.1,5.1,2.1,2.1,10.1,10.1,5.1],
    14:[2.1,2.1,2.1,10.1,5.1,5.1,2.1,10.1],
    21:[0.001,3.001,0.001,0.001,3.001,0.001,0.001,0.001],
    22:[0.001,0.001,3.001,3.001,0.001,3.001,0.001,0.001],
    23:[3.001,0.001,0.001,0.001,0.001,0.001,3.001,3.001],
    31:[5.0001,5.0001,10.0001,5.0001,2.0001,2.0001,2.0001,10.0001],
    32:[2.0001,10.0001,2.0001,2.0001,5.0001,10.0001,2.0001,2.0001],
    33:[10.0001,2.0001,5.0001,2.0001,2.0001,2.0001,10.0001,5.0001],
    34:[2.0001,2.0001,2.0001,10.0001,10.0001,5.0001,5.0001,2.0001],
    41:[2.01,2.01,2.01,0.01,2.01,0.01,0.01,2.01],
    42:[1.01,1.01,1.01,1.01,1.01,1.01,1.01,1.01],
    43:[0.01,0.01,0.01,2.01,0.01,2.01,2.01,0.01],
    51:[10,10,10,5,5,2,2,2],
    52:[2,2,2,2,2,5,5,10],
    53:[2,2,2,2,2,10,10,5],
    54:[5,5,5,10,10,2,2,2]
};

var score = [0,0,0,0,0,0,0,0];
var chart=[];


function oneofFour(key){
    let idname = "question"+num;
    //console.log(idname);
    let question = document.getElementById(idname);
    question.style.display = "none";
    let nextidname = "question"+(++num);
    //console.log(nextidname);
    let nextquestion = document.getElementById(nextidname);
    nextquestion.style.display = "block";
    
    /**register answer info (answer (n))*/
    //chart.push();
    console.log(key);
    chart.push(key);
    console.log(valueofAnswerTab[key])
    return num;
}

function back(){
    let idname = "question"+num;
    //console.log(idname);
    let question = document.getElementById(idname);
    question.style.display = "none";
    let nextidname = "question"+(--num);
    //console.log(nextidname);
    let nextquestion = document.getElementById(nextidname);
    nextquestion.style.display = "block";
    
    /* delete answer info[answer (--num)] */
    chart.pop();
    console.log(chart);
    return num;
}

function accumulate(){

    let chtype;

    //どの性格かを求める
    console.log(chart);
    for(let i=0; i<5;i++){
        let x = valueofAnswerTab[chart[i]];
        for(let j=0;j<8;j++)score[j] = score[j] + x[j];
        console.log(score);
    }

        let max = 0;
    for(let i=0; i<8; i++){
        if(max<score[i]){
            max=score[i];
            chtype = i;
        }
    }

    let Type={};
    switch(chtype+1){
        case 1:
            Type.color="#E83419"; //テーマカラ-
            Type.info='<div id = "critical">フ</div>ットワークが軽く、何事にも意欲的で周囲の人を引っ張っていくリーダー的な性格です。<br>'
            '実はアーティスティックな一面も。<br>身体を動かすことが好きで、動きやすくカジュアルなファッションがお似合いです！<br>'
            'ファッションに柄のマイバックを取り入れる事で、より一層あなたの魅力が光ります✨<br>';   // 基本情報
            Type.item='マイバッグ';  // アイテム
            Type.img='result1.png';   // キャラ画像
            Type.beans='【豆知識】エコバックって本当にエコなの？'; //豆知識
            Type.beansSub='写真<br>'
            'デンマークの環境食品省環境保護機関は「ライフサイクルアセスメント(LCA)」という環境負荷を総合評価する手法を用いて、1枚のレジ袋を作る上で発生する環境負荷の試算を発表しました。<br>'
            'その結果によると、アパレル店でよく用いられるLDPE素材のレジ袋を1回再利用(一度ゴミ袋として利用)することは、<br>'
            '●エコバッグ(ポリステルバッグ)を35回再使用する<br>'
            '●紙袋を43回再利用する<br>'
            '●オーガニックコットンバッグ20000回再使用する<br>'
            'と同程度の環境負荷になります。<br>'
            'エコバックは数回使うだけでは意味が無く、何回も繰り返し使うことでどんどんエコになっていきます。<br>'
            '使う頻度や耐久性、金額なども踏まえて、自分のマイバックを探してみましょう！<br>'
            '(参考資料　https://cyql.jp/infographics/lca/;)';
            break;
        case 2:
            //ここに書く
            Type.color="#004C88"; //テーマカラ-
            Type.info='';   // 基本情報
            Type.item='マイボトル';  // アイテム
            Type.img='result2.png';   // キャラ画像
            Type.beans=''; //豆知識
            Type.beansSub='【豆知識】本当にエコバックってエコなの？？';
            break;
        case 3:
            //ここに書く
            Type.color="#1A9739"; //テーマカラ-
            Type.info='';   // 基本情報
            Type.item='マイストロー';  // アイテム
            Type.img='result3.png';   // キャラ画像
            Type.beans=''; //豆知識
            Type.beansSub='【豆知識】本当にエコバックってエコなの？？';
            break;
        case 4:
            //ここに書く
            Type.color="#970A31"; //テーマカラ-
            Type.info='';   // 基本情報
            Type.item='充電式カイロ';  // アイテム
            Type.img='result4.png';   // キャラ画像
            Type.beans=''; //豆知識
            Type.beansSub='【豆知識】本当にエコバックってエコなの？？';
            break;
        case 5:
            //ここに書く
            Type.color="#"; //テーマカラ-
            Type.info='';   // 基本情報
            Type.item='マイ箸';  // アイテム
            Type.img='result5.png';   // キャラ画像
            Type.beans=''; //豆知識
            Type.beansSub='【豆知識】本当にエコバックってエコなの？？';
            break;
        case 6:
            //ここに書く
            Type.color="#"; //テーマカラ-
            Type.info='';   // 基本情報
            Type.item='節電タップ';  // アイテム
            Type.img='result6.png';   // キャラ画像
            Type.beans=''; //豆知識
            Type.beansSub='【豆知識】本当にエコバックってエコなの？？';
            break;
        case 7:
            //ここに書く
            Type.color="#FCBD00"; //テーマカラ-
            Type.info='';   // 基本情報
            Type.item='扇風機';  // アイテム
            Type.img='result7.png';   // キャラ画像
            Type.beans=''; //豆知識
            Type.beansSub='【豆知識】本当にエコバックってエコなの？？';
            break;
        case 8:
            //ここに書く
            Type.color="#EC6A04"; //テーマカラ-
            Type.info='';   // 基本情報
            Type.item='ソーラーモバイルバッテリー';  // アイテム
            Type.img='result8.png';   // キャラ画像
            Type.beans=''; //豆知識
            Type.beansSub='【豆知識】本当にエコバックってエコなの？？';
            break;
    }
    console.log(chtype+1);
    //性格に合わせたデータを取得

    //リザルトに設定
    document.getElementById("question6").style.display="none";
    let result = document.getElementById("resultsheet");
    //リザルトを表示
    result.style.display = "block";
    result.style.backgroundColor=Type.color;

    //動的に結果を作成
    let resultChara = '<div class = "character">'+'<img src='+Type.img+' class="resize">';
    let resultintro = resultChara+"</div><br>"+"<div id = 'bold'>あなたにおすすめのエコアイテムは<br>「"+Type.item+"」<br>"
    
    let info = '<div class = "iteminfo" id = "iteminfo"><div id="normal">'+Type.info+"</div></div>";
    
    let beans =  '<div class = "beans"> <div id = "bold">'+Type.beansSub+'</div>'+Type.beans+'</div>';

    let twinfo = '<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false" data-text="【阪大生ファッション×エコアイテム診断結果】あなたのエコアイテムは…'+Type.item+'！#阪大生診断">Tweet</a>';
    document.getElementById("resultsheet").innerHTML=resultintro+info+beans+twinfo;
    //color調整
    document.getElementById("critical").style.color=Type.color;

    return;
}