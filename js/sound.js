function Sound(source,volume,loop) {
    this.source=source;
    this.volume=volume;
    this.loop=loop;
    var son;
    this.son=son;
    this.finish=false;
    this.stop=function() {
        document.body.removeChild(this.son);
    }
    this.start=function() {
        if(this.finish)return false;
        this.son=document.createElement("embed");
        this.son.setAttribute("src",this.source);
        this.son.setAttribute("hidden","true");
        this.son.setAttribute("volume",this.volume);
        this.son.setAttribute("autostart","true");
        this.son.setAttribute("loop",this.loop);
        document.body.appendChild(this.son);
    }
    this.remove=function() {
        document.body.removeChild(this.son);
        this.finish=true;
    }
    this.init=function(volume,loop) {
        this.finish=false;
        this.volume=volume;
        this.loop=loop;
    }
}

var sounds = {
    //ai3 banido
  "4":"delicia0",
  "8":"ai4",
  "16":"delicia1",
  "32":"ai1",
  "64":"delicia4",
  "128":"ai5",
  "256":"ai4",
  "512":"delicia2",
  "1024":"ai0",
  "2048":"delicia3",
  "default":"ai2"
};