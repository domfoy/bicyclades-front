/* eslint-disable */

/**
 * @fileoverview gRPC-Web generated client stub for bicyclade
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.bicyclade = require('./bicyclade_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bicyclade.BycServerClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bicyclade.BycServerPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.bicyclade.BycServerClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.bicyclade.BycServerClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bicyclade.Connection,
 *   !proto.bicyclade.Game>}
 */
const methodInfo_BycServer_Connect = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bicyclade.Game,
  /** @param {!proto.bicyclade.Connection} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.bicyclade.Game.deserializeBinary
);


/**
 * @param {!proto.bicyclade.Connection} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bicyclade.Game)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bicyclade.Game>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bicyclade.BycServerClient.prototype.connect =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bicyclade.BycServer/Connect',
      request,
      metadata,
      methodInfo_BycServer_Connect,
      callback);
};


/**
 * @param {!proto.bicyclade.Connection} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bicyclade.Game>}
 *     The XHR Node Readable Stream
 */
proto.bicyclade.BycServerPromiseClient.prototype.connect =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.connect(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bicyclade.ActionList,
 *   !proto.bicyclade.Rstatus>}
 */
const methodInfo_BycServer_ExecuteAction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bicyclade.Rstatus,
  /** @param {!proto.bicyclade.ActionList} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.bicyclade.Rstatus.deserializeBinary
);


/**
 * @param {!proto.bicyclade.ActionList} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bicyclade.Rstatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bicyclade.Rstatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bicyclade.BycServerClient.prototype.executeAction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bicyclade.BycServer/ExecuteAction',
      request,
      metadata,
      methodInfo_BycServer_ExecuteAction,
      callback);
};


/**
 * @param {!proto.bicyclade.ActionList} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bicyclade.Rstatus>}
 *     The XHR Node Readable Stream
 */
proto.bicyclade.BycServerPromiseClient.prototype.executeAction =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.executeAction(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bicyclade.ClientServerClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bicyclade.ClientServerPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.bicyclade.ClientServerClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.bicyclade.ClientServerClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bicyclade.Action,
 *   !proto.bicyclade.Rstatus>}
 */
const methodInfo_ClientServer_Stream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bicyclade.Rstatus,
  /** @param {!proto.bicyclade.Action} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.bicyclade.Rstatus.deserializeBinary
);


/**
 * @param {!proto.bicyclade.Action} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bicyclade.Rstatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bicyclade.Rstatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bicyclade.ClientServerClient.prototype.stream =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bicyclade.ClientServer/Stream',
      request,
      metadata,
      methodInfo_ClientServer_Stream,
      callback);
};


/**
 * @param {!proto.bicyclade.Action} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bicyclade.Rstatus>}
 *     The XHR Node Readable Stream
 */
proto.bicyclade.ClientServerPromiseClient.prototype.stream =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.stream(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.bicyclade;
