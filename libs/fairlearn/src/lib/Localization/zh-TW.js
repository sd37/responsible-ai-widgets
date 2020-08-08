module.exports = {
  loremIpsum:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  defaultClassNames: "類別 {0}",
  defaultFeatureNames: "敏感性特徵 {0}",
  defaultSingleFeatureName: "敏感性特徵",
  defaultCustomMetricName: "自訂指標 {0}",
  accuracyTab: "成效公平性",
  opportunityTab: "商機公平性",
  modelComparisonTab: "模型比較",
  tableTab: "詳細資料檢視",
  dataSpecifications: "資料統計資料",
  attributes: "屬性",
  singleAttributeCount: "1 個敏感性特徵",
  attributesCount: "{0} 個敏感性特徵",
  instanceCount: "{0} 個執行個體",
  close: "關閉",
  calculating: "正在計算...",
  accuracyMetric: "成效指標",
  errorOnInputs:
    "輸入發生錯誤。敏感性特徵目前必須是類別目錄值。請將值對應至組界類別，然後重試。",
  Accuracy: {
    header: "要如何測量成效?",
    modelMakes: "模型會建立",
    modelsMake: "模型會建立",
    body:
      "您的資料包含 {0} 個標籤和 {2} 個 {1} 預測。根據這些資訊，建議您使用下列指標。請從清單中選取一個指標。",
    binaryClassifier: "二元分類器",
    probabalisticRegressor: "概率迴歸輸入變數",
    regressor: "迴歸輸入變數",
    binary: "二元",
    continuous: "連續"
  },
  Parity: {
    header: "依據差距進行測量的公平性",
    body:
      "差距指標會在所選功能間量化模型行為的變化。有兩種差距指標: 即將推出更多...."
  },
  Header: {
    title: "Fairlearn",
    documentation: "文件"
  },
  Footer: {
    back: "上一步",
    next: "下一步"
  },
  Intro: {
    welcome: "歡迎使用",
    fairlearnDashboard: "Fairlearn 儀表板",
    introBody: "Fairlearn 儀表板可讓您評定模型成效與公平性之間的權衡",
    explanatoryStep: "若要設定評定，您必須指定敏感性特徵和成效指標。",
    getStarted: "立即開始",
    features: "敏感性特徵",
    featuresInfo:
      "敏感性特徵會用於將資料分割成群組。這些群組的模型公平性會以差距指標測量。差距指標會量化模型行為在各群組之間的差異。",
    accuracy: "成效指標",
    accuracyInfo:
      "成效指標可用於評估模型的整體品質，以及每個群組中的模型品質。各群組成效指標極端值之間的差異，會在成效中回報為差距。"
  },
  ModelComparison: {
    title: "模型比較",
    howToRead: "如何閱讀此圖表",
    lower: "低於",
    higher: "高於",
    howToReadText:
      "此圖表會將每個 {0} 模型表示為可選取的點。X 軸代表 {1}，越{2}越好。Y 軸代表差距，越低越好。",
    insights: "見解",
    insightsText1: "此圖表顯示 {0} 與 {1} 模型的差距。",
    insightsText2: "{0} 的範圍為 {1} 到 {2}。差距的範圍為 {3} 到 {4}。",
    insightsText3: "最準確的模型達到 {1} 的 {0} 和 {2} 的差距。",
    insightsText4: "最低差距模型達到 {1} 的 {0} 和 {2} 的差距。",
    disparityInOutcomes: "預測中的差距",
    disparityInAccuracy: "{0} 中的差距",
    howToMeasureDisparity: "應如何測量差距?"
  },
  Report: {
    modelName: "模型 {0}",
    title: "成效差距",
    globalAccuracyText: "為整體 {0}",
    accuracyDisparityText: "為 {0} 中的差距",
    editConfiguration: "編輯組態",
    backToComparisons: "多重模型檢視",
    outcomesTitle: "預測中的差距",
    minTag: "最小值",
    maxTag: "最大值",
    groupLabel: "子群組",
    underestimationError: "低於預測",
    underpredictionExplanation: "(已預測 = 0，True = 1)",
    overpredictionExplanation: "(已預測 = 1，True = 0)",
    overestimationError: "高於預測",
    classificationOutcomesHowToRead:
      "橫條圖會顯示各群組中的選擇率，表示分類為 1 的資料點。",
    regressionOutcomesHowToRead:
      "盒狀圖會顯示各群組中的預測分佈。個別資料點會重疊在上方。",
    classificationAccuracyHowToRead1: "橫條圖會顯示各群組中的誤差分佈。",
    classificationAccuracyHowToRead2:
      "錯誤會分割成高於預測錯誤 (當 True 標籤為 0 時，預測 1) 及低於預測錯誤 (當 True 標籤為 1 時，預測 0)。",
    classificationAccuracyHowToRead3:
      "以整體群組大小除以錯誤數目來取得回報比率。",
    probabilityAccuracyHowToRead1:
      "橫條圖會顯示各群組的平均絕對誤差，分割成高於預測及低於預測。",
    probabilityAccuracyHowToRead2:
      "在每個範例中，我們都會測量預測與標籤之間的差異。若是正數，我們稱為高於預測; 若是負數，我們稱為低於預測。",
    probabilityAccuracyHowToRead3:
      "我們回報了高於預測誤差總和及低於預測誤差總和除以整體群組大小。",
    regressionAccuracyHowToRead:
      "誤差是預測與標籤之間的差異。盒狀圖會顯示各群組中的誤差分佈。個別資料點會重疊在上方。",
    distributionOfPredictions: "預測分佈",
    distributionOfErrors: "誤差分佈",
    tooltipPrediction: "預測: {0}",
    tooltipError: "誤差: {0}"
  },
  Feature: {
    header: "要依循哪些特徵評估模型公平性?",
    body:
      "公平性會根據模型行為中的差距部分進行評估。我們會依據各個所選特徵的值來分割資料，並評估在這些分割中，模型的成效指標與預測有何差異。",
    learnMore: "深入了解",
    summaryCategoricalCount: "此特徵有 {0} 個唯一的值",
    summaryNumericCount: "此數值特徵的範圍為 {0} 到 {1}，並分成 {2} 個組界。",
    showCategories: "全部顯示",
    hideCategories: "摺疊",
    categoriesOverflow: "   和其他 {0} 個類別",
    editBinning: "編輯群組",
    subgroups: "子群組"
  },
  Metrics: {
    accuracyScore: "正確性",
    precisionScore: "精確度",
    recallScore: "召回率",
    zeroOneLoss: "0-1 損失",
    specificityScore: "具體程度分數",
    missRate: "失誤率",
    falloutRate: "散落率",
    maxError: "最大誤差",
    meanAbsoluteError: "平均絕對誤差",
    meanSquaredError: " MSE (均方誤差)",
    meanSquaredLogError: "平均平方對數誤差",
    medianAbsoluteError: "絕對誤差中位數",
    average: "平均預測",
    selectionRate: "選擇率",
    overprediction: "高於預測",
    underprediction: "低於預測",
    r2_score: "R 平方分數",
    rms_error: "RMSE (平均平方根誤差)",
    auc: "ROC 曲線下的區域",
    balancedRootMeanSquaredError: "平衡的 RMSE",
    balancedAccuracy: "平衡的正確性",
    f1Score: "F1-Score",
    logLoss: "Log Loss",
    accuracyDescription: "正確分類的資料點。",
    precisionDescription: "在分類為 1 的資料點當中，正確分類的資料點。",
    recallDescription:
      "在 True 標籤為 1 的資料點當中，正確分類的資料點。替代名稱: 確判為真率、敏感度。",
    rmseDescription: "平方誤差平均的平方根。",
    mseDescription: "平方誤差的平均。",
    meanAbsoluteErrorDescription:
      "誤差絕對值的平均。比 MSE 更不易受極端值影響。",
    r2Description: "模型所解釋的標籤變異數。",
    aucDescription: "從負值範例分隔出正值範例的預測品質，以分數檢視。",
    balancedRMSEDescription:
      "正值與負值範例會重新加權，使總權重相等。適用於高度不平衡的基礎資料。",
    balancedAccuracyDescription:
      "正值與負值範例會重新加權，使總權重相等。適用於高度不平衡的基礎資料。",
    f1ScoreDescription: "F1-Score is the harmonic mean of precision and recall."
  },
  BinDialog: {
    header: "設定組界",
    makeCategorical: "視為類別",
    save: "儲存",
    cancel: "取消",
    numberOfBins: "組界數目:",
    categoryHeader: "組界值:"
  }
};