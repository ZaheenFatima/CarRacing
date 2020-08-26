class Form{
     constructor(){
        this.title = createElement('h2');
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement('h3');
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.index.hide();
        this.title.hide();
    }
    display(){
      
        this.title.html("Car racing game");
        this.title.position(displayWidth/2 - 50, 0);

       this.input.position(displayWidth/2 - 50, displayHeight/4);

      this.button.position(displayWidth/2 + 20, displayHeight/3);

       this.button.mousePressed(()=>{
           this.input.hide();
           this.button.hide();

           player.name = this.input.value();
           playerCount+= 1;
           player.index = playerCount;
           player.update();
           player.updateCount(playerCount);
           
          this.greeting.html("Hello " + player.name);
          this.greeting.position(displayWidth/2 , displayHeight/4); 
        })
    }
}