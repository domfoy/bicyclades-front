import _ from 'lodash';
import protobuf from 'protobufjs'; // eslint-disable-line import/no-extraneous-dependencies

const root = protobuf.Root.fromJSON(require('./bundle.json'));

const Action = root.lookupType('bicyclade.Action');

export function parseProtoMessage(data) {
  let buffer;
  if (_.isString(data)) {
    buffer = new TextEncoder().encode(data);
  } else {
    buffer = new Uint8Array(data);
  }
  const message = Action.decode(buffer);
  return Action.toObject(message, {
    enums: String, // enums as string names
    longs: String, // longs as strings (requires long.js)
    bytes: String, // bytes as base64 encoded strings
    defaults: true, // includes default values
    arrays: true, // populates empty arrays (repeated fields) even if defaults=false
    objects: true, // populates empty objects (map fields) even if defaults=false
    oneofs: true // includes virtual oneof fields set to the present field's name
  });
}

export function createProtoMessage(payload) {
  return Action.encode(payload).finish();
}
