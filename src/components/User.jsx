import React, { useEffect } from 'react';
import { useState } from "react";
import "../styles/user.css"

const User = () => {
    const [varible, setVarible] = useState({
        business_stage: "",
        age_of_establishment: "",
        primary_product_service_offered: "",
        secondary_product_service_offered: "",
        processed_products: "",
        relevant_experience:"",
        skill_training:"",
        usp:"",
        establishment_type:"",
        business_area:"",
        business_locality:"",
        infra_ownership:"",
        establishment_area:"",
        reason_for_location:"",
        market_research:"",
        primary_market:"",
        customers:"",
        seasonality:"",
        competition:"",
        suppliers:"",
        marketing_avenues:"",
        scaleup_potential:"",
    });

    const handleChange = e => {
        const { name, value } = e.target
        
        setVarible({ ...varible, [name]: value })
        console.log(varible);
    }

    const [option, setOption] = useState({
        business_stage: "",
        age_of_establishment: "",
        primary_product_service_offered: "",
        secondary_product_service_offered: "",
        processed_products: "",
        relevant_experience:"",
        skill_training:"",
        usp:"",
        establishment_type:"",
        business_area:"",
        business_locality:"",
        infra_ownership:"",
        establishment_area:"",
        reason_for_location:"",
        market_research:"",
        primary_market:"",
        customers:"",
        seasonality:"",
        competition:"",
        suppliers:"",
        marketing_avenues:"",
        scaleup_potential:"",
    });

    const handleSelect = e => {
        const { name, value } = e.target
        
        setOption({ ...option, [name]: value })
        console.log(option);
    }

    const A = [
        {
            id: 1,
            datatype: "dropdown",
            arr: ["Start-up", "Scale-up"],
            question: "Stage of business",
            name: "business_stage",
            sentence: `Rahul is looking to ${varible.business_stage} their business of ${option.business_stage}.`
        },
        {
            id: 2,
            datatype: "number",
            question: "Age of establishment (years) (Enter 0 if it is yet to start-up)",
            name: "age_of_establishment",
            sentence: `This enterprise has been operational since ${varible.age_of_establishment} years and has been serving its customers since then.`
        },
        {
            id: 3,
            datatype: "dropdown",
            arr: ["End customers", "Wholesalers", "Distributors", "Retailers"],
            question: "Primary Products/Services offfered",
            name: "primary_product_service_offered",
            sentence: `This establishment offers products/services like- ${varible.primary_product_service_offered} to ${option.primary_product_service_offered}.`
        },
        {
            id: 4,
            datatype: "number",
            question: "Secondary Products/Services offfered",
            name: "secondary_product_service_offered",
            sentence: `In addition, the enterprise shall also be involved in- ${varible.secondary_product_service_offered}.`
        },
        {
            id: 5,
            datatype: "number",
            question: "Processed products (Products you produce from the raw materials)",
            name: "processed_products",
            sentence: `Other products of the enterprise shall include- ${varible.processed_products}.`
        },
        {
            id: 6,
            datatype: "number",
            question: "Years of relevant experience in this field",
            name: "relevant_experience",
            sentence: `Rahul has relevant experience of ${varible.relevant_experience} years in this field.`
        },
        {
            id: 7,
            datatype: "dropdown",
            arr: ["No formal skill training", "Has formal skill training and certificate."],
            question: "Skill training",
            name: "skill_training",
            sentence: `The entrepreneur ${option.skill_training} in this field of work.`
        },
        {
            id: 8,
            datatype: "dropdown",
            arr: ["the entrepreneur's experience in this field", "innovative product/service", "high profit margin", "high growth potential", "superior customer support", "quality and affordable products/service", "high demand in the target market (forward linkage)", "abundant supply of raw materials (backward linkage)", "wide range of products/services", "robust value-chain of the business", "frequency of customer visits"],
            question: "Unique Selling Proposition",
            name: "usp",
            sentence: `The enterprise is uniquely positioned because of its -${option.usp}`
        },
        {
            id: 9,
            datatype: "dropdown",
            arr: ["Factory", "Mill", "Stall", "Workshop", "Boutique", "Vehicle", "Centre", "Store", "Farm", "Plant", "Processing Unit", "Shop", "Vending cart", "Manufacturing unit"],
            question: "Establishment type",
            name: "establishment_type",
            sentence: `The ${option.establishment_type} is located in ${option.business_locality} area of Laxmi Market in a ${option.infra_ownership} property.`
        },
        {
            id: 10,
            datatype: "number",
            question: "Name of the area",
            name: "business_area",
            sentence: `The ${option.establishment_type} is located in ${option.business_locality} area of Laxmi Market in a ${option.infra_ownership} property.`
        },
        {
            id: 11,
            datatype: "dropdown",
            arr: ["Urban", "Rural", "Semi-urban", "Slum"],
            question: "Locality of business",
            name: "business_locality",
            sentence: `The ${option.establishment_type} is located in ${option.business_locality} area of Laxmi Market in a ${option.infra_ownership} property.`
        },
        {
            id: 12,
            datatype: "dropdown",
            arr: ["Rented", "Leased", "Self-owned"],
            question: "Ownership of infrastructure",
            name: "infra_ownership",
            sentence: `The ${option.establishment_type} is located in ${option.business_locality} area of Laxmi Market in a ${option.infra_ownership} property.`
        },
        {
            id: 13,
            datatype: "number",
            question: "Establishment area (in square feet) (Enter 0 if the establishment area is irrelevant)",
            name: "establishment_area",
            sentence: `The size of the establishment is ${varible.establishment_area} sq.ft.`
        },
        {
            id: 14,
            datatype: "dropdown",
            arr: ["Nearness to market", "Good footfall", "Nearness to source of raw materials", "Nearness to targeted customer demographics", "Lesser competition around", "Access to permit/license of operate", "Nearness to suppliers", "Affordability (rent)", "No rental overheads", "Other such factors"],
            question: "Reason for selecting this location",
            name: "reason_for_location",
            sentence: `This locality is selected because of ${varible.reason_for_location}{${option.reason_for_location}}.`
        },
        {
            id: 15,
            datatype: "dropdown",
            arr: ["Not conducted", "Market research has been conducted"],
            question: "Market research",
            name: "market_research",
            sentence: `${option.market_research} and the range of products and target market has been identified after that.`
        },
        {
            id: 16,
            datatype: "dropdown",
            arr: ["Local", "Regional", "National", "International"],
            question: "Primary market",
            name: "primary_market",
            sentence: `The enterprise shall focus on offering its products/services to ${option.primary_market} markets.`
        },
        {
            id: 17,
            datatype: "number",
            question: "Customers",
            name: "customers",
            sentence: `Our customers shall include- ${varible.customers}`
        },
        {
            id: 18,
            datatype: "dropdown",
            arr: ["Consistent sales across all seasons", "Higher sales in festive seasons", "High sales in cropping/cultivation season", "High sales in peak seasons"],
            question: "Seasons of high sales",
            name: "seasonality",
            sentence: `The nature of the business is such that we expect ${option.seasonality}.`
        },
        {
            id: 19,
            datatype: "dropdown",
            arr: ["No similar goods/service provider in this locality", "Only a few similar goods/service providers in this locality", "Many similar goods/service providers in this locality"],
            question: "Competition",
            name: "competition",
            sentence: `Regarding competition, there are ${option.competition}.`
        },
        {
            id: 20,
            datatype: "number",
            question: "List of Suppliers",
            name: "suppliers",
            sentence: `The enterprise shall procure goods/raw materials from ${varible.suppliers}.`
        },
        {
            id: 21,
            datatype: "dropdown",
            arr: ["Distribution of marketing material (pamphlets/flyers)", "storefront/business branding", "Seasonal discounts and offers", "Cross-promotion", "Digital Marketing", "Word of mouth"],
            question: "Marketing avenues",
            name: "marketing_avenues",
            sentence: `Our marketing avenues to reach the targeted customers shall include- ${option.marketing_avenues}`
        },
        {
            id: 22,
            datatype: "dropdown",
            arr: ["increasing the variety of product/service offering", "expanding the current offering to other geographies", "opening more outlets", "growing the scale of operation", "building value-chain integrations", "other allied revenue streams"],
            question: "Avenues of scaling up in future",
            name: "scaleup_potential",
            sentence: `The various foreseeable avenues of scaling up and growing the business in the foreseeable future include- ${option.scaleup_potential}.`
        },
    ]
    return (
        <>
            <div className='user1'>
                <h3 style={{ width: "25%" }}>Question</h3>
                <h3 style={{ width: "25%" }}>Variable Name</h3>
                <h3 style={{ width: "25%" }}>Option list/Validation</h3>
                <h3 style={{ width: "25%" }}>Sentence</h3>
            </div>
            {A.map((el) => (
                <div className='user2'>
                    <div style={{ width: "25%", padding: "10px" }}>{el.question}</div>
                    <input onChange={(event) => { handleChange(event) }} style={{ width: "25%", padding: "10px" }} placeholder={el.name} type="text" name={el.name} id="" />
                    {el.datatype === "dropdown" ? <select name={el.name} onChange={(event) => { handleSelect(event) }}>{el.arr.map((em) => (<option value={em}>{em}</option>))}
                    </select> : <input style={{ width: "25%", padding: "10px" }} placeholder='Option list/Validation' type="text" name="" id="" />}
                    <div style={{ width: "25%", padding: "10px" }}>{el.sentence}</div>
                </div>
            ))}
        </>
    )
}

export default User

