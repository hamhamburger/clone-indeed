const specialCategory = {
  results: {
    api_version: 1.2,
    results_available: 21,
    results_returned: 21,
    results_start: 1,
    special_category: [
      {
        code: 'SPA9',
        name: '大阪のピックアップ特集',
      },
      {
        code: 'SPB0',
        name: '兵庫のピックアップ特集',
      },
      {
        code: 'SPB3',
        name: '特選！岐阜！季節のピックアップ特集！',
      },
      {
        code: 'SPB5',
        name: '愛知グルメ＆今注目のお店！',
      },
      {
        code: 'SPB7',
        name: '食の激戦区「札幌」の最新グルメトレンド',
      },
      {
        code: 'SPC0',
        name: '東北名物＆今月注目のお店！',
      },
      {
        code: 'SPD8',
        name: 'ランチを楽しむ',
      },
      {
        code: 'SPE3',
        name: '秋にオススメ！本誌にも掲載中の広島グルメ特集！',
      },
      {
        code: 'SPE9',
        name: '食の激戦区「福岡」の最新グルメトレンド',
      },
      {
        code: 'SPF7',
        name: '飲み放題付コース',
      },
      {
        code: 'SPF8',
        name: 'おすすめコース',
      },
      {
        code: 'SPF9',
        name: '大人なグルメ',
      },
      {
        code: 'SPG1',
        name: 'デートにぴったり',
      },
      {
        code: 'SPG2',
        name: '女性に嬉しい',
      },
      {
        code: 'SPG3',
        name: 'ママにもやさしい',
      },
      {
        code: 'SPG4',
        name: '個室・貸切・設備で探す',
      },
      {
        code: 'SPG5',
        name: '特別シーンなら',
      },
      {
        code: 'SPG6',
        name: '定番おすすめ',
      },
      {
        code: 'SPG7',
        name: 'こだわり食材',
      },
      {
        code: 'SPG8',
        name: '旬の料理を楽しむ',
      },
      {
        code: 'SPG9',
        name: '季節のイベント',
      },
    ],
  },
};

function specialCategoryDataToConditionData(obj) {
  const ConditionData = {
    name: 'special_category',
    title: '特集カテゴリ',
    data: [],
  };

  obj.results.special_category.forEach((special_category) => {
    const newObj = { value: special_category.code, key: special_category.name };
    ConditionData.data.push(newObj);
  });
  return ConditionData;
}

console.log(specialCategoryDataToConditionData(specialCategory));
