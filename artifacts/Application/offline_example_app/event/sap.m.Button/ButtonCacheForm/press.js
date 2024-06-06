const formData = modelFormData.getData();
const newEntry = { name: InputName.getValue(), note: TextAreaNote.getValue() };

if (formData.length > 0) {
    formData.push(newEntry);
    modelFormData.setData(formData);
} else {
    modelFormData.setData([newEntry]);
}

setCacheFormData();
InputName.setValue();
TextAreaNote.setValue();

sap.m.MessageToast.show("Form data cached!");