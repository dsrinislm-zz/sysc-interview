function Common(){
    this.getElement = function(e){
        return document.getElementById(e);
    }
    this.getElements = function(e){
        return document.querySelectorAll(e);
    }
    this.attachValidParams = function(defaults, args){
        // Create options by extending defaults with the passed in arugments
        let options;
        if (args && typeof args === "object") {
            options = this.extendDefaults(defaults, args);
        }
        if(!options.element)
            throw new Error('Validate field missing.');
        options.target = this.getElement(options.element);
        if(options.target == null)
            throw new Error('Element not found in the document.');
        return options;
    }
    this.extendDefaults = function(source, properties) {
        let property;
        for (property in properties) {
          if (properties.hasOwnProperty(property)) {
            source[property] = properties[property];
          }
        }
        return source;
    }
    this.checkIE = function(){
        return /MSIE \d|Trident.*rv:/.test(navigator.userAgent);
    }
}