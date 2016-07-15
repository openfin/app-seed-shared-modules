let Header = {
    config:{},
    render:function(target = null){
        if (!target){
         return;
        };
        let template = `<div class="header-vanilla">
            <div class="header-text">${this.getText()}</div>
            <div class="header-sub-text">${this.getSubText()}</div>
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
        this.render();
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
        console.log("OpenFin is there ")

    })}catch(e){
        console.log("OpenFin is NOT there ")
    };



    return h;
} }
