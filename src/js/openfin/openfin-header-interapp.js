//Enums are just constants
import Enums from '../Enums.js';

let OpenfinHeaderInterapp = {
    subscribeWithWildcard: function(Event, callBack){
        console.log("OpenfinHeaderInterapp called with Event: ",Event);
        fin.desktop.main(()=>{
            fin.desktop.InterApplicationBus.subscribe("*",
                Event,
                callBack,
                ()=>{console.log("Subscribed")},
                ()=>{console.log("Not Subscribed")}
            )
        });
    }
};

export default Object.create(OpenfinHeaderInterapp);
