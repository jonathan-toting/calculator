export default function Wrapper({ children }) {
    return(
        <div className="wrapper">
            <div className="container">
                {children}
            </div>
        </div>
    );
}