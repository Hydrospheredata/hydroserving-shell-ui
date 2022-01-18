export const mockReports = [
  [
    {
      pluginId: 'drift_report_plugin',
      modelName: 'ecommerce-basic',
      modelVersion: 1,
      file: 's3://ecommerce-basic/inference/ecommerce_products_0-500.csv',
      fileModifiedAt: '2021-12-30T10:19:46.238Z',
      featureReports: {
        average_review_rating: [
          {
            description: 'No significant change in the distribution',
            isGood: true,
          },
          {
            description: 'No significant change in the median',
            isGood: true,
          },
          {
            description: 'No significant change in the variance',
            isGood: true,
          },
        ],
        price: [
          {
            description: 'Significant change in the distribution',
            isGood: false,
          },
          {
            description: 'No significant change in the median',
            isGood: true,
          },
          {
            description: 'Significant change in the variance',
            isGood: false,
          },
        ],
        number_of_answered_questions: [
          {
            description: 'Significant change in the distribution',
            isGood: false,
          },
          {
            description:
              'Unable to calculate statistic: All values are above the grand median (1.0).',
            isGood: true,
          },
          {
            description: 'No significant change in the variance',
            isGood: true,
          },
        ],
        amazon_category_and_sub_category: [
          {
            description:
              'Production categorical data has different frequencies',
            isGood: false,
          },
          {
            description: 'No change',
            isGood: true,
          },
        ],
        number_of_reviews: [
          {
            description: 'Significant change in the distribution',
            isGood: false,
          },
          {
            description: 'Significant change in the median',
            isGood: false,
          },
          {
            description: 'No significant change in the variance',
            isGood: true,
          },
        ],
        product_name: [
          {
            description:
              'Difference between training and production frequencies are not significant',
            isGood: true,
          },
          {
            description: 'No change',
            isGood: true,
          },
        ],
        number_available_in_stock: [
          {
            description: 'Significant change in the distribution',
            isGood: false,
          },
          {
            description: 'Significant change in the median',
            isGood: false,
          },
          {
            description: 'No significant change in the variance',
            isGood: true,
          },
        ],
        type_available_in_stock: [
          {
            description:
              'Difference between training and production frequencies are not significant',
            isGood: true,
          },
          {
            description: 'No change',
            isGood: true,
          },
        ],
        manufacturer: [
          {
            description:
              'Difference between training and production frequencies are not significant',
            isGood: true,
          },
          {
            description: 'No change',
            isGood: true,
          },
        ],
      },
      batchStats: null,
    },
  ],
  [
    {
      pluginId: 'profiler_plugin',
      modelName: 'ecommerce-basic',
      modelVersion: 1,
      file: 's3://ecommerce-basic/inference/ecommerce_products_500-1000.csv',
      fileModifiedAt: '2021-12-30T10:19:47.044Z',
      featureReports: {},
      batchStats: {
        susRatio: 1.1916691052335397,
        susVerdict: 'good',
        failRatio: 0,
      },
    },
  ],
];
