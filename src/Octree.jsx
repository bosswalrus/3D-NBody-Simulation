class OctreeNode {
    constructor(x, y, z, w, h, d) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        this.h = h;
        this.d = d;
        this.children = [
            null, null, null, null,
            null, null, null, null
        ]
        this.bodies = [];
        this.centerMass = [0, 0, 0];
        this.totalMass = 0;
        
        
    }

    insert(body) {

    }


}

export default class Octree {
    constructor(x, y, z, w, h, d) {
        this.root = new OctreeNode(x, y, z, w, h, d);
    }

    insert(body) {
        this.root.insert(body);
    }
}