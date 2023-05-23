import axios from "axios";

export default class CasesService {

    static async getCountries(){
        const response = await axios.get("https://mahabub81.github.io/covid-19-api/api/v1/countries.json");
        var arr = []
        for(let i = 0; i < response.data.length; i++){
            arr.push({label: response.data[i].country_region, value: response.data[i].iso2});
        }
        return arr;
    }

    static async getCovidRateByCountry(datefrom, dateto, status, country){
        const response = await axios.get("https://mahabub81.github.io/covid-19-api/api/v1/countries/"+country+".json");
        if(Object.keys(response.data).length < 1){
            return 0;
        }
        console.log("Our date: ", datefrom, dateto);
        console.log("in covid rate: ", response.data.sort((a)=>{return new Date(a.last_updated_at) >= datefrom && new Date(a.last_updated_at) <= dateto}));
        return response.data
    }
    
    static async getWorldSummaryCovidRate(){
        const response = await axios.get("https://mahabub81.github.io/covid-19-api/api/v1/world-summary.json");
        if(Object.keys(response.data).length < 1){
            return 0;
        };
        return response.data
    }

    static async getCountriesSummaryCovidRate(iso2){
        const response = await axios.get("https://mahabub81.github.io/covid-19-api/api/v1/countries.json");
        if(Object.keys(response.data).length < 1){
            return 0;
        };

        return response.data.find((country => ( country.iso2.toLowerCase() == iso2.toLowerCase())));
    }

    

}