import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let modifiedUrl = url;

    if (country) {
        modifiedUrl = `${url}/countries/${country}`;
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(modifiedUrl);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.error(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        return data.map(d => ({
            confirmed: d.confirmed.total,
            deaths: d.deaths.total,
            date: d.reportDate
        }));
    } catch (error) {
        console.error(error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map(d => ({ name: d.name }));
    } catch (error) {
        console.error(error);
    }
}