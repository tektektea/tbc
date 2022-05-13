import {date} from "quasar";

export default function () {
  const formatMoney=value=>{
    return (new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(Number(value)));
  }

  const formatDate=value=>{
    try {
      return date.formatDate(new Date(value),'DD MMM YYYY')
    }catch (er){
      return 'invalid Date'
    }
  }
  const formatDateTime=value=>{
    try {
      return date.formatDate(new Date(value),'DD MMM YYYY hh:mm a')
    }catch (er){
      return 'invalid Date'
    }
  }
  const DEFAULT_TEST_PARAMS={
    chest: '35 cm',
    expanded_chest:'38 cm',
    height:'165 cm',
    long_jump:'3 Meter',
    high_jump:'3 Meter',
    short_race:'10 Sec',
    long_race:'20 Min',
  }
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return{
    DEFAULT_TEST_PARAMS,
    formatMoney,
    formatDate,
    formatDateTime,
    emailRegex
  }
};
