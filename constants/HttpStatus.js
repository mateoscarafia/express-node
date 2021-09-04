var HttpStatus = {};

HttpStatus[exports.OK = 200] = "OK-1";
HttpStatus[exports.UNAUTHORIZED = 401] = "Unauthorized";
HttpStatus[exports.ACCEPTED = 202] = "Accepted";
HttpStatus[exports.BAD_GATEWAY = 502] = "Bad Gateway";
HttpStatus[exports.BAD_REQUEST = 400] = "Bad Request";
HttpStatus[exports.CONFLICT = 409] = "Conflict";
HttpStatus[exports.CONTINUE = 100] = "Continue";
HttpStatus[exports.CREATED = 201] = "Created";
HttpStatus[exports.EXPECTATION_FAILED = 417] = "Expectation Failed";
HttpStatus[exports.FAILED_DEPENDENCY  = 424] = "Failed Dependency";
HttpStatus[exports.FORBIDDEN = 403] = "Forbidden";
HttpStatus[exports.GATEWAY_TIMEOUT = 504] = "Gateway Timeout";
HttpStatus[exports.GONE = 410] = "Gone";
HttpStatus[exports.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP Version Not Supported";
HttpStatus[exports.IM_A_TEAPOT = 418] = "I'm a teapot";
HttpStatus[exports.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "Insufficient Space on Resource";
HttpStatus[exports.INSUFFICIENT_STORAGE = 507] = "Insufficient Storage";
HttpStatus[exports.INTERNAL_SERVER_ERROR = 500] = "Server Error";
HttpStatus[exports.LENGTH_REQUIRED = 411] = "Length Required";
HttpStatus[exports.LOCKED = 423] = "Locked";
HttpStatus[exports.METHOD_FAILURE = 420] = "Method Failure";
HttpStatus[exports.METHOD_NOT_ALLOWED = 405] = "Method Not Allowed";
HttpStatus[exports.MOVED_PERMANENTLY = 301] = "Moved Permanently";
HttpStatus[exports.MOVED_TEMPORARILY = 302] = "Moved Temporarily";
HttpStatus[exports.MULTI_STATUS = 207] = "Multi-Status";
HttpStatus[exports.MULTIPLE_CHOICES = 300] = "Multiple Choices";
HttpStatus[exports.NETWORK_AUTHENTICATION_REQUIRED = 511] = "Network Authentication Required";
HttpStatus[exports.NO_CONTENT = 204] = "No Content";
HttpStatus[exports.NON_AUTHORITATIVE_INFORMATION = 203] = "Non Authoritative Information";
HttpStatus[exports.NOT_ACCEPTABLE = 406] = "Not Acceptable";
HttpStatus[exports.NOT_FOUND = 404] = "Not Found";
HttpStatus[exports.NOT_IMPLEMENTED = 501] = "Not Implemented";
HttpStatus[exports.NOT_MODIFIED = 304] = "Not Modified";
HttpStatus[exports.PARTIAL_CONTENT = 206] = "Partial Content";
HttpStatus[exports.PAYMENT_REQUIRED = 402] = "Payment Required";
HttpStatus[exports.PERMANENT_REDIRECT = 308] = "Permanent Redirect";
HttpStatus[exports.PRECONDITION_FAILED = 412] = "Precondition Failed";
HttpStatus[exports.PRECONDITION_REQUIRED = 428] = "Precondition Required";
HttpStatus[exports.PROCESSING = 102] = "Processing";
HttpStatus[exports.PROXY_AUTHENTICATION_REQUIRED = 407] = "Proxy Authentication Required";
HttpStatus[exports.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "Request Header Fields Too Large";
HttpStatus[exports.REQUEST_TIMEOUT = 408] = "Request Timeout";
HttpStatus[exports.REQUEST_TOO_LONG = 413] = "Request Entity Too Large";
HttpStatus[exports.REQUEST_URI_TOO_LONG = 414] = "Request-URI Too Long";
HttpStatus[exports.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "Requested Range Not Satisfiable";
HttpStatus[exports.RESET_CONTENT = 205] = "Reset Content";
HttpStatus[exports.SEE_OTHER = 303] = "See Other";
HttpStatus[exports.SERVICE_UNAVAILABLE = 503] = "Service Unavailable";
HttpStatus[exports.SWITCHING_PROTOCOLS = 101] = "Switching Protocols";
HttpStatus[exports.TEMPORARY_REDIRECT = 307] = "Temporary Redirect";
HttpStatus[exports.TOO_MANY_REQUESTS = 429] = "Too Many Requests";
HttpStatus[exports.UNPROCESSABLE_ENTITY = 422] = "Unprocessable Entity";
HttpStatus[exports.UNSUPPORTED_MEDIA_TYPE = 415] = "Unsupported Media Type";
HttpStatus[exports.USE_PROXY = 305] = "Use Proxy";

exports.getStatusText = function(statusCode) {
  if (HttpStatus.hasOwnProperty(statusCode)) {
    return HttpStatus[statusCode];
  } else {
    throw new Error("Status code does not exist: " + statusCode);
  }
};
