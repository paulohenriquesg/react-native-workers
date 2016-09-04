import {
  NativeModules,
  DeviceEventEmitter,
  Platform,
} from 'react-native';

const { WorkerSelfManager } = NativeModules;

const self = {
  onmessage: null,

  postMessage: (message) => {
    if (!message) { return; }
    WorkerSelfManager.postMessage(message);
  },

  isWorker: () => {
    return (
         (Platform.OS === 'android' && WorkerSelfManager)
      || (Platform.OS === 'ios' && WorkerSelfManager.inWorker === 1)
    );
  }
};

DeviceEventEmitter.addListener("WorkerMessage", (message) => {
  !!message && self.onmessage && self.onmessage(message);
});

export default self;
