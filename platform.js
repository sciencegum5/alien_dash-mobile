function platform() {
    this.height = 100;
    this.width = 100;
    this.x = w/2;
    this.y = Math.floor((Math.random() * h/1.7 ) +h/10);
    this.hit = 0;
    this.show = function () {
         imageMode(CORNER);
        image(sat, this.x, this.y, this.width, this.height);

    }
    }