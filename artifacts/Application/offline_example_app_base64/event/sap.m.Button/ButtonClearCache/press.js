var modelData = modelModelArrayStorage.getData();

for (let i = 0; i < modelData.length; i++) {
    ModelData.Delete(ModelArrayStorage, "id", modelData[i].id);
}

setCacheModelArrayStorage();
console.log(modelData);
