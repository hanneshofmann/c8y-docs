---
title: Projects
layout: redirect
weight: 30
---

Machine Learning Workbench (MLW) provides a version-controlled project-based structure to organize all the data science resources including data, code, models, neural network architectures, inference pipelines, and training workflows.

Projects functionality includes:

* [Creating a new project](#creating-a-new-project)
* [Adding resources to the project - drag and drop, upload single or multiple files](#uploading-resources)
* [Committing a project - version management](#commiting-a-project-version)

### Creating a new project

Click **Projects** in the navigator. This will list all the available projects. 

Click **+Add Project** at the right of the top menu bar, enter a project name and description, and click **Add Project**. This will create a new project with the given name. The new project will not contain any resources.

### Uploading resources

Machine Learning Workbench (MLW) categorizes project resources as follows:

| Resource | Content description | File type |
|-----     |-----        |-----      |
| Data | Training data for Machine Learning Workbench (MLW) | <ul><li>csv</li><li>json</li><li>zip</li><li>png</li><li>jpg</li><li>txt</li></ul> |
| Code | Python code for data preparation/exploration, data pre/post-processing steps, model training and evaluation | <ul><li>py</li><li>ipynb</li></ul> |
| Model | Models trained by Machine Learning Workbench (MLW) | <ul><li>pmml</li><li>onnx</li></ul> |
| NN Designer | Architectures depicting complex structures of deep neural networks | <ul><li>architecture (JSON)</li></ul> |
| Inference Pipeline | Inference pipelines that define a sequence of pre-processing step, ONNX model, and post-processing step | <ul><li>pipeline (JSON)</li></ul> |
| Training Workflow | Training workflows that define a sequence of data preparation and model training/export activity that can be scheduled periodically | <ul><li>wf (JSON)</li></ul> |

To upload files, click the cloud upload icon <img src="/images/zementis/mlw-upload-icon.png" alt="Upload" style="display:inline-block; margin:0"> and either click on the upload pane and select the files for uploading or use the drag and drop files capability.

![Upload resources](/images/zementis/mlw-app-upload-resources.png)

Once the files are uploaded, they will be placed under the respective categories.

### Commiting a project version

To commit a project with its resources for versioning, click the plus icon <img src="/images/zementis/mlw-commit-add-icon.png" alt="Commit" style="display:inline-block; margin:0"> at the top right and click **Commit Project**.

You can select all or a subset of resource files that need to be committed to a version. and click the submit icon <img src="/images/zementis/mlw-submit-icon.png" alt="Submit" style="display:inline-block; margin:0">.

![Commit version](/images/zementis/mlw-app-project-commit-select.png)

Click **Tasks** in the navigator and click the respective task name, which in this case will be the project name, to display the status of the commit process in the **Task History** section at the center.

The project card will show the different versions available for that project.

![Upload Resources](/images/zementis/mlw-app-project-version.png)
