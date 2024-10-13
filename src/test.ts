import X3D from "../../x_ite";

let browser: X3D.X3DBrowser = X3D.getBrowser ();

let scene: X3D.X3DScene = browser .currentScene;

console .log (scene);
console .log (X3D .X3DConstants .SFNode);
console .log (X3D .ProfileInfo);
