// assets/data.js
// 各科目ごとの授業回（lesson）をここに登録します。
// 1 lesson = { id, title, file } の形式
// file には JSON 問題ファイルのパスを指定してください。

window.DATA = {
  // 社会
  social: {
    lessons: [
      {
        id: "G4T3-nihon-no-kikou",
        title: "小４(3) 日本の気候",
        file: "assets/data/shakai/G4T3-nihon-no-kikou.json"
      }
      // 追加する場合は下にどんどん追記
      // { id:"...", title:"...", file:"assets/data/shakai/XXX.json" }
    ]
  },

  // 理科
  science: {
    lessons: [
      // 例：
      // { id:"G4T2-hana-bunrui", title:"小４(2) 花の仲間分け", file:"assets/data/rika/G4T2-hana-bunrui.json" }
    ]
  },

  // 算数
  math: {
    lessons: [
      // 例：
      // { id:"G4T5-wari-sagaku", title:"小４(5) 割り算と余り", file:"assets/data/sansu/G4T5-wari-sagaku.json" }
    ]
  },

  // 国語
  kokugo: {
    lessons: [
      // 例：
      // { id:"G4T1-kanji-kakusu", title:"小４(1) 漢字の画数", file:"assets/data/kokugo/G4T1-kanji-kakusu.json" }
    ]
  }
};
