import React, {component, useState, useEffect,useContext} from 'react';
import ReactDOM from 'react-dom';
import Posts from './posts';
import Pagination from './pagination';
import Data from './statementData';

function Statement() {

    const [search,setsearch]=useState("");
    const [DetailsArr]= useState(Data);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    var currentPosts=DetailsArr.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);

return (
 <div class="w-100" id="ProblemStatement">
    <section class="page-header">
          <div class="">
              <div class="row">
                  <div class="col-md-12">
                      <ul class="breadcrumb">
                          <li><font class="header-text ml-md-5" color="white" size="4">Problem Statements</font></li><font color="white" size="4">
                          </font><li class="active"><font color="white" size="4"> </font></li>
                      </ul>
                  </div>
              </div>
          </div>
   </section>
   <div class="font-weight-bold mt-md-4 mt-3 lead ml-md-5  ml-3">All Problem Statement <a href="www.google.com" className="">Click here</a></div>
    <div className="mx-md-5 mx-3">
        <div class="row my-4">
            <div className="col-md-2 ">
                <Pagination 
                  postsPerPage={postsPerPage}
                  totalPosts={DetailsArr.length}
                  paginate={paginate}
                  setsearch={setsearch}
                />
            </div>
            <div className="col-md-5"></div>
            <div  className=" col-sm">
              <div className="row mr-sm-1" >
                  <input className="mx-3 col " list="browsers" statement="browser" id="browser"  placeholder="Search Problem ID" value={search} onChange={(e)=>{setsearch(e.target.value.toLocaleUpperCase())}} size="30"   maxlength="5"/>
              </div>
            </div>
        </div>
        <datalist id="browsers">
            {  
                DetailsArr.map((item)=>(
                            <option value={item.id}></option>   
                ))
            }  
      </datalist>
      </div>
      <Posts posts={currentPosts} search={search} Arr={DetailsArr} />
      <div>
        {
            DetailsArr.map((item,index)=>( 
              <div className="modal fade" id={item.modalid} tabindex="-1" role="dialog"  aria-hidden="true">
                 <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                       <div className="modal-header">
                          <h5 className="modal-title" id={item.modalid}>Deatils of {item.id} Problem Statement</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                       </div>
                       <div className="modal-body">
                            <table className=" ">
                                  <tr className="border-bottom ">
                                      <th className="pr-3" >No  </th>
                                      <td className="" key={index}>  {item.no}</td>
                                  </tr>
                                  <tr className=" border-bottom">
                                      <th className="pr-3">Problem Id  </th>
                                      <td className="">   {item.id}</td>
                                  </tr>
                                  <tr className="border-bottom">
                                      <th className="pr-3" >Problem statement  </th>
                                      <td className=""> {item.statement}</td>
                                  </tr>
                                  <tr className=" ">
                                      <th className="pr-3" >Problem Description  </th>
                                      <td className="">  {item.description}</td>
                                  </tr>       
                            </table>
                       </div>
                       <div className="modal-footer">
                       <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                       </div>
                    </div>
                 </div>
              </div>
           ))
        }
      </div>
  </div>
  )
}

export default Statement;