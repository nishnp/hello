
const Transportation = {


    // Small cars
    'small-diesel-car' : 142,
    'small-petrol-car' : 154,
    'small-plugin-hybrid-car' : 73,
    'small-electric-car' : 50,

    // Medium cars
    'medium-diesel-car' : 171,
    'medium-petrol-car' : 192,
    'medium-plugin-hybrid-car' : 110,
    'medium-electric-car' : 58,

    // Large cars
    'large-diesel-car' : 209,
    'large-petrol-car' : 282,
    'large-plugin-hybrid-car' : 126,
    'large-electric-car' : 73,

    // Other vehicales

    'bus' : 27,
    'train' : 6
}

function getDistance(distance,units){
    var final_distance;
    if(units == 'm')
    {
        return final_distance = distance /1000
    }
    else
        return distance
}

function getCo2inKgs(transmethod){
    let final_co2;
    final_co2 = Transportation[transmethod]/1000;

    return final_co2;

}

function checkValidations(transmethod,distance,unitofdistance,output){
    let proceedFlag = false;

    let units_pos = ["km", "m"]
    let units_pos_caps = ["KM", "M"]
    let output_po = ["kg", "g"]
    let output_po_caps = ["KG", "G"]
    console.log("unitofdistance", unitofdistance)

    try{
        if(Transportation[transmethod] == undefined)
            throw "Transportation method should be valid"
        else if(distance == 0)
            throw "Distance could not be 0"
        else if(units_pos_caps.includes(unitofdistance))
            throw " unit of distance should be small letters"
        else if(!units_pos.includes(unitofdistance))
            throw "invalid unit of distance"
        else if(output_po_caps.includes(output))
            throw " Output should be small letters"
        else if(!output_po.includes(output))
            throw "Invalid output format"
        else
            proceedFlag = true
    }
    catch(err) {
        console.log(err);
    }

    return proceedFlag

}

function finalOutput(finalvalue,unit){
    console.log("Your trip caused "+finalvalue+unit+" of CO2-equivalent.")
}
function main(trans_method,distance,units = 'km', output = 'kg') {

    if(checkValidations(trans_method,distance,units,output)){

        let finalDistance = getDistance(distance,units)

        let co2Result =  finalDistance * getCo2inKgs(trans_method)

        if(output == 'g')
            return finalOutput((co2Result * 1000).toFixed(1),output)
        else
            return finalOutput(co2Result.toFixed(1),output);

    }
    else
        return message = "sw"
}


module.exports = { main,checkValidations };


