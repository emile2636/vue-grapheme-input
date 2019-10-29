# vue-grapheme-input

## Background

This is a custom component which builds on [grapheme-splitter](https://github.com/orling/grapheme-splitter), it's mainly to deal with characters counts in different language. When we use javascript to get emoji characters, we can get correct "UTF-16 code units" counts. However when we trying to use "maxlength"(or minlength) attribute in HTML input tag, we can't get the right apperence in the web browser.

For Example, if we use 5 for the "maxlength" of a input tag attribute and put the "Ĺo͂řȩm̅", which is "5" characters look, into the box:

```
<input maxlength="5"/> 
```

The Chrome browser will only display "Ĺo͂r", but the Safari can show full text "Ĺo͂řȩm̅". The unexpected result and the difference make developers hard to deal with.
Thus, this component packed grapheme-splitter and u can use "maxlength" on it naturally like the usage of normal HTML attributes.

```
<grapheme-input maxlength="5"></grapheme-input>
```

The result will be exactly what we expect and there's no difference between all browsers.

## Note

The component can only use on Vue 2.4.0+ becuase of the "inheritAttrs" option.