const myName = document.getElementById('myName');

myName.addEventListener('mouseover', function() {
  myName.style.fontFamily = 'Baskerville, serif';
});

myName.addEventListener('mouseout', function() {
  myName.style.fontFamily = 'Arial, sans-serif';
});

function changeLanguage(language) {
    const nameElement = document.getElementById('myName');
    const greetings = {
      'en': 'Hello, I\'m Uken',
      'zh': '你好，我是宇軒',
      'ja': 'こんにちは、私はうけんです'
    };
    
    const selectedGreeting = greetings[language] || greetings['en'];
    nameElement.textContent = selectedGreeting;
  }

  var iframe = document.getElementById('websiteFrame');



function loadRandomWebsite() {
  var userInput = document.getElementById('userInput').value.toLowerCase(); 
  var error = document.getElementById('error');
  var resultDiv = document.getElementById('result');
  var websites = ['人間の右手にベリチップ（英語版）を埋め込む計画があるという陰謀説。右手に埋め込んだベリチップによって脳波をコントロールするのが目的とされる。このような考えを唱える者によると、既に家畜やペットなどへの埋め込み技術は完成しているという。ロックフェラーが国民にベリチップを埋め込んで自分の脳波に同化させる計画を立てていたとされる。ベリチップを埋め込む場所としては右手の親指と人差し指の間とする説と、右手の薬指と小指の間という説がある。ベリチップや水道水フッ化物添加は新世界秩序に逆らいにくくするために行われるとされる。','水道水フッ化物添加とは、フッ素の化合物（フッ化物）を上水道中に添加し、多数の住民を対象として虫歯を予防する手法。北アメリカとオーストラリアでは、多くの自治体が安価な費用で効果を期待できるとの考えにより、水道水へのフッ化物添加を実施している。陰謀論は、1950年代に生じた水道水フッ化物添加は、共産党によるアメリカの意欲を削ぐための陰謀であるという論説と、1970年代に生じた（アルミニウム精錬にともなう産業廃棄物としてのフッ化物の処理に関連する）アルミニウム産業と特定の財団・家系との利害関係の絡んだ陰謀である、という論説がある。この論説は水道水フッ化物添加についての議論の一部をなしている。','i高周波活性オーロラ調査プログラム（HAARP）はオーロラ観測システムではなく、気象兵器であるとする陰謀説。彼らによると近頃の異常気象とされるものはこのHAARPによって引き起こされたものであるとしている。ニコラ・テスラによる電磁波の研究が元になったとされる。ニコラ・テスラは暗殺されたという説を唱える人もいる。地震や異常気象は自然現象に見せかけることができるので、アメリカ政府が他国政府（日本政府も含む）を恫喝するのに使われていると主張される。なお、第45代アメリカ合衆国大統領ドナルド・トランプは逆に“異常気象も地球温暖化も起きていない”と主張している。','飛行機雲を、政府などの支配者がこっそりと有毒な化学物質を散布している「ケムトレイル」だと考える陰謀論。ケムトレイルとは「ケミカル」（化学物質）と「トレイル」（痕跡）をかけ合わせた言葉であり、人類削減計画の一環とされることが多い。「ある殺人的プロジェクトに関わる航空機から散布された何トンもの微粒子状物質」ケムトレイルは、「アスベスト、バリウム塩、アルミニウム、放射性トリウムなどを含む有毒金属を含んで」おり「アメリカ国防総省、アメリカエネルギー省、国立研究機関、大学、民間の防衛産業、製薬会社などが係わっている巨大な組織」が推進し、「航空機から散布された何トンもの微粒子状物質は、大気を高電荷の導電性プラズマにし」「­­地震を引き起こす地殻操作兵器などのために、荷電した大気を人為的に操作するためのものである」と主張する。','地球温暖化は実際には起こっていない、又は太古から続く自然な気温変化に過ぎないとして、CO2増加による地球温暖化を否定する説。ドナルド・トランプがアメリカ大統領に就任してから声高に主張されるようになった。論拠として、1946年から1975年頃にかけてCO2が急増したにもかかわらず気温は下降気味だったことや、気温データを捏造したとされる気候研究ユニット・メール流出事件（クライメートゲート事件とも）が上げられるが、気候研究ユニット・メール流出事件については、イギリス王立協会、ペンシルベニア州立大学、イギリスのラッセル委員会、イースト・アングリア大学がそれぞれに調査した結果、不正の事実は何も見あたらなかった。また、現在では環境省等がデータに誤りはないと主張している。また、この事件の後の観測データも、温暖化が間違いなく進行していることを示しており、2021年8月に公表されたIPCC第6次報告書でも、「人間の影響が大気、海洋及び陸域を温暖化させてきたことには疑う余地がない」としている。','アメリカの公式暗号であったData Encryption Standard（DES）について、IBMが開発したプロトタイプに対してアメリカ国家安全保障局（NSA）が変更を加えたことから、NSAが自組織のみに解読可能なトラップをつけているという主張がなされた。当初IBMもNSAもそのことについてコメントを出していなかった。後に、差分解読法が開発されたが、差分解読法はDESの解読には結びつかなかった。これに対して、DESの開発者であるドン・コッパースミス（en:Don Coppersmith）は、開発時点でNSAは差分解読法について既知であり、NSAによる変更は差分解読法に対して耐性を持つように意図されたものであると主張した。後に開発されたAdvanced Encryption Standard（AES）ではそのような疑念が起こらないよう、暗号アルゴリズムは公募され、その選定は公開の場で討論された。また、設計者はその設計の理由を設計書に記述することが求められた。'];

  if (userInput === '') {
    error.textContent = 'Please enter words';
    resultDiv.textContent = '';
  }else {
   error.textContent = '';
   var index = Math.floor(Math.random() * websites.length);var randomWebsite = websites[index];
   resultDiv.textContent = randomWebsite;

  }
    //iframe.setAttribute('src', randomWebsite);
    //iframe.style.display = 'block';
}

  //function closeWebsite() {
    //iframe.removeAttribute('src');
    //iframe.style.display = 'none';
  //}