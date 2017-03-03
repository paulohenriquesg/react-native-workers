
#import "WorkerBridge.h"
#import <React/RCTDevMenu.h>
#import <React/RCTJSCExecutor.h>

@implementation RCTWorkerBridge

- (Class)executorClass
{
    return [RCTJSCExecutor class];
}

- (void)reload
{
}

@end