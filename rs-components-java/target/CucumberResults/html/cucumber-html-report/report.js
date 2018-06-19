$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PurchaseJourney.feature");
formatter.feature({
  "line": 1,
  "name": "End to End purchase journey",
  "description": "",
  "id": "end-to-end-purchase-journey",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Go through the purchase journey up to the checkout page",
  "description": "",
  "id": "end-to-end-purchase-journey;go-through-the-purchase-journey-up-to-the-checkout-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I select \u003cmain_product\u003e, \u003csub_product\u003e, \u003cproduct\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I proceed to the checkout using email address \u003cemail\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see the checkout screen",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "end-to-end-purchase-journey;go-through-the-purchase-journey-up-to-the-checkout-page;",
  "rows": [
    {
      "cells": [
        "main_product",
        "sub_product",
        "product",
        "email"
      ],
      "line": 10,
      "id": "end-to-end-purchase-journey;go-through-the-purchase-journey-up-to-the-checkout-page;;1"
    },
    {
      "cells": [
        "Batteries",
        "Automotive Battery Maintenance",
        "Battery Jump Leads",
        "malcrh@gmail.com"
      ],
      "line": 11,
      "id": "end-to-end-purchase-journey;go-through-the-purchase-journey-up-to-the-checkout-page;;2"
    },
    {
      "cells": [
        "Connectors",
        "IC Sockets",
        "Lighting Connectors",
        "malcrh@gmail.com"
      ],
      "line": 12,
      "id": "end-to-end-purchase-journey;go-through-the-purchase-journey-up-to-the-checkout-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4006339872,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Go through the purchase journey up to the checkout page",
  "description": "",
  "id": "end-to-end-purchase-journey;go-through-the-purchase-journey-up-to-the-checkout-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I select Batteries, Automotive Battery Maintenance, Battery Jump Leads",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I proceed to the checkout using email address malcrh@gmail.com",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see the checkout screen",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.navigateToHomePage()"
});
formatter.result({
  "duration": 190609475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Batteries",
      "offset": 9
    },
    {
      "val": "Automotive Battery Maintenance",
      "offset": 20
    },
    {
      "val": "Battery Jump Leads",
      "offset": 52
    }
  ],
  "location": "MyStepdefs.selectAndAddProduct(String,String,String)"
});
formatter.result({
  "duration": 3253122800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "malcrh@gmail.com",
      "offset": 46
    }
  ],
  "location": "MyStepdefs.viewBasket(String)"
});
formatter.result({
  "duration": 331260952,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cdiv class\u003d\"addToBasketMessageText\"\u003e...\u003c/div\u003e is not clickable at point (711, 614). Other element would receive the click: \u003cdiv class\u003d\"acsModalBackdrop acsAbandonButton\" data-isbackdrop\u003d\"true\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d67.0.3396.79)\n  (Driver info: chromedriver\u003d2.38.552518 (183d19265345f54ce39cbb94cf81ba5f15905011),platform\u003dMac OS X 10.13.4 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027MEUUKNOT067660\u0027, ip: \u0027fe80:0:0:0:1072:30a3:df93:f2fa%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552518 (183d19265345f5..., userDataDir: /var/folders/c8/ybfdc4d92td...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.79, webStorageEnabled: true}\nSession ID: 1edbcaaa910ad4456728daf7fa156d43\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\n\tat pageObjects.PurchaseJourney.viewBasket(PurchaseJourney.java:75)\n\tat step_definitions.MyStepdefs.viewBasket(MyStepdefs.java:53)\n\tat ✽.When I proceed to the checkout using email address malcrh@gmail.com(PurchaseJourney.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepdefs.enterPersonalInformation()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 12567,
  "status": "passed"
});
formatter.before({
  "duration": 3718988135,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Go through the purchase journey up to the checkout page",
  "description": "",
  "id": "end-to-end-purchase-journey;go-through-the-purchase-journey-up-to-the-checkout-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I select Connectors, IC Sockets, Lighting Connectors",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I proceed to the checkout using email address malcrh@gmail.com",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see the checkout screen",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.navigateToHomePage()"
});
formatter.result({
  "duration": 26569572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Connectors",
      "offset": 9
    },
    {
      "val": "IC Sockets",
      "offset": 21
    },
    {
      "val": "Lighting Connectors",
      "offset": 33
    }
  ],
  "location": "MyStepdefs.selectAndAddProduct(String,String,String)"
});
formatter.result({
  "duration": 3929832490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "malcrh@gmail.com",
      "offset": 46
    }
  ],
  "location": "MyStepdefs.viewBasket(String)"
});
formatter.result({
  "duration": 1880083992,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cdiv class\u003d\"rf-pp-hdr-cnt\" id\u003d\"loginModelPanel_header_content\"\u003e...\u003c/div\u003e is not clickable at point (605, 118). Other element would receive the click: \u003cdiv class\u003d\"acsModalBackdrop acsAbandonButton\" data-isbackdrop\u003d\"true\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d67.0.3396.79)\n  (Driver info: chromedriver\u003d2.38.552518 (183d19265345f54ce39cbb94cf81ba5f15905011),platform\u003dMac OS X 10.13.4 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027MEUUKNOT067660\u0027, ip: \u0027fe80:0:0:0:1072:30a3:df93:f2fa%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552518 (183d19265345f5..., userDataDir: /var/folders/c8/ybfdc4d92td...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.79, webStorageEnabled: true}\nSession ID: c918c8e5271771ea57ea07123cfa898c\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\n\tat pageObjects.PurchaseJourney.viewBasket(PurchaseJourney.java:78)\n\tat step_definitions.MyStepdefs.viewBasket(MyStepdefs.java:53)\n\tat ✽.When I proceed to the checkout using email address malcrh@gmail.com(PurchaseJourney.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepdefs.enterPersonalInformation()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9869,
  "status": "passed"
});
formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search for a product",
  "description": "",
  "id": "search-for-a-product",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Search for a product and confirm its presence",
  "description": "",
  "id": "search-for-a-product;search-for-a-product-and-confirm-its-presence",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I search for \u003cproduct\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see \u003cproduct\u003e appear in the results",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "search-for-a-product;search-for-a-product-and-confirm-its-presence;",
  "rows": [
    {
      "cells": [
        "product"
      ],
      "line": 9,
      "id": "search-for-a-product;search-for-a-product-and-confirm-its-presence;;1"
    },
    {
      "cells": [
        "Batteries"
      ],
      "line": 10,
      "id": "search-for-a-product;search-for-a-product-and-confirm-its-presence;;2"
    },
    {
      "cells": [
        "Semiconductors"
      ],
      "line": 11,
      "id": "search-for-a-product;search-for-a-product-and-confirm-its-presence;;3"
    },
    {
      "cells": [
        "Tools"
      ],
      "line": 12,
      "id": "search-for-a-product;search-for-a-product-and-confirm-its-presence;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3468978851,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Search for a product and confirm its presence",
  "description": "",
  "id": "search-for-a-product;search-for-a-product-and-confirm-its-presence;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I search for Batteries",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see Batteries appear in the results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.navigateToHomePage()"
});
formatter.result({
  "duration": 27674817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Batteries",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.searchForProduct(String)"
});
formatter.result({
  "duration": 2881156096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Batteries",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.confirmResult(String)"
});
formatter.result({
  "duration": 99905231,
  "status": "passed"
});
formatter.after({
  "duration": 14152,
  "status": "passed"
});
formatter.before({
  "duration": 4919642498,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Search for a product and confirm its presence",
  "description": "",
  "id": "search-for-a-product;search-for-a-product-and-confirm-its-presence;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I search for Semiconductors",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see Semiconductors appear in the results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.navigateToHomePage()"
});
formatter.result({
  "duration": 4171937,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d67.0.3396.79)\n  (Driver info: chromedriver\u003d2.38.552518 (183d19265345f54ce39cbb94cf81ba5f15905011),platform\u003dMac OS X 10.13.4 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027MEUUKNOT067660\u0027, ip: \u0027fe80:0:0:0:1072:30a3:df93:f2fa%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552518 (183d19265345f5..., userDataDir: /var/folders/c8/ybfdc4d92td...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.79, webStorageEnabled: true}\nSession ID: f372d39aa79cc85ece9a8f572d15e794\n*** Element info: {Using\u003dclass name, value\u003drslogo}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:405)\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.isDisplayed(Unknown Source)\n\tat pageObjects.PurchaseJourney.homePage(PurchaseJourney.java:58)\n\tat step_definitions.MyStepdefs.navigateToHomePage(MyStepdefs.java:43)\n\tat ✽.Given I am on the home page(Search.feature:4)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Semiconductors",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.searchForProduct(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Semiconductors",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.confirmResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 13557,
  "status": "passed"
});
formatter.before({
  "duration": 1521030794,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d67.0.3396.79)\n  (Driver info: chromedriver\u003d2.38.552518 (183d19265345f54ce39cbb94cf81ba5f15905011),platform\u003dMac OS X 10.13.4 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027MEUUKNOT067660\u0027, ip: \u0027fe80:0:0:0:1072:30a3:df93:f2fa%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552518 (183d19265345f5..., userDataDir: /var/folders/c8/ybfdc4d92td...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.79, webStorageEnabled: true}\nSession ID: 4b33bc8af006687d632d8803334e3bc0\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:273)\n\tat step_definitions.MyStepdefs.beforeScenario(MyStepdefs.java:32)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 12,
  "name": "Search for a product and confirm its presence",
  "description": "",
  "id": "search-for-a-product;search-for-a-product-and-confirm-its-presence;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I search for Tools",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see Tools appear in the results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.navigateToHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tools",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.searchForProduct(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tools",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.confirmResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 16219,
  "status": "passed"
});
});