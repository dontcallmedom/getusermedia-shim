(function() {
    if (!navigator.getUserMedia) {
        if (navigator.mozGetUserMedia) {
            navigator.getUserMedia = navigator.mozGetUserMedia;
        } else if (navigator.webkitGetUserMedia) {
            navigator.getUserMedia = navigator.webkitGetUserMedia;
        }
    }
    if (!HTMLMediaElement.prototype.srcObject) {
        if (HTMLMediaElement.prototype.hasOwnProperty("mozSrcObject")) {
            Object.defineProperty(HTMLMediaElement.prototype, "srcObject",
                                  {get: function() {return this.mozSrcObject;},
                                   set: function(v) {this.mozSrcObject = v;}
                                  });
        } else if (webkitURL && webkitURL.createObjectURL) {
            Object.defineProperty(HTMLMediaElement.prototype, "srcObject",
                                  {get: function() {return this._srcObject;},
                                   set: function(v) {this._srcObject = v;
                                                     this.src = webkitURL.createObjectURL(v);}
                                  });
        }
    }
})();