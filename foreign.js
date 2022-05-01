
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
            Type.info="<div id = 'critical'>フ</div>ットワークが軽く、何事にも意欲的で周囲の人を引っ張っていくリーダー的な性格です。<br>実はアーティスティックな一面も。<br>身体を動かすことが好きで、動きやすくカジュアルなファッションがお似合いです！<br>ファッションに柄のマイバックを取り入れる事で、より一層あなたの魅力が光ります✨";   // 基本情報
            Type.item="マイバッグ";  // アイテム
            Type.img="result1.png";   // キャラ画像
            Type.beans="エコバックって本当にエコなの？"; //豆知識
            Type.beansSub="デンマークの環境食品省環境保護機関は「ライフサイクルアセスメント(LCA)」という環境負荷を総合評価する手法を用いて、1枚のレジ袋を作る上で発生する環境負荷の試算を発表しました。<br>その結果によると、アパレル店でよく用いられるLDPE素材のレジ袋を1回再利用(一度ゴミ袋として利用)することは、<br>●エコバッグ(ポリステルバッグ)を35回再使用する<br>●紙袋を43回再利用する<br>●オーガニックコットンバッグ20000回再使用する<br>と同程度の環境負荷になります。<br>エコバックは数回使うだけでは意味が無く、何回も繰り返し使うことでどんどんエコになっていきます。<br>使う頻度や耐久性、金額なども踏まえて、自分のマイバックを探してみましょう！<br>(参考資料　https://cyql.jp/infographics/lca/;)";
            break;

        case 2:
            Type.color="#004C88"; //テーマカラ-
            Type.info="<div id = 'critical'>何</div>事にも熱心で努力家な性格です。大人数で集まるよりも、1人でコツコツと勉強することが得意なタイプ。街に行って喫茶店で勉強すると捗ります。<br>古着などのレトロな服装を着て、タンブラーを持って行って優雅に珈琲を注文してみましょう。知的で落ち着いた大人の魅力を醸しだし、同級生に差を付けられること間違いなし！";   // 基本情報
            Type.item="タンブラー";  // アイテム
            Type.img="result2.png";   // キャラ画像
            Type.beans="タンブラー持参で割引になるカフェ"; //豆知識
            Type.beansSub="タンブラー持参で割引になるカフェ<br>MACHI cafè（10円引）<br>スターバックス(20円引)<br>エクセルシオールカフェ()<br>ブルーボトルコーヒー()<br>NEW YPRKER’S Cafe<br>セガフレード・ザネッティ<br>シアトルズベストコーヒー<br>タリーズコーヒー(30)<br>カフェ・ド・クリエ(30)<br>上島珈琲店(50円)<br>";
            break;

        case 3:
            Type.color="#1A9739"; //テーマカラ-
            Type.info="<div id = 'critical'>流</div>行が好き,韓国風ファッション,セットアップ,オシャレさん,インスタ";   // 基本情報
            Type.item="マイストロー";  // アイテム
            Type.img="result3.png";   // キャラ画像
            Type.beans="オススメ商品" //豆知識
            Type.beansSub="小学生が開発したストロー（リンク）、チタンストロー ";
            break;

        case 4:
            Type.color="#970A31"; //テーマカラ-
            Type.info="<div id = 'critical'>不</div>思議ちゃん,冬はこたつから離れられない,のんびりとした性格,もこもこした服,ボア,マイペース";   // 基本情報
            Type.item="充電式カイロ";  // アイテム
            Type.img="result4.png";   // キャラ画像
            Type.beans="モバイルバッテリーになるカイロ"; //豆知識
            Type.beansSub="モバイルバッテリーになるカイロ";
            break;

        case 5:
            Type.color="#"; //テーマカラ-
            Type.info="<div id = "critical">塾</div>講しがち,スーツなど,フォーマルなファッションが似合う,予習復習は欠かせない真面目さん,天然な一面も";   // 基本情報
            Type.item="マイ箸";  // アイテム
            Type.img="result5.png";   // キャラ画像
            Type.beans="割り箸と比較してみた"; //豆知識
            Type.beansSub="割り箸を使うときの注意点";
            break;

        case 6:
            Type.color="#"; //テーマカラ-
            Type.info="<div id = 'critical'>理</div>系,感情よりも論理で話しがち,好きなことにはとことん,木目調のインテリアが好き";   // 基本情報
            Type.item="節電タップ";  // アイテム
            Type.img="result6.png";   // キャラ画像
            Type.beans="待機電力について; //豆知識
            Type.beansSub="待機電力のはなし";
            break;

        case 7:
            Type.color="#FCBD00"; //テーマカラ-
            Type.info="<div id = 'critical'>ス</div>ポーツ、暑がり";   // 基本情報
            Type.item="扇風機";  // アイテム
            Type.img="result7.png";   // キャラ画像
            Type.beans="扇風機の賢い使い方"; //豆知識
            Type.beansSub="エアコンと扇風機の使い方、一番効率的な扇風機の使い方";
            break;
        case 8:
            Type.color="#EC6A04"; //テーマカラ-
            Type.info="<div id = 'critical'>ア</div>ウトドア";   // 基本情報
            Type.item="ソーラーモバイルバッテリー";  // アイテム
            Type.img="result8.png";   // キャラ画像
            Type.beans="素敵な商品"; //豆知識
            Type.beansSub="折り畳めるタイプ・ソーラー&手回し充電";
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
    
    let beans =  '<div class = "beans"> <div id = "bold">'+Type.beans+'</div>'+Type.beansSub+'</div>';

    let twinfo = '<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false" data-text="【阪大生ファッション×エコアイテム診断】'<br>'あなたのエコアイテムは…'+Type.item+' …！'+Type.item+'を持って阪大へ行こう！ #阪大生診断">Tweet</a>';
    document.getElementById("resultsheet").innerHTML=resultintro+info+beans+twinfo;
    //color調整
    document.getElementById("critical").style.color=Type.color;

    return;
}