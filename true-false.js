// falsy: false, 0, "", undefined, null, Nan 
// Truthy: '0', ' ', []

let name = 0;

if(name || name == 0){
    console.log("Condition is True...");
}
else{
    console.log("Condition is False...");
}