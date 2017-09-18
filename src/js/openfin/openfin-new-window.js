// We need a unique name for each window - this function generates a random one.
var _generateRandomName = function(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 15; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};


export default function(){

    let _window_config = {
        alwaysOnTop: false,
        autoShow: true,
        cornerRounding: {
            width: 0,
            height: 0
        },
        defaultCentered:false,
        defaultHeight:300,
        defaultLeft: (Math.random() * 500),
        defaultTop:(Math.random() * 500),
        defaultWidth:400,
        frame:false,
        hideOnClose: false,
        icon:"http://default.ico",
        maxHeight: -1,
        maximizable: true,
        maxWidth: -1,
        minHeight: 0,
        minimizable: true,
        minWidth: 0,
        name:_generateRandomName(),
        opacity: 1.0,
        resizable: true,
        resizeRegion: {
            size: 2, //The size in pixels (Default: 2),
            bottomRightCorner: 4 //The size in pixels of an additional
                                 //square resizable region located at the
                                 //bottom right corner of a
                                 //frameless window. (Default: 4)
        },
        showTaskbarIcon: true,
        saveWindowState:true,
        /*taskbarIcon: The URL of an icon to be shown on the desktop. Support formats: Portable Network Graphic (PNG); Size: 256 x 256 Default: The parent application's applicationIcon */
        taskbarIcon:"http://default_icon.png",
        /* state: A string that sets the window to be "minimized", "maximized", or "normal" on creation. Default: "normal" */
        state:"normal",
        /* The URL of the window. Default: "about:blank" */
        url: "https://openfin.github.io/app-seed-shared-modules/build/ChildWindow.html"
    };

    var _this = this;

    return new Promise(function(resolve, reject){
        var _initCallback = function(){
            this.getNativeWindow().document.querySelector("#title-display").innerHTML ='</H2>'+_window_config.name+'</H2>';
            resolve(this);
        };
        var _onIntFail = function(){
            console.log("Initialisation failed.")
        };

        try{
            fin.desktop.main(function(){
                let _window = new fin.desktop.Window(_window_config,_initCallback,_onIntFail);
            })
        }catch(err){
            console.log("Error: ", err);
            reject(err)
        }
    });
};


