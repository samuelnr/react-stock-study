const names = ['samuel','carlos','joao'];

const newArrayName = names.map((name, index) => {

    console.log('name' + name + " - " + index);

    return name + "|" + index;

})

console.log(newArrayName);