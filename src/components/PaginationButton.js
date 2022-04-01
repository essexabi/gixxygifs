import useHandlePage from "hooks/useHandlePage";
export default function PaginationButton(props) {
    

    return (
        <div className="pagination">
            <button onClick={useHandlePage}>gif me more!</button>
        </div>
    );
}
