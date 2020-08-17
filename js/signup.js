(function() {
  function BindInputErrors(){
      const site = new Common();
      this.isIE = site.checkIE()
      let _this = this;
      this.attacheInputErrors = function(){
          const inputs = site.getElements('input');
          for (let i=0; i<inputs.length; i++) {
            inputs[i].addEventListener('invalid', function(event){
                this.classList.add('error');
            });
            inputs[i].addEventListener('input', function(event){
              this.classList.remove('error');
              this.checkValidity();
              if(_this.isIE){
                if(this.value.length){
                  this.nextElementSibling.classList.add('show_lbl');
                  this.nextElementSibling.classList.remove('hide_lbl');
                }else{
                  this.nextElementSibling.classList.add('hide_lbl');
                  this.nextElementSibling.classList.remove('show_lbl');
                }
              }
            });
          }
      }
      this.attacheInputErrors();
  }

  const validate_inputs = new BindInputErrors();

}());