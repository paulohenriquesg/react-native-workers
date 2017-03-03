#ifndef WorkerBridge_h
#define WorkerBridge_h

#import <React/RCTInvalidating.h>
#import <React/RCTBridge.h>

@interface RCTWorkerBridge : RCTBridge <RCTInvalidating>
@end

#endif /* WorkerBridge_h */
