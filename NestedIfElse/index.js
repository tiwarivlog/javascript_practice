const vehicle1 = 'bike';
const vehicle2 = 'truck';

if(vehicle1==='bike' && vehicle2==='truck'){
    const bike1 = 'honda';
    const truck = 'TATA';

    // debugger
    if(bike1==='honda' && truck==='TATA'){
        console.log('bike has good mileage');
        console.log('truck has strong body');
        if (vehicle1==='bike'){
            console.log('vehicle1 should be always bike');
        } 
    }else if(bike1!=='honda' && truck!=='TATA'){
        console.log('bike has average mileage');
        console.log('truck has average body');
    }else if(bike1!=='honda' && truck ==='TATA'){
        console.log('bike has average mileage');
        console.log('truck has strong body');
    }else if(bike1==='honda' && truck !='TATA'){
        console.log('bike has good mileage');
        console.log('truck has weak body');
    }
    
}  

 
 else {
    console.log('please enter other name of vehicle');
}

