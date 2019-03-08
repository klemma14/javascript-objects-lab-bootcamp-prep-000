var recipes = {}
function updateObjectWithKeyAndValue(object,key,value) {
  var newRecipes = Object.assign({},recipes,{prop: 1},{prop2: 2});
  return newRecipes;
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
recipes.prop2 = '2';
 return recipes
}
function deleteFromObjectByKey(object,key) {
  var newRecipes = Object.assign({},recipes,{prop: 1},{prop2: 2});
  newRecipes
  delete newRecipes.key
  newRecipes
}
function destructivelyDeleteFromObjectByKey(object,key) {
  var newRecipes = Object.assign({},recipes,{prop: 1},{prop2: 2});
  newRecipes
  delete newRecipes.key
  newRecipes
}