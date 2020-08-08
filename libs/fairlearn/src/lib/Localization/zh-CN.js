module.exports = {
  loremIpsum:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  defaultClassNames: "类 {0}",
  defaultFeatureNames: "敏感特征 {0}",
  defaultSingleFeatureName: "敏感特征",
  defaultCustomMetricName: "自定义指标 {0}",
  accuracyTab: "性能的公平性",
  opportunityTab: "机会的公平性",
  modelComparisonTab: "模型比较",
  tableTab: "详细信息视图",
  dataSpecifications: "数据统计信息",
  attributes: "特性",
  singleAttributeCount: "1 个敏感特征",
  attributesCount: "{0} 个敏感特征",
  instanceCount: "{0} 个实例",
  close: "关闭",
  calculating: "正在计算...",
  accuracyMetric: "性能指标",
  errorOnInputs:
    "输入出错。目前敏感特征必须是分类值。请将值映射到已装箱的类别，然后重试。",
  Accuracy: {
    header: "你想如何衡量性能?",
    modelMakes: "模型",
    modelsMake: "模型",
    body:
      "你的数据包含 {0} 个标签和 {2} {1} 预测。根据此信息，我们推荐以下指标。请从列表中选择一个指标。",
    binaryClassifier: "二元分类器",
    probabalisticRegressor: "Probit 回归量",
    regressor: "回归量",
    binary: "二进制",
    continuous: "连续"
  },
  Parity: {
    header: "根据差异衡量公平性",
    body:
      "差异指标量化了模型在所选特征之间的行为变化。有两种类型的差异指标: 即将推出更多..."
  },
  Header: {
    title: "Fairlearn",
    documentation: "文档"
  },
  Footer: {
    back: "上一步",
    next: "下一步"
  },
  Intro: {
    welcome: "欢迎使用",
    fairlearnDashboard: "Fairlearn 仪表板",
    introBody: "借助 Fairlearn 仪表板，可以评估模型的性能和公平性之间的权衡",
    explanatoryStep: "若要设置评估，需要指定一个敏感特征和一个性能指标。",
    getStarted: "开始使用",
    features: "敏感特征",
    featuresInfo:
      "使用敏感特征可以将数据拆分为组。通过差异指标衡量模型在这些组之间的公平性。差异指标将量化模型在这些组之间的行为变化。",
    accuracy: "性能指标",
    accuracyInfo:
      "性能指标用于评估模型的总体质量以及在每个组中的模型质量。各组的性能指标极值之间的差异称为性能差异。"
  },
  ModelComparison: {
    title: "模型比较",
    howToRead: "如何阅读此图表",
    lower: "偏低",
    higher: "偏高",
    howToReadText:
      "此图表将每个 {0} 模型表示为一个可选择的点。X 轴表示 {1}，越 {2} 越好。Y 轴表示差异，越低越好。",
    insights: "见解",
    insightsText1: "此图表显示 {0} 和 {1} 个模型的差异。",
    insightsText2: "{0} 的范围是从 {1} 到 {2}。差异的范围是从 {3} 到 {4}。",
    insightsText3: "最准确的模型可达到 {1} 的 {0} 和 {2} 的差异。",
    insightsText4: "最低差异模型可达到 {1} 的 {0} 和 {2} 的差异。",
    disparityInOutcomes: "预测差异",
    disparityInAccuracy: "{0} 差异",
    howToMeasureDisparity: "如何衡量差异?"
  },
  Report: {
    modelName: "模型 {0}",
    title: "性能差异",
    globalAccuracyText: "是总体 {0}",
    accuracyDisparityText: "是 {0} 的差异",
    editConfiguration: "编辑配置",
    backToComparisons: "多模型视图",
    outcomesTitle: "预测差异",
    minTag: "最小值",
    maxTag: "最大值",
    groupLabel: "子组",
    underestimationError: "过低预测",
    underpredictionExplanation: "(预测值 = 0，true = 1)",
    overpredictionExplanation: "(预测值 = 1，true = 0)",
    overestimationError: "过高预测",
    classificationOutcomesHowToRead:
      "条形图显示每组的选择率，表示分类为 1 的点的分数。",
    regressionOutcomesHowToRead:
      "箱形图显示每个组的预测值分布。各个数据点在顶部重叠。",
    classificationAccuracyHowToRead1: "条形图显示每个组的误差分布。",
    classificationAccuracyHowToRead2:
      "误差分为“过高预测”误差(true 标签为 0 时预测值为 1)和“过低预测”误差(true 标签为 1 时预测值为 0)。",
    classificationAccuracyHowToRead3: "通过将误差数除以组总大小得到报告率。",
    probabilityAccuracyHowToRead1:
      "条形图显示各组的平均绝对误差，分为“过高预测”和“过低预测”。",
    probabilityAccuracyHowToRead2:
      "我们对每个样本测量预测值和标签值之间的差异。如果是正值，则视为过高预测，如果是负值，则视为过低预测。",
    probabilityAccuracyHowToRead3:
      "我们报告“过高预测”误差总数与“过低预测”误差总数除以组总大小后的值。",
    regressionAccuracyHowToRead:
      "误差是预测值和标签值之间的差异。箱形图显示每个组的误差分布。各个数据点在顶部重叠。",
    distributionOfPredictions: "预测分布",
    distributionOfErrors: "误差分布",
    tooltipPrediction: "预测: {0}",
    tooltipError: "误差: {0}"
  },
  Feature: {
    header: "你想要通过哪些特征评估模型的公平性?",
    body:
      "根据模型行为差异评估公平性。我们将根据每个所选特征的值来拆分数据，并评估这些拆分数据的模型性能指标和预测之间的差异。",
    learnMore: "了解更多",
    summaryCategoricalCount: "此特征具有 {0} 个唯一值",
    summaryNumericCount:
      "此数值特征的范围从 {0} 到 {1}，并被划分到 {2} 个箱中。",
    showCategories: "全部显示",
    hideCategories: "折叠",
    categoriesOverflow: "和 {0} 个附加类别",
    editBinning: "编辑组",
    subgroups: "子组"
  },
  Metrics: {
    accuracyScore: "准确度",
    precisionScore: "精准率",
    recallScore: "召回",
    zeroOneLoss: "0-1 损失",
    specificityScore: "特异性分数",
    missRate: "漏检率",
    falloutRate: "错检率",
    maxError: "最大误差",
    meanAbsoluteError: "平均绝对误差",
    meanSquaredError: "MSE (均方误差)",
    meanSquaredLogError: "均方对数误差",
    medianAbsoluteError: "中值绝对误差",
    average: "平均预测",
    selectionRate: "选择率",
    overprediction: "过高预测",
    underprediction: "过低预测",
    r2_score: "R 平方分数",
    rms_error: "RMSE (均方根误差)",
    auc: "ROC 曲线下的面积",
    balancedRootMeanSquaredError: "平衡 RMSE",
    balancedAccuracy: "平衡准确度",
    f1Score: "F1-Score",
    logLoss: "Log Loss",
    accuracyDescription: "正确分类的数据点的分数。",
    precisionDescription: "分类为 1 的数据中正确分类的数据点的分数。",
    recallDescription:
      "真实标签为 1 的数据中正确分类的数据点的分数。其他名称: 真正率、敏感度。",
    rmseDescription: "方差平均值的平方根。",
    mseDescription: "平方误差的平均值。",
    meanAbsoluteErrorDescription:
      "误差绝对值的平均值。与 MSE 相比，对离群值更具健壮性。",
    r2Description: "模型解释的标签差异的分数。",
    aucDescription: "将正负样本分隔开的预测质量(以分数形式表示)。",
    balancedRMSEDescription:
      "对正样本和负样本重新进行加权以具有同等的总权重。适用于基础数据高度不均衡的情况。",
    balancedAccuracyDescription:
      "对正样本和负样本重新进行加权以具有同等的总权重。适用于基础数据高度不均衡的情况。",
    f1ScoreDescription: "F1-Score is the harmonic mean of precision and recall."
  },
  BinDialog: {
    header: "配置箱",
    makeCategorical: "视为类别",
    save: "保存",
    cancel: "取消",
    numberOfBins: "箱数:",
    categoryHeader: "箱值:"
  }
};