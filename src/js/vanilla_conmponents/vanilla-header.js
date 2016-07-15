

let Header = {
    config:{},
    render:function(target = null){
        if (!target){
         return;
        };
        let template = `<div class="header-vanilla">
            <h1>${this.getText()}</h1>
        </div>`
        this.config.target = target;
        this.config.target.innerHTML = template;
    },
    getText:function(){
        return this.config.text;
    },
    setText:function(value){
        if(typeof value !== 'string'){
            throw new Error('setText requires a String');
        }
        this.config.text = value;
    }
};

export default {create:(config)=>{
    let _config = {
        target: null,
        text: "Default text",
        subText:"This is the subtext"
    };
    let _combinedConfig = Object.assign(_config, config);
    let h = Object.create(Header);
    h.config = _combinedConfig;
    return h;
} }
