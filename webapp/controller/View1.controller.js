sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";
    

    return Controller.extend("com.demo.zb70sapui52.controller.View1", {
        onInit() {
        },
        onpress: function onpress() {
            alert("testing");
        }
        
    });
});