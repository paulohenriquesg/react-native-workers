
#import "WorkerBridge.h"
#import "RCTDevMenu.h"
#import "RCTJSCExecutor.h"

@implementation RCTWorkerBridge

- (Class)executorClass
{
    return [RCTJSCExecutor class];
}

- (void)reload
{
}

@end