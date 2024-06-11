if (!AppCache.isOffline) {

    console.log("Online");
    ButtonCallAPI.setVisible(true);

} else {

    console.log("Offline");

    var offlineData = modelModelArrayStorage.getData();
    console.log(offlineData);
    QRCode.setSrc(offlineData[0].base64);

}



