var data = {
    'writer_id' : 'tale_id',
}

var totalNumberOfWriters = data.keys().count();
var totalNumberOfTales = data.vales().count();

data.sort(); //with respect to writers having least number of tales

data = {
    'writer_id' : ['tale_1'],
}

if(totalNumberOfWriters > 300){
    data.remove(totalNumberOfWriters-300) //from last
} 

totalNumberOfTales = data.vales().count();

//Getting the percentage of tales that are going to be published
var percentageOfTalesPublished = 300*100/totalNumberOfTales; //300 = 10*30 (30 days a month)

var filteredData = filterData(data);

function filterData(data){
    var sum = 0;
    
    for(key in data){
        var temp = data(key).length;
        temp = Math.ceil((percentageOfTalesPublished * temp) / 100)
        
        data(key).length = temp; //changing the number of tales to z % of tales submitted by the writer
        sum += data(key).length;
    }
    
    if(sum > 300){
        data(lastKey).remove(sum-300); //if no of tales greater than 300 remove extra from the last writer
    }
    
    return data;
    
}



publishTales(filteredData){
    for(el in filteredData){
        if(filteredData(el).length >= 30){
            publishDaily(); // if 4 writers tales are more than 30, daily tales of those writers will be published
        }
        
        else{
            publish(filteredData(el)[index]); //publish tales of writer in ascending order 1 by 1
        }
    }
}

calculateInstantHappinessIndex(writer, lastPublishedDate, remainingToBePublished){
    var input = min(100, (lastPublishedDate * remainingToBePublished));
    var instantHappinessIndex = 100 - input / 100; 
    // instantUnhappinessIndex = 1 - instantHappinessIndex
}

calculateMonthlyHappinessIndex(writer, totaltalesSubmitted, totalTalesPublished){
    var monthlyHappinessIndex = totalTalesPublished/totalTalesSubmitted;
    // monthlyUnhapinessIndex = 1 - monthlyHappinessIndex
}