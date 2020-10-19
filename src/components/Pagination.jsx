
import React from 'react';




const Pagination = ({postsPerPage,totalPosts,paginate}) => {

    const pageNumbers=[];

    for(let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }



    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(num=>(
                    <li className="page-item" key={num}>
                        <a href="!#" className="page-link" onClick={()=>paginate(num)}>
                            {num}
                        </a>
                    </li>
                ))}
            </ul>
            
        </nav>
    );
}

export default Pagination;

