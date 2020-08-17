(function() {
    function GenerateButtons(){
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
        this.generateButtons = function (){
            this.getGeneratedButtons();
            if(this.generatedButtons.length==0){
                for(let i=1;i<=this.options.size;i++){
                    let btn = document.createElement("BUTTON");
                    btn.className = "generated-btn btn std_button";
                    btn.name = btn.id = btn.innerHTML ="Button_"+i;
                    site.getElement(this.options.output).appendChild(btn);
                    site.getElement(btn.id).addEventListener('click', function(event){
                        console.log(this.name);
                    });
                }
            }
        }
        this.attachGenerateButtons = function(){
            this.options.target.addEventListener("click", function(evt) {
                _this.generateButtons();
            });
        }
        this.attachGenerateButtons();
    }
    
    const add_buttons = new GenerateButtons({
        element : "generate_buttons",
        output: "output"
    });

}());