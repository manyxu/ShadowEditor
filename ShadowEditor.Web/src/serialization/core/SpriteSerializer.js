import BaseSerializer from '../BaseSerializer';
import Object3DSerializer from './Object3DSerializer';

import GeometriesSerializer from '../geometry/GeometriesSerializer';
import MaterialsSerializer from '../material/MaterialsSerializer';

/**
 * SpriteSerializer
 */
function SpriteSerializer() {
    BaseSerializer.call(this);
}

SpriteSerializer.prototype = Object.create(BaseSerializer.prototype);
SpriteSerializer.prototype.constructor = SpriteSerializer;

SpriteSerializer.prototype.toJSON = function (obj) {
    var json = Object3DSerializer.prototype.toJSON.call(this, obj);

    json.center = obj.center;
    json.material = (new MaterialsSerializer()).toJSON(obj.material);
    json.z = obj.z;
    json.isSprite = obj.isSprite;

    return json;
};

SpriteSerializer.prototype.fromJSON = function (json, parent) {
    var geometry, material;

    if (parent === undefined) {
        if (json.geometry == null) {
            console.warn(`SpriteSerializer: ${json.name} json.geometry未定义。`);
            return null;
        }
        if (json.material == null) {
            console.warn(`SpriteSerializer: ${json.name} json.material未定义。`);
            return null;
        }
        geometry = (new GeometriesSerializer()).fromJSON(json.geometry);
        material = (new MaterialsSerializer()).fromJSON(json.material);
    }

    var obj = parent === undefined ? new THREE.Mesh(geometry, material) : parent;

    Object3DSerializer.prototype.fromJSON.call(this, json, obj);

    return obj;
};

export default SpriteSerializer;