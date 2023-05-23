import axios from "axios";

export default class CasesService {

    static async getCountries(){
        const response = await axios.get("https://mahabub81.github.io/covid-19-api/api/v1/countries.json");
        var arr = []
        console.log(response);
        for(let i = 0; i < response.data.length; i++){
            arr.push({label: response.data[i].country_region, value: response.data[i].iso2});
        }
        return arr;
    }

    static async getCovidRateByCountry(datefrom, dateto, status, country){
        const response = await axios.get("https://api.covid19api.com/country/"+country+"/status/"+status+"?from="+datefrom+"T00:00:00Z"+"&to="+dateto+"T00:00:00Z", {
            headers: {"Access-Control-Allow-Origin": "*"}
        });
        if(Object.keys(response.data).length < 1){
            return 0;
        }
        return response.data
    }
    
    static async getWorldSummaryCovidRate(){
        const response = await axios.get("https://mahabub81.github.io/covid-19-api/api/v1/world-summary.json");
        console.log(response);
        if(Object.keys(response.data).length < 1){
            return 0;
        };
        return [response.data, response.data]
    }

    

}