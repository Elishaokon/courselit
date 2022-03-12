/**
 * This file provides app wide constants
 */

export default {
  domainNameForSingleTenancy: "main",
  placeholderEmailForSingleTenancy: "fake@email.com",
  dbConnectionString:
    process.env.DB_CONNECTION_STRING ||
    `mongodb://localhost/${process.env.NODE_ENV === "test" ? "test" : "app"}`,

  routePrefix:
    process.env.NODE_ENV === "production"
      ? process.env.API_PREFIX || "/api"
      : "",

  // mail settings
  mailHost: process.env.EMAIL_HOST,
  mailUser: process.env.EMAIL_USER,
  mailPass: process.env.EMAIL_PASS,
  mailFrom: process.env.EMAIL_FROM,
  mailPort: process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT) : 587,

  // password related config
  jwtSecret: process.env.JWT_SECRET,
  jwtExpire: process.env.JWT_EXPIRES_IN || "1d",
  jwtTokenCookieName: process.env.JWT_COOKIE_NAME || "token",

  // Media uploads config
  tempFileDirForUploads: process.env.TEMP_DIR_FOR_UPLOADS,
  useWebp: process.env.USE_WEBP === "true",
  webpOutputQuality: process.env.WEBP_QUALITY
    ? parseInt(process.env.WEBP_QUALITY)
    : 75,
  // the following constants are as per the 16:9 aspect ratio
  thumbnailWidth: 120,
  thumbnailHeight: 68,
  cloudEndpoint: process.env.CLOUD_ENDPOINT || "",
  cloudRegion: process.env.CLOUD_REGION || "",
  cloudKey: process.env.CLOUD_KEY || "",
  cloudSecret: process.env.CLOUD_SECRET || "",
  cloudBucket: process.env.CLOUD_BUCKET_NAME || "",
  cdnEndpoint: process.env.CDN_ENDPOINT || "",
  maxFileUploadSize: process.env.MAX_UPLOAD_SIZE || 2147483648,
  imagePattern: /^image\/(jpe?g|png)$/,
  videoPattern: /video/,

  // Content types
  text: "text",
  audio: "audio",
  video: "video",
  pdf: "pdf",
  quiz: "quiz",

  // Content privacy types
  unlisted: "unlisted",
  open: "public",

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

  // permissions for role-based access
  permissions: {
    manageCourse: "course:manage",
    manageAnyCourse: "course:manage_any",
    publishCourse: "course:publish",
    enrollInCourse: "course:enroll",
    manageMedia: "media:manage",
    manageAnyMedia: "media:manage_any",
    uploadMedia: "media:upload",
    viewAnyMedia: "media:view_any",
    manageLayout: "layout:manage",
    manageThemes: "theme:manage",
    manageMenus: "menu:manage",
    manageWidgets: "widget:manage",
    manageSettings: "setting:manage",
    manageUsers: "user:manage",
  },

  // log levels
  severityError: "error",
  severityInfo: "info",
  severityWarn: "warn",

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
