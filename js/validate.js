(function() {
     function ValidateAmount(){
        let defaults = {};
        const site = new Common();
        this.options = site.attachValidParams(defaults, arguments[0]);
        let _this = this; 
        this.attachValidateEvents = function(){
            this.options.target.addEventListener("keypress", function(evt) {
                evt = evt || window.event;
                let charCode = evt.which || evt.keyCode;
                let charStr = String.fromCharCode(charCode);
                let regex = /[\d\.]/g;
                if (!regex.exec(charStr)) {
                    evt.preventDefault();
                    return false;
                }else if(_this.options.target.value.indexOf(".") != -1 && charStr =="."){
                    evt.preventDefault();
                    return false;
                }else if(_this.options.target.value.length ==0 && charStr =="."){
                    _this.options.target.value = 0
                }
            });
            this.options.target.addEventListener("blur", function(evt) {
                _this.options.target.value = _this.options.target.value.charAt(_this.options.target.value.length-1) == "." ? _this.options.target.value +"0": _this.options.target.value;
            });
        }
        this.attachValidateEvents();
    }
    
    const validate = new ValidateAmount({
        element : "donate_amount"
    });
}());