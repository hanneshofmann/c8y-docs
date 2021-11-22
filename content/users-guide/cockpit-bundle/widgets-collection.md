---
weight: 55
title: Widgets collection
aliases:
  - /users-guide/cockpit/#widgets
  - /users-guide/cockpit/#widget
layout: redirect
---

The Cockpit application includes preset widget types. Each widget type provides different parameters to configure and different data to be displayed.

The following types are available:

<table>
<thead>
<colgroup>
       <col style="width: 30%;">
       <col style="width: 70%;">
    </colgroup><thead>
<tr>
<th align="left">Widget</th>
<th align="left">Functionality</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left"><a href="#alarm-list">Alarm list</a></td>
<td align="left">Shows a list of alarms, filtered by objects, alarm severity and alarm status.</td>
</tr>
<tr>
<td align="left"><a href="#all-alarms">All critical alarms</a></td>
<td align="left">Displays all objects with a critical alarm.</td>
</tr>
<tr>
<td align="left"><a href="#applications">Applications</a></td>
<td align="left">Provides a list of links to all available applications.</td>
</tr>
<tr>
<td align="left"><a href="#asset-notes">Asset notes</a></td>
<td align="left">Displays messages provided by the administrative user to all owners of the current widget.</td>
</tr>
<tr>
<td align="left"><a href="#asset-properties">Asset properties</a></td>
<td align="left">Provides a user-defined list of attributes of the current object.</td>
</tr>
<tr>
<td align="left"><a href="#widget-asset-table">Asset table</a></td>
<td align="left">Shows details of a selected asset and all its child devices in a table.</td>
</tr>
<tr>
<td align="left"><a href="#data-graph">Data point graph</a></td>
<td align="left">Displays data points (measurements) in a graph.</td>
</tr>
<tr>
<td align="left"><a href="#data-list">Data point list</a></td>
<td align="left">Displays data points (measurements), one in each row, with current values and data point properties.</td>
</tr>
<tr>
<td align="left"><a href="#data-table">Data point table</a></td>
<td align="left">Lists data points (measurements) as a table.</td>
</tr>
<tr>
<td align="left"><a href="#event-list">Event list</a></td>
<td align="left">Allows to monitor events for a selected device.</td>
</tr>
<tr>
<td align="left"><a href="#fieldbus-device">Fieldbus device</a></td>
<td align="left">Lets you see the status of a modbus device and operate it.</td>
</tr>
<tr>
<td align="left"><a href="#help-service">Help and service</a></td>
<td align="left">Displays links to help and service resources.</td>
</tr>
<tr>
<td align="left"><a href="#widget-html">HTML</a></td>
<td align="left">Shows user-defined content formatted in HTML.</td>
</tr>
<tr>
<td align="left"><a href="#widget-image">Image</a></td>
<td align="left">Shows a single image to be selected from your file system by browsing.</td>
</tr>
<tr>
<td align="left"><a href="#info-gauge">Info Gauge</a></td>
<td align="left">Visualizes one data point in form of a radial gauge and multiple data points as labels.</td>
</tr>
<tr>
<td align="left"><a href="#linear-gauge">Linear Gauge</a></td>
<td align="left">Displays data points in form of a linear gauge.</td>
</tr>
<tr>
<td align="left"><a href="#widget-map">Map</a></td>
<td align="left">Shows the location of a device or all devices of a group.</td>
</tr>
<tr>
<td align="left"><a href="#widget-message-sending">Message sending</a></td>
<td align="left">Sends a message to a device.</td>
</tr>
<tr>
<td align="left"><a href="#pie-chart">Pie chart</a></td>
<td align="left">Displays data points (measurements) with current values in a pie chart presentation.</td>
</tr>
<tr>
<td align="left"><a href="#quick-links">Quick links</a></td>
<td align="left">Provides several quick links to relevant operations.</td>
</tr>
<tr>
<td align="left"><a href="#radial-gauge">Radial Gauge</a></td>
<td align="left">Displays data points in form of a radial gauge.</td>
</tr>
<tr>
<td align="left"><a href="#recent-alarms">Recent alarms</a></td>
<td align="left">Shows all alarms of all severities sorted by time.</td>
</tr>
<tr>
<td align="left"><a href="#relay-array-control">Relay array control</a></td>
<td align="left">Allows to switch relays on or off independently in an array of relays.</td>
</tr>
<tr>
<td align="left"><a href="#relay-control">Relay control</a></td>
<td align="left">Allows to switch a device relay on or off.</td>
</tr>
<tr>
<td align="left"><a href="#widget-rotation">Rotation</a></td>
<td align="left">Allows to render an object model of a device.</td>
</tr>
<tr>
<td align="left"><a href="#widget-scada">SCADA</a></td>
<td align="left">Provides a graphic representation of the status of a device.</td>
</tr>
<tr>
<td align="left"><a href="#widget-silo">Silo</a></td>
<td align="left">Displays data points (measurements) with current values in a silo presentation.</td>
</tr>
<tr>
<td align="left"><a href="#traffic-light">Traffic light</a></td>
<td align="left">Shows the states of a device as traffic light.</td>
</tr>
</tbody>
</table>

<a name="alarm-list"></a>
### Alarm list

The "Alarm list" widget shows a list of alarms, filtered by objects, alarm severity and alarm status. For details on the information provided for each alarm, refer to [Device Management > Working with alarms](/users-guide/device-management/#alarm-monitoring).

![Alarm list widget](/images/users-guide/cockpit/cockpit-widget-alarm-list.png)

**Parameters to configure**

|Field|Description|
|:---|:---|
|Title|Widget title. By default, the widget type is used as title.
|Target assets or devices|Select groups or devices, optional HTML expressions which should be evaluated.
|Status|Only show devices with alarms of of the selected alarm status.
|Type|Only show alarms of the specified type(s). Details can be seen when clicking once on an alarm.
|Severities|Only show alarms of the selected alarm severity.
|Order|Alarms may be ordered by the active status (followed by severity and time, the default) or the severity (followed by time).

<a name="all-alarms"></a>
### All critical alarms

The "All critical alarms" widget shows all objects with a critical alarm. Apart from the title, there are no additional parameters to be configured.

![Critical alarms](/images/users-guide/cockpit/cockpit-widget-critical-alarms.png)

For details on alarms, refer to [Device Management > Working with alarms](/users-guide/device-management/#alarm-monitoring).

<a name="applications"></a>
### Applications

The "Applications" widget shows a list of links to all available applications. Apart from the title, there are no additional parameters to be configured.

![Applications widget](/images/users-guide/cockpit/cockpit-widget-applications.png)

For details on applications, refer to [Administration > Managing Applications](/users-guide/administration#managing-applications).


<a name="asset-notes"></a>
### Asset notes

The "Asset notes" widget displays messages provided by the administrative user to all owners of the current widget.

![Asset notes widget](/images/users-guide/cockpit/cockpit-widget-asset-notes.png)

Only users with the permission to edit the home dashboard will be able to provide this message.


<a name="asset-properties"></a>
### Asset properties

The "Asset properties" widget displays a user-defined list of attributes of the current object. The current object can be a device or a group.

![Asset properties widget](/images/users-guide/cockpit/cockpit-widget-asset-properties.png)


**Parameters to configure**

|Field|Description|
|:---|:---|
|Title|Widget title. By default, the widget type is used as title.
|Target assets or devices|Select groups or devices.
|Properties|List of properties, see [Widget "Asset table"](#widget-asset-table).

>**Info:** In the view mode, this widget only displays the properties which are not empty.

<a name="widget-asset-table"></a>
### Asset table

The "Asset table" widget shows details of a selected asset and all its child devices in a table. This is a very powerful widget, allowing to arrange selected properties of objects in a table.

**Parameters to configure**

|Field|Description|
|:---|:---|
|Title|Widget title. By default, the widget type is simply used as title.
|Target assets or devices|Select for which object all child devices should be shown. This is typically a group object.
|Properties|Select properties or actions of an object to visualize them as columns in the table.

**Example**

In the following screenshot, five columns are configured. Three property columns "Meter", "Vendor", and "Owner", which refer to the properties "name", "type" and "owner" respectively. Additionally, there are two actions, one for toggling the maintenance mode, and one for rebooting the device.

![Asset table widget](/images/users-guide/cockpit/cockpit-widget-asset-table.png)

The resulting table is visualized as follows:
![Asset table widget example](/images/users-guide/cockpit/cockpit-widget-asset-table-example.png)

#### To add properties

Click **+Add Properties** and select one or more properties to be added.

> **Info:** The property "Active alarm status" shows active alarms as icons in the table. If you select this property, you also need to configure the renderer "Active Alarm Status" in the list of columns.

#### To add actions

1. Click **+Add Action**.
1. Select **Toggle maintenance mode** to add the predefined action to toggle the maintenance mode.
1. Select **Create operation** to create a button that will execute a shell command. In the resulting dialog box you can then enter the label for the button and the shell command to be executed.

![Reboot device button configuration](/images/users-guide/cockpit/cockpit-widget-asset-table-buttonconfig.png)

>**Info:** The dialog shows the predefined shell commands of the first device that supports shell commands. The list is empty if there is no such device. For more details, refer to [Device Management > Shell commands](/users-guide/device-management/#shell).<br>
You can also enter the JSON format for the operation that will be sent to the device. For details, contact the device vendor for supported operations.

#### To modify the table

To edit the header of a column, click on its value in the **Label** column and edit the label.

You can rearrange the columns by clicking the icon at the very left of a row and dragging and dropping the entry.

To remove a property or an action, hover over the respective row and click **Delete** at the right.

<a name="data-graph"></a>
### Data point graph

The "Data point graph" widget shows a data point (measurement) in a graph. The visualization is the same as in the [data explorer](/users-guide/cockpit/#data-explorer).

![Data Point Graph widget](/images/users-guide/cockpit/cockpit-datapointsgraph-widget.png)

The easiest way to create a "Data point graph" widget is to navigate to the data explorer, click the <b>More...</b> button in the top menu bar and select <b>Send as widget to dashboard</b>.

Refer to [Visualizing data using the data explorer](/users-guide/cockpit/#data-explorer) for further details on the parameters to be configured.

At the top right of the data point graph, an **Auto scroll** toggle determines the display behavior:

* Auto-scroll on - When a new measurement arrives, the widget automatically scrolls to the top so that you can see the latest value.
* Auto-scroll off - When a new measurement arrives, the display does not change and the table still shows the same snippet of data.

![Auto-scroll toogle](/images/users-guide/cockpit/cockpit-data-point-table-widget-with-auto-scroll.png)

<a name="data-list"></a>
### Data point list

The "Data point list" widget shows data points (measurements), one in each row, with current values and data point properties.

**Parameters to configure**

<table>
<thead>
<colgroup>
   <col style="width: 20%;">
   <col style="width: 80%;">
</colgroup>
<tr>
<th align="left">Field</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Title</td>
<td align="left">Widget title. By default, the widget type is simply used as title.</td>
</tr>
<tr>
<td align="left">Data point</td>
<td align="left">Shows a list of available data points. You must enable at least one data point. Click <strong>Add data point</strong> to add a data point to the list. For details on how to add data points see <a href="#add-data-points">Data explorer &gt; Adding data points</a>.</td>
</tr>
<tr>
<td align="left">Column visibility</td>
<td align="left">Select which columns should be visible: <br><strong>Label</strong>: Label of the data point. See <a href="../../users-guide/cockpit/#data-explorer">Visualizing data using the data explorer</a> for details. <br><strong>Target</strong>: Target value. Can be configured in the <a href="../../users-guide/cockpit/#data-explorer">data explorer</a> or <a href="../../users-guide/cockpit/#data-point-library">Data Point Library</a>.<br>Current: Current value. <br><strong>Diff</strong>: Absolute difference between current value and target value. <br><strong>Diff %</strong>: Percentage of difference between current value and target value. <br><strong>Asset</strong>: Name of the device or group of the data point.</td>
</tr>
</tbody>
</table>

<a name="data-table"></a>
### Data point table

The "Data point table" widget configuration is similar to the "Data point graph" widget, but instead of visualizing the data as a line-chart, data is visualized as a table.

The "Data point table" widget displays data based on selected data points, time interval and aggregation.

Out of range values, based on configured yellow and red ranges, are highlighted in the table.

![Data point table](/images/users-guide/cockpit/cockpit-datapointtable.png)

<a name="event-list"></a>
### Event list

The "Event list" widget lets you monitor events for a selected device.

![Event list widget](/images/users-guide/cockpit/cockpit-widget-event-list.png)

Additionally, a specific date range can be set and the events can be monitored in realtime.

<a name="fieldbus-device"></a>
### Fieldbus device

The "Fieldbus device" widget lets you see the status of a modbus device and operate it.

For details on the "Fieldbus device" widget, refer to [Cloud Fieldbus > Monitoring device status using the Fieldbus device widget](/protocol-integration/cloud-fieldbus/#fieldbus-device-widget) in the *Protocol integration guide*.

<a name="help-service"></a>
### Help and service

The "Help and service" widget displays links to help and service resources. There are no additional parameters to be configured.

![Help and service widget](/images/users-guide/cockpit/cockpit-widget-help-service.png)

<a name="widget-image"></a>
### Image

The "Image" widget lets you display a single image to be selected from your file system by browsing. There are no additional parameters to be configured.

<a name="info-gauge"></a>
### Info Gauge

The "Info gauge" widget visualizes one data point in form of a radial gauge and multiple data points as labels.

![Info gauge widget](/images/users-guide/cockpit/cockpit-widget-info-gauge.png)

You can select one data point for the gauge, and multiple data points shown with labels at the left side.

![Info gauge widget data point gauge](/images/users-guide/cockpit/cockpit-widget-data-gauge.png)

![Info gauge widget data point label](/images/users-guide/cockpit/cockpit-widget-data-labels.png)

You must enable at least one data point in each section to create the "Info gauge" widget.


<a name="widget-html"></a>
### HTML

The "HTML" widget shows user-defined content. The content can be formatted using HTML.

**Parameters to configure**

* Target assets or devices: Select the objects for which optional HTML expressions are evaluated.

* HTML code

	The following variables can be used inside the HTML content:

	* {{devicesCount}}: Total number of devices.

	* {{usersCount}}: Total number of users.

	* {{deviceGroupsCount}}: Total number of groups.

	* {{device.name}}: The name of the device.

	* {{device.*property*}}: More general form of the above. You can address any property of the device.

	* {{device.c8y_Hardware.model}}: The model of the device.

	* {{device.*fragment*.*property*}}: More general form of the above. You can address any property of any fragment of the device.

"Device" refers to the target device, as selected in the widget configuration parameter.<br>
"fragment.property" refers to the properties of the respective device. To see the available property names, you can use the "Asset property" or "Asset table" widget and click **+Add property** in the widget configuration. This will show a table of supported properties. You can copy and paste the values from the column **Property**. Generated properties of these widgets are not available in the HTML widgets.

![HTML widget](/images/users-guide/cockpit/cockpit-widget-html.png)

If you want to use a link in the **HTML code** field, for example a link to a dashboard, you must use the following format:

```html
  <a style="cursor:pointer;" onclick="location.hash = '#/group/<<group-id>>/dashboard/<<dashboard-id>>'">link to another dashboard</a><br />
```

<a name="linear-gauge"></a>
### Linear Gauge

The "Linear gauge" widget visualizes data points in form of a linear gauge. Min and max target values are shown on the gauge as well.

![Info gauge widget](/images/users-guide/cockpit/cockpit-widget-linear-gauge.png)

>**Info:** If a label is not properly readable, you can help yourself by increasing the min and max value of the data point to move the label into the readable range.

You must enable at least one data point to create the "Linear gauge" widget.

<a name="widget-map"></a>
### Map

The "Map" widget shows the location of a device or all devices of a group.

![Info gauge widget](/images/users-guide/cockpit/cockpit-widget-map.png)

You can drag the map and move its content, and you can zoom in and out by using the **Plus** and **Minus** buttons.

The icons representing the devices are color-coded. The color used follows these rules:

* Red = At least one CRITICAL alarm
* Orange = At least one MAJOR alarm
* Yellow = At least one MINOR alarm
* Blue = At least one WARNING
* Green = No alarm

Click a device icon, to open a popup with the following information:

* The device name. When clicked, the application navigates to the device.
* The date at which the device last reported its location, if available.
* A toggle to show/hide the device tracks for the previous and current days.

**Parameters to configure**

Target assets or devices: Select which devices are shown on the map. If a group is selected, all devices in that group (but not in any subgroups) are visible.

>**Info:** If none of the target device(s) has a known location, then the widget shows a world map without icons.

<a name="widget-message-sending"></a>
### Message sending

The "Message sending" widget sends a message to a device. The behavior of the device itself is device-dependent. Only available for devices that support the operation `c8y_Message`.

### Pie chart

The "Pie chart" widget displays data points (measurements) with current values in a pie chart presentation.

**Parameters to configure**

<table>
<thead>
<colgroup>
   <col style="width: 20%;">
   <col style="width: 80%;">
</colgroup>
<tr>
<th align="left">Field</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Title</td>
<td align="left">Widget title. By default, the widget type is simply used as title.</td>
</tr>
<tr>
<td align="left">Pie chart options</td>
<td align="left">Select from the options to show tooltips, percentages, legends in the pie chart.</td>
</tr>
<tr>
<td align="left">Data point</td>
<td align="left">Shows a list of available data points. You must enable at least one data point. Click <strong>Add data point</strong> to add a data point to the list. For details on how to add data points see <a href="#add-data-points">Data explorer &gt; Adding data points</a>.</td>
</tr>
</tbody>
</table>

<a name="quick-links"></a>
### Quick links

The "Quick links" widget displays several quick links to relevant operations. There are no additional parameters to be configured.

![Quick links widget](/images/users-guide/cockpit/cockpit-widget-quick-links.png)

<a name="radial-gauge"></a>
### Radial Gauge

The "Radial gauge" widget visualizes data points in form of a radial gauge.

![Radial gauge widget](/images/users-guide/cockpit/cockpit-widget-radial-gauge.png)

You must enable at least one data point to create the "Radial gauge" widget.


<a name="recent-alarms"></a>
### Recent alarms

The "Recent alarms" widget shows all alarms of all severity sorted by time. There are no additional parameters to be configured.

![Recent alarms widget](/images/users-guide/cockpit/cockpit-widget-recent-alarms.png)

For details on alarms, refer to [Device Management > Working with alarms](/users-guide/device-management/#alarm-monitoring).

<a name="relay-array-control"></a>
### Relay array control

The "Relay array control" widget lets you switch relays on or off independently in an array of relays. Only available for devices that support this type of operation.

<a name="relay-control"></a>
### Relay control

The "Relay control" widget allows you to switch a device relay on or off. Only available for devices that support this type of operation.

<a name="widget-rotation"></a>
### Rotation

The "Rotation" widget lets you render an object model of a device.

**Parameters to configure**

|Field|Description|
|:---|:---|
|Title|Widget title. By default, the widget type is simply used as title.
|Target assets or devices|Select group or device to be displayed.
|Object model for rendering|Select an object model type for rendering. May be one of "Box model" or "Phone model".
|Wireframe|Turn "Wireframe" on or off (default = on). The "wireframe" mode displays the object in a skeletal representation.
|Camera type|Select the type of camera to be used. May be one of "Orthographic camera" or "Perspective camera".

In the "Rotation" widget you can rotate the object by dragging and moving it around. Zoom in and out by using the mouse.

<a name="widget-scada"></a>
### SCADA

The "SCADA" widget provides a graphic representation of the status of a device.

For details on the "SCADA" widget, refer to [Cloud Fieldbus > Monitoring status using the SCADA widget](/protocol-integration/cloud-fieldbus/#scada) in the *Protocol integration guide*.

> **Info:** All SVG files are sanitized in order to remove malicious code.

![SCADA widget](/images/users-guide/cockpit/cockpit-widget-scada.png)

<a name="widget-silo"></a>
### Silo

The "Silo" widget displays data points (measurements) with current values in a silo presentation.

**Parameters to configure**

<table>
<thead>
<colgroup>
   <col style="width: 20%;">
   <col style="width: 80%;">
</colgroup>
<tr>
<th align="left">Field</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Title</td>
<td align="left">Widget title. By default, the widget type is simply used as title.</td>
</tr>
<tr>
<td align="left">Data point</td>
<td align="left">Shows a list of available data points. You must enable at least one data point. Click <strong>Add data point</strong> to add a data point to the list. For details on how to add data points see <a href="#add-data-points">Data explorer &gt; Adding data points</a>.</td>
</tr>
</tbody>
</table>

<a name="traffic-light"></a>
### Traffic light

The "Traffic light" widget visualizes the states of a device as traffic light.

**Parameters to configure**

|Field|Description|
|:---|:---|
|Title|Widget title. By default, the widget type is simply used as title.
|Target assets or devices|Select group or device to be displayed.
|States mapping|Select a property for each light. The value of the property has to be one of the following to have the respective light on: true, 1, any non-empty string, any non-null number.
