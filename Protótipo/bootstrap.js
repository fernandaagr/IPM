/*
 * Copyright 2012-2013 Apple Inc
 */
const Cc = Components.classes;
const Ci = Components.interfaces;
const Cu = Components.utils;

Cu.import("resource://gre/modules/Services.jsm");
Cu.import("resource://gre/modules/AddonManager.jsm");

function install(aData, aReason) {
}

function uninstall(aData, aReason) {
}

function startup(aData, aReason) {
  // Add us to the resource protocol.
  let res = Services.io.getProtocolHandler("resource")
              .QueryInterface(Ci.nsIResProtocolHandler);
  let resourceURI = Services.io.newURI(__SCRIPT_URI_SPEC__ + "/../modules/",
                                       null, null);
  res.setSubstitution("appleffdav", resourceURI);
  res.setSubstitution("moduleloader", resourceURI);

  var wrk = Cc["@mozilla.org/windows-registry-key;1"]
              .createInstance(Ci.nsIWindowsRegKey);
  wrk.create(wrk.ROOT_KEY_CURRENT_USER,
             "SOFTWARE\\Apple Inc.\\Internet Services\\Firefox",
             wrk.ACCESS_WRITE);
  wrk.writeIntValue("ExtensionEnabled", 1);
  wrk.close();

  Cu.import("resource://appleffdav/AppleFFDAVService.jsm");
  // Can't call startup from async callback. The toolbar button panel must created the main UI thread.
  //AddonManager.getAddonByID(aData.id, function(addon) {
  //  AppleFFDAVService.startup(addon.name, __SCRIPT_URI_SPEC__);
  //});
  AppleFFDAVService.startup(aData.id, __SCRIPT_URI_SPEC__);
}

function shutdown(aData, aReason) {
  Services.console.logStringMessage("Shutdown: " + aReason);
  
  // Must always call to correctly unload DLL.
  AppleFFDAVService.shutdown();
  
  if (aReason == APP_SHUTDOWN)
    return;
      
  // Unload all modules added with Cu.import
  Cu.unload("resource://appleffdav/AppleFFDAVService.jsm");
  Cu.unload("resource://appleffdav/AppleFFDAVObserver.jsm");
  Cu.unload("resource://appleffdav/AppleFFDAVLib.jsm");
  Cu.unload("resource://appleffdav/AppleFFDAVUI.jsm");

  var wrk = Cc["@mozilla.org/windows-registry-key;1"]
              .createInstance(Ci.nsIWindowsRegKey);
  wrk.create(wrk.ROOT_KEY_CURRENT_USER,
             "SOFTWARE\\Apple Inc.\\Internet Services\\Firefox",
             wrk.ACCESS_WRITE);
  wrk.removeValue("ExtensionEnabled");
  wrk.close();

  // Remove us from the resource protocol.
  let res = Services.io.getProtocolHandler("resource")
              .QueryInterface(Ci.nsIResProtocolHandler);
  res.setSubstitution("AppleFFDAV", null);
  res.setSubstitution("moduleloader", null);
}
