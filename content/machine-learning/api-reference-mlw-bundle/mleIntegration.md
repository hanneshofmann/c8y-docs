---
title: MLE integration
layout: redirect
weight: 70


aliases:
  - /machine-learning/api-reference-mlw-bundle/#mleIntegration
---

Operations on models.

>**Info:** An active subscription of the MLW microservice is required to perform operations.

### GET - List of deployed models

```
{{url}}/service/mlw/resources/deploy
```

Retrieves the list of PMML/ONNX/PIPELINE models deployed to MLE.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|type (string)| required query parameter to fetch a model type (ex: PMML/ONNX/PIPELINE)


**Example Request**

```
200 - OK

curl --location --request GET '{{url}}/service/mlw/resources/deploy?type=PMML' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "data": [
        {
            "id": "admissionsModel",
            "name": "admissionsModel",
            "type": "PMML"
        },
        {
            "id": "anomalyModelISO",
            "name": "anomalyModelISO",
            "type": "PMML"
        }
    ]
}
```

**Example Request**

```
200 - OK

curl --location --request GET '{{url}}/service/mlw/resources/deploy?type=ONNX' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "data": [
        {
            "id": "retrainCasting",
            "name": "retrainCasting",
            "type": "ONNX"
        },
        {
            "id": "sodaBottleModel",
            "name": "sodaBottleModel",
            "type": "ONNX"
        }
    ]
}
```

**Example Request**

```
200 - OK

curl --location --request GET '{{url}}/service/mlw/resources/deploy?type=PIPELINE' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "data": [
        {
            "id": "inferencePipeline",
            "name": "inferencePipeline",
            "type": "PIPELINE"
        },
        {
            "id": "castPipelineNew",
            "name": "castPipelineNew",
            "type": "PIPELINE"
        }
    ]
}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/mlw/resources/deploy?type=PMML"
```

**Example Response**

```
401 - Unauthorized

{
    "error": "general/internalError",
    "message": "No auth information found",
    "info": "https://cumulocity.com/guides/reference/rest-implementation/#error_reporting"
}
```

**Example Request**

```
404 - Not Found

curl --location --request POST '{{url}}/service/mlw/resources/deploy?type=H5' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
404 - Not Found

{
    "message": "Invalid Model Type",
    "errorCode": 404,
    "exception": "invalid model"
}
```

### POST - Deploy model to MLE

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/deploy
```

Deploys the PMML/ONNX/PIPELINE model to MLE.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)| required path variable of an existing project ID
|resourceID (string)| required path variable of an existing resource ID

**Example Request**

```
200 - OK

curl --location --request POST '{{url}}/service/mlw/projects/1601355085_Project/resources/1601355165_0193_Resource/deploy' \
--header 'Authorization: {{auth}}' \
```

**Example Response**

```
200 - OK

{
    "id": "1601355165_0193_Resource",
    "name": "deployModel.pmml",
    "description": "",
    "createdAt": "Tue Sep 29 04:52:45 2020",
    "properties": [
        {
            "key": "version",
            "label": "Version",
            "value": "4.4"
        },
        {
            "key": "fileCreated",
            "label": "Time File Created",
            "value": "2020-09-29 04:52:42.843828"
        },
        {
            "key": "desc",
            "label": "Description",
            "value": "Default Description"
        },
        {
            "key": "columns",
            "label": "Column names",
            "value": [
                "gpa",
                "gre",
                "target"
            ]
        },
        {
            "key": "functionName",
            "label": "Function Name",
            "value": "classification"
        },
        {
            "key": "modelType",
            "label": "Model Type",
            "value": "Tree Based Model"
        },
        {
            "key": "modelName",
            "label": "Model Name",
            "value": "deployModel"
        },
        {
            "key": "numberOfTrees",
            "label": "Number of trees",
            "value": 100
        },
        {
            "key": "modelInformation",
            "label": "Model information",
            "value": 10
        }
    ],
    "editedAt": "",
    "type": "PMML",
    "url": "./MLW/1601355085_Project/Model/deployModel.pmml",
    "size": 699812,
    "mimeType": "application/PMML",
    "extension": ".pmml",
    "category": "Model",
    "deployed": true,
    "mleID": "deployModel"
}
```

**Example Request**

```
200 - OK

curl --location --request POST '{{url}}/service/mlw/projects/1601355085_Project/resources/1601357305_0916_Resource/deploy' \
--header 'Authorization: {{auth}}' \
```

**Example Response**

```
200 - OK

{
    "id": "1601357305_0916_Resource",
    "name": "admsNNN_1601357289.onnx",
    "description": "",
    "createdAt": "Tue Sep 29 05:28:25 2020",
    "properties": [],
    "editedAt": "",
    "type": "ONNX",
    "url": "./MLW/1601355085_Project/Model/admsNNN_1601357289.onnx",
    "size": 204024,
    "mimeType": "application/ONNX",
    "extension": ".onnx",
    "category": "Model",
    "deployed": true,
    "mleID": "admsNNN"
}
```

**Example Request**

```
200 - OK

curl --location --request POST '{{url}}/service/mlw/projects/1601355085_Project/resources/1601357604_0359_Resource/deploy' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "id": "1601357604_0359_Resource",
    "name": "PPP.pipeline",
    "description": "",
    "createdAt": "Tue Sep 29 05:33:24 2020",
    "properties": [
        {
            "key": "modelID",
            "label": "ONNX Model",
            "value": "admsNNN_1601357289.onnx"
        },
        {
            "key": "preProcessingID",
            "label": "Pre-Processing Script",
            "value": "preScriptCastDefect.py"
        },
        {
            "key": "postProcessingID",
            "label": "Post-Processing Script",
            "value": "postScriptCastDefect.py"
        }
    ],
    "editedAt": "Tue Sep 29 05:33:24 2020",
    "type": "PIPELINE",
    "url": "./MLW/1601355085_Project/Pipeline/PPP.pipeline",
    "size": 134,
    "mimeType": "application/PIPELINE",
    "extension": ".pipeline",
    "category": "Pipeline",
    "preProcessingID": "1601357477_0219_Resource",
    "modelID": "1601357305_0916_Resource",
    "postProcessingID": "1601357477_0011_Resource",
    "deployed": true,
    "mleID": "PPP"
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request POST '{{url}}/service/mlw/projects/1601355085_Project/resources/1601355165_0193_Resource/deploy'
```

**Example Response**

```
401 - Unauthorized

{
    "error": "general/internalError",
    "message": "No auth information found",
    "info": "https://cumulocity.com/guides/reference/rest-implementation/#error_reporting"
}
```

**Example Request**

```
409 - Conflict

curl --location --request POST '{{url}}/service/mlw/projects/1601355085_Project/resources/1601355165_0193_Resource/deploy' \
--header 'Authorization: {{auth}}'

```
**Example Response**

```
409 - Conflict

{
    "message": "A model with the name 'deployModel' already exists.",
    "errorCode": 409,
    "exception": "invalid/error"
}
```
**Example Request**

```
400 - Error

curl --location --request POST '{{url}}/service/mlw/projects/1601355085_Project/resources/1601355166_0193_Resource/deploy' \
--header 'Authorization: {{auth}}'

```
**Example Response**

```
400 - Error

{
    "message": "Invalid XML format.",
    "errorCode": 400,
    "exception": "invalid/error"
}
```
**Example Request**

```
404 - Not Found

curl --location --request POST '{{url}}/service/mlw/projects/1601355085_Project/resources/1601355165_0193_Resource/deploy' \
--header 'Authorization: {{auth}}'

```
**Example Response**

```
404 - Not Found

{
    "message": "'errors'",
    "errorCode": 404,
    "exception": "Not Found"
}
```

### DELETE - Remove model from MLE

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/deploy
```

Removes the PMML/ONNX/PIPELINE model from MLE.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)| required path variable of an existing project ID
|resourceID (string)| required path variable of an existing resource ID

**Example Request**

```
200 - OK

curl --location --request DELETE '{{url}}/service/mlw/projects/1601355085_Project/resources/1601355165_0193_Resource/deploy' \
--header 'Authorization: {{auth}}' \
```

**Example Response**

```
200 - OK

{
    "id": "1601355165_0193_Resource",
    "name": "deployModel.pmml",
    "description": "",
    "createdAt": "Tue Sep 29 04:52:45 2020",
    "properties": [
        {
            "key": "version",
            "label": "Version",
            "value": "4.4"
        },
        {
            "key": "fileCreated",
            "label": "Time File Created",
            "value": "2020-09-29 04:52:42.843828"
        },
        {
            "key": "desc",
            "label": "Description",
            "value": "Default Description"
        },
        {
            "key": "columns",
            "label": "Column names",
            "value": [
                "gpa",
                "gre",
                "target"
            ]
        },
        {
            "key": "functionName",
            "label": "Function Name",
            "value": "classification"
        },
        {
            "key": "modelType",
            "label": "Model Type",
            "value": "Tree Based Model"
        },
        {
            "key": "modelName",
            "label": "Model Name",
            "value": "deployModel"
        },
        {
            "key": "numberOfTrees",
            "label": "Number of trees",
            "value": 100
        },
        {
            "key": "modelInformation",
            "label": "Model information",
            "value": 10
        }
    ],
    "editedAt": "",
    "type": "PMML",
    "url": "./MLW/1601355085_Project/Model/deployModel.pmml",
    "size": 699812,
    "mimeType": "application/PMML",
    "extension": ".pmml",
    "category": "Model",
    "deployed": false,
    "mleID": "deployModel"
}
```

**Example Request**

```
200 - OK

curl --location --request DELETE '{{url}}/service/mlw/projects/1601355085_Project/resources/1601357305_0916_Resource/deploy' \
--header 'Authorization: {{auth}}' \
```

**Example Response**

```
200 - OK

{
    "id": "1601357305_0916_Resource",
    "name": "admsNNN_1601357289.onnx",
    "description": "",
    "createdAt": "Tue Sep 29 05:28:25 2020",
    "properties": [],
    "editedAt": "",
    "type": "ONNX",
    "url": "./MLW/1601355085_Project/Model/admsNNN_1601357289.onnx",
    "size": 204024,
    "mimeType": "application/ONNX",
    "extension": ".onnx",
    "category": "Model",
    "deployed": false,
    "mleID": "admsNNN"
}
```
**Example Request**

```
200 - OK

curl --location --request DELETE '{{url}}/service/mlw/projects/1601355085_Project/resources/1601357604_0359_Resource/deploy' \
--header 'Authorization: {{auth}}' \
```

**Example Response**

```
200 - OK

{
    "id": "1601357604_0359_Resource",
    "name": "PPP.pipeline",
    "description": "",
    "createdAt": "Tue Sep 29 05:33:24 2020",
    "properties": [
        {
            "key": "modelID",
            "label": "ONNX Model",
            "value": "admsNNN_1601357289.onnx"
        },
        {
            "key": "preProcessingID",
            "label": "Pre-Processing Script",
            "value": "preScriptCastDefect.py"
        },
        {
            "key": "postProcessingID",
            "label": "Post-Processing Script",
            "value": "postScriptCastDefect.py"
        }
    ],
    "editedAt": "Tue Sep 29 05:33:24 2020",
    "type": "PIPELINE",
    "url": "./MLW/1601355085_Project/Pipeline/PPP.pipeline",
    "size": 134,
    "mimeType": "application/PIPELINE",
    "extension": ".pipeline",
    "category": "Pipeline",
    "preProcessingID": "1601357477_0219_Resource",
    "modelID": "1601357305_0916_Resource",
    "postProcessingID": "1601357477_0011_Resource",
    "deployed": false,
    "mleID": "PPP"
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request DELETE '{{url}}/service/mlw/projects/1601355085_Project/resources/1601355165_0193_Resource/deploy'
```

**Example Response**

```
401 - Unauthorized

{
    "error": "general/internalError",
    "message": "No auth information found",
    "info": "https://cumulocity.com/guides/reference/rest-implementation/#error_reporting"
}
```

**Example Request**

```
404 - Not Found

curl --location --request DELETE '{{url}}/service/mlw/projects/1601355085_Project/resources/1601355165_0193_Resource/deploy' \
--header 'Authorization: {{auth}}'
```
**Example Response**

```
404 - Not Found

{
    "message": "Model 'deployModel' not found.",
    "errorCode": 404,
    "exception": "invalid/error"
}
```
**Example Request**

```
404 - Not Found

curl --location --request DELETE '{{url}}/service/mlw/projects/1601355085_Project/resources/1601355165_0193_Resource/deploy' \
--header 'Authorization: {{auth}}'

```
**Example Response**

```
404 - Not Found

{
    "message": "'errors'",
    "errorCode": 404,
    "exception": "Not Found"
}
```

### GET - Predict using the deployed models

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/predict/{{modelID}}
```

Predicts from the list of deployed PMML/ONNX/PIPELINE models in MLE.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)| required path variable of an existing project ID
|resourceID (string)| required path variable of an existing resource ID
|modelID (string)| required path variable of an existing model ID
|type (string)| required query parameter to score against a model type (for example: PMML/ONNX/PIPELINE)

**Example Request**

```
200 - OK

curl --location --request GET '{{url}}/service/mlw/projects/1601355085_Project/resources/1601359513_0301_Resource/predict/deployModel?type=PMML' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "id": "1601355085_Project",
    "name": "castingDefect",
    "description": "test project",
    "createdAt": "Tue Sep 29 04:51:25 2020",
    "properties": [],
    "isModified": true,
    "isFreeze": false,
    "selectedVersion": "",
    "versions": [],
    "resources": {
        "data": [
            {
                "id": "1601359513_0301_Resource",
                "name": "admissions_test.csv",
                "description": "",
                "createdAt": "Tue Sep 29 06:05:13 2020",
                "properties": [
                    {
                        "key": "numberOfRows",
                        "label": "Number of Rows",
                        "value": 644
                    },
                    {
                        "key": "numberOfColumns",
                        "label": "Number of Columns",
                        "value": 2
                    },
                    {
                        "key": "columnNames",
                        "label": "Column Names",
                        "value": [
                            "gpa",
                            "gre"
                        ]
                    }
                ],
                "editedAt": "",
                "type": "CSV",
                "url": "./MLW/1601355085_Project/Data/admissions_test.csv",
                "size": 15897,
                "mimeType": "text/csv",
                "extension": ".csv",
                "category": "Data"
            },
            {
                "id": "1601359589_0521_Resource",
                "name": "predicted_admissions_test_1601359589.csv",
                "description": "",
                "createdAt": "Tue Sep 29 06:06:29 2020",
                "properties": [
                    {
                        "key": "numberOfRows",
                        "label": "Number of Rows",
                        "value": 644
                    },
                    {
                        "key": "numberOfColumns",
                        "label": "Number of Columns",
                        "value": 3
                    },
                    {
                        "key": "columnNames",
                        "label": "Column Names",
                        "value": [
                            "probability_0",
                            "probability_1",
                            "predicted_target"
                        ]
                    }
                ],
                "editedAt": "",
                "type": "CSV",
                "url": "./MLW/1601355085_Project/Data/predicted_admissions_test_1601359589.csv",
                "size": 7439,
                "mimeType": "text/csv",
                "extension": ".csv",
                "category": "Data"
            }
        ],
        "model": [
            {
                "id": "1601355165_0193_Resource",
                "name": "deployModel.pmml",
                "description": "",
                "createdAt": "Tue Sep 29 04:52:45 2020",
                "properties": [
                    {
                        "key": "version",
                        "label": "Version",
                        "value": "4.4"
                    },
                    {
                        "key": "fileCreated",
                        "label": "Time File Created",
                        "value": "2020-09-29 04:52:42.843828"
                    },
                    {
                        "key": "desc",
                        "label": "Description",
                        "value": "Default Description"
                    },
                    {
                        "key": "columns",
                        "label": "Column names",
                        "value": [
                            "gpa",
                            "gre",
                            "target"
                        ]
                    },
                    {
                        "key": "functionName",
                        "label": "Function Name",
                        "value": "classification"
                    },
                    {
                        "key": "modelType",
                        "label": "Model Type",
                        "value": "Tree Based Model"
                    },
                    {
                        "key": "modelName",
                        "label": "Model Name",
                        "value": "deployModel"
                    },
                    {
                        "key": "numberOfTrees",
                        "label": "Number of trees",
                        "value": 100
                    },
                    {
                        "key": "modelInformation",
                        "label": "Model information",
                        "value": 10
                    }
                ],
                "editedAt": "",
                "type": "PMML",
                "url": "./MLW/1601355085_Project/Model/deployModel.pmml",
                "size": 699812,
                "mimeType": "application/PMML",
                "extension": ".pmml",
                "category": "Model",
                "deployed": false,
                "mleID": "deployModel"
            }
        ],
        "code": [
        ],
        "pipeline": [
        ],
        "workflow": [],
        "nn-designer": [
        ]
    },
    "resourcesCount": {
        "data": 2,
        "model": 1,
        "code": 0,
        "workflow": 0,
        "pipeline": 0,
        "nn-designer": 0,
        "totalCount": 3
    }
}
```

**Example Request**

```
200 - OK

curl --location --request GET '{{url}}/service/mlw/projects/1601355085_Project/resources/1601359513_0301_Resource/predict/admsNNN?type=ONNX' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "id": "1601355085_Project",
    "name": "castingDefect",
    "description": "test project",
    "createdAt": "Tue Sep 29 04:51:25 2020",
    "properties": [],
    "isModified": true,
    "isFreeze": false,
    "selectedVersion": "",
    "versions": [],
    "resources": {
        "data": [
            {
                "id": "1614316005_0649_Resource",
                "name": "testDefectImage.jpg",
                "description": "",
                "createdAt": "Fri Feb 26 05:06:45 2021",
                "properties": [],
                "editedAt": "",
                "type": "IMAGE",
                "url": "./MLW/1611231130_Project/Data/testDefectImage.jpg",
                "size": 22311,
                "mimeType": "image/jpeg",
                "extension": ".jpg",
                "category": "Data"
            },
            {
                "id": "1614323024_0177_Resource",
                "name": "predicted_testDefectImage_1614323024.json",
                "description": "",
                "createdAt": "Fri Feb 26 07:03:44 2021",
                "properties": [
                    {
                        "key": "numberOfobjects",
                        "label": "Number of Objects",
                        "value": 3
                    },
                    {
                        "key": "keysInJson",
                        "label": "keys in Dictionary",
                        "value": [
                            "ProbabilityScore",
                            "PredictedClass"
                        ]
                    }
                ],
                "editedAt": "",
                "type": "JSON",
                "url": "./MLW/1611231130_Project/Data/predicted_testDefectImage_1614323024.json",
                "size": 138,
                "mimeType": "application/json",
                "extension": ".json",
                "category": "Data"
            }
        ],
        "model": [
            {
                "id": "1601357305_0916_Resource",
                "name": "castingDefectModel_1614316284.onnx",
                "description": "",
                "createdAt": "Tue Sep 29 05:28:25 2020",
                "properties": [],
                "editedAt": "",
                "type": "ONNX",
                "url": "./MLW/1601355085_Project/Model/castingDefectModel_1614316284.onnx",
                "size": 204024,
                "mimeType": "application/ONNX",
                "extension": ".onnx",
                "category": "Model",
                "deployed": false,
                "mleID": "castingDefectModel"
            }
        ],
        "code": [
            {
                "id": "1614316005_0840_Resource",
                "name": "castingPreProcessingForNN.py",
                "description": "",
                "createdAt": "Fri Feb 26 05:06:45 2021",
                "properties": [],
                "editedAt": "",
                "type": "PY",
                "url": "./MLW/1611231130_Project/Code/castingPreProcessingForNN.py",
                "size": 247,
                "mimeType": "text/x-python",
                "extension": ".py",
                "category": "Code",
                "deployed": false
            },
            {
                "id": "1614316005_0402_Resource",
                "name": "castingPostProcessingForNN.py",
                "description": "",
                "createdAt": "Fri Feb 26 05:06:45 2021",
                "properties": [],
                "editedAt": "",
                "type": "PY",
                "url": "./MLW/1611231130_Project/Code/castingPostProcessingForNN.py",
                "size": 195,
                "mimeType": "text/x-python",
                "extension": ".py",
                "category": "Code",
                "deployed": false
            }
        ],
        "pipeline": [
            {
                "id": "1614319009_0143_Resource",
                "name": "PPP.pipeline",
                "description": "",
                "createdAt": "Fri Feb 26 05:56:49 2021",
                "properties": [
                    {
                        "key": "modelID",
                        "label": "ONNX Model",
                        "value": "castingDefectModel_1614316284.onnx"
                    },
                    {
                        "key": "preProcessingID",
                        "label": "Pre-Processing Script",
                        "value": "castingPreProcessingForNN.py"
                    },
                    {
                        "key": "postProcessingID",
                        "label": "Post-Processing Script",
                        "value": "castingPostProcessingForNN.py"
                    }
                ],
                "editedAt": "Fri Feb 26 05:56:49 2021",
                "type": "PIPELINE",
                "url": "./MLW/1611231130_Project/Pipeline/PPP.pipeline",
                "size": 134,
                "mimeType": "application/PIPELINE",
                "extension": ".pipeline",
                "category": "Pipeline",
                "preProcessingID": "1614316005_0840_Resource",
                "modelID": "1614316842_0538_Resource",
                "postProcessingID": "1614316005_0402_Resource",
                "deployed": true,
                "mleID": "PPP"
            }
        ],
        "workflow": [],
        "nn-designer": [
        ]
    },
    "resourcesCount": {
        "data": 2,
        "model": 1,
        "code": 0,
        "workflow": 0,
        "pipeline": 1,
        "nn-designer": 0,
        "totalCount": 4
    }
}
```

**Example Request**

```
200 - OK

curl --location --request GET '{{url}}/service/mlw/projects/1601355085_Project/resources/1601359513_0301_Resource/predict/PPP?type=PIPELINE' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "id": "1601355085_Project",
    "name": "castingDefect",
    "description": "test project",
    "createdAt": "Tue Sep 29 04:51:25 2020",
    "properties": [],
    "isModified": true,
    "isFreeze": false,
    "selectedVersion": "",
    "versions": [],
    "resources": {
        "data": [
            {
                "id": "1601359513_0301_Resource",
                "name": "admissions_test.csv",
                "description": "",
                "createdAt": "Tue Sep 29 06:05:13 2020",
                "properties": [
                    {
                        "key": "numberOfRows",
                        "label": "Number of Rows",
                        "value": 644
                    },
                    {
                        "key": "numberOfColumns",
                        "label": "Number of Columns",
                        "value": 2
                    },
                    {
                        "key": "columnNames",
                        "label": "Column Names",
                        "value": [
                            "gpa",
                            "gre"
                        ]
                    }
                ],
                "editedAt": "",
                "type": "CSV",
                "url": "./MLW/1601355085_Project/Data/admissions_test.csv",
                "size": 15897,
                "mimeType": "text/csv",
                "extension": ".csv",
                "category": "Data"
            },
            {
                "id": "1601360114_0707_Resource",
                "name": "predicted_admissions_test_1601360114.csv",
                "description": "",
                "createdAt": "Tue Sep 29 06:15:14 2020",
                "properties": [
                    {
                        "key": "numberOfRows",
                        "label": "Number of Rows",
                        "value": 644
                    },
                    {
                        "key": "numberOfColumns",
                        "label": "Number of Columns",
                        "value": 1
                    },
                    {
                        "key": "columnNames",
                        "label": "Column Names",
                        "value": [
                            "0"
                        ]
                    }
                ],
                "editedAt": "",
                "type": "CSV",
                "url": "./MLW/1601355085_Project/Data/predicted_admissions_test_1601360114.csv",
                "size": 12482,
                "mimeType": "text/csv",
                "extension": ".csv",
                "category": "Data"
            }
        ],
        "model": [
            {
                "id": "1601357305_0916_Resource",
                "name": "admsNNN_1601357289.onnx",
                "description": "",
                "createdAt": "Tue Sep 29 05:28:25 2020",
                "properties": [],
                "editedAt": "",
                "type": "ONNX",
                "url": "./MLW/1601355085_Project/Model/admsNNN_1601357289.onnx",
                "size": 204024,
                "mimeType": "application/ONNX",
                "extension": ".onnx",
                "category": "Model",
                "deployed": false,
                "mleID": "admsNNN"
            }
        ],
        "code": [],
        "pipeline": [],
        "workflow": [],
        "nn-designer": []
    },
    "resourcesCount": {
        "data": 2,
        "model": 2,
        "code": 0,
        "workflow": 0,
        "pipeline": 0,
        "nn-designer": 0,
        "totalCount": 4
    }
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request GET '{{url}}/service/mlw/projects/1601355085_Project/resources/1601359513_0301_Resource/predict/deployModel?type=PMML'
```

**Example Response**

```
401 - Unauthorized

{
    "error": "general/internalError",
    "message": "No auth information found",
    "info": "https://cumulocity.com/guides/reference/rest-implementation/#error_reporting"
}
```

**Example Request**

```
404 - Not Found

curl --location --request GET '{{url}}/service/mlw/projects/1601355085_Project/resources/1601359513_0301_Resource/predict/admsNNN?type=ONNX' \
--header 'Authorization: {{auth}}'

```
**Example Response**

```
404 - Not Found

{
    "message": "Onnx microservice is unsubscribed. Subscribe to Onnx microservice.",
    "errorCode": 404,
    "exception": "invalid/error"
}
```

**Example Request**

```
404 - Not Found

curl --location --request POST '{{url}}/service/mlw/projects/1601355085_Project/resources/1601359513_0301_Resource/predict/PPP?type=H5' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
404 - Not Found

{
    "message": "Invalid Model Type/File Type.",
    "errorCode": 404,
    "exception": "invalid model"
}
```
