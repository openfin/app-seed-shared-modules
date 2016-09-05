//Enums are just constants
import Enums from '../Enums.js';

let OpenfinHeaderInterapp = {
    subscribeWithWildcard: function(Event, callBack){
        console.log("OpenfinHeaderInterapp called with Event: ",Event);
        try{
            fin.desktop.main(()=>{
                fin.desktop.InterApplicationBus.subscribe("*",
                    Event,
                    callBack,
                    ()=>{console.log("Subscribed")},
                    ()=>{console.log("Not Subscribed")}
                )
            });
        }catch(err){
            //---
        }

    }
};

export default Object.create(OpenfinHeaderInterapp);
