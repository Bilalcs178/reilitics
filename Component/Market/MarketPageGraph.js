import React from 'react';
import GraphComponent from '../GraphCard.js';
import ApexMedianChart from './ApexMedianChart.js';
import SaleInventoryGraph from './SaleInventoryGraph.js';
import SharePriceCutGraph from './SharePriceCutGraph.js';
import MedianPriceCut from './MedianPriceCut.js';
import MedianRental from './MedianRental.js';
import { useEffect, useState } from 'react';
import GraphData from '../../Api/Grapgh'
import { useRouter } from "next/router";

import MedianDaystoPendingGraph from './MedianDaystoPendingGraph.js';

export default function MedianGraph(props) {

    const [inventryDate, setInventryDate] = useState([])
    const [inventry, setInventry] = useState([])
    const [pending, setPending] = useState([])
    const [pendingDate, setPendingDate] = useState([])
    const [list, setList] = useState([])
    const [listDate, setListDate] = useState([])
    const [sales, setSales] = useState([])
    const [salesDate, setSalesDate] = useState([])
    const [ShareListings, setShareListings] = useState([])
    const [ShareListingDate, setShareListingDate] = useState([])
    const [priceCut, setPriceCut] = useState([])
    const [priceCutDate, setPriceCutDate] = useState([])
    const [median, setMedian] = useState([])
    const [medianDate, setMedianDate] = useState([])







    const [id, setId] = useState("")

    const router = useRouter();

    const eventId = router.query.id
    // { console.log(eventId) }



    useEffect(() => {
        const response = GraphData.Inventory(eventId);
        // console.log(response)
        response.then(value => {
            console.log(value)
            if (value) {
                // console.log(value.data.Data)
                let data1 = []
                let data2 =[]
                for (const key in value.data.Data) {
                    data1.push(key)
                    data2.push(value.data.Data[key]);
                }

                setInventryDate(data1)
                setInventry(data2)
                
            }
        })
        pendingData();
        listPrice();
        ShareListing();
        PriceCut();
        Median();
    }, [eventId])

    const pendingData = () => {
        const response = GraphData.Pending(eventId);
        // console.log(eventId)
        response.then(value => {
            console.log(value)
            if (value) {
                // console.log(value.data.Data)

                let data1 = []
                let data2 =[]
                for (const key in value.data.Data) {
                    data1.push(key)
                    data2.push(value.data.Data[key]);
                }

                setPendingDate(data1)
                setPending(data2)
                
            }
        })
    }
    
    const listPrice = () => {
        const response = GraphData.ListPrice(eventId);
        // console.log(eventId)
        response.then(value => {
            if (value) {
                // console.log(value.data.Data.listing)

                let data1 = []
                let data2 =[]
                for (const key in value.data.Data.listing) {
                    data1.push(key)
                    data2.push(value.data.Data.listing[key]);
                }

                setListDate(data1)
                setList(data2)

                let data3 = []
                let data4 =[]
                for (const key in value.data.Data.listing) {
                    data3.push(key)
                    data4.push(value.data.Data.listing[key]);
                }
                setSalesDate(data3)
                setSales(data4)

                
            }
        })
    }
    const ShareListing = () => {
        const response = GraphData.ShareListing(eventId);
        response.then(value => {
            if (value) {
                // console.log(value.data.Data.listing)

                let data1 = []
                let data2 =[]
                for (const key in value.data.Data) {
                    data1.push(key)
                    data2.push(value.data.Data[key]);
                }

                setShareListingDate(data1)
                setShareListings(data2)

               

                
            }
        })
    }
    const PriceCut = () => {
        const response = GraphData.PriceCut(eventId);
        response.then(value => {
            console.log(value)
            if (value) {
                // console.log(value.data.Data.listing)

                let data1 = []
                let data2 =[]
                for (const key in value.data.Data) {
                    data1.push(key)
                    data2.push(value.data.Data[key]);
                }

                setPriceCutDate(data1)
                setPriceCut(data2)

               

                
            }
        })
    }
    const Median = () => {
        const response = GraphData.MedianRental(eventId);
        response.then(value => {
            console.log(value)
            if (value) {
                // console.log(value.data.Data.listing)

                let data1 = []
                let data2 =[]
                for (const key in value.data.Data) {
                    data1.push(key)
                    data2.push(value.data.Data[key]);
                }

                setMedianDate(data1)
                setMedian(data2)

               

                
            }
        })
    }


    return (<div>
        <GraphComponent
            heading='MEDIAN List Price Vs MEDIAN Sale Price'>
            <ApexMedianChart sales={sales} salesDate={salesDate} list={list} listDate={listDate}/>
        </GraphComponent>
        <GraphComponent
            heading='For Sale Inventory'>
            <SaleInventoryGraph inventryDate={inventryDate} inventry={inventry} />
        </GraphComponent>
        <GraphComponent
            heading='Median Days to Pending'>
            <MedianDaystoPendingGraph pendingDate={pendingDate} pending={pending}/>
        </GraphComponent>
        <GraphComponent
            heading='SHARE OF LISTINGS WITH PRICE CUT'>
            <SharePriceCutGraph  shareList={ShareListings} shareDate={ShareListingDate}/>
        </GraphComponent>
        <GraphComponent
            heading='Median PRICE CUT'>
            <MedianPriceCut priceCut={priceCut} priceCutDate={priceCutDate}/>
        </GraphComponent>
        <GraphComponent
            heading='MEDIAN Rental'>
            <MedianRental median={median} medianDate={medianDate}/>
        </GraphComponent>
    </div>)
}
