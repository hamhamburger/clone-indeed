
function areaDataToConditionData(obj) {
  const ConditionData = { title: 'area', data: [] };

  obj.results.service_area.forEach((area) => {
    const newObj = { key: area.code, value: area.name };
    ConditionData.data.push(newObj);
  });
  return ConditionData;
}



 const areaData = {
   results: {
     api_version: '1.20',
     results_available: 47,
     results_returned: '47',
     results_start: 1,
     service_area: [
       {
         code: 'SA11',
         large_service_area: { code: 'SS10', name: '関東' },
         name: '東京',
       },
       {
         code: 'SA12',
         large_service_area: { code: 'SS10', name: '関東' },
         name: '神奈川',
       },
       {
         code: 'SA13',
         large_service_area: { code: 'SS10', name: '関東' },
         name: '埼玉',
       },
       {
         code: 'SA14',
         large_service_area: { code: 'SS10', name: '関東' },
         name: '千葉',
       },
       {
         code: 'SA15',
         large_service_area: { code: 'SS10', name: '関東' },
         name: '茨城',
       },
       {
         code: 'SA16',
         large_service_area: { code: 'SS10', name: '関東' },
         name: '栃木',
       },
       {
         code: 'SA17',
         large_service_area: { code: 'SS10', name: '関東' },
         name: '群馬',
       },
       {
         code: 'SA21',
         large_service_area: { code: 'SS20', name: '関西' },
         name: '滋賀',
       },
       {
         code: 'SA22',
         large_service_area: { code: 'SS20', name: '関西' },
         name: '京都',
       },
       {
         code: 'SA23',
         large_service_area: { code: 'SS20', name: '関西' },
         name: '大阪',
       },
       {
         code: 'SA24',
         large_service_area: { code: 'SS20', name: '関西' },
         name: '兵庫',
       },
       {
         code: 'SA25',
         large_service_area: { code: 'SS20', name: '関西' },
         name: '奈良',
       },
       {
         code: 'SA26',
         large_service_area: { code: 'SS20', name: '関西' },
         name: '和歌山',
       },
       {
         code: 'SA31',
         large_service_area: { code: 'SS30', name: '東海' },
         name: '岐阜',
       },
       {
         code: 'SA32',
         large_service_area: { code: 'SS30', name: '東海' },
         name: '静岡',
       },
       {
         code: 'SA33',
         large_service_area: { code: 'SS30', name: '東海' },
         name: '愛知',
       },
       {
         code: 'SA34',
         large_service_area: { code: 'SS30', name: '東海' },
         name: '三重',
       },
       {
         code: 'SA41',
         large_service_area: { code: 'SS40', name: '北海道' },
         name: '北海道',
       },
       {
         code: 'SA51',
         large_service_area: { code: 'SS50', name: '東北' },
         name: '青森',
       },
       {
         code: 'SA52',
         large_service_area: { code: 'SS50', name: '東北' },
         name: '岩手',
       },
       {
         code: 'SA53',
         large_service_area: { code: 'SS50', name: '東北' },
         name: '宮城',
       },
       {
         code: 'SA54',
         large_service_area: { code: 'SS50', name: '東北' },
         name: '秋田',
       },
       {
         code: 'SA55',
         large_service_area: { code: 'SS50', name: '東北' },
         name: '山形',
       },
       {
         code: 'SA56',
         large_service_area: { code: 'SS50', name: '東北' },
         name: '福島',
       },
       {
         code: 'SA61',
         large_service_area: { code: 'SS60', name: '北陸・甲信越' },
         name: '新潟',
       },
       {
         code: 'SA62',
         large_service_area: { code: 'SS60', name: '北陸・甲信越' },
         name: '富山',
       },
       {
         code: 'SA63',
         large_service_area: { code: 'SS60', name: '北陸・甲信越' },
         name: '石川',
       },
       {
         code: 'SA64',
         large_service_area: { code: 'SS60', name: '北陸・甲信越' },
         name: '福井',
       },
       {
         code: 'SA65',
         large_service_area: { code: 'SS60', name: '北陸・甲信越' },
         name: '山梨',
       },
       {
         code: 'SA66',
         large_service_area: { code: 'SS60', name: '北陸・甲信越' },
         name: '長野',
       },
       {
         code: 'SA71',
         large_service_area: { code: 'SS70', name: '中国' },
         name: '鳥取',
       },
       {
         code: 'SA72',
         large_service_area: { code: 'SS70', name: '中国' },
         name: '島根',
       },
       {
         code: 'SA73',
         large_service_area: { code: 'SS70', name: '中国' },
         name: '岡山',
       },
       {
         code: 'SA74',
         large_service_area: { code: 'SS70', name: '中国' },
         name: '広島',
       },
       {
         code: 'SA75',
         large_service_area: { code: 'SS70', name: '中国' },
         name: '山口',
       },
       {
         code: 'SA81',
         large_service_area: { code: 'SS80', name: '四国' },
         name: '徳島',
       },
       {
         code: 'SA82',
         large_service_area: { code: 'SS80', name: '四国' },
         name: '香川',
       },
       {
         code: 'SA83',
         large_service_area: { code: 'SS80', name: '四国' },
         name: '愛媛',
       },
       {
         code: 'SA84',
         large_service_area: { code: 'SS80', name: '四国' },
         name: '高知',
       },
       {
         code: 'SA91',
         large_service_area: { code: 'SS90', name: '九州・沖縄' },
         name: '福岡',
       },
       {
         code: 'SA92',
         large_service_area: { code: 'SS90', name: '九州・沖縄' },
         name: '佐賀',
       },
       {
         code: 'SA93',
         large_service_area: { code: 'SS90', name: '九州・沖縄' },
         name: '長崎',
       },
       {
         code: 'SA94',
         large_service_area: { code: 'SS90', name: '九州・沖縄' },
         name: '熊本',
       },
       {
         code: 'SA95',
         large_service_area: { code: 'SS90', name: '九州・沖縄' },
         name: '大分',
       },
       {
         code: 'SA96',
         large_service_area: { code: 'SS90', name: '九州・沖縄' },
         name: '宮崎',
       },
       {
         code: 'SA97',
         large_service_area: { code: 'SS90', name: '九州・沖縄' },
         name: '鹿児島',
       },
       {
         code: 'SA98',
         large_service_area: { code: 'SS90', name: '九州・沖縄' },
         name: '沖縄',
       },
     ],
   },
 };



console.log(areaDataToConditionData(areaData));


