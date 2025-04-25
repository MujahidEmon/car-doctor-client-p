import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    } ,[])

    return (
        <div className="space-y-10">
            <div className="text-center">
                <h1 className="lg:text-2xl text-xl font-bold text-warning">Our Services</h1>
                <h1 className="text-xl lg:text-5xl font-bold">Our Service Area</h1>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                {
                    services.map((service, index) => <ServiceCard key={index} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;