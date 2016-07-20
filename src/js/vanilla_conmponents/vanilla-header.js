import OpenfinHeaderInterapp from '../openfin/openfin-header-interapp.js'
import Enums from '../Enums.js';

let Header = {
    config:{},
    render:function(target = null){
        if ( !target && !this.getTarget() ){
            console.log("No target ")
         return;
        };

        this.config.target = target;


        let template = `<div class="header-vanilla">
            <div class="header-text">${this.getText()}</div>
            <div class="header-sub-text">${this.getSubText()}</div>
            <p>Input header text here:</p>
            <input id="header-input" class="no-drag header-textbox form-control"  type="text" value=${'"'+this.getText()+'"'} />

        </div>`
        this.getTarget().innerHTML = template;
        let _input = document.querySelector('#header-input');

        if(_input) {
            _input.addEventListener('input', (e)=>{
                try{
                    fin.desktop.InterApplicationBus.publish(Enums.COMMON_HEADER_CHANGED, {text:e.target.value})
                }catch(err){
                    //--
                }
            });

            _input.focus();
            var length = _input.value.length;
            _input.setSelectionRange(length, length);
        }

    },
    getTarget:function(){
        return this.config.target || null;
    },
    getText:function(){
        return this.config.text;
    },
    setText:function(value){
        if(typeof value !== 'string'){
            throw new Error('setText requires a String');
        }
        this.config.text = value;
        this.render(this.getTarget());
    },
    setSubText:function(value){
        if(typeof value !== 'string'){
            throw new Error('setSubText requires a String');
        }
        this.config.subText = value;
        this.render();
    },
    getSubText:function(){
        return this.config.subText;
    }
};

export default {create:(config)=>{
    let _config = {
        target: null,
        text: "Default headline text",
        subText:"Default subtext"
    };

    //If there are any config objects -
    let _combinedConfig = Object.assign(_config, config);
    let h = Object.create(Header);
    h.config = _combinedConfig;

    try{fin.desktop.main(()=>{
        console.log("OpenFin is there ");

        let _callback = (message, uuid)=>{
            console.log(uuid, " - THE CALLBACK - ", message);
            //if(message.text){
                h.setText(message.text)
            //};
        };

        OpenfinHeaderInterapp.subscribeWithWildcard(Enums.COMMON_HEADER_CHANGED, _callback);


    })}catch(e){
        console.log("OpenFin is NOT available.")
    };

    return h;
} }
