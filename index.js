var recipes = {}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
 recipes.prop2 = '2';
  return recipes;
}
function updateObjectWithKeyAndValue(object,key,value) {
  var newRecipes = Object.assign({},recipes,{prop: 1},{prop2: 2});
  return newRecipes;
}

function deleteFromObjectByKey(object,key) {
  var newRecipes = Object.assign({},recipes);
  newRecipes
  delete newRecipes.prop2
  newRecipes
}
function destructivelyDeleteFromObjectByKey(object,key) {
  delete recipes.prop;
 return  recipes;
}