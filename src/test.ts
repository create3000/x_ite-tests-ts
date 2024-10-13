import X3D from "../../x_ite";

const browser: X3D.X3DBrowser = X3D.getBrowser ();
const scene:   X3D.X3DScene   = browser .currentScene;

console .log (scene);
console .log (X3D .X3DConstants .SFNode);
console .log (X3D .ProfileInfo);
