import X3D from "../../x_ite";
import traverse from "../../x3d-traverse";

const Traverse = traverse (X3D);

const browser: X3D.X3DBrowser = X3D.getBrowser ();
const scene:   X3D.X3DScene   = browser .currentScene;

console .log (scene);
console .log (X3D .X3DConstants .SFNode);
console .log (X3D .ProfileInfo);

scene .addRootNode (scene .createNode ("Transform"));

for (const node of Traverse .traverse (scene, Traverse .ROOT_NODES))
   console .log ((node as X3D .SFNode) .getNodeTypeName ());

for (const node of scene .traverse ())
   console .log ((node as X3D .SFNode) .getNodeTypeName ());
