// assets/data.js
// どの科目でどのシート(タブ)を使うかを登録します。
// 各授業回は { id, title, csv } の3項目。
// csv には "export?format=csv&gid=..." 形式のURLを入れます。

const SHEET_ID = "1ldp5wandrWwB0GVfB9qP9i6qAoGqRz0D6tzDIb7FXJ8";
const csvUrl = (gid) =>
  `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${gid}`;

window.DATA = {
  // 算数（gid=0）
  math: {
    lessons: [
      {
        id: "G4M-main",
        title: "小４ 算数（メイン）",
        csv: csvUrl(0)
      }
    ]
  },

  // 国語（gid=162988483）
  kokugo: {
    lessons: [
      {
        id: "G4K-main",
        title: "小４ 国語（メイン）",
        csv: csvUrl(162988483)
      }
    ]
  },

  // 理科（gid=1839969673）
  science: {
    lessons: [
      {
        id: "G4S-main",
        title: "小４ 理科（メイン）",
        csv: csvUrl(1839969673)
      }
    ]
  },

  // 社会（gid=2143649641）
  social: {
    lessons: [
      {
        id: "G4C-todofuken",
        title: "小４ 社会 都道府県クイズ",
        csv: csvUrl(2143649641)
      }
    ]
  }
};
