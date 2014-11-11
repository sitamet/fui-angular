fui-angular
===========

AngularJS directives for Flat UI components. Pure Angular directives with no jQuery calls.

## Description
This is a simple collection of angular directives to work in conjunction with  **Flat UI** or **Flat UI Pro**. 


## Installation
Installation is easy as fui-angular has minimal dependencies - only the AngularJS, Flat UI and Bootstrap's CSS are required.

### 1.-
```
bower install --save fui-angular
```
### 2.-
Add a copy of views/directive_templates to your path. This lets you to adapt and tweak templates to your needs.

Example:
```
app
|-- index.html
|-- scripts
|   |-- app.js
`-- views
    |-- directive_templates
    |   |-- fui-checkbox.html
    |   |-- fui-radio.html
    |   `-- fui-switch.html
    |-- home.html
    |...
```

## Project philosophy

### Native, lightweight directives

We are aiming at providing a set of AngularJS directives based on Flat UI and Bootstrap's markup and CSS. The goal is to provide **native AngularJS directives** without any dependency on jQuery or Bootstrap's JavaScript.

### Take what you need and not more

Each directive has its own AngularJS module without any dependencies on other modules or third-party JavaScript code. In practice it means that you can **just grab the code for the directives you need** and you are not obliged to drag the whole repository.

### Usage

Inside directives dir you can find fui.js
This is a module wrapper:

```javascript
angular.module('fui',['fui.checkbox','fui.switch','fui.radio']);
```
Inject the fui.* directives yoou need to module 'fui',
then inject 'fui' module component to your app like:

```javascript
angular.module('app', ['fui']);
```

Remember you also need the bootstrap.css, flat-ui.css/flat-ui-pro.css and glyphicons

## Components

### fui-checkbox
wrap for flat ui checkboxes:

```html
<fui-checkbox ng-model="modelCheckbox2" id="Checkbox2">
    modelCheckbox2={{modelCheckbox2}}
</fui-checkbox>

<fui-checkbox ng-model="modelCheckbox1" ng-disabled="false" id="Checkbox1">
    modelCheckbox1={{modelCheckbox1}}
</fui-checkbox>
```

### fui-radio
wrap for flat ui radiobuttons:

```html
<fui-radio ng-value="0" name="group1" id="r0" ng-model="grp1" ng-init="grp1=0">
    Radio 0
</fui-radio>
<fui-radio ng-value="1" name="group1" id="r1" ng-model="grp1">
    Radio 1
</fui-radio>
<fui-radio ng-value="2" name="group1" id="r2" ng-model="grp1">
    Radio 2
</fui-radio>
<fui-radio ng-value="3" name="group1" id="r3" ng-model="grp1">
    Radio 3
</fui-radio>
<fui-radio ng-value="4" name="group1" id="r4" ng-model="grp1" ng-disabled="true">
    Radio disabled
</fui-radio>
```


### fui-switch
wrap flat ui switches:

```html
<fui-switch ng-model="modelSwitch1" ng-init="modelSwitch1 = true"></fui-switch>
<fui-switch ng-model="modelSwitch1" data-on-color="success" data-on-text="Hi" data-off-text="By"></fui-switch>
```



## Demo
Demo dir contains a sample index.html

![demo screen shoot](https://raw.githubusercontent.com/sitamet/fui-angular/master/demo/img/fui-demo.png)
