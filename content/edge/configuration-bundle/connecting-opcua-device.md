---
weight: 65
title: Connecting an OPCUA device
layout: redirect
---

>**Important:** While configuring the OPC UA server, ensure that the server is reachable from the Edge appliance. If you are using a hostname, configure the DNS accordingly.

To connect an OPC UA device in the Edge appliance, follow the steps below.

#### Preparation

**OPC UA Management service**

Check if the OPC UA management service is running in {{< product-c8y-iot >}} Edge (running on port 8083):  

```shell
[admin@iot-edge-server ~]$ sudo service opcua-mgmt-service status
```

If the agent is not running, start it with the following command:

```shell
[admin@iot-edge-server ~]$ sudo service opcua-mgmt-service start
```

**OPC UA Device Gateway**

Check if the OPC UA device gateway is running in {{< product-c8y-iot >}} Edge (running on port 1099):  

```shell
[admin@iot-edge-server ~]$ sudo service opcua-device-gateway status
```

If the agent is not running, start it with the following command:

```shell
[admin@iot-edge-server ~]$ sudo service opcua-device-gateway start
```

#### Registering the device

Next, you must register a device in the Device Management application with the name opcua-gateway.

<img src="/images/edge/edge-device-registration-example.png" name="Register device"/>

Follow the description in [Device Management > Connecting devices](/users-guide/device-management#connecting-devices) in the *User guide* to register a device.

In the Device Management application, click **All devices** in the navigator and find the OPCUA device in the device list.

For further information about managing and configuring OPCUA devices, see [OPC UA](/protocol-integration/opcua/) in the *Protocol integration guide*.
