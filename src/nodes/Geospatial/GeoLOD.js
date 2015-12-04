/** @namespace x3dom.nodeTypes */
/*
 * X3DOM JavaScript Library
 * http://www.x3dom.org
 *
 * (C)2009 Fraunhofer IGD, Darmstadt, Germany
 * Dual licensed under the MIT and GPL
 */

/* ### GeoLOD ### */
x3dom.registerNodeType(
    "GeoLOD",
    "Geospatial",
    //defineClass(x3dom.nodeTypes.X3DLODNode,
    //official derivation, is not a real grouping node since it may not have children, only url references
    defineClass(x3dom.nodeTypes.X3DBoundedObject,
        
        /**
         * Constructor for GeoLOD
         * @constructs x3dom.nodeTypes.GeoLOD
         * @x3d 3.3
         * @component Geospatial
         * @status experimental
         * @extends x3dom.nodeTypes.X3DLODNode
         * @param {Object} [ctx=null] - context object, containing initial settings like namespace
         * @classdesc The GeoLOD node provides a terrain-specialized form of the LOD node.
         * It is a grouping node that specifies two different levels of detail for an object using a tree structure, where 0 to 4 children can be specified, and also efficiently manages the loading and unloading of these levels of detail.
         */
        function (ctx) {
            x3dom.nodeTypes.GeoLOD.superClass.call(this, ctx);


            /**
             * The geoSystem field is used to define the spatial reference frame.
             * @var {x3dom.fields.MFString} geoSystem
             * @range {["GD", ...], ["UTM", ...], ["GC", ...]}
             * @memberof x3dom.nodeTypes.GeoLOD
             * @initvalue ['GD','WE']
             * @field x3d
             * @instance
             */
            this.addField_MFString(ctx, 'geoSystem', ['GD', 'WE']);

            /**
             * The rootUrl and rootNode fields provide two different ways to specify the geometry of the root tile.
             * You may use one or the other. The rootNode field lets you include the geometry for the root tile directly within the X3D file.
             * @var {x3dom.fields.MFString} rootUrl
             * @memberof x3dom.nodeTypes.GeoLOD
             * @initvalue []
             * @field x3d
             * @instance
             */
            this.addField_MFString(ctx, 'rootUrl', []);

            /**
             * When the viewer enters the specified range, this geometry is replaced with the contents of the four children files defined by child1Url through child4Url.
             * The four children files are loaded into memory only when the user is within the specified range. Similarly, these are unloaded from memory when the user leaves this range.
             * @var {x3dom.fields.MFString} child1Url
             * @memberof x3dom.nodeTypes.GeoLOD
             * @initvalue []
             * @field x3d
             * @instance
             */
            this.addField_MFString(ctx, 'child1Url', []);

            /**
             * When the viewer enters the specified range, this geometry is replaced with the contents of the four children files defined by child1Url through child4Url.
             * The four children files are loaded into memory only when the user is within the specified range. Similarly, these are unloaded from memory when the user leaves this range.
             * @var {x3dom.fields.MFString} child2Url
             * @memberof x3dom.nodeTypes.GeoLOD
             * @initvalue []
             * @field x3d
             * @instance
             */
            this.addField_MFString(ctx, 'child2Url', []);

            /**
             * When the viewer enters the specified range, this geometry is replaced with the contents of the four children files defined by child1Url through child4Url.
             * The four children files are loaded into memory only when the user is within the specified range. Similarly, these are unloaded from memory when the user leaves this range.
             * @var {x3dom.fields.MFString} child3Url
             * @memberof x3dom.nodeTypes.GeoLOD
             * @initvalue []
             * @field x3d
             * @instance
             */
            this.addField_MFString(ctx, 'child3Url', []);

            /**
             * When the viewer enters the specified range, this geometry is replaced with the contents of the four children files defined by child1Url through child4Url.
             * The four children files are loaded into memory only when the user is within the specified range. Similarly, these are unloaded from memory when the user leaves this range.
             * @var {x3dom.fields.MFString} child4Url
             * @memberof x3dom.nodeTypes.GeoLOD
             * @initvalue []
             * @field x3d
             * @instance
             */
            this.addField_MFString(ctx, 'child4Url', []);
            //this.addField_SFVec3d(ctx, 'center', 0, 0, 0);

            /**
             * The level of detail is switched depending upon whether the user is closer or farther than range length base units from the geospatial coordinate center.
             * @var {x3dom.fields.SFFloat} range
             * @range [0, inf]
             * @memberof x3dom.nodeTypes.GeoLOD
             * @initvalue 10
             * @field x3d
             * @instance
             */
            this.addField_SFFloat(ctx, 'range', 10);

            /**
             *
             * @var {x3dom.fields.SFString} referenceBindableDescription
             * @memberof x3dom.nodeTypes.GeoLOD
             * @initvalue []
             * @field x3dom
             * @instance
             */
            this.addField_SFString(ctx, 'referenceBindableDescription', []);

            /**
             * The geoOrigin field is used to specify a local coordinate frame for extended precision.
             * @var {x3dom.fields.SFNode} geoOrigin
             * @memberof x3dom.nodeTypes.GeoLOD
             * @initvalue x3dom.nodeTypes.X3DChildNode
             * @field x3d
             * @instance
             */
            this.addField_SFNode('geoOrigin', x3dom.nodeTypes.GeoOrigin);

            /**
             * The rootUrl and rootNode fields provide two different ways to specify the geometry of the root tile. The rootUrl field lets you specify a URL for a file that contains the geometry.
             * @var {x3dom.fields.SFNode} rootNode
             * @memberof x3dom.nodeTypes.GeoLOD
             * @initvalue x3dom.nodeTypes.X3DChildNode
             * @field x3d
             * @instance
             */
            //this.addField_SFNode('rootNode', x3dom.nodeTypes.X3DChildNode);
            //MFNode per spec. but this makes the custom SFNodes below impossible
            this.addField_MFNode('rootNode', x3dom.nodeTypes.X3DChildNode);

            // need to add field from x3dlodnode
            
             /**
             * The center field is a translation offset in the local coordinate system that specifies the centre of the LOD node for distance calculations. The level of detail is switched depending upon whether the user is closer or farther than range length base units from the geospatial coordinate center. The center field should be specified as described in 25.2.4 Specifying geospatial coordinates.
             * @var {x3dom.fields.SFVec3f} center
             * @memberof x3dom.nodeTypes.X3DLODNode
             * @initvalue 0,0,0
             * @field x3d
             * @instance
            */
            this.addField_SFVec3f(ctx, "center", 0, 0, 0);

            /**
             *
             * @var {x3dom.fields.SFNode} privateChild1Node
             * @memberof x3dom.nodeTypes.GeoLOD
             * @initvalue x3dom.nodeTypes.X3DChildNode
             * @field x3dom
             * @instance
             */
            //this.addField_SFNode('privateChild1Node', x3dom.nodeTypes.X3DChildNode);

            /**
             *
             * @var {x3dom.fields.SFNode} privateChild2Node
             * @memberof x3dom.nodeTypes.GeoLOD
             * @initvalue x3dom.nodeTypes.X3DChildNode
             * @field x3dom
             * @instance
             */
            //this.addField_SFNode('privateChild2Node', x3dom.nodeTypes.X3DChildNode);

            /**
             *
             * @var {x3dom.fields.SFNode} privateChild3Node
             * @memberof x3dom.nodeTypes.GeoLOD
             * @initvalue x3dom.nodeTypes.X3DChildNode
             * @field x3dom
             * @instance
             */
            //this.addField_SFNode('privateChild3Node', x3dom.nodeTypes.X3DChildNode);

            /**
             *
             * @var {x3dom.fields.SFNode} privateChild4Node
             * @memberof x3dom.nodeTypes.GeoLOD
             * @initvalue x3dom.nodeTypes.X3DChildNode
             * @field x3dom
             * @instance
             */
            //this.addField_SFNode('privateChild4Node', x3dom.nodeTypes.X3DChildNode);

            /**
             *
             * @var {x3dom.fields.SFNode} privateRootNode
             * @memberof x3dom.nodeTypes.GeoLOD
             * @initvalue x3dom.nodeTypes.X3DChildNode
             * @field x3dom
             * @instance
             */
            //this.addField_SFNode('privateRootNode', x3dom.nodeTypes.X3DChildNode);
            
            this._eye = new x3dom.fields.SFVec3f(0, 0, 0); //from X3DLODNode
            
            this._x3dcenter = new x3dom.fields.SFVec3f(0, 0, 0); 
            
            /**
             check range
             if closer do childurls
                make childnodes
                visit all
             else visit root node
             
             Shape nodes add themselves to the current drawablecollection
             collectDrawableCollection is called for every frame
             */
              this._lastRangePos = -1;
              this._child1added = false;
              this._child2added = false;
              this._child3added = false;
              this._child4added = false;
              this._rootNodeLoaded = true;
              this._childUrlNodesLoaded = false;
              //figure out how to copy
              this._x3dcenter = new x3dom.fields.SFVec3f(0, 0, 0); 
              
              //this._rootNode = new x3dom.fields.MFNode(x3dom.nodeTypes.X3DChildNode);
              //this._rootNode = this._cf.rootNode;
              //this._rootNodeOrig = this._rootNode;
              this._childUrlNodes = new x3dom.fields.MFNode(x3dom.nodeTypes.X3DChildNode);
              
        },
        {
             collectDrawableObjects: function(transform, drawableCollection, singlePath, invalidateCache, planeMask, clipPlanes)
                {
                if (singlePath && (this._parentNodes.length > 1))
                    singlePath = false;
                if (singlePath && (invalidateCache = invalidateCache || this.cacheInvalid()))
                    this.invalidateCache();
                planeMask = drawableCollection.cull(transform, this.graphState(), singlePath, planeMask);
                if (planeMask <= 0) {
                    return;
                    }
                // at the moment, no caching here as children may change every frame
                singlePath = false;
                this.visitChildren(transform, drawableCollection, singlePath, invalidateCache, planeMask, clipPlanes);
                //out.LODs.push( [transform, this] );
                },
                
            visitChildren: function(transform, drawableCollection, singlePath, invalidateCache, planeMask, clipPlanes)
                {
                //child node is root node
                //check if rooturl
                //and load and add child node as root node
                //
                var i=0, n=0, cnodes, cnode;
                var mat_view = drawableCollection.viewMatrix;
                var center = new x3dom.fields.SFVec3f(0, 0, 0); // eye
                center = mat_view.inverse().multMatrixPnt(center);
                //transform eye point to the LOD node's local coordinate system
                this._eye = transform.inverse().multMatrixPnt(center);
                //replace with this._x3dcenter
                var len = this._x3dcenter.subtract(this._eye).length();
                /*
                //calculate range check for viewer distance d (with range in local coordinates)
                //N+1 children nodes for N range values (L0, if d < R0, ... Ln-1, if d >= Rn-1)
                while (i < this._vf.range.length && len > this._vf.range[i]) {
                    i++;
                }
                
                if (i && i >= n) {
                    i = n - 1;
                }
                this._lastRangePos = i;
                */
                if (len > this._vf.range) {
                    
                    if(!this._rootNodeLoaded) {
                        //this._rootNode = this._cf.rootNode;
                        //var that = this;
                        //this._rootNode not a copy ...
                        //n = that._rootNode.nodes.length;
                        //for (i=0; i<n; i++) {
                            //this.addChild(that._rootNode.nodes[i]);
                        //}
                        //this.invalidateVolume();
                        //this._cf.rootNode = this._rootNode;
                        this._rootNodeLoaded = true;
                    }
                    
                    /*
                    if (this._childUrlNodesLoaded) {
                        this._childUrlNodesLoaded = false;
                        this._childUrlNodes = null;
                    }
                    */
                    //rootNode already has rootUrl node if empty, see nodeChanged()
                    cnodes = this._cf.rootNode.nodes;
                }
                
                else {
                    
                    if (!this._child1added) {
                        this._child1added = true;
                        this.addInlineChild(this._vf.child1Url);
                    }
                    if (!this._child2added) {
                        this._child2added = true;
                        this.addInlineChild(this._vf.child2Url);
                    }
                    if (!this._child3added) {
                        this._child3added = true;
                        this.addInlineChild(this._vf.child3Url);
                    }
                    if (!this._child4added) {
                        this._child4added = true;
                        this.addInlineChild(this._vf.child4Url);
                    }
                    
                    if (this._rootNodeLoaded) {
                        this._rootNodeLoaded = false;
                        //this._rootNode = null;
                        //var that = this;
                        //n = that._cf.rootNode.nodes.length;
                        //for (i=0; i<n; i++) {
                            //this.removeChild(that._cf.rootNode.nodes[i]);
                        //}
                        //this.invalidateVolume();
                    }
                    
                    cnodes = this._childUrlNodes.nodes;
                    
                }
                
                n = cnodes.length;
                                
                //probably not necessary to check if there are any child nodes
                if (n && cnodes)
                    {
                        var childTransform = this.transformMatrix(transform);
                        
                        /* not in original LOD
                        
                        if (x3dom.nodeTypes.ClipPlane.count > 0) {
                            var localClipPlanes = [];
                            for (var j = 0; j < n; j++) {
                                if ( (cnode = this._childNodes[j]) ) {
                                    if (x3dom.isa(cnode, x3dom.nodeTypes.ClipPlane) && cnode._vf.on && cnode._vf.enabled) {
                                        localClipPlanes.push({plane: cnode, trafo: childTransform});
                                    }
                                }
                            }
                            clipPlanes = localClipPlanes.concat(clipPlanes);
                        }
                        */
                        
                        for (i=0; i<n; i++) {
                            if ( (cnode = cnodes[i]) ) {
                            cnode.collectDrawableObjects(childTransform, drawableCollection, singlePath, invalidateCache, planeMask, clipPlanes);
                            }
                        }
                    
                    //cnode.collectDrawableObjects(childTransform, drawableCollection, singlePath, invalidateCache, planeMask, clipPlanes);
                    }
                },
            
            addInlineChild: function(url)
            {
                //check if url empty
                var inline = this.newInlineNode(url);
                this._childUrlNodes.addLink(inline);
            },
            
            newInlineNode: function(url)
            {
                var inline = new x3dom.nodeTypes.Inline();
                inline._vf.url = url;
                inline._nameSpace = this._nameSpace; // pass on nameSpace
                //inline.initDone = false; // these need to be initialized?
                //inline.count = 0;
                //inline.numRetries = x3dom.nodeTypes.Inline.MaximumRetries;
                x3dom.debug.logInfo("add url: " + url);
                inline.nodeChanged(); //is necessary and loads the inline scene
                return inline;
            },
            
            getVolume: function()
            {
                var vol = this._graph.volume;
                if (!this.volumeValid() && this._vf.render)
                {
                    var child, childVol;
                    //TODO RangePos, eg. optimize
                    /*
                    if (this._lastRangePos >= 0) {
                        child = this._childNodes[this._lastRangePos];
                        childVol = (child && child._vf.render === true) ? child.getVolume() : null;
                        if (childVol && childVol.isValid())
                            vol.extendBounds(childVol.min, childVol.max);
                    }
                
                    else { // first time we're here
                    */
                        for (var i=0, n=this._childNodes.length; i<n; i++)
                        {
                        if (!(child = this._childNodes[i]) || child._vf.render !== true)
                            continue;
                        childVol = child.getVolume();
                        if (childVol && childVol.isValid())
                            vol.extendBounds(childVol.min, childVol.max);
                        }
                    //}
                }
                return vol;
            },
            
            nodeChanged: function() {
                //this._needReRender = true;
                //do geo-conversion
                
                var coords = new x3dom.fields.MFVec3f();
                coords.push(this._vf.center);
                this._x3dcenter = x3dom.nodeTypes.GeoCoordinate.prototype.GEOtoX3D(this._vf.geoSystem,this._cf.geoOrigin, coords)[0];
                
                //append rootnode field with inline rooturl if empty
                if (!this._cf.rootNode.nodes.length) {
                    var inline = this.newInlineNode(this._vf.rootUrl);
                    this._cf.rootNode.addLink(inline);
                }
                
                this.invalidateVolume();
                //this.invalidateCache();
            },
            
            fieldChanged: function(fieldName) {
                //this._needReRender = true;
                if (fieldName == "render" || fieldName == "range") {
                    this.invalidateVolume();
                    //this.invalidateCache();
                }
                if (fieldname == "center") {                
                    var coords = new x3dom.fields.MFVec3f();
                    coords.push(this._vf.center);
                    this._x3dcenter = x3dom.nodeTypes.GeoCoordinate.prototype.GEOtoX3D(this._vf.geoSystem,this._cf.geoOrigin, coords)[0];
                
                    this.invalidateVolume();
                    //this.invalidateCache();
                }
            }
        }
    )
);
