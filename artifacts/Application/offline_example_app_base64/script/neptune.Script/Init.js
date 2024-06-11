window.addEventListener("offline", onOffline, false);
window.addEventListener("online", onOnline, false);

function onOffline(){
    sap.m.MessageToast.show("Offline!");
    ButtonCallAPI.setVisible(false);
}

function onOnline(){
    sap.m.MessageToast.show("Online!");
    ButtonCallAPI.setVisible(true);
}