import { BiArrowToRight } from "react-icons/bi";

const ServiceCard = ({ service }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={service.img}
                    alt={service.title}
                    className="rounded-xl h-44" />
            </figure>
            <div className="card-body  text-center">
                <h2 className="card-title">{service.title}</h2>
                <div className="card-actions text-warning flex items-center">
                    <p className="text-left font-bold">{service.price}$</p>
                    <button className="btn btn-outline"><BiArrowToRight></BiArrowToRight></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;