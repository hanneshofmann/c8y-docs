---
weight: 13
title: Managing permissions
layout: redirect
helpcontent:
- label: managing-permissions
  title: Managing permissions
  content: "Permissions define what a user is allowed to do in Cumulocity IoT applications. To manage permissions more easily, they are grouped into so-called 'roles'. Every user can be associated with a number of roles, adding up permissions of the user.


  In the **Global roles** tab you can find the roles which grant permissions on a general level. There are several global roles pre-defined (which may serve as a template), but you can define your own according to your needs.


  In the **Inventory roles** tab you can manage user permissions for particular groups of devices and/or its children. For example, an inventory role can contain the permission to restart a particular device.


  For details on working with global roles and inventory roles, see *Administration > Managing permissions* in the *User guide*."
---

Permissions define what a user is allowed to do in {{< product-c8y-iot >}} applications. To manage permissions more easily, they are grouped into so-called "roles". Every user can be associated with a number of roles, adding up permissions of the user.

The following types of roles can be associated with users:

- Global roles: Contain permissions that apply to all data within a tenant.
- Inventory roles: Contain permissions that apply to groups of devices.

Moreover, application access can be granted to enable a user to use an application.

<a name="global"></a>
### Global roles

Click **Roles** in the **Account** menu to display a list of configured roles.

<img src="/images/users-guide/Administration/admin-global-roles.png" alt="Context menu">

In the **Global roles** tab you can find the roles which grant permissions on a general level. There are several global roles pre-defined, but you can define your own according to your needs.

> **Info:** The pre-defined roles are not fully configured. They can be seen as samples which are pre-configured for a particular purpose. You may use them as a starting point and further adapt them to your individual needs.

> On creating a new user, make sure that the global roles you assign to the user cover all permissions relevant for this particular user. If, for example, a user only has the role "Cockpit User" (see below), the user will only be able to access the Cockpit application and nothing more.  

The roles "admins" and "devices" have a special status:

<table>
<col style="width: 20%;">
<col style="width: 80%;">
<thead>
<tr>
<th align="left">Role&nbsp;&nbsp;&nbsp;</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">admins</td>
<td align="left">All permissions are enabled. The initial administrator, the first user created in a tenant, has this role.</td>
</tr>
<tr>
<td align="left">devices</td>
<td align="left">Typical permission setup for devices. After registration, a device automatically has this role. Edit this role if your devices require less or more permissions, or assign other roles to your devices.</td>
</tr>
</tbody>
</table>

Furthermore, the following pre-configured roles are initially provided.

<table>
<col style="width: 20%;">
<col style="width: 80%;">
<thead>
<tr>
<th align="left">Role</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">CEP Manager</td>
<td align="left">Can access all smart rules and event processing rules.</td>
</tr>
<tr>
<td align="left">Cockpit User</td>
<td align="left">Can access the Cockpit application. In addition, you should add a role providing access to devices.</td>
</tr>
<tr>
<td align="left">Device management User</td>
<td align="left">Can access the Device Management application. The user will be able to use the simulator and to run bulk operations. In addition, you should add a role providing access to devices.</td>
</tr>
<tr>
<td align="left">Global Manager</td>
<td align="left">Can read and write all devices.</td>
</tr>
<tr>
<td align="left">Global Reader</td>
<td align="left">Can read all devices.</td>
</tr>
<tr>
<td align="left">Global User Manager</td>
<td align="left">Can manage all users.</td>
</tr>
<tr>
<td align="left">Shared User Manager</td>
<td align="left">Can manage sub-users. The subscription plan needs to include user hierarchies to be able to manage sub-users.</td>
</tr>
<tr>
<td align="left">Tenant Manager</td>
<td align="left">Can manage tenant-wide settings, such as own applications, data brokerage, data retention, options and tenant statistics.</td>
</tr>
</tbody>
</table>

You may also see the following legacy roles:

|Role|Description|
|:---|:---|
|business|Can access all devices and their data but has no management permission in the tenant.
|readers|Can read all data (including users, in contrast to "Global Readers").

<a name="create-edit-roles"></a>
#### To add a global role

Click **Add Role** in the **Global roles** tab.

In the **New global role** page you will see a list of permission types at the left and a list of applications to be accessed at the right.

The following screenshot shows the settings for the "admins" role.

![Admin example](/images/users-guide/Administration/admin-global-role-admin.png)

**Permission levels**

For each type, you can select the following permission levels:

- READ: Read the specified data.
- CREATE: Create new data like users and inventory data and edit users within your hierarchy.
- UPDATE: Change and delete the specified data (not including READ).
- ADMIN: Create, update or delete the specified data.

> **Info:** CREATE permissions are related to the concept of ownership in {{< product-c8y-iot >}}. If you have created an object, you are the owner of it and can manage it without requiring any further permissions. For example, if you have  CREATE permission for "Inventory", you can create devices and groups, and fully manage these devices and groups. You cannot manage any devices or groups that you did not create yourself, unless you also have the UPDATE permission or an additional inventory role (see below). This concept helps to assign minimal permissions to devices. It also enables you to limit user management permissions to sub-users, if you subscribed to user hierarchies.

Select the checkbox at the top of a column to set the respective level to all permission types.

**Permission categories**

The following permission categories are available by default:

<table>
<col style="width: 20%;">
<col style="width: 80%;">
<thead>
<tr>
<th align="left">Category</th>
<th align="left">Description</th>
</tr>
</thead>

<tbody>
<tr>
<td align="left">Alarms</td>
<td align="left">View or edit alarms.</td>
</tr>

<tr>
<td align="left">Application management</td>
<td align="left">View or edit the applications available in this account.</td>
</tr>

<tr>
<td align="left">Audits</td>
<td align="left">View or create audit logs.</td>
</tr>

<tr>
<td align="left">Bulk operations</td>
<td align="left">View or create bulk operations.</td>
</tr>

<tr>
<td align="left">CEP management</td>
<td align="left">View or edit CEP rules.</td>
</tr>

<tr>
<td align="left">Data broker</td>
<td align="left">Send data to other tenants or receive data from other tenants.</td>
</tr>

<tr>
<td align="left">Device control</td>
<td align="left">View or edit commands for devices resp. send commands to devices. Also used for device registration.</td>
</tr>

<tr>
<td align="left">Events</td>
<td align="left">View or create events.</td>
</tr>

<tr>
<td align="left">Global Smart Rules</td>
<td align="left">Configure global smart rules.</td>
</tr>

<tr>
<td align="left">Identity</td>
<td align="left">View or edit identifiers for devices.</td>
</tr>

<tr>
<td align="left">Inventory</td>
<td align="left">View or edit inventory data.</td>
</tr>

<tr>
<td align="left">Measurements</td>
<td align="left">View or create measurements.</td>
</tr>

<tr>
<td align="left">Option management</td>
<td align="left">View or edit account options such as password policies.</td>
</tr>

<tr>
<td align="left">Retention rules</td>
<td align="left">View or edit retention rules.</td>
</tr>

<tr>
<td align="left">Schedule reports</td>
<td align="left">Manage the schedule of report exporting.</td>
</tr>

<tr>
<td align="left">Simulator</td>
<td align="left">Configure simulated devices.</td>
</tr>

<tr>
<td align="left">Sms</td>
<td align="left">Configure SMS.</td>
</tr>

<tr>
<td align="left">Tenant management</td>
<td align="left">View, create, edit or delete subtenants.</td>
</tr>

<tr>
<td align="left">Tenant statistics</td>
<td align="left">View the usage data for this account, as shown on the Home screen of the Administration application.</td>
</tr>

<tr>
<td align="left">User management</td>
<td align="left">View or edit users, global roles and permissions.</td>
</tr>

<tr>
<td align="left">Own user management</td>
<td align="left">View or edit your own user.</td>
</tr>
</tbody>
</table>

There may be additional permissions visible depending on the features in your subscription plan. These are documented along with the respective feature.

> **Important:** When new features with new permissions are added to {{< product-c8y-iot >}}, these are not automatically added to existing roles. If you notice that you cannot use a new feature that was recently announced, check your permissions.

<a name="attach-global"></a>
#### Assigning global roles

You can assign global roles to users either directly in the user list, or by opening the page for a particular user and adding them there.

> **Important:** By default it is not possible to change roles of SSO users (created automatically during SSO login) as those would be overridden by dynamic access mapping. However this behaviour can be changed. For more information refer to [Administration > Changing settings](/users-guide/administration/#custom-template) in the *User guide*.

##### To assign global roles from the user list

1. Click the **Global roles** column of a particular user to open a list of global roles.
1. Select or clear the respective checkboxes.
1. Click **Apply** to save your settings.

![Apply global role](/images/users-guide/Administration/admin-global-roles-apply-1.png)

##### To assign global roles from the user page

Click on the row of the respective user in the user list.
In the user page, select or clear the checkboxes for the relevant global roles at the right.
Click **Save** to save your settings.

![Attach global role](/images/users-guide/Administration/admin-global-roles-apply-2.png)

<a name="inventory"></a>
### Inventory roles

Inventory roles contain permissions that you can assign to groups of devices. For example, an inventory role can contain the permission to restart a device. You can assign this inventory role to a group of devices "region north" and to a user "smith". The result is that the user "smith" can restart all devices that are in the group "region north" or any of its subgroups.

To view the currently configured inventory roles, click **Roles** in the **Account** menu and switch to the **Inventory roles** tab.

<img src="/images/users-guide/Administration/admin-roles-inventory.png" alt="Context menu">

In the **Inventory roles** tab you can manage user permissions for particular groups and/or its children. There are several default inventory roles defined, but you can define your own according to your needs.

The following default inventory roles are initially available in new tenants:

|Role|Description|
|:---|:---|
|Manager| Can read all data of the asset and manage all inventory data but cannot perform operations. In addition, can manage inventory data (including dashboards) and alarms.
|Operations: All|Can remotely manage the assets by sending operations to a device (e.g. software updates, remote configurations).
|Operations: Restart Device|Can restart devices.
|Reader|Can read all data of the asset.


#### To add an inventory role

Click **Add Role** in the **Inventory roles** tab.

At the top of the page you can edit the name of the inventory role. Click on the name, edit it and click the green checkmark to save your edits.

![Role details](/images/users-guide/Administration/admin-inventory-role-edit.png)

Permissions are grouped into the following categories:

|Category|Description|
|:---|:---|
|Alarms|Permissions related to working with alarms from devices.
|Audits|Permissions related to audit logs.
|Events|Permissions related to working with events from devices.
|Inventory|Permissions for viewing and editing devices.
|Measurements|Permissions related to measurements.
|Device control|Permissions to remote control devices.
|Full access|Complete access to the associated devices, mainly to simplify configuration.

> **Info:** Service providers will see an additional permission "Support" in their {{< management-tenant >}}. This permission lets users of the service provider give support to their customer's users, see [Support user access](/users-guide/enterprise-tenant/#support-user-access).

Add a permission to the role by clicking the plus icon next to the desired category.

In the **Type** field, specify a type to further restrict the type of data that this permission applies to. Access will be only granted to objects that contain the specified **Type**.

For example, assume that your device sends measurements related to device management, such as "c8y&#95;SignalStrength", and actual production measurements. You want a user to only see the device management measurements. In this case, enter "c8y&#95;SignalStrength" as type. This will allow the user to only see measurements that contain the type "c8y&#95;SignalStrength". Note that the user will be able to see the entire measurement object including other types that may be part of the same measurement object.

By default, the **Type** field contains an asterisk "*" selecting all types.

> **Info:** For further information on possible types, check your device documentation, the {{< product-c8y-iot >}} [sensor library](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#section/Sensor-library) or the [device management library](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#section/Device-management-library). The type being used here is the so-called "fragment type", not the "type" property. You need to enter all fragment types send in a measurement to make the measurement visible; similar for other types of data.

In the **Permission** field, select a permission level from the dropdown list:

* READ - to view objects
* CHANGE - to modify objects (does not include READ permission)
* ALL - to read AND modify objects

>**Important:** When you add a permission, you may see a small exclamation mark. The exclamation mark indicates that the permission that you have just added is not effective, because another, "higher" permission set for the user already includes the respective permission. Check if you have set, for example, "Full access" or if there is another permission in the same section with "*" as type and ALL as permission.

As another example, assume that you are using tracking devices. You want to allow your user to see all devices, but not to change anything. In addition, the user should be able to follow tracks of devices on a map. Tracks are recorded using an event with fragment type "c8y&#95;Position" (see [Sensor library](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#section/Sensor-library)). To do so, assign READ permission on inventory as well as on events with type "c8y&#95;Position" as shown in the image below.

<img src="/images/users-guide/Administration/admin-inventory-role-example.png" alt="Permission example">

<a name="attach-inventory"></a>
### Assigning inventory roles to users

Inventory roles are assigned to a user and a group of devices.

To assign inventory roles, click **User** in the **Account** menu, select a user in the user list and switch to its **Inventory roles** tab.

In the **Inventory roles** tab you will see a tree of device groups. To assign an inventory role, click on the arrow right from a group. Select the relevant roles and click **Apply**. For details on the roles hover over the info icon next to it or refer to [Viewing inventory roles](#inventory).

> **Important:** If a user already has a global role containing inventory permissions, the user will be able to see or change all devices regardless of what inventory roles you set here.

Inventory roles are inherited from groups to all their direct and indirect subgroups, and to the devices in these groups. If you select, for example, a role with read permissions on alarms for a group of devices, the user will be able to see alarms of all devices in this group and all its subgroups.

If a user has inventory access to a group of devices, the user will also have that access to all dashboards for that group of devices in the Cockpit application.

You can also copy inventory roles from another user. To copy roles, click **Copy inventory roles from another user**. In the upcoming window, select a user from the list and click **Copy**. At the top you can select if you want to merge the roles with the existing user roles (the default) or if you want to replace the existing user roles. Copying roles makes it easier to manage the permissions of many users as you can create a reference user and then copy the permissions from there.

<img src="/images/users-guide/Administration/admin-inventory-role-copy.png" alt="Copy roles">


### Troubleshooting permissions

If you try to perform actions without sufficient permissions, an error message will occur.

To help troubleshooting permissions, click the **User** button at the right of the top bar. From the context menu, select **Access denied requests**. In the resulting window details on the denied accesses are provided. An administrator user or the [product support](/welcome/contacting-support/) can help in fixing the permissions.

<a name="app-access"></a>
### Granting application access

The **Application Access** tab shows a list of all available applications in your tenant in alphabetical order.

To assign applications to the user, simply select the respective applications and click **Save**.

For more information on application management, see [Administration > Managing applications](/users-guide/administration#managing-applications).

![Application access](/images/users-guide/Administration/admin-application-access.png)

> **Info:** If a user has global permission to read all applications, an information box will be shown.
