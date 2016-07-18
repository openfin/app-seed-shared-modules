import OpenfinHeaderInterapp from '../openfin/openfin-header-interapp.js'
import Enums from '../Enums.js';

let Header = {
    config:{},
    render:function(target = null){
        this.config.target = target;

        console.log("Render called ", this.getText())
        if ( !target && !this.getTarget() ){
            console.log("No target ")
         return;
        };
        let template = `<div class="header-vanilla">
            <input id="header-input" class="no-drag header-textbox"  type="text" value=${this.getText()} />
            <div class="header-text">${this.getText()}</div>
            <div class="header-sub-text">${this.getSubText()}</div>
        </div>`
        this.getTarget().innerHTML = template;
        let _input = document.querySelector('#header-input');

        _input.addEventListener('input', (e)=>{
            fin.desktop.InterApplicationBus.publish(Enums.COMMON_HEADER_CHANGED, {text:e.target.value})
        });

        _input.focus();
        var length = _input.value.length;
        _input.setSelectionRange(length, length);

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
        text: "Default text",
        subText:"This is the subtext"
    };

    //If there are any config objects -
    let _combinedConfig = Object.assign(_config, config);
    let h = Object.create(Header);
    h.config = _combinedConfig;

    try{fin.desktop.main(()=>{
        console.log("OpenFin is there ");

        let _callback = (message, uuid)=>{
            console.log(uuid, " - THE CALLBACK - ", message);
            console.log(" - THE CALLBACK - h", h);

            h.setText(message.text);
        };

        OpenfinHeaderInterapp.subscribeWithWildcard(Enums.COMMON_HEADER_CHANGED, _callback);


    })}catch(e){
        console.log("OpenFin is NOT there ")
    };

    return h;
} }
