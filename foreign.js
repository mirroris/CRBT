
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
            Type.beansSub="デンマークの環境食品省環境保護機関は「ライフサイクルアセスメント(LCA)」という環境負荷を総合評価する手法を用いて、1枚のレジ袋を作る上で発生する環境負荷の試算を発表しました。<br>その結果によると、アパレル店でよく用いられるLDPE素材のレジ袋を1回再利用(一度ゴミ袋として利用)することは、<br>●エコバッグ(ポリステルバッグ)を35回再使用する<br>●紙袋を43回再利用する<br>●オーガニックコットンバッグ20000回再使用する<br>と同程度の環境負荷になります。<br>エコバックは数回使うだけでは意味が無く、何回も繰り返し使うことでどんどんエコになっていきます。<br>使う頻度や耐久性、金額なども踏まえて、自分のマイバックを探してみましょう！<br><div id = 'small'>※参考資料 https://cyql.jp/infographics/lca/</div>;";
            break;

        case 2:
            Type.color="#004C88"; //テーマカラ-
            Type.info="<div id = 'critical'>何</div>事にも熱心で努力家な性格です。<br>大人数で集まるよりも、1人でコツコツと勉強することが得意なタイプ。<br>街に行って喫茶店で勉強すると捗ります。<br>古着などのレトロな服装を着て、タンブラーを持って優雅に珈琲を注文してみましょう。<br>知的で落ち着いた大人の魅力を醸しだし、同級生に差を付けられること間違いなし！";   // 基本情報
            Type.item="タンブラー";  // アイテム
            Type.img="result2.png";   // キャラ画像
            Type.beans="タンブラー持参で割引になるカフェ"; //豆知識
            Type.beansSub="環境への取り組みとして、タンブラー・マグカップの持参でドリンクを割引してくれるお店が増えてきました。<br>今回は大阪大学の近くにある「タンブラー・マグカップ持参で値引になるお店」をご紹介します！<br>●スターバックスコーヒー(¥22引) → 大阪大学医学部附属病院店<br>●ローソンMACHI cafè（¥39引）→大阪大学豊中キャンパス店、茨木阪大病院前店<br>●シアトルズベストコーヒー(¥20引) → 万博記念公園店<br>●タリーズコーヒー(¥30引)→阪急石橋店、伊丹空港店、ららぽーとＥＸＰＯＣＩＴＹ店<br>●カフェ・ド・クリエ(¥30引)→大阪大学歯学部附属病院店<br>●上島珈琲店(¥50引)→大阪国際空港店<br>素敵なタンブラーを買ってカフェ活してみてはいかがでしょうか？<br><div id = 'small'>※2022/05/03現在の情報です</div>";
            break;

        case 3:
            Type.color="#1A9739"; //テーマカラ-
            Type.info="<div id = 'critical'>ポ</div>ジティブで、周りの人を元気にする太陽のような存在です<br>流行のものが好きで、ファッションや趣味は常に最先端！<br>セットアップなど韓国風ファッションが似合うオシャレさんです<br>レインボーに光るストローを持ってカフェに行けばインスタ映え間違いなし！<br>自ら流行を生み出してみませんか？？";   // 基本情報
            Type.item="マイストロー";  // アイテム
            Type.img="result3.png";   // キャラ画像
            Type.beans="おもしろストロー紹介" //豆知識
            Type.beansSub="周りをあっと言わせる、面白くて素敵なストローを2つ紹介します<br>●虹色に光る「チタンストロー」<br>チタンは軽くて丈夫な金属です。錆びない上、気になる金属臭もありません。劣化したり割れたりしないため、比較的長持ちしやすいです。また、チタンはアレルギーをほとんど起こさないため、金属に弱い方でもお使いいただけます。さらに、金属でできているため冷たい飲み物も冷たいままの感触を楽しめます！<br>このカラフルに光るチタンストローは百円ショップでも手に入れることができます。安価で手軽に購入できるので、ちょっとしたプレゼントにもおすすめです:sparkles:<br><br>●自分で巻いて使えるストロー「STROLL_01」<br> このストローは小学生が自由研究から生まれた商品です。１枚のシートを螺旋状に巻いて円筒状にして使用します。飲み終わったらストローをシート状に広げて洗うことができるため衛生的で持ち運びも便利です。シートを適切に巻けば液体が漏れる心配もありません。これまでにはない画期的なストローなので、注目されること間違いなし！<br>※参考資料 https://sotokotonews.com/SDGs_news/138";
            break;

        case 4:
            Type.color="#970A31"; //テーマカラ-
            Type.info="<div id = 'critical'>我</div>が道を行くマイペースで、些細なはとらわれない寛容な心を持っています<br>集団よりも一人行動が好きで、猫のようにふらっとどこかに出かけていきます<br>基本的にインドアで冬はこたつから離れらません<br>もこもこした服、ゆるっとした服がよく似合うでしょう<br>寒い冬に出かけないといけない時は、充電できるカイロを持って外出中もぬくぬくしましょう♨";   // 基本情報
            Type.item="充電式カイロ";  // アイテム
            Type.img="result4.png";   // キャラ画像
            Type.beans="モバイルバッテリー×充電式カイロ"; //豆知識
            Type.beansSub="さまざまな充電式カイロが売られていますが、冬しか使えないのは少し物足りない、という方にはモバイルバッテリーの機能も兼ね備えている充電式カイロがおすすめです!<br>'mottole MTL-E029'というカイロはスイッチを入れると5秒で暖まり、5～8時間は連続使用できます。1年中活用できるだけでなく、地震による停電などの緊急時でも使用可能です。他のUSB機器への充電もできるため、普段はマばいるバッテリーとして持ち運び、寒い冬にはカイロとして活躍してくれる優れものです";
            break;

        case 5:
            Type.color="#"; //テーマカラ-
            Type.info="<div id = 'critical'>塾</div>講しがち,スーツなど,フォーマルなファッションが似合う,予習復習は欠かせない真面目さん,天然な一面も";   // 基本情報
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
            Type.beans="待機電力について"; //豆知識
            Type.beansSub="待機電力のはなし";
            break;

        case 7:
            Type.color="#FCBD00"; //テーマカラ-
            Type.info="<div id = 'critical'>い</div>つもみんなの盛り上げ役でムードメーカ<br>誰に対しても優しく裏表がない性格なので、周りの人からは厚く信頼されています<br>体を動かすのが好きで、体育や部活・サークルの時はジャージで登校することも<br>暑い日に運動した後は、手で持てる扇風機や首から掛ける扇風機で快適に過ごしてみてはいかがでしょうか。";  // 基本情報
            Type.item="扇風機";  // アイテム
            Type.img="result7.png";   // キャラ画像
            Type.beans="省エネになる扇風機の使い方"; //豆知識
            Type.beansSub="";
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
    let resultintro = resultChara+"</div><br>"+"<div id = 'top'>あなたにおすすめのエコアイテムは</div><br><div id = 'bold'>「"+Type.item+"」</div>"
   
    let info = '<div class = "iteminfo" id = "iteminfo">'+Type.info+"</div>";
   
    let beans =  '<div class = "beans"> <div id="top">【'+Type.beans+'】</div><br><div id="normal">'+Type.beansSub+'</div></div>';
    let twinfo = '<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false" data-text="【阪大生ファッション×エコアイテム診断】あなたのエコアイテムは…' +Type.item+ '…！' +Type.item+ 'を持って阪大へ行こう！ #阪大生診断"> Tweet</a>';
    document.getElementById("resultsheet").innerHTML=resultintro+info+beans+twinfo;
    //color調整
    document.getElementById("critical").style.color=Type.color;

    return;
}