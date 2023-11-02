const vehicles = [
    { type: 'cycle', weightCapacity: 1},
    { type: 'bike', weightCapacity: 5 },
    { type: 'auto', weightCapacity: 20 },
    { type: 'ace', weightCapacity: 50 },
    { type: 'tempo', weightCapacity: 100 }
  ];

  const parcels = [
    { location: 'velachery', weight: 30 },
    { location: 'madipakkam', weight: 17 },
    { location: 'sholinganallur', weight: 240 }
  ];

function toFindMinimumNumberOfVehiclesRequired(vehicles,parcels){
    let finalVehicalsRequired = [];
    /***    sorting the vehicles object in descending order  ***/
    vehicles.sort((a,b) => b.weightCapacity - a.weightCapacity );

    parcels.map ( parcel => {
        let result = {};
        vehicles.map ( vehicle => {

            if ( parcel.weight >= vehicle.weightCapacity ){
                if ( result[vehicle.type] ){
                    result[vehicle.type] = result[vehicle.type]+1;
                } else {
                    result[vehicle.type] = 1;
                }
                parcel.weight -= vehicle.weightCapacity;
    
                while ( parcel.weight >= vehicle.weightCapacity ){
                    result[vehicle.type] = result[vehicle.type]+1;
                    parcel.weight -= vehicle.weightCapacity;
                }
            }
        })
        finalVehicalsRequired.push(result);
    })
    return finalVehicalsRequired;

}
const answer = toFindMinimumNumberOfVehiclesRequired(vehicles,parcels);
console.log(answer);








