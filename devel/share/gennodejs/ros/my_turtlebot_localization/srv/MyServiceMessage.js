// Auto-generated. Do not edit!

// (in-package my_turtlebot_localization.srv)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------


//-----------------------------------------------------------

class MyServiceMessageRequest {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.label = null;
    }
    else {
      if (initObj.hasOwnProperty('label')) {
        this.label = initObj.label
      }
      else {
        this.label = '';
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type MyServiceMessageRequest
    // Serialize message field [label]
    bufferOffset = _serializer.string(obj.label, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type MyServiceMessageRequest
    let len;
    let data = new MyServiceMessageRequest(null);
    // Deserialize message field [label]
    data.label = _deserializer.string(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += _getByteLength(object.label);
    return length + 4;
  }

  static datatype() {
    // Returns string type for a service object
    return 'my_turtlebot_localization/MyServiceMessageRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ea23f97416b04c6151d2b576c0665ac1';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # request
    string label
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new MyServiceMessageRequest(null);
    if (msg.label !== undefined) {
      resolved.label = msg.label;
    }
    else {
      resolved.label = ''
    }

    return resolved;
    }
};

class MyServiceMessageResponse {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.navigation_successfull = null;
      this.message = null;
    }
    else {
      if (initObj.hasOwnProperty('navigation_successfull')) {
        this.navigation_successfull = initObj.navigation_successfull
      }
      else {
        this.navigation_successfull = false;
      }
      if (initObj.hasOwnProperty('message')) {
        this.message = initObj.message
      }
      else {
        this.message = '';
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type MyServiceMessageResponse
    // Serialize message field [navigation_successfull]
    bufferOffset = _serializer.bool(obj.navigation_successfull, buffer, bufferOffset);
    // Serialize message field [message]
    bufferOffset = _serializer.string(obj.message, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type MyServiceMessageResponse
    let len;
    let data = new MyServiceMessageResponse(null);
    // Deserialize message field [navigation_successfull]
    data.navigation_successfull = _deserializer.bool(buffer, bufferOffset);
    // Deserialize message field [message]
    data.message = _deserializer.string(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += _getByteLength(object.message);
    return length + 5;
  }

  static datatype() {
    // Returns string type for a service object
    return 'my_turtlebot_localization/MyServiceMessageResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a3a2f7c01cc0d2cc53c9f7ea9a224866';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    #response
    bool navigation_successfull
    string message
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new MyServiceMessageResponse(null);
    if (msg.navigation_successfull !== undefined) {
      resolved.navigation_successfull = msg.navigation_successfull;
    }
    else {
      resolved.navigation_successfull = false
    }

    if (msg.message !== undefined) {
      resolved.message = msg.message;
    }
    else {
      resolved.message = ''
    }

    return resolved;
    }
};

module.exports = {
  Request: MyServiceMessageRequest,
  Response: MyServiceMessageResponse,
  md5sum() { return '920ca5ca095e1b5230fc32da338a974c'; },
  datatype() { return 'my_turtlebot_localization/MyServiceMessage'; }
};
