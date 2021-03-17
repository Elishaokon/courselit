/**
 * This file provides app wide constants
 */
const path = require("path");

const USER_CONTENT_DIRECTORY = process.env.USER_CONTENT_DIRECTORY;

module.exports = {
  domainNameForSingleTenancy: "main",
  dbConnectionString:
    process.env.DB_CONNECTION_STRING ||
    `mongodb://localhost/${process.env.NODE_ENV === "test" ? "test" : "app"}`,

  routePrefix:
    process.env.NODE_ENV === "production"
      ? process.env.API_PREFIX || "/api"
      : "",

  // password related config
  saltRounds: 10, // for bcrypting the plain text passwords
  jwtSecret: process.env.JWT_SECRET,
  jwtExpire: process.env.JWT_EXPIRES_IN || "1d",

  // Media uploads config
  uploadFolder: path.join(USER_CONTENT_DIRECTORY, "uploads"),
  thumbnailsFolder: path.join(USER_CONTENT_DIRECTORY, "thumbs"),
  useWebp: process.env.USE_WEBP === "true",
  webpOutputQuality: parseInt(process.env.WEBP_QUALITY) || 75,
  // the following constants are as per the 16:9 aspect ratio
  thumbnailWidth: 120,
  thumbnailHeight: 68,

  // Content types
  text: "text",
  audio: "audio",
  video: "video",
  pdf: "pdf",
  quiz: "quiz",

  // Content privacy types
  unlisted: "unlisted",
  open: "public",
  closed: "private",

  // Pagination config
  itemsPerPage: 5,
  defaultOffset: 1,
  blogPostSnippetLength: 135,

  // Payment methods
  paypal: "paypal",
  stripe: "stripe",
  paytm: "paytm",
  none: "",

  // transaction statuses
  transactionInitiated: "initiated",
  transactionSuccess: "success",
  transactionFailed: "failed",

  // acceptable currency codes for payments
  currencyISOCodes: [
    "afn",
    "eur",
    "all",
    "dzd",
    "usd",
    "aoa",
    "xcd",
    "ars",
    "amd",
    "awg",
    "aud",
    "azn",
    "bsd",
    "bhd",
    "bdt",
    "bbd",
    "byn",
    "bzd",
    "xof",
    "bmd",
    "inr",
    "btn",
    "bob",
    "bov",
    "bam",
    "bwp",
    "nok",
    "brl",
    "bnd",
    "bgn",
    "bif",
    "cve",
    "khr",
    "xaf",
    "cad",
    "kyd",
    "clp",
    "clf",
    "cny",
    "cop",
    "cou",
    "kmf",
    "cdf",
    "nzd",
    "crc",
    "hrk",
    "cup",
    "cuc",
    "ang",
    "czk",
    "dkk",
    "djf",
    "dop",
    "egp",
    "svc",
    "ern",
    "etb",
    "fkp",
    "fjd",
    "xpf",
    "gmd",
    "gel",
    "ghs",
    "gip",
    "gtq",
    "gbp",
    "gnf",
    "gyd",
    "htg",
    "hnl",
    "hkd",
    "huf",
    "isk",
    "idr",
    "xdr",
    "irr",
    "iqd",
    "ils",
    "jmd",
    "jpy",
    "jod",
    "kzt",
    "kes",
    "kpw",
    "krw",
    "kwd",
    "kgs",
    "lak",
    "lbp",
    "lsl",
    "zar",
    "lrd",
    "lyd",
    "chf",
    "mop",
    "mkd",
    "mga",
    "mwk",
    "myr",
    "mvr",
    "mru",
    "mur",
    "xua",
    "mxn",
    "mxv",
    "mdl",
    "mnt",
    "mad",
    "mzn",
    "mmk",
    "nad",
    "npr",
    "nio",
    "ngn",
    "omr",
    "pkr",
    "pab",
    "pgk",
    "pyg",
    "pen",
    "php",
    "pln",
    "qar",
    "ron",
    "rub",
    "rwf",
    "shp",
    "wst",
    "stn",
    "sar",
    "rsd",
    "scr",
    "sll",
    "sgd",
    "xsu",
    "sbd",
    "sos",
    "ssp",
    "lkr",
    "sdg",
    "srd",
    "szl",
    "sek",
    "che",
    "chw",
    "syp",
    "twd",
    "tjs",
    "tzs",
    "thb",
    "top",
    "ttd",
    "tnd",
    "try",
    "tmt",
    "ugx",
    "uah",
    "aed",
    "usn",
    "uyu",
    "uyi",
    "uyw",
    "uzs",
    "vuv",
    "ves",
    "vnd",
    "yer",
    "zmw",
    "zwl",
    "xba",
    "xbb",
    "xbc",
    "xbd",
    "xts",
    "xxx",
    "xau",
    "xpd",
    "xpt",
    "xag",
  ],
};
