AFRAME.registerComponent("game-play",{
    schema: {
        element: {type: "string",default:"#ring1"}
    },
    update: function(){
        this.collision(this.data.element)
    },
    collision: function(element){
        const query = document.querySelector(element)
        query.addEventListener("collide", (e) =>{
            if(query.includes("#ring")){
                console.log(query + "has collided !!")
            }
            else if(query.includes("#hurdle")){
                console.log(query + "has collided !!")
            }
        })
    }
})