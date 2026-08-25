sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.demo.zb70sapui52.controller.View1", {
        onInit() {
        },
        onPress: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView2");
            // let oRouter = this().getOwnerComponent().getRouter();
            // oRouter.navTo("RouteView2");
        },

        onSubmit: function () {
         var name = this.getView().byid("inp1").getvalue();
         var msg = "Welcome to " + name;
         this.getView().byid("idt2").setvalue();
        }



    });
});