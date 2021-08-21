import styles from './calculator.module.scss';
import Tooltip from 'react-png-tooltip';
import { /*cloneElement, createRef,*/ useRef } from 'react';
//import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import React from 'react';
import 'lodash';
//import { clone, values } from 'lodash';
//import cloneReferencedElement from 'react-clone-referenced-element';

function Calculator(props) {

    let sales2019Ref = useRef(null); 
    let sales2020Ref = useRef(null);
    let sales2021Ref = useRef(null);
    let profitpercent2019Ref = useRef(null);
    let profitpercent2020Ref = useRef(null);
    let profitpercent2021Ref = useRef(null);
    let offers2019Ref = useRef(null);
    let offers2020Ref = useRef(null);
    let offers2021Ref = useRef(null);
    let efficiency2019Ref = useRef(null);
    let efficiency2020Ref = useRef(null);
    let efficiency2021Ref = useRef(null);
    let newprofitpercent2019Ref = useRef(null);
    let newprofitpercent2020Ref = useRef(null);
    let newprofitpercent2021Ref = useRef(null);
    let additionalsalespercent2019Ref = useRef(null);
    let additionalsalespercent2020Ref = useRef(null);
    let additionalsalespercent2021Ref = useRef(null);
    let currentsales2019Ref = useRef(null);
    let currentsales2020Ref = useRef(null);
    let currentsales2021Ref = useRef(null)
    let newsales2019Ref = useRef(null);
    let newsales2020Ref = useRef(null);
    let newsales2021Ref = useRef(null);
    let totalbenefitRef = useRef(null);

    const defaultValue = 0;
    /*const sales2019 = sales2019Ref.value === undefined ? sales2019Ref.value : defaultValue;*/

    const Sales2019 = (event) => { 
      event.preventDefault();
      sales2019Ref.value = parseInt(event.target.value || 0/*sales2019Ref.value === undefined ? sales2019Ref.value : defaultValue*/);
    }

    const Sales2020 = (event) => {
      event.preventDefault();
      sales2020Ref.value = parseInt(event.target.value || 0/*sales2020Ref.value === undefined ? sales2020Ref.value : defaultValue*/);
    }

    const Sales2021 = (event) => {
      event.preventDefault();
      sales2021Ref.value = parseInt(event.target.value || 0/*sales2021Ref.value === undefined ? sales2021Ref.value : defaultValue*/);
    } 

    const ProfitPercent2019 = (event) => {
      event.preventDefault();
      profitpercent2019Ref.value = parseInt(event.target.value || 0/*profitpercent2019Ref.value === undefined ? profitpercent2019Ref.value : defaultValue*/);
    } 

    const ProfitPercent2020 = (event) => {
       event.preventDefault();
       profitpercent2020Ref.value = parseInt(profitpercent2019Ref.value || 0/*rofitpercent2019Ref.value === undefined ? profitpercent2020Ref.value : defaultValue*/);
     } 

     const ProfitPercent2021 = (event) => {
        event.preventDefault();
        profitpercent2021Ref.value = parseInt(profitpercent2019Ref.value || 0/*profitpercent2019Ref.value === undefined ? profitpercent2021Ref.value : defaultValue*/);  
      }
      
      const Offers2019 = (event) => {
       event.preventDefault();
       offers2019Ref.value = (parseInt(sales2019Ref.value || 0/*sales2019Ref.value === undefined ? sales2019Ref.value : defaultValue*/) / (parseInt(profitpercent2019Ref.value || 0) / 100));
    } 
     
      const Offers2020 = (event) => {
        event.preventDefault();
        offers2020Ref.value = parseInt(offers2019Ref.value || 0 /*offers2019Ref.value === undefined ? offers2019Ref.value : defaultValue*/);
      }
     
      const Offers2021 = (event) => {
        event.preventDefault();
        offers2021Ref.value = parseInt(offers2019Ref.value || 0 /*offers2019Ref.value === undefined ? offers2019Ref.value : defaultValue*/)
      }

      
      const Efficiency2019 = (event) => {
        event.preventDefault();
        efficiency2019Ref.value = parseInt(event.target.value || 0 /*efficiency2019Ref.value === undefined ? efficiency2019Ref.value : defaultValue*/);
      }

      const Efficiency2020 = (event) => {
        event.preventDefault();
        efficiency2020Ref.value = parseInt(event.target.value || 0 /*efficiency2020Ref.value === undefined ? efficiency2020Ref.value : defaultValue*/);
      }

      const Efficiency2021 = (event) => {
        event.preventDefault();
        efficiency2021Ref.value = parseInt(event.target.value ||0 /*efficiency2021Ref.value === undefined ? offers2021Ref.value : defaultValue*/);
      } 
     
      const NewprofitPercent2019 = (event) => {
        event.preventDefault();
        newprofitpercent2019Ref.value = parseInt(profitpercent2019Ref.value || 0) + parseInt(efficiency2019Ref.value || 0);
        //newprofitpercent2019Ref.value = (parseInt(profitpercent2019Ref.value || 0) / 100) + (parseInt(efficiency2019Ref.value || 0) / 100)
        //newprofitpercent2019Ref.value = parseInt(profitpercent2019Ref.value || 0 * 100) + parseInt(efficiency2019Ref.value || 0 );
      }
     
      const NewprofitPercent2020 = (event) => {
        event.preventDefault();
        newprofitpercent2020Ref.value = parseInt(newprofitpercent2019Ref.value || 0) + parseInt(efficiency2020Ref.value || /*1*/0);
        //newprofitpercent2020Ref.value = parseInt(newprofitpercent2019Ref.value || 0 * 100) + parseInt(efficiency2020Ref.value || 0 );
      }
     
      const NewprofitPercent2021 = (event) => {
        event.preventDefault();
        newprofitpercent2021Ref.value = parseInt(newprofitpercent2020Ref.value || 0)  + parseInt(efficiency2021Ref.value ||/*1*/0);
       // newprofitpercent2021Ref.value = parseInt(newprofitpercent2020Ref.value || 0 * 100) + parseInt(efficiency2021Ref.value ||0 );
      }

  const AdditionalsalesPercent2019 = (event) => {
    event.preventDefault();
    additionalsalespercent2019Ref.value = (parseInt(offers2019Ref.value ||1) * (parseInt(newprofitpercent2019Ref.value ||1) / 100 )) - parseInt(sales2019Ref.value || 1);
   }
  
   const AdditionalsalesPercent2020 = (event) => {
    event.preventDefault();
    additionalsalespercent2020Ref.value = (parseInt(offers2020Ref.value ||1) * (parseInt(newprofitpercent2020Ref.value ||1) / 100 )) - parseInt(sales2020Ref.value || 1);
   }
  
   const AdditionalsalesPercent2021 = (event) => {
     event.preventDefault();
     additionalsalespercent2021Ref.value = (parseInt(offers2021Ref.value ||1) * (parseInt(newprofitpercent2021Ref.value ||1) / 100 )) - parseInt(sales2021Ref.value || 1);
   } 
   
   const CurrentSales2019 = (event) => {
    event.preventDefault();
    currentsales2019Ref.value = parseInt(sales2019Ref.value || sales2019Ref.value === undefined ? sales2019Ref.value : defaultValue);
   }

   const CurrentSales2020 = (event) => {
    event.preventDefault();
    currentsales2020Ref.value = parseInt(sales2020Ref.value || sales2019Ref.value === undefined ? sales2020Ref.value : defaultValue /*1*/);
  }

  const CurrentSales2021 = (event) => {
   event.preventDefault();
   currentsales2021Ref.value = parseInt(sales2021Ref.value || sales2019Ref.value === undefined ? sales2021Ref.value : defaultValue);
  }

  const NewSales2019 = (event) => {
    event.preventDefault();
   // newsales2019Ref.value = parseInt(hiddensales2019Ref.value || 0);
    newsales2019Ref.value = parseInt(offers2019Ref.value ||1) * (parseInt(newprofitpercent2019Ref.value ||1) / 100 );
  }
  
  const NewSales2020 = (event) => {
    event.preventDefault();
   // newsales2020Ref.value = parseInt(hiddensales2020Ref.value || 0);
    newsales2020Ref.value = parseInt(offers2020Ref.value ||1) * (parseInt(newprofitpercent2020Ref.value ||1) / 100);
  }
  
  const NewSales2021 = (event) => {
    event.preventDefault();
    // newsales2021Ref.value = parseInt(hiddensales2021Ref.value || 0);
    newsales2021Ref.value = parseInt(offers2021Ref.value ||1) * (parseInt(newprofitpercent2021Ref.value ||1) / 100);
  } 

  const TotalBenefit = (event) => {
    event.preventDefault();
    totalbenefitRef.value = parseInt(newsales2019Ref.value ||1) + parseInt(newsales2020Ref.value ||1) + parseInt(newsales2021Ref.value ||1);
  } 

return (
    <div>
        <form>
            <div className={styles.form}>

            <div className={styles.title}>Nykytila</div>
            <div className={styles.form_years}>
                <div>2021</div>
                <div>2022</div>
                <div>2023</div> 
                </div>
                <div className={styles.form_row}>
                     <div>
                        <label htmlFor="sales">Myynti</label><Tooltip className={styles.tooltip} background="black">{"Myyntiarvio/tavoite nykyisillä työkaluilla ja prosesseilla (syötä luvut)"}</Tooltip>
                        <input type="text" name="sales2019" min="0" required ref={event => sales2019Ref = event} onBlur={Sales2019}></input>
                        <label htmlFor="m€"></label>
                        <input type="button" name="button" value="m€"></input>
                        <input type="text" name="sales2020" min="0" required ref={event => sales2020Ref = event} onBlur={Sales2020}></input>
                        <label htmlFor="m€"></label>
                        <input type="button" name="button" value="m€"></input>
                        <input type="text" name="sales2021" min="0" required ref={event => sales2021Ref = event} onBlur={Sales2021}></input>
                        <label htmlFor="m€"></label>
                        <input type="button" name="button" value="m€"></input>
                    </div> 

                    <div>
                        <label htmlFor="profitpercent">Tarjousten <br /> voitto %</label> <Tooltip className={styles.tooltip} background="black">{"Nykyinen tarjousten voittoprosentti ilman prosessikehitystä (voitetut/kaikki tarjoukset)"}</Tooltip>
                        <input type="text" name="profitpercent2019" min="0" required  ref={event => profitpercent2019Ref = event} onBlur={ProfitPercent2019} ></input>
                        <input readOnly type="text" name="profitpercent2020" min="0" ref={event => profitpercent2020Ref = event} onBlur={ProfitPercent2020} ></input>
                        <input readOnly type="text" name="profitpercent2021" min="0" ref={event => profitpercent2021Ref = event} onBlur={ProfitPercent2021} ></input>
                    </div>

                    <div>
                        <label htmlFor="offers">Tarjouskanta</label> <Tooltip className={styles.tooltip} background="black">{"Näin paljon sinulla pitää olla tarjouksia 'putkessa', jotta pääset myyntitavoitteeseen"}</Tooltip>
                        <input readOnly type="text" name="offers2019" min="0" ref={event => offers2019Ref = event} onBlur={Offers2019}></input>
                        <input readOnly type="text" name="offers2020" min="0" ref={event => offers2020Ref = event} onBlur={Offers2020}></input>
                        <input readOnly type="text" name="offers2021" min="0" ref={event => offers2021Ref = event} onBlur={Offers2021}></input>
                    </div>

                    <div className={styles.title}>
                        Arvio prosessin tehokkuuden paranemisesta</div>

                    <div className={styles.form_row_efficiency}>
                    <div>
                        <label htmlFor="efficiency">Tehokkuuden <br /> kasvu %</label><Tooltip className={styles.tooltip} background="black">{"Syötä arviosi myyntiprosessin tehokkuuden paranemisesta kullekin vuodelle. Mikäli olet optimoinut myyntiprosessiasi jo vuosia, 3-6% vuotuinen parannus on realistinen arvio. Jos taas tehostat myyntiprosessiasi ensimmäistä kertaa, voi parannus olla jopa 10-30% luokkaa"}</Tooltip>
                        <input type="text" name="efficiency2019" min="0" ref={event => efficiency2019Ref = event} onBlur={Efficiency2019}></input>
                        <label htmlFor="%"></label>
                        <input type="button" name="button" value="%"></input>
                        <input type="text" name="efficiency2020" min="0" ref={event => efficiency2020Ref = event} onBlur={Efficiency2020}></input>
                        <label htmlFor="%"></label>
                        <input type="button" name="button" value="%"></input>
                        <input type="text" name="efficiency2021" min="0" ref={event => efficiency2021Ref = event} onBlur={Efficiency2021}></input>
                        <label htmlFor="%"></label>
                        <input type="button" name="button" value="%"></input>
                    </div>

                    <div>
                    <div>
                        <label htmlFor="newprofitpercent">Uusi<br />voitto %</label><Tooltip className={styles.tooltip} background="black">{"Parantunut tarjousten voittoprosentti"}</Tooltip>
                        <input readOnly type="text" name="newprofitpercent2019" min="0" ref={event => newprofitpercent2019Ref = event} onBlur={NewprofitPercent2019}></input>
                        <input readOnly type="text" name="newprofitpercent2020" min="0" ref={event => newprofitpercent2020Ref = event} onBlur={NewprofitPercent2020}></input>
                        <input readOnly type="text" name="newprofitpercent2021" min="0" ref={event =>  newprofitpercent2021Ref = event} onBlur={NewprofitPercent2021}></input>
    
                    </div>

                    <div>
                    <label htmlFor="additionalsalespercent">Lisämyynti</label><Tooltip className={styles.tooltip} background="black">{"Prosessikehityksen tuottama lisämyynti"}</Tooltip>
                        <input readOnly type="text" name="additionalsalespercent2019" min="0" ref={event => additionalsalespercent2019Ref = event} onBlur={AdditionalsalesPercent2019}></input>
                        <input readOnly type="text" name="additionalsalespercent2020" min="0" ref={event => additionalsalespercent2020Ref = event} onBlur={AdditionalsalesPercent2020}></input>
                        <input readOnly type="text" name="additionalsalespercent2021" min="0" ref={event => additionalsalespercent2021Ref = event} onBlur={AdditionalsalesPercent2021}></input>
                    </div>
                    </div>
                        
                    <div className={styles.title}>Hyöty</div>
                    <div className={styles.form_years}>
                        <div>2021</div>
                        <div>2022</div>
                        <div>2023</div>
                    </div>

                    <div className={styles.currentsales}>
                        <label htmlFor="currentsales">Nykyinen<br /> myyntiarvo</label>
                        <input readOnly type="text" name="currentsales2019" min="0" ref={event => currentsales2019Ref = event} onBlur={CurrentSales2019}></input>
                        <input readOnly type="text" name="currentsales2020" min="0" ref={event => currentsales2020Ref = event} onBlur={CurrentSales2020}></input>
                        <input readOnly type="text" name="currentsales2021" min="0" ref={event => currentsales2021Ref = event} onBlur={CurrentSales2021}></input>
                    </div>

                    <div className={styles.newsales}>
                    <label htmlFor="newsales">Uusi<br /> myyntiarvo</label>
                        <input readOnly type="text" name="newsales2019" min="0" ref={event => newsales2019Ref = event} onBlur={NewSales2019}></input>
                        <input readOnly type="text" name="newsales2020" min="0" ref={event => newsales2020Ref = event} onBlur={NewSales2020}></input>
                        <input readOnly type="text" name="newsales2021" min="0" ref={event => newsales2021Ref = event} onBlur={NewSales2021}></input>
                    </div>

                    <div className={styles.totalbenefit}>
                    <label htmlFor="totalbenefit">Kolmen vuoden hyöty yhteensä</label>
                    <input readOnly type="text" name="totalbenefit" min="0" ref={event => totalbenefitRef = event} onBlur={TotalBenefit}></input>
                    </div>

                    </div>
                    </div>
                </div> 
            </form>
        </div>
    );
    }

export default Calculator;