import css from "./LoadMoreBtn.module.css"
function LoadMoreBtn({ onClick}) {
    return (
        <div className={css.LoadMoreBtnContainer}>
       <button type="button" onClick={onClick} className={css.button}>
                Load More
            </button>
        </div>
        
    )
}
export default LoadMoreBtn;