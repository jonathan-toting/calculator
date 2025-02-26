export default function ButtonGrid({ children }){
    return(
        <div className="grid-container">
            <div className="button-grid">{ children }</div>
        </div>
    );
}