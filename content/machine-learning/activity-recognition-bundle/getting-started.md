---
title: Getting Started
layout: redirect
weight: 30

aliases:
  - /predictive-analytics/activity-recognition/#getting-started
---
Upload all the files from the ZIP file into {{< product-c8y-iot >}} Machine Learning Workbench, you will have 1 JSON file, 1 notebook file and 1 EPL code file.
We have added a *CONFIG.json* file to the ZIP. This file is meant for capturing the tenant details and credentials which will be used by the demo scripts.

First, update the *CONFIG.json* with the appropriate values and save it. Replace `c_url` with your tenant URL, `c_user` with your tenant username and `c_pass` with your tenant password. Leave the `c_device_source` as is for now.

	CONFIG.JSON
	[cumulocity]
	c_url=https://yourtenant.{{< domain-c8y >}}
	c_user=user@company.com
	c_pass=password
	c_device_source=deviceID


For this particular demo, a phone or a phone-like device needs to be used, so that the measurement data for that particular device can be captured and be used for recognizing activities.

Therefore, the documentation has been split up into two parts:

* [Activity recognition using a smartphone](#activity-recognition-using-android)
* [Activity recognition using a simulated demo device](#activity-recognition-using-demo-device)
