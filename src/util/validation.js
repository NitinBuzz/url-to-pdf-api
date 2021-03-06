const Joi = require('joi');

const urlSchema = Joi.string().uri({
  scheme: [
    'http',
    'https',
  ],
});

const renderQueryParams = Joi.object({
  url: urlSchema,
  scrollPage: Joi.boolean(),
  emulateScreenMedia: Joi.boolean(),
  waitFor: Joi.alternatives([
    Joi.number().min(1).max(60000),
    Joi.string().min(1).max(2000),
  ]),
  'viewport.width': Joi.number().min(1).max(30000),
  'viewport.height': Joi.number().min(1).max(30000),
  'viewport.deviceScaleFactor': Joi.number().min(0).max(100),
  'viewport.isMobile': Joi.boolean(),
  'viewport.hasTouch': Joi.boolean(),
  'viewport.isLandscape': Joi.boolean(),
  'goto.timeout': Joi.number().min(0).max(60000),
  'goto.waitUntil': Joi.string().min(1).max(2000),
  'goto.networkIdleInflight': Joi.number().min(0).max(1000),
  'goto.networkIdleTimeout': Joi.number().min(0).max(1000),
  'pdf.scale': Joi.number().min(0).max(1000),
  'pdf.displayHeaderFooter': Joi.boolean(),
  'pdf.landscape': Joi.boolean(),
  'pdf.pageRanges': Joi.string().min(1).max(2000),
  'pdf.format': Joi.string().min(1).max(2000),
  'pdf.width': Joi.string().min(1).max(2000),
  'pdf.height': Joi.string().min(1).max(2000),
  'pdf.margin.top': Joi.string().min(1).max(2000),
  'pdf.margin.right': Joi.string().min(1).max(2000),
  'pdf.margin.bottom': Joi.string().min(1).max(2000),
  'pdf.margin.left': Joi.string().min(1).max(2000),
  'pdf.printBackground': Joi.boolean(),
});

const renderBodyParams = Joi.object({
  url: urlSchema,
  scrollPage: Joi.boolean(),
  emulateScreenMedia: Joi.boolean(),
  viewport: Joi.object({
    width: Joi.number().min(1).max(30000),
    height: Joi.number().min(1).max(30000),
    deviceScaleFactor: Joi.number().min(0).max(100),
    isMobile: Joi.boolean(),
    hasTouch: Joi.boolean(),
    isLandscape: Joi.boolean(),
  }),
  waitFor: Joi.alternatives([
    Joi.number().min(1).max(60000),
    Joi.string().min(1).max(2000),
  ]),
  goto: Joi.object({
    timeout: Joi.number().min(0).max(60000),
    waitUntil: Joi.string().min(1).max(2000),
    networkIdleInflight: Joi.number().min(0).max(1000),
    networkIdleTimeout: Joi.number().min(0).max(1000),
  }),
  pdf: Joi.object({
    scale: Joi.number().min(0).max(1000),
    displayHeaderFooter: Joi.boolean(),
    landscape: Joi.boolean(),
    pageRanges: Joi.string().min(1).max(2000),
    format: Joi.string().min(1).max(2000),
    width: Joi.string().min(1).max(2000),
    height: Joi.string().min(1).max(2000),
    margin: Joi.object({
      top: Joi.string().min(1).max(2000),
      right: Joi.string().min(1).max(2000),
      bottom: Joi.string().min(1).max(2000),
      left: Joi.string().min(1).max(2000),
    }),
    printBackground: Joi.boolean(),
  }),
});

module.exports = {
  renderQueryParams,
};
