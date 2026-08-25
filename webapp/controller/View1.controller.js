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



            var name = this.getView().byId("inp1").getValue();
            var msg = "Welcome to " + name;
            this.getView().byId("idt1").setText(msg);
            this.getView().byId("idsubmit").setType("Reject");
            this.getView().byId("idt1").setTextAlign("Left");
            this.getView().byId("idlbl").setRequired(false);
            this.getView().byId("inp1").setEnabled(false);
        }

    });
});