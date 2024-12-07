export default function Tag({ tag }) {
    return (
        <span 
            className="badge me-1 mb-1 p-1 text-dark" 
            style={{ backgroundColor: tag.Color }}
        >
            {tag.TagName}
        </span>
    );
}