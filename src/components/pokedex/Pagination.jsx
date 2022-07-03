import React from 'react'

const Pagination = ({arrayPages, setCurrentPage, currentPage, quantityPages}) => {

    const prevPage = () => {
        if (currentPage - 1 === 0){
            setCurrentPage(quantityPages)
        } else {
            setCurrentPage(currentPage - 1)
        }
    }

    const nextPage = () => {
        if (currentPage + 1 > quantityPages){
            setCurrentPage(1)
        } else {
            setCurrentPage(currentPage + 1)
        }
    }

    const changePageTo = n => setCurrentPage(n)
  return (
    <div className='pagination-container-1'>
        <div className='pagination-prev-next' onClick={prevPage}>&#60;</div>
        <ul className='pagination-number-container'>{
            arrayPages?.map(num => (
                <li key={num} className={currentPage === num ? 'page-active pagination-number' : 'pagination-number'}
                onClick={() => changePageTo(num)}>{num}</li>
            ))
            }
        </ul>
        <div className='pagination-prev-next' onClick={nextPage}>&#62;</div>
    </div>
  )
}

export default Pagination