#import <React/RCTComponent.h>
#import <React/RCTViewManager.h>
#import "RCTBridgeModule.h"

@import FluentUI;

@implementation RCTConvert (MSFButtonAdditions)
RCT_ENUM_CONVERTER(MSFButtonStyle, (@{
	@"primary": @(MSFButtonStylePrimary),
	@"secondary": @(MSFButtonStyleSecondary),
	@"acrylic": @(MSFButtonStyleAcrylic),
	@"borderless": @(MSFButtonStyleBorderless),
}), MSFButtonStylePrimary, integerValue);

@end

@interface RCT_EXTERN_MODULE(MSFButtonViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(title, NSString);
RCT_EXPORT_VIEW_PROPERTY(image, NSImage);
RCT_EXPORT_VIEW_PROPERTY(isEnabled, bool);
RCT_EXPORT_VIEW_PROPERTY(contentTintColor, NSColor);
RCT_EXPORT_VIEW_PROPERTY(accentColor, NSColor);
RCT_EXPORT_VIEW_PROPERTY(onPress, RCTBubblingEventBlock);

RCT_REMAP_VIEW_PROPERTY(buttonStyle, style, MSFButtonStyle);

@end

