"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleCallBack() {
    setTimeout(() => global.webApp.dispatch("base/networkChange", {
        currentNetwork: "4G"
    }));
    setTimeout(() => global.webApp.dispatch("base/networkChange", "3G"), 2 * 1000);
}
exports.default = handleCallBack;
