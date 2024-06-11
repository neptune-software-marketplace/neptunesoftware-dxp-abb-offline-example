var data = modelModelArrayStorage.getData();

sap.m.MessageToast.show("Data called & Cached");

console.log(data);

QRCode.setSrc(data[0].base64)