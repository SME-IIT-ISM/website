import React, { Component, useEffect } from 'react';
class SMEGeneralEvents extends Component {
    // const[posts,setPosts] = useState([]);
    
    render() { 
        const[posts,setPosts] = useState([]);
        const[loading,setLoading]=useState(false);
        const[currentPage,setCurrentPage]=useState(1);
        const[postsPerPage]=useState(2);
        useEffect(()=>{
            const fetchPosts = async () => {
            setLoading(true);
            const res =  
            setPosts(res.data);
            setLoading(false);
            };
            fetchPosts();
        }, []);
     
      
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
        //changePage
        const paginate = pageNumber => setCurrentPage(pageNumber);
        return ( 
            <div className="container my-5">
               <h1 className='text-primary mb-3'>Past Events</h1>
               <Posts posts={currentPosts} loading={loading} />
               <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
      />
            </div>
         );
    }
}
 
export default SMEGeneralEvents;