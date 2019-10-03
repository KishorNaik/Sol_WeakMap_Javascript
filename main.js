// Using Map

let mapObj = new Map();

mapObj.set("key", "kishor");
mapObj.set("key1", "naik");

let name = mapObj.get("key");
console.log(name);
let name1 = mapObj.get("key1");
console.log(name1);


let obj1 = {};

mapObj.set(obj1, { name: "kishor" });

let readObj1 = mapObj.get(obj1);
console.log(readObj1);

// If We Delete Obj1
obj1 = null;

readObj1 = mapObj.get(obj1);
console.log(readObj1); // Undefined

var keyObj1 = mapObj.keys();
console.log(keyObj1);

// Using WeakMap

let weakMapObj = new WeakMap();

let obj2 = {};

weakMapObj.set(obj2, { name: "kishor" });

let readWeakMapObj = weakMapObj.get(obj2);
console.log(readWeakMapObj);

obj2 = null;

var keyObj2 = weakMapObj.has(obj2);
console.log(keyObj2);





