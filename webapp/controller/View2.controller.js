sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";
    

    return Controller.extend("com.demo.zb70sapui52.controller.View2", {
        onInit() {
        },
        onpressback: function onPressback() {
          this.getOwnerComponent.getRouter.navTo("RouteView1");
          
        }
        
    });
});