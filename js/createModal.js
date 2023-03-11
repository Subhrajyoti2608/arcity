AFRAME.registerComponent("arcity",{
    init: async function(){
        var models = await this.getModels();

        var barcodes = Object.keys(models)

        barcodes.map((barcode)=>{
            var element = models[barcode]

            this.createModals(element)
        })
    },

    getModels: async function(){
       return fetch("./js/model.json").then((response)=>{
        response.json()
       }).then((data)=>{
        data
       })
    },

    createModals: async function(element){

        var modalName = element.model_name
        var barCodeValue = element.barcode_value
        var modalUrl = element.model_url
        var position = element.position
        var rotation = element.rotation
        var scale = element.scale

        var scene = document.querySelector("a-scene")

        var modal = document.createElement("a-entity")

        modal.setAttribute("name", modalName)
        modal.setAttribute("position", position)
        modal.setAttribute("rotation", rotation)
        modal.setAttribute("scale", scale)
        modal.setAttribute("id",`modal-${barCodeValue}`)
        modal.setAttribute("value", barCodeValue)

        scene.appendChild(modal)
    }
})