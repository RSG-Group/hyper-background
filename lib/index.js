"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
exports.decorateConfig = (config) => {
    const duplicateConfig = config;
    let backgroundImage;
    if (path_1.isAbsolute(config.backgroundImage))
        backgroundImage = config.backgroundImage;
    else
        backgroundImage = path_1.resolve(config.backgroundImage);
    duplicateConfig.css += `\nbody { background: url(file://${backgroundImage}) center; }`;
    return duplicateConfig;
};
//# sourceMappingURL=index.js.map