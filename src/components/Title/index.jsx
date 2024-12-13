import "./style.css";

export default function Title({ title, description }) {
    return(
        <div className="title-container text-center">
        <h2 className="mytitle mb-0">{title}</h2>
        <i className="fa-solid fa-minus text-center fs-1 py-0 my-0 title-i"></i>
        <p className="description mb-4 mt-0 pt-0">{description}</p>
        </div>
    )
}
