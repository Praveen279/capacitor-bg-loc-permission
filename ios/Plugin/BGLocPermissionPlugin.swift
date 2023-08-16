import Foundation
import Capacitor
import MapKit

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(BGLocPermissionPlugin)
public class BGLocPermissionPlugin: CAPPlugin {
    @objc func reqPerm(_ call: CAPPluginCall) {
        let manager = CLLocationManager();
        let authorizationStatus: CLAuthorizationStatus
        if #available(iOS 14, *) {
            authorizationStatus = manager.authorizationStatus
        } else {
            authorizationStatus = CLLocationManager.authorizationStatus()
        }

        print("Hi there!!!");
        if (authorizationStatus == .authorizedWhenInUse) {
            manager.requestAlwaysAuthorization();
        }

    }
}
