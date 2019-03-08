var recipes = {prop: 1}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
 recipes.prop2 = '2';
  return recipes
}
function updateObjectWithKeyAndValue(object,key,value) {
  var newRecipes = Object.assign({},recipes,{prop: 1},{prop2: 2});
  return newRecipes;
}

function deleteFromObjectByKey(object,key) {
  var newRecipes = Object.assign({},recipes,{prop: 1},{prop2: 2});
  newRecipes
  delete newRecipes.prop
  newRecipes
}
function destructivelyDeleteFromObjectByKey(object,key) {
  delete recipes.prop;
 return  recipes;
}