# Simple Jests Tests

## Grant Access Test

If the function `grantAccess` receives: 
 - `"police"` it should return `true`.
 - `"firefighter"` it should return `false`.
 - `"butcher"` it should return `false`.
 - `"baker"` it should return `false`.

## Retrieve Art Test

In the `retrieveArt` function `then` block:
 - The `data` shouldn't be `null` nor `undefined`.
 - The `data.objectName` should be `"Tiered box"`.
 - The `data.culture` should be `"China"`.
 - The `data.department` should be `"Asian Art"`.

## Sum Test

Expects 1 + 3 to be equal to 4.