

const hotSpota =[ function( model ){


        viewer.container.addEventListener( 'click', e => {
            //通过鼠标拾取模型对象
            var object = viewer.picker.intersectObject(e)
            console.log(object.object.name)
            var object1 = object.object.name
            var layer_1 = viewer.hotSpotManager.createLayer(), hotspots = []
            if (object1 == "sanjialiang001") {
                //将屏幕坐标转换为三维坐标
                var p = viewer.picker.screenToVector(e)
                if (p) {
                    //viewer.hotSpotManager.add会返回一个热点对象
                    let hotspot = viewer.hotSpotManager.add({
                        objectId: model.getObjectByName("sanjialiang001").id,
                        position: p,
                        cameraView: viewer.controls.getView(),
                        element: '三架梁',
                        layer: layer_1   //传入图层 layer_1 后，该热点创建完成后会被放入到图层 layer_1
                    })
                    hotspots.push(hotspot)
                    viewer.container.onclick = null
                    viewer.hotSpotManager.onlyShow(layer_1)
                    viewer.transform.setTarget( model.getObjectByName("sanjialiang001") )
                } else {
                    Qmsg.info("未选中模型")
                }
            }
        })

        viewer.container.addEventListener( 'click', e => {
            //通过鼠标拾取模型对象
            var object = viewer.picker.intersectObject(e)
            console.log(object.object.name)
            var object2 = object.object.name
            var layer_2 = viewer.hotSpotManager.createLayer(), hotspots = []
            if (object2 == "wujialiang001") {
                var p = viewer.picker.screenToVector(e)
                if( p ){
                    //viewer.hotSpotManager.add会返回一个热点对象
                    let hotspot = viewer.hotSpotManager.add({
                        objectId: model.getObjectByName("wujialiang001").id,
                        position: p,
                        cameraView: viewer.controls.getView(),
                        element: '五架梁',
                        layer: layer_2   //传入图层 layer_1 后，该热点创建完成后会被放入到图层 layer_1
                    })
                    hotspots.push( hotspot )
                    viewer.container.onclick = null
                    viewer.hotSpotManager.onlyShow( layer_2 )
                }else{
                    Qmsg.info(" ")
                }

            }


        })

        viewer.container.addEventListener( 'click', e => {
            //通过鼠标拾取模型对象
            var object = viewer.picker.intersectObject(e)
            console.log(object.object.name)
            var object3 = object.object.name
            var layer_3 = viewer.hotSpotManager.createLayer(), hotspots = []
            if (object3 == "shouwen") {
                var p = viewer.picker.screenToVector(e)
                if( p ){
                    viewer.hotSpotManager.add //会返回一个热点对象
                    let hotspot = viewer.hotSpotManager.add({
                        objectId: model.getObjectByName("shouwen").id,
                        position: p,
                        cameraView: viewer.controls.getView(),
                        element: '兽吻',
                        layer: layer_3   //传入图层 layer_1 后，该热点创建完成后会被放入到图层 layer_1
                    })
                    //hotspots.push( hotspot )
                    //viewer.container.onclick = null
                    viewer.hotSpotManager.onlyShow( layer_3 )
                }else{
                    Qmsg.info(" ")
                }

            }


        })

        viewer.container.addEventListener( 'click', e => {
            //通过鼠标拾取模型对象
            var object = viewer.picker.intersectObject(e)
            console.log(object.object.name)
            var object1 = object.object.name
            var layer_1 = viewer.hotSpotManager.createLayer(), hotspots = []
            if (object1 == "151chuiji001") {
                var p = viewer.picker.screenToVector(e)
                if( p ){
                    //viewer.hotSpotManager.add //会返回一个热点对象
                    let hotspot = viewer.hotSpotManager.add({
                        objectId: model.getObjectByName("151chuiji001").id,
                        position: p,
                        cameraView: viewer.controls.getView(),
                        element: '垂脊',
                        layer: layer_1   //传入图层 layer_1 后，该热点创建完成后会被放入到图层 layer_1
                    })
                    hotspots.push( hotspot )
                    viewer.container.onclick = null
                    viewer.hotSpotManager.onlyShow( layer_1 )
                }else{
                    Qmsg.info(" ")
                }

            }


        })

        viewer.container.addEventListener( 'click', e => {
            //通过鼠标拾取模型对象
            var object = viewer.picker.intersectObject(e)
            console.log(object.object.name)
            var object3 = object.object.name
            var layer_3 = viewer.hotSpotManager.createLayer(), hotspots = []
            if (object3 == "81baotouqian") {
                var p = viewer.picker.screenToVector(e)
                if( p ){
                    viewer.hotSpotManager.add //会返回一个热点对象
                    let hotspot = viewer.hotSpotManager.add({
                        objectId: model.getObjectByName("81baotouqian").id,
                        position: p,
                        cameraView: viewer.controls.getView(),
                        element: '抱头梁',
                        layer: layer_3   //传入图层 layer_1 后，该热点创建完成后会被放入到图层 layer_1
                    })
                    //hotspots.push( hotspot )
                    //viewer.container.onclick = null
                    viewer.hotSpotManager.onlyShow( layer_3 )
                }else{
                    Qmsg.info(" ")
                }

            }


        })

        viewer.container.addEventListener( 'click', e => {
            //通过鼠标拾取模型对象
            var object = viewer.picker.intersectObject(e)
            console.log(object.object.name)
            var object3 = object.object.name
            var layer_3 = viewer.hotSpotManager.createLayer(), hotspots = []
            if (object3 == "yanliangfang001") {
                var p = viewer.picker.screenToVector(e)
                if( p ){
                    viewer.hotSpotManager.add //会返回一个热点对象
                    let hotspot = viewer.hotSpotManager.add({
                        objectId: model.getObjectByName("yanliangfang001").id,
                        position: p,
                        cameraView: viewer.controls.getView(),
                        element: '檐梁枋',
                        layer: layer_3   //传入图层 layer_1 后，该热点创建完成后会被放入到图层 layer_1
                    })
                    //hotspots.push( hotspot )
                    //viewer.container.onclick = null
                    viewer.hotSpotManager.onlyShow( layer_3 )
                }else{
                    Qmsg.info(" ")
                }

            }


        })

        viewer.container.addEventListener( 'click', e => {
            //通过鼠标拾取模型对象
            var object = viewer.picker.intersectObject(e)
            console.log(object.object.name)
            var object3 = object.object.name
            var layer_3 = viewer.hotSpotManager.createLayer(), hotspots = []
            if (object3 == "chuanchafang") {
                var p = viewer.picker.screenToVector(e)
                if( p ){
                    viewer.hotSpotManager.add //会返回一个热点对象
                    let hotspot = viewer.hotSpotManager.add({
                        objectId: model.getObjectByName("chuanchafang").id,
                        position: p,
                        cameraView: viewer.controls.getView(),
                        element: '穿插枋',
                        layer: layer_3   //传入图层 layer_1 后，该热点创建完成后会被放入到图层 layer_1
                    })
                    //hotspots.push( hotspot )
                    //viewer.container.onclick = null
                    viewer.hotSpotManager.onlyShow( layer_3 )
                }else{
                    Qmsg.info(" ")
                }

            }


        })

        viewer.container.addEventListener( 'click', e => {
            //通过鼠标拾取模型对象
            var object = viewer.picker.intersectObject(e)
            console.log(object.object.name)
            var object3 = object.object.name
            var layer_3 = viewer.hotSpotManager.createLayer(), hotspots = []
            if (object3 == "SQD_wa02_abai071") {
                var p = viewer.picker.screenToVector(e)
                if( p ){
                    viewer.hotSpotManager.add //会返回一个热点对象
                    let hotspot = viewer.hotSpotManager.add({
                        objectId: model.getObjectByName("SQD_wa02_abai071").id,
                        position: p,
                        cameraView: viewer.controls.getView(),
                        element: '筒板瓦',
                        layer: layer_3   //传入图层 layer_1 后，该热点创建完成后会被放入到图层 layer_1
                    })
                    //hotspots.push( hotspot )
                    //viewer.container.onclick = null
                    viewer.hotSpotManager.onlyShow( layer_3 )
                }else{
                    Qmsg.info(" ")
                }

            }


        })

}
]

