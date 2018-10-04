# Advanced applications

## Recap

Last week we took a look at some of the most important features and conventions of VueJS. We saw how you can set up a simple Vue application by just adding one script, and how you can set up a feature rich project environment using the Vue CLI. Today we will look to scale our Vue application further. We will talk about data management, component and data lifecycles and serverside rendering.


## Component lifecycle

We have seen how you can create and use components, and how you can use directives like `v-if` and `v-for` to manipulate the DOM. Sometimes you want to be able to react to a component being created or removed. Vue allows this through lifecycle hooks. These are functions that you provide in the component definition, and are called before or after certain events in the lifecycle of a component. The following illustration shows which hooks Vue provides, and when they are triggered.

