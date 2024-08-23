# Stimulus Clipboard

> A Stimulus controller for copying text to the clipboard easily.

## Prerequisites
This project requires [hotwired/stimulus ^3.2.2](https://github.com/hotwired/stimulus).
make sure you have them available in your project.

## Installation
Install the package 
- via npm 

```sh
$ npm i @lastlevel/stimulus-clipboard
```
or via yarn 

```sh
$ yarn add @lastlevel/stimulus-clipboard
```

## Usage

### 1. Import the controller in your JavaScript or TypeScript project.

```javascript
import ClipboardController from "stimulus-clipboard"
application.register("clipboard", ClipboardController)
```

### 2. Add the controller to your HTML.
#### Example 1: Copying a Default Text
If the attributes data-[controller-name]-text-to-copy-value and data-[controller-name]-target-input-value are not defined, the text within the element will be copied by default.
```html
<a style="cursor: pointer"
   data-controller="clipboard">
    this text will be copied, since the attributes `data-[controller-name]-text-to-copy-value` and
    data-[controller-name]-target-input-value` are not defined
</a>
```

#### Example 2: Copying a Specified Text
You can define the text to be copied using the data-clipboard-text-to-copy-value attribute.
```html
<a
    style="cursor: pointer"
    data-controller="clipboard"
    data-clipboard-text-to-copy-value="this text will be copied, since the attribute `data-[controller-name]-text-to-copy-value` is defined"
>
    click to copy
</a>
```

#### Example 3: Copying Text from an Input Field
You can also specify an input field selector as the source of the text to be copied using the data-clipboard-target-input-selector-value attribute. (as a value you can use any javascript selector that can be passed to [document.querySelector](https://www.w3schools.com/jsref/met_document_queryselector.asp) )
```html
<a style="cursor: pointer"
   data-controller="clipboard"
   data-clipboard-target-input-selector-value="#inputId">
    click to copy
</a>
<label for="inputId">
    <input type="text"
           value="this text will be copied, since the attribute `data-[controller-name]-target-input-value` is defined"
           name="inputName" id="inputId">
</label>
```

#### Example Code
Here’s how these examples look in an HTML file:
```html
<div>
    <a
            style="cursor: pointer"
            data-controller="clipboard"
    >
        this text will be copied, since the attributes `data-[controller-name]-text-to-copy-value` and
        data-[controller-name]-text-to-copy-value are not defined
    </a>
</div>
<hr>
<div>
    <a
            style="cursor: pointer"
            data-controller="clipboard"
            data-clipboard-text-to-copy-value="this text will be copied, since the attribute `data-[controller-name]-text-to-copy-value` is defined"
    >
        click to copy
    </a>
</div>
<hr>

<div>
    <!-- Usage with a selector by ID -->
    <a style="cursor: pointer"
       data-controller="clipboard"
       data-clipboard-target-input-selector-value="#inputIdSelector">
        Click to copy the text from the input with ID
    </a>
    <label for="inputIdSelector"><input type="text" id="inputIdSelector" value="Text to copy by ID"></label>
    <br>
    <!-- Usage with a selector by name -->
    <a style="cursor: pointer"
       data-controller="clipboard"
       data-clipboard-target-input-selector-value="[name='inputName']">
        Click to copy the text from the input with name
    </a>
    <label>
        <input type="text" name="inputName" value="Text to copy by name">
    </label>
    <br>
    <!-- Usage with a selector by class (only the first match will be used then) -->
    <a style="cursor: pointer"
       data-controller="clipboard"
       data-clipboard-target-input-selector-value=".inputClass">
        Click to copy the text from the input with class
    </a>
    <label>
        <input type="text" class="inputClass" value="Text to copy by class">
    </label>
</div>
```

## License

this project is under ISC License © Lastlevel Corporation
