// Given arrival and departure times of all trains that reach a railway station.
//  Find the minimum number of platforms required for the railway station so that no train is kept waiting. 
// Consider that all the trains arrive on the same day and leave on the same day.
// Arrival and departure time can never be the same for a train but we can have
// the arrival time of one train equal to the departure time of the other. 
// At any given instance of time, the same platform can not be used for both departures of a train
// and the arrival of another train. 
// In such cases, we need different platforms.



let timings= [[1,5],[4,9],[3,7],[2,6]]

timings.sort((a,b)=>a[0]-b[0])


let arrival = []
let departure = []

for(let i = 0; i < timings.length; i++)
{
   let [a,b] = timings[i]
   arrival.push(a)
   departure.push(b)
}


function trainTimings( arrival, departure)
{
    let count = 1;
    let minPlatforms = 1;

    for (let i = 0; i < arrival.length; i++) {
        count = 1;

        for (let j = i + 1; j < arrival.length; j++) {

            if ((arrival[i] >= arrival[j] && arrival[i] <= departure[j]) ||
            (arrival[j] >= arrival[i] && arrival[j] <= departure[i]))

            {
                count++;
            }       
        }
        minPlatforms = Math.max(minPlatforms, count);
    }
 
    console.log(minPlatforms);
}
trainTimings(arrival,departure);