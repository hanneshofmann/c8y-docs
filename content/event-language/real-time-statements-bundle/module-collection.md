---
weight: 20
title: Module collection
layout: redirect
---

### ModuleCollection  [application/vnd.com.nsn.cumulocity.cepModuleCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource.|
|modules|Collection|0..n|List of modules, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|URI|0..1|Link to a potential previous page of modules.|
|next|URI|0..1|Link to a potential next page of modules.|

### GET a module collection

Response body: ModuleCollection

Required role: ROLE\_CEP\_MANAGEMENT\_READ

Example request: Get collection of all modules

	GET /cep/modules
	Host: ...
	Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.cepmodulecollection+json;ver=...
    Content-Length: ...
    {
       "id":"1",
       "self":"CURRENT URL",
       "name":"CepModule 1",
       "application":{
          "application":{
             "id":"3",
             "key":null,
             "name":"energyapp",
             "self":"<<this module application URL>>"
          },
          "self":"<<this module application reference URL>>"
       },
       "lastModified":"2012-01-10T17:15:24+01:00",
       "self": "<<URL to this module>>"
    }

### POST - Create a new Module with statements

Request body: module file
Response body: Module (if "Accept" header is provided)  
Required role: ROLE\_CEP\_MANAGEMENT\_ADMIN.

Example request:

    POST /cep/modules
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: multipart/form-data

> **Note**: "POST /cep/modules" is a multipart message.

Example file:

    module testmodule;
    @Name('test1')select * from EventCreated.win:time(1 hour)

Annotation @Name can be skipped - in this case {{< product-c8y-iot >}} platform will assign default name to the statement.

Example response:

    HTTP/1.1 201 Created
    Content-Type: application/vnd.com.nsn.cumulocity.cepmodule+json;ver=...
    {
       "id":"3",
       "lastModified":"2013-06-27T15:37:51.091+02:00",
       "name":"management",
       "self":"http:\/\/localhost:8181\/cep\/modules\/3",
       "status":"DEPLOYED"
    }

The "id" and "lastModified" of the new module are generated by the server. Response contains also status of module deployment operation.

Module name is considered to be also application name.
