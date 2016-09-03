#ifndef WorkerBridge_h
#define WorkerBridge_h

#import "RCTInvalidating.h"
#import "RCTBridge.h"

@interface RCTWorkerBridge : RCTBridge <RCTInvalidating>
@end

#endif /* WorkerBridge_h */
