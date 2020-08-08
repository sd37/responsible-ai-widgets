module.exports = {
  selectPoint:
    "Wählen Sie einen Punkt aus, um seine lokale Erklärung anzuzeigen.",
  defaultClassNames: 'Klasse "{0}"',
  defaultFeatureNames: 'Feature "{0}"',
  absoluteAverage: "Durchschnitt des absoluten Werts",
  predictedClass: "Vorhergesagte Klasse",
  datasetExplorer: "Dataset-Explorer",
  dataExploration: "Datasetuntersuchung",
  aggregateFeatureImportance: "Aggregierte Featurerelevanz",
  globalImportance: "Globale Relevanz",
  explanationExploration: "Durchsuchen der Erklärung",
  individualAndWhatIf: "Individuelle Featurerelevanz und Was-wäre-wenn-Analyse",
  summaryImportance: "Zusammenfassung – Relevanz",
  featureImportance: "Featurerelevanz",
  featureImportanceOf: 'Featurerelevanz von "{0}"',
  perturbationExploration: "Durchsuchen des Störeinflusses",
  localFeatureImportance: "Lokale Featurerelevanz",
  ice: "ICE",
  clearSelection: "Auswahl löschen",
  feature: "Feature:",
  intercept: "Abfangen",
  modelPerformance: "Modellleistung",
  ExplanationScatter: {
    dataLabel: "Daten : {0}",
    importanceLabel: "Relevanz : {0}",
    predictedY: "Vorhersage für Y",
    index: "Index",
    dataGroupLabel: "Daten",
    output: "Ausgabe",
    probabilityLabel: "Wahrscheinlichkeit : {0}",
    trueY: "TRUE Y",
    class: "Klasse: ",
    xValue: "X-Wert:",
    yValue: "Y-Wert:",
    colorValue: "Farbe:",
    count: "Anzahl"
  },
  CrossClass: {
    label: "Klassenübergreifende Gewichtung:",
    info: "Informationen zur klassenübergreifenden Berechnung",
    overviewInfo:
      "Multiklassenmodelle generieren für jede Klasse einen unabhängigen Featurerelevanzvektor. Der Featurerelevanzvektor der einzelnen Klassen zeigt, welche Features eine Klasse wahrscheinlicher oder unwahrscheinlicher werden ließen. Sie können auswählen, wie die Gewichtungen der Featurerelevanzvektoren pro Klasse zu einem einzigen Wert zusammengefasst werden:",
    absoluteValInfo:
      "Durchschnitt des absoluten Werts: Zeigt die Summe der Relevanz des Features für alle möglichen Klassen, geteilt durch die Klassenanzahl.",
    predictedClassInfo:
      "Vorhergesagte Klasse: Zeigt den Wert der Featurerelevanz für die vorhergesagte Klasse eines bestimmten Punkts an.",
    enumeratedClassInfo:
      "Aufgelistete Klassennamen: Zeigt nur die Featurerelevanz der angegebenen Klasse für alle Datenpunkte an.",
    close: "Schließen",
    crossClassWeights: "Klassenübergreifende Gewichtungen"
  },
  AggregateImportance: {
    scaledFeatureValue: "Featurewert auf Farbskala",
    low: "Niedrig",
    high: "Hoch",
    featureLabel: "Feature: {0}",
    valueLabel: "Featurewert: {0}",
    importanceLabel: "Relevanz: {0}",
    predictedClassTooltip: "Vorhergesagte Klasse: {0}",
    trueClassTooltip: "TRUE-Klasse: {0}",
    predictedOutputTooltip: "Vorhergesagte Ausgabe: {0}",
    trueOutputTooltip: "TRUE-Ausgabe: {0}",
    topKFeatures: "Wichtigste K Features:",
    topKInfo: "Gibt an, wie die Top-K-Berechnung erfolgt.",
    predictedValue: "Vorhergesagter Wert",
    predictedClass: "Vorhergesagte Klasse",
    trueValue: "True-Wert",
    trueClass: "TRUE-Klasse",
    noColor: "Keine",
    tooManyRows:
      "Das angegebene Dataset ist größer als von diesem Diagramm unterstützt wird."
  },
  BarChart: {
    classLabel: "Klasse: {0}",
    sortBy: "Sortieren nach",
    noData: "Keine Daten",
    absoluteGlobal: "Absolut global",
    absoluteLocal: "Absolut lokal",
    calculatingExplanation: "Erklärung wird berechnet."
  },
  IcePlot: {
    numericError: "Muss numerisch sein.",
    integerError: "Muss eine ganze Zahl sein.",
    prediction: "Vorhersage",
    predictedProbability: "Vorhergesagte Wahrscheinlichkeit",
    predictionLabel: "Vorhersage: {0}",
    probabilityLabel: "Wahrscheinlichkeit: {0}",
    noModelError:
      "Geben Sie ein operationalisiertes Modell an, um Vorhersagen in ICE-Plots zu untersuchen.",
    featurePickerLabel: "Feature:",
    minimumInputLabel: "Minimum:",
    maximumInputLabel: "Maximum:",
    stepInputLabel: "Schritte:",
    loadingMessage: "Daten werden geladen...",
    submitPrompt:
      "Übermitteln Sie einen Bereich, um einen ICE-Plot anzuzeigen.",
    topLevelErrorMessage: "Fehler in Parameter.",
    errorPrefix: "Fehler erkannt: {0} "
  },
  PerturbationExploration: {
    loadingMessage: "Wird geladen...",
    perturbationLabel: "Störeinfluss:"
  },
  PredictionLabel: {
    predictedValueLabel: "Vorhergesagter Wert : {0}",
    predictedClassLabel: "Vorhergesagte Klasse : {0}"
  },
  Violin: {
    groupNone: "Keine Gruppierung",
    groupPredicted: "Vorhersage für Y",
    groupTrue: "TRUE Y",
    groupBy: "Gruppieren nach"
  },
  FeatureImportanceWrapper: {
    chartType: "Diagrammtyp:",
    violinText: "Violine",
    barText: "Balken",
    boxText: "Feld",
    beehiveText: "Swarm",
    globalImportanceExplanation:
      "Die globale Featurerelevanz wird berechnet, indem der Durchschnitt des absoluten Werts der Featurerelevanz aller Punkte ermittelt wird (L1-Normalisierung). ",
    multiclassImportanceAddendum:
      'Bei der Berechnung der Featurerelevanz für alle Klassen werden alle Punkte berücksichtigt, es wird keine differenzielle Gewichtung verwendet. Ein Feature mit hoher negativer Relevanz, bei dem viele Punkte in der Vorhersage nicht der "Klasse A" zugeordnet werden, führt daher zu einer erheblich erhöhten Featurerelevanz der "Klasse A".'
  },
  Filters: {
    equalComparison: "Gleich",
    greaterThanComparison: "Größer als",
    greaterThanEqualToComparison: "Größer oder gleich",
    lessThanComparison: "Kleiner als",
    lessThanEqualToComparison: "Kleiner oder gleich",
    inTheRangeOf: "Im Bereich von",
    categoricalIncludeValues: "Enthaltene Werte:",
    numericValue: "Wert",
    numericalComparison: "Vorgang",
    minimum: "Minimum",
    maximum: "Maximum",
    min: "Mindestwert: {0}",
    max: "Höchstwert: {0}",
    uniqueValues: "Anzahl eindeutiger Werte: {0}"
  },
  Columns: {
    regressionError: "Regressionsfehler",
    error: "Fehler",
    classificationOutcome: "Klassifizierungsergebnis",
    truePositive: "True Positive",
    trueNegative: "True Negative",
    falsePositive: "False Positive",
    falseNegative: "False Negative",
    dataset: "Dataset",
    predictedProbabilities: "Vorhersagewahrscheinlichkeiten",
    none: "Anzahl"
  },
  WhatIf: {
    closeAriaLabel: "Schließen",
    defaultCustomRootName: "Kopie von Zeile {0}",
    filterFeaturePlaceholder: "Features durchsuchen"
  },
  Cohort: {
    cohort: "Kohorte",
    defaultLabel: "Alle Daten"
  },
  GlobalTab: {
    helperText:
      "Untersuchen Sie die wichtigsten k Funktionen, die sich auf die Gesamtvorhersagen Ihrer Modelle auswirken (globale Erklärungen). Verwenden Sie den Schieberegler, um absteigende Featurerelevanzwerte anzuzeigen. Wählen Sie bis zu drei Kohorten aus, um die zugehörigen Featurerelevanzwerte nebeneinander anzuzeigen. Klicken Sie auf einen der Featurebalken im Diagramm, um anzuzeigen, wie sich die Werte des ausgewählten Features auf die Modellvorhersage auswirken.",
    topAtoB: "Erste {0} bis {1} Features",
    datasetCohorts: "Datasetkohorten",
    legendHelpText:
      "Aktivieren und deaktivieren Sie Kohorten im Plot, indem Sie auf die Legendenelemente klicken.",
    sortBy: "Sortieren nach",
    viewDependencePlotFor: "Abhängigkeitsplot anzeigen für:",
    datasetCohortSelector: "Datasetkohorte auswählen",
    aggregateFeatureImportance: "Aggregierte Featurerelevanz",
    missingParameters:
      "Auf dieser Registerkarte muss der Parameter für die lokale Featurerelevanz angegeben werden.",
    weightOptions: "Gewichtungen der Klassenrelevanz",
    dependencePlotTitle: "Abhängigkeitsplots",
    dependencePlotHelperText:
      "Dieser Abhängigkeitsplot zeigt die Beziehung zwischen dem Wert eines Features und der entsprechenden Relevanz des Features in einer Kohorte.",
    dependencePlotFeatureSelectPlaceholder: "Feature auswählen",
    datasetRequired:
      "Für Abhängigkeitsplots ist das Array aus Auswertungsdataset und lokaler Featurerelevanz erforderlich."
  },
  CohortBanner: {
    dataStatistics: "Datenstatistik",
    datapoints: "{0} Datenpunkte",
    features: "{0} Features",
    filters: "{0} Filter",
    binaryClassifier: "Binäre Klassifizierung",
    regressor: "Regressor",
    multiclassClassifier: "Klassifizierung für mehrere Klassen",
    datasetCohorts: "Datasetkohorten",
    editCohort: "Kohorte bearbeiten",
    duplicateCohort: "Doppelte Kohorte",
    addCohort: "Kohorte hinzufügen",
    copy: " Kopie"
  },
  ModelPerformance: {
    helperText:
      "Bewerten Sie die Leistung Ihres Modells, indem Sie die Verteilung Ihrer Vorhersagewerte und die Werte der Leistungsmetriken Ihres Modells erkunden. Sie können Ihr Modell näher untersuchen, indem Sie sich eine vergleichende Analyse seiner Leistung in verschiedenen Kohorten oder Untergruppen Ihres Datasets ansehen. Wählen Sie Filter entlang des y-Werts und des x-Werts aus, um unterschiedliche Dimensionen einzubeziehen. Wählen Sie das Zahnrad im Diagramm aus, um den Diagrammtyp zu ändern.",
    modelStatistics: "Modellstatistiken",
    cohortPickerLabel: "Wählen Sie eine Datasetkohorte zur Untersuchung aus.",
    missingParameters:
      "Auf dieser Registerkarte muss das Array mit vorhergesagten Werten aus dem Modell angegeben werden.",
    missingTrueY:
      "Für die Modellleistungsstatistik müssen zusätzlich zu den vorhergesagten Ergebnissen die tatsächlichen Ergebnisse angegeben werden."
  },
  Charts: {
    yValue: "Y-Wert",
    numberOfDatapoints: "Anzahl von Datenpunkten",
    xValue: "X-Wert",
    rowIndex: "Zeilenindex",
    featureImportance: "Featurerelevanz",
    countTooltipPrefix: "Anzahl: {0}",
    count: "Anzahl",
    featurePrefix: "Feature",
    importancePrefix: "Relevanz",
    cohort: "Kohorte",
    howToRead: "Lesen dieses Diagramms"
  },
  DatasetExplorer: {
    helperText:
      "Untersuchen Sie Ihre Datasetstatistik, indem Sie verschiedene Filter für die X-, Y- und Farbachse auswählen, um Slices Ihrer Daten anhand verschiedener Dimensionen zu erstellen. Erstellen Sie oben Datensatzkohorten, um Datensatzstatistiken mit Filtern wie Datensatzfeatures, Fehlergruppen und dem vorhergesagten Ergebnis zu analysieren. Verwenden Sie das Zahnradsymbol in der oberen rechten Ecke des Diagramms, um die Diagrammtypen zu ändern.",
    colorValue: "Farbwert",
    individualDatapoints: "Einzelne Datenpunkte",
    aggregatePlots: "Aggregierte Plots",
    chartType: "Diagrammtyp",
    missingParameters:
      "Auf dieser Registerkarte muss ein Auswertungsdataset angegeben werden.",
    noColor: "Keine"
  },
  DependencePlot: {
    featureImportanceOf: "Featurerelevanz von",
    placeholder:
      "Klicken Sie im obigen Balkendiagramm auf ein Feature, um den zugehörigen Abhängigkeitsplot anzuzeigen."
  },
  WhatIfTab: {
    helperText:
      'Sie können einen Datenpunkt auswählen, indem Sie auf das Streudiagramm klicken, um unten die zugehörigen lokalen Featurerelevanzwerte (lokale Erklärungen) und den ICE-Plot (Individual Conditional Expectation) anzuzeigen. Erstellen Sie einen hypothetischen Was-wäre-wenn-Datenpunkt, indem Sie den Bereich rechts verwenden, um Features eines bekannten Datenpunkts zu stören. Featurerelevanzwerte basieren auf zahlreichen Näherungen und sind nicht die "Ursache" von Vorhersagen. Ohne absolute mathematische Belastbarkeit der kausalen Rückschlüsse raten wir Benutzern davon ab, basierend auf diesem Tool Entscheidungen in der Praxis zu treffen.',
    panelPlaceholder:
      "Für Vorhersagen für neue Datenpunkte ist ein Modell erforderlich.",
    cohortPickerLabel: "Wählen Sie eine Datasetkohorte zur Untersuchung aus.",
    scatterLegendText:
      "Aktivieren und deaktivieren Sie die Datenpunkte im Plot, indem Sie auf die Legendenelemente klicken.",
    realPoint: "Reale Datenpunkte",
    noneSelectedYet: "Noch keine ausgewählt.",
    whatIfDatapoints: "Was-wäre-wenn-Datenpunkte",
    noneCreatedYet: "Noch keine erstellt.",
    showLabel: "Anzeigen:",
    featureImportancePlot: "Featurerelevanzplot",
    icePlot: "ICE-Plot (Individual Conditional Expectation)",
    featureImportanceLackingParameters:
      "Geben Sie Werte für die lokale Featurerelevanz an, um festzustellen, wie sich jedes Feature auf die einzelnen Vorhersagen auswirkt.",
    featureImportanceGetStartedText:
      "Wählen Sie einen Punkt für die Anzeige der Featurerelevanz aus.",
    iceLackingParameters:
      "Für ICE-Plots ist ein operationalisiertes Modell erforderlich, um Vorhersagen für hypothetische Datenpunkte zu treffen.",
    IceGetStartedText:
      "Wählen Sie einen Punkt aus, oder erstellen Sie einen Was-wäre-wenn-Punkt, um ICE-Plots anzuzeigen.",
    whatIfDatapoint: "Was-wäre-wenn-Datenpunkt",
    whatIfHelpText:
      "Wählen Sie einen Punkt im Plot aus, oder geben Sie einen bekannten Datenpunktindex manuell ein, um eine Störung hervorzurufen und ihn als neuen Was-wäre-wenn-Punkt zu speichern.",
    indexLabel: "Datenindex für Störung",
    rowLabel: "Zeile {0}",
    whatIfNameLabel: "Name des Was-wäre-wenn-Datenpunkts",
    featureValues: "Featurewerte",
    predictedClass: "Vorhergesagte Klasse: ",
    predictedValue: "Vorhergesagter Wert: ",
    probability: "Wahrscheinlichkeit: ",
    trueClass: "TRUE-Klasse: ",
    trueValue: "TRUE-Wert: ",
    "trueValue.comment": "Präfix der tatsächlichen Beschriftung für Regression",
    newPredictedClass: "Neue vorhergesagte Klasse: ",
    newPredictedValue: "Neuer vorhergesagter Wert: ",
    newProbability: "Neue Wahrscheinlichkeit: ",
    saveAsNewPoint: "Als neuen Punkt speichern",
    saveChanges: "Änderungen speichern",
    loading: "Wird geladen...",
    classLabel: "Klasse: {0}",
    minLabel: "Min.",
    maxLabel: "Max.",
    stepsLabel: "Schritte",
    disclaimer:
      'Haftungsausschluss: Diese Erläuterungen basieren auf zahlreichen Näherungswerten und stellen nicht die "Ursache" von Vorhersagen dar. Ohne absolute mathematische Belastbarkeit der kausalen Rückschlüsse raten wir Benutzern davon ab, basierend auf diesem Tool Entscheidungen in der Praxis zu treffen.',
    missingParameters:
      "Auf dieser Registerkarte muss ein Auswertungsdataset angegeben werden.",
    selectionLimit: "Maximal 3 ausgewählte Punkte",
    classPickerLabel: "Klasse",
    tooltipTitleMany: "Erste {0} vorhergesagte Klassen",
    whatIfTooltipTitle: "Klassen mit Was-wäre-wenn-Vorhersage",
    tooltipTitleFew: "Vorhergesagte Klassen",
    probabilityLabel: "Wahrscheinlichkeit",
    deltaLabel: "Delta",
    nonNumericValue: "Der Wert muss numerisch sein.",
    icePlotHelperText:
      "ICE-Plots zeigen, wie sich die Vorhersagewerte des ausgewählten Datenpunkts entlang eines Bereichs von Featurewerten zwischen einem Mindest- und einem Höchstwert ändern."
  },
  CohortEditor: {
    selectFilter: "Filter auswählen",
    TreatAsCategorical: "Als kategorisch behandeln",
    addFilter: "Filter hinzufügen",
    addedFilters: "Hinzugefügte Filter",
    noAddedFilters: "Noch keine Filter hinzugefügt.",
    defaultFilterState:
      "Wählen Sie einen Filter aus, um Ihrer Datasetkohorte Parameter hinzuzufügen.",
    cohortNameLabel: "Name der Datasetkohorte",
    cohortNamePlaceholder: "Kohorte benennen",
    save: "Speichern",
    delete: "Löschen",
    cancel: "Abbrechen",
    cohortNameError: "Kohortenname fehlt.",
    placeholderName: 'Kohorte "{0}"'
  },
  AxisConfigDialog: {
    select: "Auswählen",
    ditherLabel: "Dithern durchführen",
    selectFilter: "Achsenwert auswählen",
    selectFeature: "Feature auswählen",
    binLabel: "Quantisierung auf Daten anwenden",
    TreatAsCategorical: "Als kategorisch behandeln",
    numOfBins: "Datengruppenanzahl",
    groupByCohort: "Nach Kohorte gruppieren",
    selectClass: "Klasse auswählen",
    countHelperText: "Ein Histogramm der Punkteanzahl"
  },
  ValidationErrors: {
    predictedProbability: "Vorhergesagte Wahrscheinlichkeit",
    predictedY: "Vorhersage für Y",
    evalData: "Auswertungsdataset",
    localFeatureImportance: "Lokale Featurerelevanz",
    inconsistentDimensions:
      'Inkonsistente Dimensionen. "{0}" weist die Dimensionen "{1}" auf, erwartet: {2}.',
    notNonEmpty: 'Die Eingabe "{0}" ist kein nicht leeres Array.',
    varyingLength:
      'Inkonsistente Dimensionen. "{0}" weist Elemente unterschiedlicher Länge auf.',
    notArray:
      '"{0}" ist kein Array. Es wird ein Array mit der Dimension "{1}" erwartet.',
    errorHeader:
      "Einige Eingabeparameter waren inkonsistent und werden nicht verwendet: ",
    datasizeWarning:
      "Das Auswertungsdataset ist zu groß, um in einigen Diagrammen effektiv angezeigt zu werden. Fügen Sie Filter hinzu, um die Größe der Kohorte zu verringern. ",
    datasizeError:
      "Die ausgewählte Kohorte ist zu groß. Fügen Sie Filter hinzu, um die Größe der Kohorte zu verringern.",
    addFilters: "Filter hinzufügen"
  },
  FilterOperations: {
    equals: " = {0}",
    lessThan: " < {0}",
    greaterThan: " > {0}",
    lessThanEquals: " <= {0}",
    greaterThanEquals: " >= {0}",
    includes: " enthält {0} ",
    inTheRangeOf: "[ {0} ]",
    overflowFilterArgs: "{0} und {1} andere"
  },
  Statistics: {
    mse: "Mittlere quadratische Abweichung: {0}",
    rSquared: "Bestimmtheitsmaß: {0}",
    meanPrediction: "Mittlere Vorhersage: {0}",
    accuracy: "Genauigkeit: {0}",
    precision: "Genauigkeit: {0}",
    recall: "Abruf: {0}",
    fpr: "FPR: {0}",
    fnr: "FNR: {0}"
  },
  GlobalOnlyChart: {
    helperText:
      "Untersuchen Sie die Features mit Top-k-Relevanz, die sich auf Ihre Modellvorhersagen insgesamt auswirken. Verwenden Sie den Schieberegler, um Featurerelevanzen absteigend anzuzeigen."
  },
  ExplanationSummary: {
    whatDoExplanationsMean: "Was bedeuten diese Erklärungen?",
    clickHere: "Weitere Informationen",
    shapTitle: "Shapley-Werte",
    shapDescription:
      'Dieses Erklärmodul verwendet SHAP, einen spieletheoretischen Ansatz zur Erklärung von Modellen, bei dem die Relevanz von Featuresätzen gemessen wird, indem die betreffenden Features durch Marginalisierung vor dem Modell "versteckt" werden. Klicken Sie auf den Link unten, um mehr zu erfahren.',
    limeTitle: "LIME (Local Interpretable Model-Agnostic Explanations)",
    limeDescription:
      "Dieses Erklärmodul verwendet LIME, um eine lineare Näherung des Modells bereitzustellen. Gehen Sie wie folgt vor, um eine Erklärung zu erhalten: Fügen Sie Störungen in die Instanz ein, rufen Sie Modellvorhersagen ab, und verwenden Sie diese Vorhersagen als Beschriftungen, um ein lineares Modell geringer Datendichte zu trainieren, das lokal zuverlässig ist. Die Gewichtungen dieses linearen Modells werden als Featurerelevanz verwendet. Klicken Sie auf den Link unten, um weitere Informationen zu erhalten.",
    mimicTitle: "Nachahmung (globales Ersatzmodell zur Erklärung)",
    mimicDescription:
      "Dieses Erklärmodul basiert auf der Idee, globale Ersatzmodelle zur Nachahmung von Blackbox-Modellen zu trainieren. Ein globales Ersatzmodell ist ein intrinsisch interpretierbares Modell, das so trainiert wird, dass es sich so genau wie möglich an die Vorhersagen eines Black Box-Modells annähert. Die Werte der Featurerelevanz sind modellbasierte Featurerelevanzwerte des zugrunde liegenden Ersatzmodells (LightGBM, lineare Regression, stochastischer Gradientenabstieg oder Entscheidungsstruktur).",
    pfiTitle: "Permutation Feature Importance (PFI)",
    pfiDescription:
      "Dieses Erklärmodul ordnet die Daten für den gesamten Datensatz – jeweils ein Feature nach dem anderen – nach dem Zufallsprinzip an und berechnet, wie sich die relevante Leistungsmetrik ändert (standardmäßige Leistungsmetriken: F1 für binäre Klassifikation, F1-Bewertung mit Mikrodurchschnitt für Mehrklassenklassifikation und mittlerer absoluter Fehler für Regression). Je größer die Änderung, desto relevanter ist das Feature. Dieses Erklärmodul kann nur das Gesamtverhalten des zugrunde liegenden Modells erklären, nicht jedoch einzelne Vorhersagen. Der Wert der Featurerelevanz repräsentiert das Delta für die Modellleistung, indem dieses bestimmte Feature gestört wird."
  }
};