
(function() {
    function TestGeneratedButtons(){
        let defaults = {
            size: 5,
            generate_class: 'generated-btn'
        };
        const site = new Common();
        this.options = site.attachValidParams(defaults, arguments[0]);
        let _this = this;
        
        this.getGeneratedButtons = function(){
            this.generatedButtons = site.getElements('.'+this.options.generate_class);
        }

        this.testGenerateButtons = function (){
            this.getGeneratedButtons();
            if(this.generatedButtons.length > 0){
                console.log("Pass: Generate buttons added the buttons in the document");
                if(this.generatedButtons.length == this.options.size)
                    console.log("Pass: Generate buttons added expected number("+this.generatedButtons.length+") of buttons");
                else
                    console.log("Fail: Generate buttons addeed unexpected number("+this.generatedButtons.length+") of buttons");
                if(this.generatedButtons.length >= this.options.size)
                    console.log("Pass: Generate buttons cant add more than "+this.generatedButtons.length+" buttons");
                else
                    console.log("Fail: Generate buttons addeed more than "+this.options.size+" buttons");
                if(this.generatedButtons[0].click){
                    console.log("Pass: Generate buttons added click events for the buttons");
                    console.log("Pass: Calling the first button click evet, will log its index bellow");
                    this.generatedButtons[0].click();
                }else{
                    console.log("Fail: Generate buttons failed to add click events for the buttons");
                }
            }else{
                console.log("Fail: Buttons not yet generated or added to the document")
            }
        }
        this.attachTestGenerateButtons = function(){
            this.options.target.addEventListener("click", function(evt) {
                _this.testGenerateButtons();
            });
        }
        this.attachTestGenerateButtons();
    }

    const test_generate_buttons = new TestGeneratedButtons({
        element : "test_generate_buttons",
    });

}());